document.addEventListener('DOMContentLoaded', () => {
    //Selectors
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    const paginationContainer = document.querySelector('.slider-pagination');

    const totalSlides = slides.length;
    if (totalSlides === 0) return;

    //set up the fisrt slide
    let currentSlide = 0;
    let sliderInterval;

    //Update slide
    const updateSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        document.querySelectorAll('.dot')[index].classList.add('active');
        currentSlide = index;
    };

    //Slide rotation
    const rotateSlider = () => {
        updateSlide((currentSlide + 1) % totalSlides);
    };

    //Auto play slider
    const startSlider = () => {
        sliderInterval = setInterval(rotateSlider, 12000);
    };

    // Stop slider
    const stopSlider = () => {
        clearInterval(sliderInterval);
    };

    //generate pagination dots
    const generateDots = () => {
        paginationContainer.innerHTML = '';
        for (let i=0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => updateSlide(i));
            paginationContainer.appendChild(dot);
        }
    };


    //initialise slider
    slides[0].classList.add('active');
    generateDots();
    startSlider();

    // Pause on hover
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);



});
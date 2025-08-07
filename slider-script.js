document.addEventListener('DOMContentLoaded', () => {
    //Selectors
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');

    const totalSlides = slides.length;
    if (totalSlides === 0) return;

    //set up the fisrt slide
    let currentSlide = 0;
    let sliderInterval;

    //Update slide
    const updateSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlide = index;
    }

    //Slide rotation
    const rotateSlider = () => {
        updateSlide((currentSlide + 1) % totalSlides);
    }

    //Auto play slider
    const startSlider = () => {
        sliderInterval = setInterval(rotateSlider, 4000);
    };

    // Stop slider
    const stopSlider = () => {
        clearInterval(sliderInterval);
    };


    //initialise slider
    slides[0].classList.add('active');
    startSlider();

    // Pause on hover
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);



});
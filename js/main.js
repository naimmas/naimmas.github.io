(function ($) {
    "use strict";
    // const imageContainers = document.querySelectorAll('.image-container');
    // const imageOverlay = document.querySelector('.image-overlay');
    // const imageDescription = document.getElementById('image-description');
    // const closeButton = document.querySelectorAll('.close-button');

    // imageContainers.forEach((container, index) => {
    //     container.addEventListener('click', () => {
    //         const descriptionText = container.querySelector('.image-description p').textContent;
    //         const formattedText = descriptionText
    //             .replace(/\\n/g, '<br>')  // Convert \n to <br>
    //             .replace(/\\t/g, '&emsp;'); // Convert \t to tab spacing
    
    //         imageDescription.innerHTML = formattedText;
    //         imageOverlay.style.display = 'flex';
    //     });
    // });
    
    // closeButton.forEach(button => {
    //     button.addEventListener('click', () => {
    //         imageOverlay.style.display = 'none';
    //     });
    // });

    const showImages = document.querySelectorAll('.port_image');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.closeButton');
    const showText = document.querySelectorAll('.port_text');

    showImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            modals[index].style.display = 'block';
        });
    });
    
    showText.forEach((image, index) => {
        image.addEventListener('click', () => {
            modals[index].style.display = 'block';
        });
    });

    closeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].style.display = 'none';
        });
    });

    // Close the modals if the user clicks outside of them
    window.addEventListener('click', (event) => {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: false
        });
    }


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.course-container').isotope({
        itemSelector: '.course-item',
        layoutMode: 'fitRows'
    });
    $('#course-flters li').on('click', function () {
        $("#course-flters li").removeClass('active');
        $(this).addClass('active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);
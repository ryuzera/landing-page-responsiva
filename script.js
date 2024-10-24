$(document).ready(function() {
    $('#mobile-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    const section = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        let activeSectionIndex = 0
        const scrollPosition = $(window).scrollTop() + header.outerHeight();

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)')
        }

        section.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - header.outerHeight() - 50;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '15%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'top',
        duration: 2000,
        distance: '15%'
    });

    ScrollReveal().reveal('#testimonial-chef', {
        origin: 'left',
        duration: 1000,
        distance: '15%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '15%'
    })
});
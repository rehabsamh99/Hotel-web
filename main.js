const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    };

    // header container
ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    });
    
    ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
    });
// header container
ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
    });
    
    ScrollReveal().reveal(".about_content .section_subheader", {
    ...scrollRevealOption,
    delay: 500,
    });
    
    ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
    delay: 1000,
    });
    
    ScrollReveal().reveal(".about_content .section_description", {
    ...scrollRevealOption,
    delay: 1500,
    });
    
    ScrollReveal().reveal(".about_btn", {
    ...scrollRevealOption,
    delay: 2000,
    });

// room container
ScrollReveal().reveal(".room_card", {
    ...scrollRevealOption,
    interval: 500,
});

// service container
ScrollReveal().reveal(".service_list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right",
});

// SHOW SCROLL UP 
const scrollUp = () =>{
const scrollUp = document.getElementById('scroll-up')
// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
    }
window.addEventListener('scroll', scrollUp)
            
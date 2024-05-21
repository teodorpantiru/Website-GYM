
// ========================================================
//                      Preloader
// ========================================================

$(window).on('load', function () { //makes sure that the whole site is loaded
    $('#status').fadeOut()
    $('#preloader').delay(350).fadeOut('slow')
});


// ========================================================
//                          Team
// ========================================================

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //Breakpoint from 0 up
            0: {
                items: 1
            },
            //Breakpoint from 400 up
            480: {
                items: 2
            }
        }
    })
})

/* ==============================================================
                         Progress bar using waypoints plugin/ destroy and offset
================================================================*/

$(function () {
    $("#progress-elements").waypoint(function () {
        // alert("You reached to progress elem area")
        $(".progress-bar").each(function () {
            $(this).animate({ width: $(this).attr("aria-valuenow") + "%" }, 1000)
        })
        this.destroy();

    }, { offset: 'bottom-in-view' })
})

/* ==============================================================
                         Responsive Tabs
================================================================*/

$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'

    });

});


/* ==============================================================
                         Portfolio
================================================================*/


$(window).on('load', function () {
    // Initialize Isotop
    $("#isotope-container").isotope({

    });
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        // Get filter value
        var filterValue = $(this).attr('data-filter');
        // alert("You clicked " + filterValue);

        // Filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });
        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active')
    })
});


/* ==============================================================
                         Portfolio
================================================================*/

$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
})


/* ==============================================================
                         Testimonials
================================================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    })
})

/* ==============================================================
                         Stats Section
================================================================*/

$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
})


/* ==============================================================
                         Google Map
================================================================*/

$(window).on('load', function () {
    const addressString = 'Strada Sovata, Oradea';
    const myLatlng = {
        lat: 47.069241,
        lng: 21.913279,
    };
    // Render Map
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        map: map,
        position: myLatlng,
        title: "Click To See Address",
    });

    //Add Info Window
    const infowindow = new google.maps.InfoWindow({
        content: addressString,
        ariaLabel: "Uluru",
    });

    //Show info window when user clicks marker
    marker.addListener("click", function () {
        infowindow.open({
            anchor: marker,
            map,
        });

    });
    // 4 Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {
        const center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });


});


/* ==============================================================
                         Navigation
================================================================*/

// Show and hide white navigation

$(function () {
    // Show/hide nav on page load
    showHideNav();
    $(window).scroll(function () {
        // Show/hide nav on window's scroll
        showHideNav()

    });

    function showHideNav() {
        // Show navbar
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top")
            // Show dark logo
            $(".navbar-brand img").attr("src", ("src", "img/logo/logo-dark.png"));

            // Show back to top btn
            $("#back-to-top").fadeIn();
        } else {
            //Hide navbar
            $("nav").removeClass("white-nav-top")
            //Show normal logo
            $(".navbar-brand img").attr("src", ("src", "img/logo/logo.png"))
            // Hide back to top btn
            $("#back-to-top").fadeOut();
        }
    }
})


// Smooth Scrolling

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //Get section id like #about , # services, # work , #team , #
        let section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});


/* ==============================================================
                         Mobile Menu
================================================================*/

$(function () {
    // Show mobile menu
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%")
    });
    // Hide mobile menu
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%")
    });
})

/* ==============================================================
                        Animation
================================================================*/

// animate on scroll

$(function () {
    new WOW().init();
})

// Home animation on page load

$(window).on('load', function () {
    $("#home-heading-1").addClass("animate__animated animate__tada");
    $("#home-heading-2").addClass("animate__animated animate__fadeInLeft");
    $("#home-text").addClass("animate__animated animate__fadeInBottomRight");
    $("#home-btn").addClass("animate__animated animate__bounceInUp");
    $("#arrow-down").addClass("animate__animated animate__fadeInDown animate__infinite	infinite");
});



$(document).ready(function () {
    const form = $(".needs-validation");

    // Form submit handler
    form.on("submit", function (e) {
        if (!form[0].checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            alert("Success!");
        }
        form.addClass("was-validated");
        console.log(getEmailValue());
    });

    // Input change handler
    const formControls = form.find("input, select, textarea");
    formControls.on("input", function () {
        const formControl = $(this);
        const validFeedback = formControl.siblings(".valid-feedback");
        const invalidFeedback = formControl.siblings(".invalid-feedback");

        if (formControl[0].checkValidity()) {
            formControl.addClass("is-valid").removeClass("is-invalid");
            validFeedback.text("Looks Good");
            invalidFeedback.text("");
        } else {
            formControl.addClass("is-invalid").removeClass("is-valid");
            const placeholder = formControl.attr("placeholder") || formControl.find("option:selected").text() || "value";
            invalidFeedback.text("Invalid " + placeholder);
            validFeedback.text("");
        }
    });

    // Function to check form validity and update submit button state
    function checkFormValidity() {
        const submitBtn = $("#submit-button");
        if (form[0].checkValidity()) {
            submitBtn.prop("disabled", false);
        } else {
            submitBtn.prop("disabled", true);
        }
    }

    // Attach the checkFormValidity function to the input event of all form controls
    formControls.on("input", checkFormValidity);

    // Initial check to set the button state on page load
    checkFormValidity();
});










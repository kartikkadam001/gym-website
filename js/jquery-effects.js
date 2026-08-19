jquery-effects.js
$(document).ready(function () {

    // Smooth Scrolling
    $("a").on("click", function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top

            }, 800);

        }

    });

    // Card Hover Animation
    $(".card").hover(

        function () {
            $(this).fadeTo(300, 0.85);
        },

        function () {
            $(this).fadeTo(300, 1);
        }

    );

    // Slide Toggle
    $("#showPlans").click(function () {

        $("#membershipPlans").slideToggle(700);

    });

    // Fade Hero Text
    $(".hero h1").hide().fadeIn(2000);

    // Trainer Animation
    $(".trainer").mouseenter(function () {

        $(this).animate({
            width: "105%"
        }, 300);

    });

    $(".trainer").mouseleave(function () {

        $(this).animate({
            width: "100%"
        }, 300);

    });

});
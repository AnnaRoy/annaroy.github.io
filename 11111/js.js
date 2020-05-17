


$(function(){
    "use strict";
    $('.sidebar-menu li ').click(function(){                
        $(this).children('.sub-menu').toggleClass('open');      
    });
});
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('.menu-bg').addClass('stickytop');
            $('.menu li a').addClass('light');
        }
        else {
            $('.menu-bg').removeClass('stickytop');
            $('.menu li a').removeClass('light');
        }
    });
});
(function () {

    "use strict";
    var toggles = document.querySelectorAll(".navbar-btn");
    var elem = document.querySelector(".menu-bg");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
            (elem.classList.contains("active") === true) ? elem.classList.remove("active") : elem.classList.add("active");
        });
    }

})();
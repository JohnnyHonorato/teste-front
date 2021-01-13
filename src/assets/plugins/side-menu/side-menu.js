(function () {
	"use strict";

	window.setTimeout(() => {
        // Toggles sidebar-mini
        $(document).on('click', '[data-toggle="sidebar"]', function(event) {
            event.preventDefault();
            $('.app').toggleClass('sidebar-mini-closed');
        });

        // Activate submenus items
        $(document).on("click", "[data-toggle='slide']", function(event) {
            event.preventDefault();
            $(this).parent().toggleClass('is-expanded');
        });

        // mobile toggle sidebar
        if ($(window).width() <= 768) {
            // Toggles the second-menu (sidenav-mobile) when menu icon is clicked
            $(document).on('click', '[data-toggle="sidebar"]', function(event) {
                event.preventDefault();
                $('.app').toggleClass('sidenav-mobile');
            });

            // Removes .sidenav-mobile when a menu item is clicked
            $(document).on('click', '.sidenav-mobile .slide-item', function(event) {
                event.preventDefault();
                $('.app').removeClass('sidenav-mobile');
            });

            // Removes .sidenav-mobile when a submenu is clicked
            $(document).on('click', '.submenu-list .nav-item', function(event) {
                event.preventDefault();
                $('.app').removeClass('sidenav-mobile');
            });

            $(document).on('click', '.app-content', function(event) {
                event.preventDefault();
                $('.app').removeClass('sidenav-mobile');
            });
        }


        // Inits sidebar with sidebar-gone class
        var toggleSidebar = function() {
            var w = $(window);
            if(w.outerWidth() <= 1024) {
                $('body').addClass('sidebar-gone');
                $(document).off('click', 'body').on('click', 'body', function(e) {
                    if($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
                        $('body').removeClass('sidebar-show');
                        $('body').addClass('sidebar-gone');
                        $('body').removeClass('search-show');
                    }
                });
            } else {
                $('body').removeClass('sidebar-gone');
            }
        }
        
        toggleSidebar();
        $(window).resize(toggleSidebar);
    });
})();

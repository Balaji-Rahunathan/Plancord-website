// $(document).ready(function(){
//     $('a[href^="#home"]').addClass('active');

//     $('.menuitem').on('click', function (e) {
//         e.preventDefault();
//         //  $(document).off("scroll");
//         var athis = this;
//         var target = this.hash,
//                 menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top + 2
//         }, 800, 'swing', function () {
//             window.location.hash = target;
//             $('.menuitem').removeClass('activea');
//             $(athis).addClass('activea');

//         });

//     });

//     $(window).scroll(function (event) {
//         var scrollPos = $(document).scrollTop();
//         if (scrollPos === 0)
//         {
//             $('a[href^="#home"]').addClass('active');
//             return;
//         }

//         $('.menuitem').each(function () {
//             var currLink = $(this);
//             console.log(currLink);
//             var refElement = $(currLink.find('a').attr("href"));
//             if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//                 $('.menuitem').removeClass("activea");
//                 currLink.addClass("activea");
//             } else {
//                 currLink.removeClass("activea");
//             }
//         });

//     })

// })

$('#nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function() {
		//I get fired when the animation is starting
	},
	end: function() {
		//I get fired when the animation is ending
	},
	scrollChange: function($currentListItem) {
		//I get fired when you enter a section and I pass the list item of the section
	}
});
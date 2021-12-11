// $(document)
//     .ready(function () {
//
//         // fix menu when passed
//         $('.masthead')
//             .visibility({
//                 once: false,
//                 onBottomPassed: function () {
//                     $('.fixed.menu').transition('fade in');
//                 },
//                 onBottomPassedReverse: function () {
//                     $('.fixed.menu').transition('fade out');
//                 }
//             })
//         ;
//
//         // create sidebar and attach to menu open
//         $('.ui.sidebar')
//             .sidebar('attach events', '.show-menu')
//         ;
//
//         $('.item').click(function () {
//             $('.ui.sidebar').sidebar('hide');
//         });
//
//         $(document).on('click', 'a[href^="#"]', function (event) {
//             event.preventDefault();
//
//             $('html, body').animate({
//                 scrollTop: $($.attr(this, 'href')).offset().top
//             }, 500);
//         });
//
//     })
// ;

// function docReady(fn) {
//     // see if DOM is already available
//     if (document.readyState === "complete" || document.readyState === "interactive") {
//         // call on next available tick
//         setTimeout(fn, 1);
//     } else {
//         document.addEventListener("DOMContentLoaded", fn);
//     }
// }

// docReady(function() {

//         // fix menu when passed
//         $('.masthead')
//             .visibility({
//                 once: false,
//                 onBottomPassed: function () {
//                     $('.fixed.menu').transition('fade in');
//                 },
//                 onBottomPassedReverse: function () {
//                     $('.fixed.menu').transition('fade out');
//                 }
//             })
//         ;

// });
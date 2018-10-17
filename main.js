 // showing 2nd level sub menu while hiding others
 $('.sidebar-nav-link').on('click', function (e) {
     var subMenu = $(this).next();

     $(this).parent().siblings().find('.sidebar-nav-sub').slideUp();
     $('.sub-with-sub ul').slideUp();

     if (subMenu.length) {
         e.preventDefault();
         subMenu.slideToggle();
     }
 });

 // showing 3rd level sub menu while hiding others
 $('.sub-with-sub .nav-sub-link').on('click', function (e) {
     e.preventDefault();
     $(this).parent().siblings().find('ul').slideUp();
     $(this).next().slideDown();
 });

 $('#slimSidebarMenu').on('click', function (e) {
     e.preventDefault();
     if (window.matchMedia('(min-width: 1200px)').matches) {
         $('body').toggleClass('hide-sidebar');
     } else {
         $('body').toggleClass('show-sidebar');
     }
 });



 


 // === following js will activate the menu in left side bar based on url ====
 $(document).ready(function () {
     $("#sidebar-menu a").each(function () {
         var pageUrl = window.location.href.split(/[?#]/)[0];
         console.log(pageUrl)
         if (this.href == pageUrl) {
             $(this).addClass("active");
             $(this).parent().addClass("active"); // add active to li of the current link
             $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
             $(this).parent().parent().parent().parent().prev().click();
             $(this).parent().parent().prev().click(); // click the item to make it drop
         }
     });
 });

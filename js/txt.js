$(".v-txt").html("");
$(".nob").html("California Trust Bank");

 $(".international").addClass("r3-nav-active");
 $(".international-content").show();

 function openInternationalBanking(){
   $(".all-content").hide();
   $(".international-content").fadeIn();
   $(".r3-nav").removeClass("r3-nav-active");
   $(".international").addClass("r3-nav-active");

 }
 function openLifeGoals(){
   $(".all-content").hide();
   $(".lifegoals-content").fadeIn();
   $(".r3-nav").removeClass("r3-nav-active");
   $(".lifegoals").addClass("r3-nav-active");
 }
 function openOurServices(){
   $(".all-content").hide();
   $(".services-content").fadeIn();
   $(".r3-nav").removeClass("r3-nav-active");
   $(".ourservice").addClass("r3-nav-active");
 }
function closeMenu(){
  $(".menu-box").hide();
}
function openMenu(){
  $(".menu-box").show();
}

$(".menu-box ul li").click(
  function(){
    closeMenu();
  }
);

 // WARNING: SMOOTH SCROLL ON ALL ANCHOR
// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

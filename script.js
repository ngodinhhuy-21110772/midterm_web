$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        // Check if the target is the footer
        if (hash === "#footer") {
          $("html, body").animate(
            {
              scrollTop: $(document).height() - $(window).height(),
            },
            800, // Animation duration in milliseconds
            function () {
              window.location.hash = hash;
            }
          );
        } else {
          // For other sections, scroll normally
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            800, // Animation duration in milliseconds
            function () {
              window.location.hash = hash;
            }
          );
        }
      }
    });
  });

  var typed= new Typed(".self_more",{
    strings:["am Ngo Dinh Huy","am from Quy Nhon City","want to become web developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
  })
  var typed= new Typed(".intro",{
    strings:["a third-year student at the University of Technical Education in Ho Chi Minh City"],
    typeSpeed:20,
    BackSpeed:40,
    loop:true
  })
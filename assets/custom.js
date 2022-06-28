/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */

// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

function showReadmore() {
  alert("asd");
}

function getAndSetHeightOfProductSection() {
  let heightOfSectionShouldBe = jQuery("#nase_why").height() + 400;

  if ($(window).width() >= 1024) {
    jQuery(".gevity-new-style section.Product.Product--large").height(
      heightOfSectionShouldBe
    );
  }
}

$(document).ready(function () {
  jQuery("#addSpecialProduct").live("click", function () {
    console.log("add special 1");
    let useSideCart = true;
    let formData = {
      items: [
        {
          id: 32590811725890,
          quantity: 1,
        },
      ],
    };
    console.log("add special 2");
    fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log("add special 3");

        if (useSideCart) {
          // $('a.Header__Icon[data-action="open-drawer"][data-drawer-id="sidebar-cart"]').get(0).click();
          $(".refreshcart").click();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

$(document).ready(function () {
  $(".readmorebutton").click(() => {
    if ($(".readmorecontent").hasClass("yup")) {
      $(".readmorecontent").slideUp("slow");
      $(".readmorecontent").removeClass("yup");
      $(".morelabel").html("READ MORE");
    } else {
      $(".readmorecontent").fadeIn("slow");
      $(".readmorecontent").addClass("yup");
      $(".morelabel").html("SEE LESS");
    }
  });

  $(".storyreadmorebutton").click(() => {
    if ($(".storyreadmorecontent").hasClass("yup")) {
      $(".storyreadmorecontent").slideUp("slow");
      $(".storyreadmorecontent").removeClass("yup");
      $(".storymorelabel").html("READ MORE");
    } else {
      $(".storyreadmorecontent").fadeIn("slow");
      $(".storyreadmorecontent").addClass("yup");
      $(".storymorelabel").html("SEE LESS");
    }
  });
});

$(".activ-size-guide-link").click(() => {
  $("#activ-lightbox").css("display", "block");
});

$("#activ-lightbox").click(() => {
  $("#activ-lightbox").css("display", "none");
});

const queryString = window.location.search;
console.log("queryString", queryString);

let oldURL = $("a#au").attr("href");

$("a#au").attr("href", oldURL + queryString);
$("a.aus").attr("href", "https://gevityrx.com/");

let cPicker = $("#countryPopupActiv");

function showCPicker() {
  console.log("run showCPicker");
  cPicker.fadeIn();
}

function dismissCPicker() {
  cPicker.fadeOut();
}

jQuery("#shopify-section-announcement").hide();

jQuery("body").addClass("hiddenAnnouncement");

jQuery(document).ready(function () {
  jQuery("#shopify-section-announcement").hide();

  jQuery("body").addClass("hiddenAnnouncement");

  var topbarstate = sessionStorage.getItem("topbarstate");

  if (topbarstate == "closed") {
    jQuery("#shopify-section-announcement").hide();

    jQuery("body").addClass("hiddenAnnouncement");
  }

  if (topbarstate == "open") {
    jQuery("#shopify-section-announcement").fadeIn();

    jQuery("body").removeClass("hiddenAnnouncement");
  }

  jQuery("div#cselector a#us").hide();

  jQuery.fn.clickToggle = function (a, b) {
    function cb() {
      [b, a][(this._tog ^= 1)].call(this);
    }
    return this.on("click", cb);
  };

  jQuery("div#cselector img#au").clickToggle(
    function () {
      // Do something here
      //jQuery('div#cselector a#us').css('visibility','visible');
      jQuery("div#cselector a#us").fadeIn();
    },
    function () {
      jQuery("div#cselector a#us").fadeOut();
      // Do thething here
    }
  ); // (you can chain here other jQuery methods)

  var html = $(".Product__Wrapper .Rte").html();
  var fullDesciption = jQuery(html).not("p:first").remove();
  var excerpt = $(".Product__Wrapper .Rte").find("p:first").text();

  jQuery(".Product__Wrapper .Rte").html(excerpt);

  jQuery(".Full").html(fullDesciption);

  jQuery("#grx_readmore").click(function (event) {
    jQuery(".Full").fadeToggle();

    event.preventDefault();

    // jQuery('.Rte').toggleClass("fullDesciption");

    if (jQuery(this).text() == "See More") {
      jQuery(this).text("See Less");
    } else {
      jQuery(this).text("See More");
    }
  });
});

// jQuery('#grx_readmore').click(function(event){

//   event.preventDefault;

//   jQuery('.Rte').toggle(function(){
//     // $(this).animate({height:44},200);
//   },function(){
//     // $(this).animate({height:44},200);
//   });

// //   alert('ad');

// })

// ('#grx_readmore').on('click', function(e) {

//   e.preventDefault;
//       $('.Rte').toggleClass("fullDesciption"); //you can list several class names

//     });

// jQuery('#grx_readmore').clickToggle(function() {
//     jQuery(this).animate({
//         height: "44px"
//     }, 1500);
// },
// function() {
//     jQuery(this).animate({
//         height: $('.Rte').height()
//     }, 1500);
// });

jQuery("#nase_why li.question").click(function () {
  setTimeout(() => {
    getAndSetHeightOfProductSection();
  }, 10);
  if (jQuery(this).hasClass("open")) {
    jQuery(this).removeClass("open");
    jQuery(".answer").hide();
  } else {
    jQuery(".answer").hide();
    jQuery(".open").removeClass("open");

    jQuery(this).toggleClass("open");
    jQuery(this).next(".answer").fadeIn();
  }
});

jQuery("#nase_close").click(function () {
  sessionStorage.setItem("topbarstate", "closed");

  jQuery("#shopify-section-announcement").fadeToggle();

  jQuery("body").toggleClass("hiddenAnnouncement");

  //   alert('ad');
});

jQuery("#nase_open").click(function () {
  sessionStorage.setItem("topbarstate", "open");
  jQuery("#shopify-section-announcement").fadeToggle();

  jQuery("body").toggleClass("hiddenAnnouncement");

  //   alert('ad');
});

$(document).ready(function () {
  return;

  if (sessionStorage.getItem("hasVisited")) {
    console.log("yep there is a visiterd local storage");
  }

  $.get(
    "https://ipinfo.io/json",
    function (response) {
      //here you get details in response.

      console.log("response from ipinfo", response);
      if (window.location.href.indexOf("torian") > -1) {
        console.log("torian");
      } else {
        if (response.country == "NZ") {
          console.log("you are in NZ");
        } else if (response.country == "US" || response.country == "CA") {
          console.log("you are in AU");
          if (!sessionStorage.getItem("hasVisited")) {
            showCPicker();
            sessionStorage.setItem("hasVisited", true);
          }
        } else if (response.country == "US") {
          console.log("you are in US");
        } else {
          console.log("mate you are somewhere else!");
        }
      }
    },
    "jsonp"
  );

  $(".closeCPicker").click(function () {
    dismissCPicker();
  });

  $("a.int").click(function () {
    dismissCPicker();
  });
});

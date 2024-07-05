// MAIN CONTENT IMG CHANGE CODE START
document.addEventListener("DOMContentLoaded", function () {
  const carouselItem = document.getElementById("carouselItem");
  const images = [
    "./images/Home.png",
    "./images/Home.png",
    "./images/Home.png",
  ];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselItem.style.backgroundImage = `url('${images[currentIndex]}')`;
  }, 120000); // Change image every 2 minutes (120000 milliseconds)
});
// MAIN CONTENT IMG CHANGE CODE END

// Compare container functionall start
function showContent(tabName, event) {
  event.preventDefault(); // Prevent default anchor tag behavior

  // Hide all content divs
  document.querySelectorAll(".container.latest-scoop").forEach(function (el) {
    el.style.display = "none";
  });

  // Remove 'active' class from all nav items
  document.querySelectorAll(".my-nav-tab").forEach(function (el) {
    el.classList.remove("active");
  });

  // Display the selected tab content
  document.getElementById(tabName + "-content").style.display = "block";

  // Mark the selected tab as active
  event.target.parentNode.classList.add("active");
}
// Compare container functionall end

// <!-- Explore other dress start -->
$(document).ready(function () {
  function resetDots(category) {
    $("." + category + "-dots i").removeClass("active");
    $("." + category + "-dots i:first-child").addClass("active");
  }

  function resetImageSets(category) {
    $("#" + category + " .image-set").addClass("hidden");
    $("#" + category + " .image-set:first-child").removeClass("hidden");
  }

  $("#wman").click(function () {
    $("#women").addClass("show active");
    $("#men").removeClass("show active");
    $(".women-dots").removeClass("hidden");
    $(".men-dots").addClass("hidden");
    resetDots("women");
    resetImageSets("women");

    // Set background color for women's section
    $("#wman").closest(".deal-item").addClass("active");
    $("#man").closest(".deal-item").removeClass("active");
  });

  $("#man").click(function () {
    $("#men").addClass("show active");
    $("#women").removeClass("show active");
    $(".men-dots").removeClass("hidden");
    $(".women-dots").addClass("hidden");
    resetDots("men");
    resetImageSets("men");

    // Set background color for men's section
    $("#man").closest(".deal-item").addClass("active");
    $("#wman").closest(".deal-item").removeClass("active");
  });

  $(".women-dots i").click(function () {
    var index = $(this).data("index");
    $("#women .image-set").addClass("hidden");
    $("#image-set-" + index).removeClass("hidden");
    $(".women-dots i").removeClass("active");
    $(this).addClass("active");
  });

  $(".men-dots i").click(function () {
    var index = $(this).data("index");
    $("#men .image-set").addClass("hidden");
    $("#image-set-" + index + "-men").removeClass("hidden");
    $(".men-dots i").removeClass("active");
    $(this).addClass("active");
  });
});
$(document).ready(function () {
  function resetDots(category) {
    $("." + category + "-dots i").removeClass("active");
    $("." + category + "-dots i:first-child").addClass("active");
  }

  function resetImageSets(category) {
    $("#" + category + " .image-set").addClass("hidden");
    $("#" + category + " .image-set:first-child").removeClass("hidden");
  }

  $("#wman").click(function () {
    $("#women").addClass("show active");
    $("#men").removeClass("show active");
    $(".women-dots").removeClass("hidden");
    $(".men-dots").addClass("hidden");
    resetDots("women");
    resetImageSets("women");

    // Set background color for women's section
    $("#wman").closest(".deal-item").addClass("active");
    $("#man").closest(".deal-item").removeClass("active");
  });

  $("#man").click(function () {
    $("#men").addClass("show active");
    $("#women").removeClass("show active");
    $(".men-dots").removeClass("hidden");
    $(".women-dots").addClass("hidden");
    resetDots("men");
    resetImageSets("men");

    // Set background color for men's section
    $("#man").closest(".deal-item").addClass("active");
    $("#wman").closest(".deal-item").removeClass("active");
  });

  $(".women-dots i").click(function () {
    var index = $(this).data("index");
    $("#women .image-set").addClass("hidden");
    $("#image-set-" + index).removeClass("hidden");
    $(".women-dots i").removeClass("active");
    $(this).addClass("active");
  });

  $(".men-dots i").click(function () {
    var index = $(this).data("index");
    $("#men .image-set").addClass("hidden");
    $("#image-set-" + index + "-men").removeClass("hidden");
    $(".men-dots i").removeClass("active");
    $(this).addClass("active");
  });
});

// <!-- Explore other dress start -->

// Nice thing start here
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("testimonialCarousel");
  const indicators = carousel.querySelectorAll(".carousel-indicators button");
  const items = carousel.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function showSlide(index) {
    items[currentIndex].classList.remove("active");
    indicators[currentIndex].classList.remove("active");
    currentIndex = (index + items.length) % items.length;
    items[currentIndex].classList.add("active");
    indicators[currentIndex].classList.add("active");
  }

  carousel
    .querySelector(".carousel-control-prev")
    .addEventListener("click", function () {
      showSlide(currentIndex - 1);
    });

  carousel
    .querySelector(".carousel-control-next")
    .addEventListener("click", function () {
      showSlide(currentIndex + 1);
    });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      showSlide(index);
    });
  });
});
// Nice thing end here

// filter start here
$("#chooseHowYouRentModal").on("shown.bs.modal", function () {
  $(".fade-in-content").addClass("show");
});
$("#chooseHowYouRentModal").on("hidden.bs.modal", function () {
  $(".fade-in-content").removeClass("show");
});

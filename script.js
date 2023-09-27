// Get the modal, teaser button, and close button elements from the DOM
var modal = document.getElementById("videoModal");
var btn = document.getElementById("teaserButton");
var span = document.getElementsByClassName("close")[0];
const navLinks = document.querySelectorAll(".menuBar a");


btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// When the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  let scrollToTopButton = document.getElementById("scrollTopBtn");

   // When the user scrolls the page
  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";

    }
  });

  // When the user clicks the scroll to top button, smoothly scroll them to the top of the page
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


// Toggle the mobile menu visibility when the hamburger button is clicked
document.getElementById('hamburger-btn').addEventListener('click', function() {
  const nav = document.getElementById('nav-menu');
  nav.classList.toggle('mobile-active');
});


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


document.getElementById("hamburger-btn").addEventListener("click", function () {
  const nav = document.getElementById("nav-menu");
  const hamburgerIcon = document.querySelector(".mobile-menu");

  nav.classList.toggle("mobile-active");

  // Toggle the hamburger icon
  if (nav.classList.contains("mobile-active")) {
    hamburgerIcon.textContent = "✖"; // change to a close icon
  } else {
    hamburgerIcon.textContent = "≡"; // revert back to hamburger icon
  }
});

window.addEventListener("resize", function () {
  const nav = document.getElementById("nav-menu");

  if (window.innerWidth > 768) {
    // This is the breakpoint set in your CSS media query
    nav.classList.remove("mobile-active"); // Hide the mobile menu
    nav.removeAttribute("style"); // Reset any inline styles
  }
});

document.getElementById("mute-toggle").addEventListener("click", function () {
  var video = document.getElementById("background-video");
  var icon = document.getElementById("sound-icon");

  if (video.muted) {
    video.muted = false;
    icon.className = "fas fa-volume-up"; // sound on icon
  } else {
    video.muted = true;
    icon.className = "fas fa-volume-mute"; // sound off icon
  }
});


// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

    
//     const thankYouDiv = document.getElementById("thankYouMessage");
//     thankYouDiv.style.display = "block";

//     // Clear the form
//     event.target.reset();

//     // Hide the thank you message after 3 seconds
//     setTimeout(function () {
//       thankYouDiv.style.display = "none";
//     }, 3000);
//   });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Reference to form element
    const form = event.target;
    // Get form data
    const formData = new FormData(form);
    // Submit the form data via AJAX
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Show the thank you message
          const thankYouDiv = document.getElementById("thankYouMessage");
          thankYouDiv.style.display = "block";
          // Clear the form
          form.reset();
          // Hide the thank you message after 3 seconds
          setTimeout(function () {
            thankYouDiv.style.display = "none";
          }, 3000);
        } else {
          //show some error message if needed
          console.error("Form submission failed");
        }
      })
      .catch((error) => {
        // Handle network errors or other errors occurred during the fetch
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  });

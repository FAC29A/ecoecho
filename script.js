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

// Function to smoothly navigate to webpage sections upon clicking menu links
function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: "smooth" });
}

navLinks.forEach(link => {
  link.addEventListener("click", scrollToSection);
});

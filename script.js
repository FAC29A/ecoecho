var modal = document.getElementById("videoModal");
var btn = document.getElementById("teaserButton");
var span = document.getElementsByClassName("close")[0];

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

const sections = document.querySelectorAll('section');
const scrollTopBtn = document.getElementById('scrollTopBtn');

scrollTopBtn.addEventListener('click', () => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});


window.addEventListener('scroll', () => {
  let closestSection = null;
  let minDistance = Infinity;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.bottom);

    if (distance < minDistance) {
      minDistance = distance;
      closestSection = section;
    }
  });

  if (closestSection) {
    const rect = closestSection.getBoundingClientRect();
    const btnHeight = scrollTopBtn.offsetHeight;

    // Update the button's position.
    scrollTopBtn.style.bottom = (rect.bottom - btnHeight - 10) + 'px';
  }

  // Showing/hiding the button based on scroll position.
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

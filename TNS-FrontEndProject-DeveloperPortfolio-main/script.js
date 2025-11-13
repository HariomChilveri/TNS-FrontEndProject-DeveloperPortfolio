// Animate on scroll for sections/tiles
document.addEventListener("DOMContentLoaded", () => {
  function animateTilesOnScroll() {
    document.querySelectorAll('.aos').forEach(el => {
      const bounding = el.getBoundingClientRect();
      if (bounding.top < window.innerHeight - 70) {
        el.classList.add('aos-animate');
      }
    });
  }
  animateTilesOnScroll();
  window.addEventListener('scroll', animateTilesOnScroll);
});

// AJAX Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const form = this;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    showResult("Please fill all fields", "error");
    return;
  }
  setTimeout(() => {
    showResult("Thank you for reaching out! I'll get back to you soon.");
    form.reset();
  }, 850);
  function showResult(msg, type){
    const result = document.getElementById('formResult');
    result.textContent = msg;
    result.style.color = type === "error" ? "#f33" : "#21bd56";
    setTimeout(()=> result.textContent = "", 3500);
  }
});

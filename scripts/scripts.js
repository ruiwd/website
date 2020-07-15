const site = {};

site.scrollFadeUp = () => {
  const fadeUp = document.querySelectorAll('.fadeUp');

  const fadePosition = (el) => {
    const elementPosition = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
      el.classList.add('faded');
    }
  }

  fadeUp.forEach(el => fadePosition(el));
}

document.querySelector('body').addEventListener('scroll', site.scrollFadeUp);

site.smoothAnchor = function(e) {
  e.preventDefault();

  document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', site.smoothAnchor);
});

site.navToggle = () => {
  document.querySelectorAll('.navTop.mobile, div.hamburger .line').forEach(line => {line.classList.toggle('active')});
}
document.querySelector('div.hamburger').addEventListener('click', site.navToggle);



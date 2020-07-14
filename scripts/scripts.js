const scrollFadeUp = () => {
  const fadeUp = document.querySelectorAll('.fadeUp');

  const fadePosition = (el) => {
    const elementPosition = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * 8 / 9;

    if (elementPosition < screenPosition) {
      el.classList.add('faded');
    }
  }

  fadeUp.forEach(el => fadePosition(el));
}

document.querySelector('body').addEventListener('scroll', scrollFadeUp)

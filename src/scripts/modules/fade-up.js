import config from '../config';

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.setAttribute('data-fade-up', 'visible');
      observer.unobserve(entry.target);
    }
  });
}, config.observerOptions);

const fadeUp = () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const nodes = [...section.children];
    let i = 1;
    nodes.forEach(node => {
      node.setAttribute('style', `transition-delay: ${0.5 * i}s`);
      i++;
    })
    observer.observe(section);
  })
}

export default fadeUp;
import config from '../config';
import observer from './observer';

const observeItems = () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (section.classList.contains('.mf-section')) {
      const nodes = [...section.children];
      let i = 1;
      nodes.forEach(node => {
        node.setAttribute('style', `transition-delay: ${0.5 * i}s`);
        i++;
      })
    }

    observer.observe(section);
  })
}

export default observeItems;
import { Component } from '../../utils/component';
import { mini } from '../../utils/mini-cursor';

export class Home extends Component {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', ['home', 'main__home']);
    const infoElem = new Component(this.element, 'div', ['home__info']);
    new Component(infoElem.element, 'h1', ['home__title'], 'Геноцид Минской области');
    const linkToAbout = new Component(infoElem.element, 'a', ['home__about'], 'Узнать больше');
    linkToAbout.element.setAttribute('href', '#about');

    linkToAbout.element.addEventListener('mouseover', () => mini());
    linkToAbout.element.addEventListener('mouseout', () => mini());
    document.body.addEventListener('mousewheel', () => this.scrollHorizontally(event), false);
  }

  private scrollHorizontally = (e: any) => {
    e = window.event || e;
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    (document.querySelector('.main') as Element).scrollLeft -= (delta * 40);
    e.preventDefault();
  };
}

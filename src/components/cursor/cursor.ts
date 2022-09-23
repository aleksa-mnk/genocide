import { Component } from '../../utils/component';
import '../../styles/cursor.scss';

export class Cursor extends Component {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['mouse']);
    new Component(this.element, 'div', ['ball']);
    new Component(this.element, 'span', ['scrolltext'], 'Прокрутите для\n навигации');

    document.addEventListener('mousemove', () => this.mousemove(event as MouseEvent), false);
  }

  private mousemove = (ev: MouseEvent): void => {
    const mouse: HTMLElement | null = document.querySelector('.mouse');
    if (mouse) {
      mouse.style.transform = `translateY(${ev.clientY}px)`;
      mouse.style.transform += `translateX(${ev.clientX}px)`;
    }
  };
}

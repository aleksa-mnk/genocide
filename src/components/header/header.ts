import { Component } from '../../utils/component';
import { mini } from '../../utils/mini-cursor';

export class Header extends Component {
  private navItems: Component[] = [];

  private linkToLogo: Component;

  private navElement: Component;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', ['header', 'home__header']);

    this.linkToLogo = new Component(
      this.element,
      'a',
      ['header__logo'],
      '',
    );
    this.linkToLogo.element.setAttribute('href', '#');

    this.navElement = new Component(this.element, 'nav', ['header__burger', 'burger']);

    this.navItems = [this.navElement];

    const inputBurger = new Component(this.navElement.element, 'input', ['burger__input']);
    inputBurger.element.setAttribute('type', 'checkbox');

    type SpanElem = [HTMLElement, keyof HTMLElementTagNameMap, string[]];
    const spanElem: SpanElem = [this.navElement.element, 'span', ['burger__span']];
    new Component(...spanElem);
    new Component(...spanElem);
    new Component(...spanElem);

    new Component(this.navElement.element, 'ul', ['burger__menu']);

    const linkToMgol = new Component(this.element, 'a', ['header__mgol']);
    linkToMgol.element.setAttribute('href', 'http://mgol.of.by/');

    this.element.addEventListener('mouseover', () => mini());
    this.element.addEventListener('mouseout', () => mini());
    inputBurger.element.addEventListener('mouseover', () => this.inputMouselog());
    inputBurger.element.addEventListener('mouseout', () => this.inputMouselog());
  }

  private inputMouselog = (): void => {
    const mouse: Element | null = document.querySelector('.mouse');
    if (mouse) mouse.classList.toggle('menu');
  };
}

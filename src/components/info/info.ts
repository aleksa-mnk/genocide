import { Component } from '../../utils/component';
import { mini } from '../../utils/mini-cursor';

export class Info extends Component {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', ['info', 'main__info']);
    parentNode.setAttribute('id', 'about');

    const bg = new Component(this.element, 'div', ['info__bg']);
    new Component(bg.element, 'div', ['info__genocide'], 'Геноцид – действия, совершаемые с намерением уничтожить, полностью или частично, какую-либо национальную, этническую, расовую или религиозную группу как таковую путем: ');
    const ul = new Component(bg.element, 'ul', ['info__list']);
    new Component(ul.element, 'li', ['info__item'], '• убийства членов этой группы;');
    new Component(ul.element, 'li', ['info__item'], '• причинения серьезных телесных повреждений или умственного расстройства членам такой группы;');
    new Component(ul.element, 'li', ['info__item'], '• мер, рассчитанных на предотвращение деторождения в такой группе;');
    new Component(ul.element, 'li', ['info__item'], '• насильственной передачи детей из одной человеческой группы в другую;');
    new Component(ul.element, 'li', ['info__item'], '• предумышленного создания жизненных условий, рассчитанных на полное или частичное физическое уничтожение этой группы.');

    bg.element.addEventListener('mouseover', () => mini(), false);
    bg.element.addEventListener('mouseout', () => mini(), false);
  }
}

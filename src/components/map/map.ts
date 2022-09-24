import { Component } from '../../utils/component';
import { mini } from '../../utils/mini-cursor';
import { citiesInfo } from '../../utils/info';

export class Map extends Component {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', ['map', 'main__map']);
    parentNode.setAttribute('id', 'about');

    const bgImage = new Component(this.element, 'img', ['map__bg']);
    bgImage.element.setAttribute('src', '../../assets/img/map.png')
    const cities = ['borisov', 'slutsk', 'molodechno', 'nesvizh', 'iluyansk', 'radosh', 'ivenets'];

    cities.forEach(city => {
      let spanCity = new Component(this.element, 'span', [`map__${city}`, 'city']);
      spanCity.element.addEventListener('mouseover', () => this.onCity(city), false);
      spanCity.element.addEventListener('mouseout', () => this.onCity(), false);
    });

    const btn = new Component(this.element, 'button', ['map__visible'], 'Сделать метки видимыми');
    btn.element.addEventListener('click', () => this.visible(), false)

    const info = new Component(this.element, 'div', ['map__about']);
    new Component(info.element, 'div', ['map__text'], `Полному физическому уничтожению подлежало еврейское население оккупированной Беларуси согласно «Окончательному решению» – плану, принятому нацистским руководством в январе 1942 г. В большинстве районных центров Минской области выделялись специальные кварталы для проживания и уничтожения еврейского населения – гетто.\n`);
    new Component(info.element, 'div', ['map__hand'], 'Можете найти курсором некоторые из городов, в которых размещались гетто и ознакомиться подробнее.')
    const closeContainer = new Component(info.element, 'div', ['map__cont']);
    const close = new Component(closeContainer.element, 'button', ['map__close'], 'Закрыть');

    close.element.addEventListener('click', () => this.close(), false);
    btn.element.addEventListener('mouseover', () => mini());
    btn.element.addEventListener('mouseout', () => mini());
    info.element.addEventListener('mouseover', () => mini());
    info.element.addEventListener('mouseout', () => mini());
    bgImage.element.addEventListener('mouseover', () => mini(), false);
    bgImage.element.addEventListener('mouseout', () => mini(), false);
  }

  private onCity = (city='') => {
    const mouse: HTMLElement | null = document.querySelector('.mouse');
    const info: HTMLElement | null = document.querySelector('.city-info');
    type City = 'borisov' | 'slutsk' | 'molodechno' | 'nesvizh' | 'iluyansk' | 'radosh' | 'ivenets';
    if(info) info.textContent = (city) ? citiesInfo[city as City] : '';
    if(mouse)
    mouse.classList.toggle("city");
  };


  private close = () => {
    const map: HTMLElement | null = document.querySelector('.map__about');
    if(map) {
      map.classList.toggle('hidden');
    }
  }

  private visible = () => {
    [...document.getElementsByClassName('city')].forEach(element => {
        element.classList.toggle('visible');   
    });
  };
}

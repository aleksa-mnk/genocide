import { Component } from './utils/component';
import { Header } from './components/header/header';
import { Cursor } from './components/cursor/cursor';
import { Home } from './components/home/home';
import { Map } from './components/map/map';
import { Info } from './components/info/info';

export class App {
  private main: Component;

  constructor(private rootElement: HTMLElement) {
    new Header(this.rootElement);
    this.main = new Component(this.rootElement, 'main', ['main']);
    new Home(this.main.element);
    new Info(this.main.element);
    new Map(this.main.element);
    new Cursor(this.rootElement);
  }

  init(): void {
    this.main = new Component(this.rootElement, 'main', ['main']);
  }
}

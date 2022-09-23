import { Component } from './utils/component';
import { Header } from './components/header/header';
import { Cursor } from './components/cursor/cursor';
import { Home } from './components/home/home';

export class App {
  private main: Component;

  private header: Header;

  private cursor: Cursor;

  private home: Home;

  constructor(private rootElement: HTMLElement) {
    this.header = new Header(this.rootElement);
    this.main = new Component(this.rootElement, 'main', ['main']);
    this.home = new Home(this.main.element);
    this.cursor = new Cursor(this.rootElement);
  }

  init(): void {
    this.main = new Component(this.rootElement, 'main', ['main']);
  }
}

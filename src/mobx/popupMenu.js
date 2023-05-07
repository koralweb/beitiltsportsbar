import {makeObservable, action, observable} from 'mobx';

class Menu {
  show = false;

  change() {
    this.show = !this.show;
  }

  constructor(products) {
    makeObservable(this, {
      show: observable,
      change: action,
    });
  }
}

const popupMenu = new Menu();

export default popupMenu;

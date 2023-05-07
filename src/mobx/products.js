import {makeObservable, action, observable} from 'mobx';
import products from '../data/products';

const newList = products.map(product => {
  return {
    ...product,
    id: Math.random(),
    count: 1,
    added: false,
  };
});

class Products {
  list = newList;

  addProduct(id, cnt) {
    this.list.find(el => el.id === id).count = cnt;
    this.list.find(el => el.id === id).added = true;
  }

  removeProduct(id) {
    this.list.find(el => el.id === id).added = false;
  }

  constructor() {
    makeObservable(this, {
      list: observable,
      addProduct: action,
      removeProduct: action,
    });
  }
}

const prod = new Products();

export default prod;

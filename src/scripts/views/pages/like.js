import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="loading">
      <h3>Loading</h3>
      <div class="circle"></div>
    </div>
    <div class="title-like">
    <h1 tabindex="0">Your Favorite Restaurant<h1>
    <h3 class="message" id="message" tabindex="0">Favorite Restaurat is Empty</h3>
    </div>
    <div class="content" id="mainContent" tabindex="0">
    <div id="restaurant" class="restaurant">
    </div>
    </div>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('.hero');
    const emptyMessage = document.querySelector('.message');
    hero.style.display = 'none';
    const item = document.querySelector('.content');
    const message = document.querySelector('.title-like');
    item.style.display = 'none';
    message.style.display = 'none';
    const circle = document.querySelector('.loading');
    $(document).ready(() => {
      $(circle).fadeOut(1000);
      $(message).fadeIn(1000);
      $(item).fadeIn(1000);
    });

    try {
      const restaurant = await FavoriteRestoIdb.getAllResto();
      const restoContainer = document.querySelector('#restaurant');
      restaurant.forEach((resto) => {
        emptyMessage.style.display = 'none';
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      });
    } catch (error) {
      item.innerHTML = `
        <div class="message-error">
        <h4 tabindex="0">request failed : ${error.message}<h4>
        <div class="clear-box"></div>
        </div>
        `;
    }
  },
};

export default Like;

import RestaurantSource from '../../data/resto-source.js';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="loading">
      <h3>Loading</h3>
        <div class="circle">
      </div>
      </div>
    <div class="content">
        <h1 tabindex="0" >Explore Restaurant</h1>
        <div id="restaurant" class="restaurant">
        </div>
    </div>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'flex';
    const item = document.querySelector('.content');
    item.style.display = 'none';
    const circle = document.querySelector('.loading');
    $(document).ready(() => {
      $(circle).fadeOut(1000);
      $(item).fadeIn(1000);
    });
    try {
      const restaurants = await RestaurantSource.getRestaurant();
      const restoContainer = document.querySelector('#restaurant');
      restaurants.forEach((restaurant) => {
        restoContainer.innerHTML += createRestoItemTemplate(restaurant);
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

export default Home;

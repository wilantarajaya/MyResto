import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resto-source.js';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="loading">
      <h3>Loading</h3>
      <div class="circle"></div>
    </div>

    <div id="resto-detail" class="resto-detail" id="mainContent" tabindex="0">
    </div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const item = document.querySelector('.resto-detail');
    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
    item.style.display = 'none';
    const circle = document.querySelector('.loading');
    const restoContainer = document.querySelector('#resto-detail');

    $(document).ready(() => {
      $(circle).fadeOut(1000);
      $(item).fadeIn(1000);
    });

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      restoContainer.innerHTML = createRestoDetailTemplate(restaurant);

      const submit = document.querySelector('#submitPost');
      submit.addEventListener('click', () => {
        const review = {
          id: url.id,
          name: document.getElementById('name').value,
          review: document.getElementById('subject').value,
        };
        RestaurantSource.postRestaurantReview(review);
      });

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
      });
    } catch (error) {
      restoContainer.innerHTML = `
      <div class="message-error">
      <h4 tabindex="0">request failed : ${error.message}<h4>
      <div class="clear-box"></div>
      </div>
      `;
    }
  },
};

export default Detail;

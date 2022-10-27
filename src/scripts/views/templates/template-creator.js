import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
<div class="detail-item-resto">
<h1 class="name-resto" tabindex="0">${restaurant.name}</h1>
<div class="detail">
    <div class="image-resto">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="image-${restaurant.name}" tabindex="0">
    </div>
    <div class="detail-resto">
        <h2 tabindex="0">Information</h2>
        <div class="about-resto">
        <h3 tabindex="0"><i class="fas fa-city"></i>${restaurant.city}</h3>
        <h3 tabindex="0"><i class="fas fa-map-pin"></i>${restaurant.address}</h3>
        <h3 tabindex="0"><i class="fas fa-star"></i>${restaurant.rating}</h3>
        </div>
        <div class="list-item-resto">
            <div class="food">
                <h3 tabindex="0">Food</h3>
                <p>
                ${restaurant.menus.foods.map((food) => `
                <li tabindex="0">${food.name}</li>`).join('')}
                </p>
            </div>
            <div class="drink">
                <h3 tabindex="0">Drink</h3>
                <p>
                ${restaurant.menus.drinks.map((drink) => `
                <li tabindex="0">${drink.name}</li>`).join('')}
                </p>
            </div>
        </div>
    </div>
    <div class="desc">
        <h3 tabindex="0">Description</h3>
        <p tabindex="0">${restaurant.description}</p>
       
    </div>
    <div class="title-review">
        <h3 tabindex="0">Review Customer</h3>
    </div>
    <div class="review">
    ${restaurant.customerReviews.map((review) => `
    <div class="review-from-cs">
            <h4 tabindex="0"><i class="fas fa-user-alt"></i>${review.name}</h4>
            <p tabindex="0"><i class="fas fa-comment-alt"></i>${review.review}</p>
            <h4 tabindex="0"><i class="fas fa-calendar-day"></i>${review.date}</h4>
        </div>`).join('')}
    </div>
    <div class="title-review">
        <h3 tabindex="0">Post Review</h3>
        <div class="container">
        <form action="">
          <div class="row">
            <div class="name-field">
              <label for="name">Your Name</label>
            </div>
            <div class="input-name">
              <input type="text" id="name" name="name" placeholder="Your name..">
            </div>
          </div>
          <div class="row">
            <div class="subject-field">
              <label for="subject">Review</label>
            </div>
            <div class="input-subject">
              <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
            </div>
          </div>
          <div class="row">
            <button type="submit" id="submitPost" value="Submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    

</div>
</div>
`;

const createRestoItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="image-${restaurant.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" tabindex="0">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score" tabindex="0">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3 tabindex="0">${restaurant.name}</h3>
        <p tabindex="0">${restaurant.description}</p>
    </div>
    <div class="link-detail">
    <h4><a href="${`/#/detail/${restaurant.id}`}">Detail Restaurant<i class="fas fa-arrow-right"></i></a></h4>   
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate, createRestoDetailTemplate,
  createLikeButtonTemplate, createLikedButtonTemplate,
};

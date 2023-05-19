const submit = document.getElementById("submit");
const restaurant = document.getElementById("restaurants");

$(".menu-item").click(function (event) {
  restaurant.innerHTML = "";
  getLocation(function (lat_lng) {
    const lat = lat_lng.lat;
    const lon = lat_lng.lng;
    const item = $(event.target).text();
    const items = item.replace(/ /g, "%20");
    var url = `https://cors-frontend.onrender.com/https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&term=${items}`;
    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer " +
          "5VIQsxmIHW5OiTntMOguATgmQrrCtZmy8ro_Ee8VXK_qNNsTdodI43XzVJyL2i2Ciyr8Ts99VT2hA7ysknWzjc2wT2tDP8AGT8MqlPHrJq6L9jvKUE6OXqgSvIhOY3Yx",
        "Access-Control-Allow-Origin": "*",
      },
    }).then(function (response) {
      if (response.ok) {
        response.json().then((data) => {
          for (let i = 0; i < 6; i++) {
            const name = data.businesses[i].name;
            const phone = data.businesses[i].phone;
            const address =
              data.businesses[i].location.display_address[0] + " ";
            data.businesses[i].location.display_address[1];
            const categories = data.businesses[i].categories[0].title;
            const rating = data.businesses[i].rating;
            const review = data.businesses[i].review_count;
            const image = data.businesses[i].image_url;
            restaurants(
              name,
              phone,
              address,
              rating,
              review,
              image,
              categories
            );
          }
        });
      } else {
        alert("Error: " + response.statusText);
      }
    });
  });
});

document.getElementById("input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getFood();
  }
});

const getFood = () => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "I1v5mLVa9E2WwsnrKGzY0mVoEpGHTE62");
  const query = document.getElementById("input").value;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    `https://api.apilayer.com/spoonacular/recipes/complexSearch?query=${query}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 6; i++) {
        const recipe = data.results[i].title;
        const image = data.results[i].image;
        const recipes = $(".menu-item");
        const images = $(".menu-img");
        const info = $(".info");
        recipes[i].innerHTML = recipe;
        images[i].src = image;
        info[i].style.display = "inline-block";
      }
    });
};

function restaurants(name, phone, address, rating, review, image, categories) {
  restaurant.innerHTML += `
<div class="card d-inline-flex mx-6" style="width: 300px; border-radius: 20px;background-color:white;">
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src="${image}" style ="height:250px; width: 300px" class="img-fluid" />
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title font-weight-bold"><a>${name}</a></h5>
        <ul class="list-unstyled list-inline mb-0">
          <li class="list-inline-item">
         <p class="text-muted"> ${address}</p>
          </li>
          <li class="list-inline-item">
            <p class="text-muted">${rating} (${review})</p>
          </li>
        </ul>
        <p class="mb-2">$ • ${categories}</p>
        <p class="card-text">${phone}</p>
        <hr class="my-4" />
      </div>
    </div>
`;
}

submit.addEventListener("click", getFood);

function getLocation(callback) {
  if (navigator.geolocation) {
    const lat_lng = navigator.geolocation.getCurrentPosition(function (
      position
    ) {
      var user_position = {};
      user_position.lat = position.coords.latitude;
      user_position.lng = position.coords.longitude;
      callback(user_position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

const home = document.querySelector(".logo");
const about = document.querySelector(".nav-link");
const landingPage = document.querySelector(".landing");
const aboutPage = document.querySelector(".about");

const changePage = () => {
  aboutPage.style.display = "flex";
  landingPage.style.display = "none";
};

const homePage = () => {
  aboutPage.style.display = "none";
  landingPage.style.display = "block";
};

about.addEventListener("click", changePage);
home.addEventListener("click", homePage);

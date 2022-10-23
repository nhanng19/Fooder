const submit = document.getElementById('submit');
const restaurant = document.getElementById('restaurants');


$('.menu-item').click(function (event) {
  restaurant.innerHTML = "";
  const item = $(event.target).text();
  const items = item.replace(/ /g, "%20");
  console.log(item)
  var url = `https://nameless-scrubland-76048.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=NYC&term=${items}`;
  console.log(url)
  fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " +
        "5VIQsxmIHW5OiTntMOguATgmQrrCtZmy8ro_Ee8VXK_qNNsTdodI43XzVJyL2i2Ciyr8Ts99VT2hA7ysknWzjc2wT2tDP8AGT8MqlPHrJq6L9jvKUE6OXqgSvIhOY3Yx",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(function (response) {
      if (response.ok) {
        response.json().
          then((data) => {
          for (let i = 0; i < 10; i++) {
            const name = data.businesses[i].name;
            const phone = data.businesses[i].phone;
            const address =
              data.businesses[i].location.display_address[0] +
              data.businesses[i].location.display_address[1];
            const rating = data.businesses[i].rating;
            const review = data.businesses[i].review_count;
            const image = data.businesses[i].image_url;
            restaurants(name, phone, address, rating, review, image);
          }
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (e) {
      console.log(e);
    });

})

submit.onclick = getFood = () => {
var myHeaders = new Headers();
myHeaders.append("apikey", "I1v5mLVa9E2WwsnrKGzY0mVoEpGHTE62");
const query = document.getElementById('input').value
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/spoonacular/recipes/complexSearch?query=${query}`, requestOptions)
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < 6; i++){
    const recipe = data.results[i].title;
    const recipes = $('.menu-item');
    recipes[i].innerHTML = recipe;
    recipes[i].style.display = "block";
    }
})
}

function restaurants (name, phone, address, rating, review, image){
    
    restaurant.innerHTML += `<div class="card d-inline-flex mx-3" style="width: 30%;border-radius: 20px;background-color:white;">
    <div class="card-body text-center">
    <h6 class="card-subtitle mb-2 text-muted" id ='cardInfo'>Name: ${name}</h6>
    <h6 class="card-subtitle mb-2 text-muted" id ='cardInfo'>Address: ${address}</h6>
    <h6 class="card-subtitle mb-2 text-muted" id ='cardinfo'>Phone: ${phone}</h6>
    <h6 class="card-subtitle mb-2 text-muted" id ='cardinfo'>Rating: ${rating}</h6>
    <h6 class="card-subtitle mb-2 text-muted" id ='cardinfo'>Reviews: ${review} AM</h6>
    <img style = "width: 250px; height: 300px" src = "${image}" />
    </div>
    </div>`;
};


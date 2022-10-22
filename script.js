const submit = document.getElementById('submit')
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
    for (let i = 0; i < 4; i++){
    const recipe = data.results[i].title;
    const recipes = $('.recipe');
    recipes[i].innerHTML = recipe;
    recipes[i].style.display = "block";
    }
})
}

// submit.onclick = getRestaurant = () => {
//   var outdoorSearchUrl = `https://nameless-scrubland-76048.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${item}`;
//   fetch(outdoorSearchUrl, {
//     method: "GET",
//     headers: {
//       Authorization:
//         "Bearer " +
//         "5VIQsxmIHW5OiTntMOguATgmQrrCtZmy8ro_Ee8VXK_qNNsTdodI43XzVJyL2i2Ciyr8Ts99VT2hA7ysknWzjc2wT2tDP8AGT8MqlPHrJq6L9jvKUE6OXqgSvIhOY3Yx",
//       "Access-Control-Allow-Origin": "*",
//     },
//   })
//     .then(function (response) {
//       if (response.ok) {
//         response.json().then(function (outdoorResult) {
//           console.log(outdoorResult);
//           renderOutdoor(outdoorResult);
//         });
//       } else {
//         alert("Error: " + response.statusText);
//       }
//     })
//     .catch(function (e) {
//       console.log(e);
//     });

// }

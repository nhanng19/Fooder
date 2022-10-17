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

fetch(`https://api.apilayer.com/spoonacular/food/ingredients/search?sortDirection=asc&sort=calories&query=${query}&offset=0&number=5&intolerances=peanut`, requestOptions)
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < 4; i++){
    const recipe = data.results[i].name;
    const recipes = $('.recipe');
    recipes[i].innerHTML = recipe;
    recipes[i].style.display = "block";
    }
})
}



const getFood = () => {
var myHeaders = new Headers();
myHeaders.append("apikey", "I1v5mLVa9E2WwsnrKGzY0mVoEpGHTE62");
const query = document.getElementById('input').value
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/spoonacular/food/ingredients/search?sortDirection=asc&sort=calories&query=${query}&offset=0&number=5&intolerances=peanut`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}





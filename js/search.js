
/// <reference types="../@types/jquery" />

let searchName=document.querySelector('#searchName');
let searchLetter=document.querySelector('#searchLetter');


function searchMeals() {
    
    async function getSearchData(){
        let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName.value}`);
        let data =await response.json();
        let meals=data.meals;
        console.log(meals);
        showSearchData(meals);

    }

        getSearchData();

  }

function searchMealsLetter() {
    
    async function getSearchLetterData(){
        let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter.value}`);
        let data =await response.json();
        let meals=data.meals;
        console.log(meals);
        showSearchData(meals);

    }

        getSearchLetterData();

  }
  
  function showSearchData(list) {
    let container = ``;
    for (let i = 0; i < list.length; i++) {
        container += `<div class="col-md-3">
                 <div class="item position-relative">
                    <img src="${list[i].strMealThumb}" class="w-100 rounded-4" alt="">
                   <div class="layer position-absolute rounded-4 bg-white opacity-75 d-flex align-items-center text-black">
                    <h2 class="ps-2">${list[i].strMeal}</h2>
                   </div>
                 </div>
                </div>`
    }
    document.getElementById('searchData').innerHTML = container;
}


/// <reference types="../@types/jquery" />


$(function(){
    
async function getCategoryData(){
    let response=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let data =await response.json();
    let categories=data.categories;
    showCategoryData(categories);
          
   }

   getCategoryData();


function showCategoryData(list) {
    let container = ``;
    for (let i = 0; i < list.length; i++) {
        container+=`<div class="col-md-3">
                    <div id="${list[i].strCategory}" class="item position-relative">
                    <img src="${list[i].strCategoryThumb}" class="w-100 rounded-4" alt="">
                    <div class="layer position-absolute rounded-2 bg-white opacity-75 text-center text-black overflow-hidden">
                        <h2>${list[i].strCategory}</h2>
                        <p class="fs-5">${list[i].strCategoryDescription}</p>
                    </div>
                   </div>
                </div>`
    }
    document.getElementById('CategoriesData').innerHTML = container;
    $('.item').on('click',function(){
        console.log(this.id);
        categoryFood(this.id);
    })


}
async function categoryFood(name){
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
    let data =await response.json();
    let meals=data.meals;
    console.log(meals.slice(0,20));
    showCategoryFoodData(meals.slice(0,20));
    
   
   }
})

function showCategoryFoodData(list) {
    let container = ``;
    for (let i = 0; i < list.length; i++) {
        container+=`<div class="col-md-3">
                     <div class="item position-relative">
                        <img src="${list[i].strMealThumb}" class="w-100 rounded-4" alt="">
                       <div class="layer position-absolute rounded-4 bg-white opacity-75 d-flex align-items-center text-black">
                        <h2 class="ps-2">${list[i].strMeal}</h2>
                       </div>
                     </div>
                    </div>`
    }
    document.getElementById('CategoriesData').innerHTML = container;
}






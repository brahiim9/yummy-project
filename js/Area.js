
/// <reference types="../@types/jquery" />

$(function(){
    
    async function getAreaData(){
        let response=await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        let data =await response.json();
        let meals=data.meals;
        showAreaData(meals);
       }
    
       getAreaData();
    
    function showAreaData(list) {
        let container = ``;
        for (let i = 0; i < list.length; i++) {
            container+=`<div id="${list[i].strArea}" class="item col-md-3 text-white text-center">
                         <i class="fa-solid fa-house-laptop fa-xl pt-5"></i>
                         <h2>${list[i].strArea}</h2>
                       </div>`
        }
        document.getElementById('areaData').innerHTML = container;

        $('.item').on('click',function(){
            areaFood(this.id);
        })
    }

    
    async function areaFood(name){
        let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
        let data =await response.json();
        let meals=data.meals;
        console.log(meals.slice(0,20));
        showAreaFoodData(meals.slice(0,20));
        
       
       }
    })

        
    function showAreaFoodData(list) {
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
        document.getElementById('areaData').innerHTML = container;
    
}
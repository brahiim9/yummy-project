
/// <reference types="../@types/jquery" />

$(function(){
    
    async function getIngredientData(){
        let response=await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        let data =await response.json();
        let meals=data.meals;
        showIngredientData(meals);
              
       }
    
       getIngredientData();
    
    function showIngredientData(list) {
        let container = ``;
        console.log();
        for (let i = 0; i < 20; i++) {
            container+=` <div id="${list.slice(0,20)[i].strIngredient}" class="item Ingredients col-md-3 text-center text-white">
                <i class="fa-solid fa-drumstick-bite fa-2xl pt-5"></i>
                <h2>${list[i].strIngredient}</h2>
                <p>${list[i].strDescription.split('').slice(0,109).join('')}</p>
            </div>`
        }
        document.getElementById('IngredientData').innerHTML = container;

        $('.item').on('click',function(){
            console.log(this.id);
            IngredientsFood(this.id)
            
        })
    }

    
    async function IngredientsFood(name){
        let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);
        let data =await response.json();
        let meals=data.meals;
        showIngredientsFoodData(meals.slice(0,20));
        
       
       }
    })
    
    function showIngredientsFoodData(list) {
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
        document.getElementById('IngredientData').innerHTML = container;
    }
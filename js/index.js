

/// <reference types="../@types/jquery" />


$(function () {

    $('.loadingScreen').fadeOut(1000)

    let navSideInnerWidth = $('.navInner').outerWidth();
    $('.navInner').animate({ marginLeft: `-${navSideInnerWidth}px` }, 500);
    $('#closeIcon').removeClass('fa-close');
    $('#closeIcon').addClass('fa-bars');

    $('#closeIcon').on('click', function () {
        let left = $('.navInner').css('marginLeft');
        if (left === '0px') {
            $('.navInner').animate({ marginLeft: `-${navSideInnerWidth}px` }, 500);
            $('#closeIcon').removeClass('fa-close');
            $('#closeIcon').addClass('fa-bars');
            $('.navInner a').animate({ paddingTop: ' 20px ' }, 1000);
        }
        else {
            $('.navInner').animate({ marginLeft: `0px` }, 500, function () {
                $('.links').slideDown(1000);
            });
            $('#closeIcon').removeClass('fa-bars');
            $('#closeIcon').addClass('fa-close');


        }

    })

})


async function getHomeData() {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
    let data = await response.json();
    let meals = data.meals;
    showHomeData(meals);
}

getHomeData();

function showHomeData(list) {
    let container = ``;

    for (let i = 0; i < list.length; i++) {
        container += `<div class="col-md-3">
                     <div id="${list[i].idMeal}" class="item position-relative">
                        <img src="${list[i].strMealThumb}" class="w-100 rounded-4" alt="">
                       <div class="layer position-absolute rounded-4 bg-white opacity-75 d-flex align-items-center text-black">
                        <h2 class="ps-2">${list[i].strMeal}</h2>
                       </div>
                     </div>
                    </div>`
    }
    document.getElementById('homeData').innerHTML = container;

    $('.item').on('click', function () {
        console.log(this.img);
        showDetailsFood(this.id);
    })

}

function showDetailsFood() {
    let container = ``;
    console.log();
    for (let i = 0; i < 1; i++) {
        container += `<div class="col-md-4">
    <img src="imges/logo.png" class="w-50 rounded rounded-3" alt="logo">
    <h2>name</h2>
</div>
<div class="col-md-8">
    <h2>Instructions</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ea provident vero dolores, iure corrupti. Praesentium modi tenetur repellendus id ea quasi officia fugit aliquam accusantium! Magni dolorum quasi temporibus?</p>
    <p><span>Area :</span> area name</p>
    <p><span>Category :</span> area name</p>
    <p>Recipes :
        <span>name</span>
        <span>name</span>
        <span>name</span>
        <span>name</span>
        <span>name</span>
        <span>name</span>
        <span>name</span>
    </p>
    <p><span class="mb-4">Tags :</span> <br></p>
    <span class="bg-warning-subtle text-danger p-2 rounded-3">soup</span><br>
        
    <div class="btn mt-3">
        <button class="btn btn-success">Source</button>
        <button class="btn btn-danger">Youtube</button>
    </div>
</div>`
    }
    document.getElementById('homeData').innerHTML = container;
}


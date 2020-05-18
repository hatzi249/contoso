/*HamburgerNav*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*  btnScrollToTop*/

const btnScrollToTop = document.querySelector(".btnScrollToTop");
btnScrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/*Maps*/
function initMap() {
  var uluru = { lat: 59.31135, lng: 18.07483 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
  });
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

/*Categories*/
/*

const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
async function getCategory() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const { categories } = data;

  categories.forEach((category) => {
    const cardHolder = document.getElementById("cardHolder");
    cardHolder.innerHTML += `<div class="card">
                <div class="image-holder">
                    <img src="${category.strCategoryThumb}" alt="">
                </div>
                <div class="overlay">
                    <div class="card-text">
                        <p class="card-paragraph"> ${category.strCategoryDescription} </p>
                    </div>
                </div>
                <div class="card-title">
                    <h3 class="card-titleHead"> ${category.strCategory} </h3>
                </div>
            </div>`;
  });
}
getCategory();

const div = document.getElementById("beef");

getMenu = async () => {
  try {
    const result = axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const { data: categories } = await result;
    div.innerHTML = "";
    categories.categories.forEach((category) => {
      div.innerHTML += `
            
              <div class="card-categories">
                <img
                class="image-categories"
                src="${category.strCategoryThumb}"
              style="width: 100%;"
              />
          <div class="card-text-container">
            <h3>${category.strCategory}</h3>
            <p>${category.strCategoryDescription}</p>
          </div>
          
       `;
    });
  } catch (err) {
    div.innerHTML = `Food on the way.....`;
    console.log("getCustomers: ERROR", err);
  }
};
getMenu(); */

async function getFood(url) {
    const res = await fetch(url);

    return res.json()
}

function renderFood(categories) {
    return `
    <div class="meal-card">
        <div class="meal-card-inner">
            <div class="meal-card-front">
                <img src="${categories.strCategoryThumb}">
            </div>
            <div class="meal-card-back">
                <h2 class="meal-category"> ${categories.strCategory} </h2>
                <h3 class="meal-desc"> ${categories.strCategoryDescription} </h3>
            </div>
        </div>
    </div>
    `
}

async function bigFunction() {

    const data = await getFood(`https://www.themealdb.com/api/json/v1/1/categories.php`);

    for (let i = 0; i < data.categories.length; i++) {
        slide-container.innerHTML += renderFood(data.categories[i])
    }
      console.log(data.categories[0])

}

bigFunction();

/*Search*/

let dish = document.getElementById("dishName");
let get = document.getElementById("myButton");

get.onclick = async () => {
  try {
    let input = document.getElementById("myInput").value;
    const result = axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`
    );
    const { data: meals } = await result;
    dish.innerHTML = "";
    meals.meals.forEach((meal) => {
      console.log(meal);
      dish.innerHTML += `
          <div class="card-categories">
          <div class="tooltip">
          <img
          class="image-categories"
          src="${meal.strMealThumb}"
          style="width: 100%;"
        />
          <span class="tooltiptext">
          Ingredients:<br>
          "${meal.strIngredient1}"
          "${meal.strIngredient2}"
          "${meal.strIngredient3}"
          "${meal.strIngredient4}"
          "${meal.strIngredient5}"
          "${meal.strIngredient6}"
          "${meal.strIngredient7}"
          "${meal.strIngredient8}"
          "${meal.strIngredient9}"
       </span>
        </div>
        <div class="card-text-container">
        <h3>${meal.strMeal}</h3>
       
        <a href="${meal.strYoutube}" target="_blank"><button type="button" id="myButton-youtube" ><i class="fab fa-youtube fa-2x"></i></button></a>
        
      
    </div>
        </div> `;
    });
  } catch (err) {
    dish.innerHTML = `Menu on the way.....!!!!!!`;
    console.log("getCustomers: ERROR", err);
  }
};
{/* <p>${meal.strTags}</p> */}

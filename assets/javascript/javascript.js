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
    behavior: "smooth"
  });
});


  /*Maps*/
  function initMap() {
    var uluru = { lat: 59.31135, lng: 18.07483 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: uluru
    });
    var marker = new google.maps.Marker({ position: uluru, map: map });
  }



/*Categories*/

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
async function getCategory() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const { categories } = data; 

    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const cardHolder = document.getElementById("cardHolder")
        cardHolder.innerHTML += 
            `<div class="card">
                <div class="image-holder">
                    <img src="${categories[i].strCategoryThumb}" alt="">
                </div>
                <div class="overlay">
                    <div class="card-text">
                        <p class="card-paragraph"> ${categories[i].strCategoryDescription} </p>
                    </div>
                </div>
                <div class="card-title">
                    <h3 class="card-titleHead"> ${categories[i].strCategory} </h3>
                </div>
            </div>`
        ;
    }
}
getCategory();




const div = document.getElementById("beef");

 getMenu = async () => {
  try {
      const result = axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      const { data: categories } = await result;
      div.innerHTML="";
      categories.categories.forEach(category => {
          div.innerHTML +=
          `
            
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
  }
  catch (err) {
      div.innerHTML = `Food on the way.....`
      console.log("getCustomers: ERROR", err);
  }
}
getMenu ();

/*Search*/

let dish = document.getElementById("dishName");
let get = document.getElementById("myButton");
 

get.onclick = async () => {
  try {

    let input = document.getElementById('myInput').value;
    const result = axios.get (`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`);
      const { data: meals } = await result;
      dish.innerHTML ="";
      meals.meals.forEach(meal => {
        dish.innerHTML +=
        `
          <div class="card-categories">
          <img
            class="image-categories"
            src="${meal.strMealThumb}"
            style="width: 100%;"
          />
          <div class="card-text-container">
              <h3>${meal.strMeal}</h3>
              <p>${meal.strInstructions}</p>
          </div>
        `;
          
      }); 
  }
  catch (err) {
      dish.innerHTML = `Menu on the way.....!!!!!!`
      console.log("getCustomers: ERROR", err);
  }
}

let items = [];
let itemssecarray=[];
let itemsthirdarray =[];
let days = [];
let z = [];
let x = [];


async function serach(c) {
    console.log(c);
    let myResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0a8cdb12dac44f53baf170936232002&q=${c}&days=3`)
    let final =  await myResponse.json()
     
      items = final.location
      itemssecarray=final.current
      itemsthirdarray = final.current.condition
      days =final.forecast.forecastday
      //let y =days.slice(0,1)
 
       x =days.slice(1,2)
       z = days.slice(2,3)

    displayweather()
    day2weathr()
    day3weathr()
   
}
  
document.getElementById("find").addEventListener("keyup", function(c){
    serach(c.target.value)
});
serach("egypt");


function displayweather() {
    let box = ``;

    box = ` <div class="text-light " >   
        <p class="city">${items.name}</p>

        <div class="d-flex ">
        <p class="temper">${itemssecarray.temp_c}°C  </p> 
        <img src=" ${itemsthirdarray.icon}" alt="" class="icon-first-row ms-2">
        </div>

        <p  class="wethar mt-1">${itemsthirdarray.text}</p>

     </div>

     <div class=" pb-2 pt-3  gray-wthr d-flex justify-content-between w-icon mb-2 ">
     <span class="fs"> <i class="fa-solid fa-umbrella"> </i> ${itemssecarray.humidity}%</span>
     <span class="fs"> <i class="fa-solid fa-wind"></i> ${itemssecarray.wind_kph}km/h</span>
     <span class="fs"><i class="fa-regular fa-compass"></i> ${itemssecarray.wind_dir}</span>
     </div>`

    document.getElementById('firstRow').innerHTML = box
}



 function day2weathr(){
    let box =``;
    for (let i = 0; i < x.length; i++) {
    
        box += `
        <div class="text-center text-light pt-3">
        <img src=" ${x[i].day.condition.icon}" alt="" class="icondisplay mt-3 mb-1">
            <h3 class="pt-4 tmp-wthr font-tmp">${x[i].day.maxtemp_c}°C</h3>
            <p class="pt-2 gray-wthr">${x[i].day.mintemp_c}°</p>
            <p class="blue-wthr">${x[i].day.condition.text}</p>
         
        </div>
    
        `  
    }

    document.getElementById('secondRow').innerHTML = box
    
 }



 function day3weathr(){
    let box =``;
    for (let i = 0; i < z.length; i++) {
        
        box += `
        <div class="text-center text-light pt-3">
        <img src=" ${z[i].day.condition.icon}" alt="" class="icondisplay mt-3 mb-1">
            <h3 class="pt-4 tmp-wthr  font-tmp ">${z[i].day.maxtemp_c}°C</h3>
            <p class="pb-2 gray-wthr">${z[i].day.mintemp_c}°</p>
            <p class="blue-wthr">${z[i].day.condition.text}</p>
         
        </div>
    
        `  
    }

    document.getElementById('thirdRow').innerHTML = box  
 }

 function calculateDay( ) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
      let today = new Date();
      let currentDay = today.getDay();
      
      let tomorrow = currentDay + 1; 
      if (tomorrow > 6) { 
        tomorrow = 0;
      }
    
      let dayAfter = tomorrow + 1;
      if (dayAfter > 6) {
        dayAfter = 0;
      }
    
      let thirdDay = dayAfter + 1;
      if (thirdDay > 6) {
        thirdDay = 0;
      }
    
    
      document.getElementById('fristcol').innerHTML = days[currentDay] ;
      document.getElementById('secondcol').innerHTML = days[tomorrow] ;
      document.getElementById('thirdcol').innerHTML =  days[dayAfter] ;
    
    
    }   
    calculateDay( )
  


    
let now2 = new Date().toLocaleDateString('en-us', {   day:"numeric" });
document.getElementById("fristcol-middle").innerHTML = now2;

let now = new Date().toLocaleDateString('en-us', { month:"long" });
document.getElementById("fristcol-right").innerHTML = now;





// other solve

/*let find = document.getElementById('find')

async function serach(e) {
    
    let myResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0a8cdb12dac44f53baf170936232002&q=${e}&days=3`)
    let final =  await myResponse.json()
     
      items = final.location
      itemssecarray=final.current
      itemsthirdarray = final.current.condition
      days =final.forecast.forecastday
    
      //let y =days.slice(0,1)
 
       x =days.slice(1,2)

       z = days.slice(2,3)

    displayweather()
    day2weathr()
    day3weathr() 

}
    find.addEventListener("keyup", serach);
    serach("egypt"); */





 

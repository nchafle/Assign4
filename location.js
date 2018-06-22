

var x = document.getElementById("location");

      function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
                } 
          else { 
                x.innerHTML = "Geolocation is not supported by this browser.";
                }
      }
    function showPosition(position) {  
       let lat = position.coords.latitude;
       let lon= position.coords.longitude;
       x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + lon;
      
    
     //function getWeather() { 
          
        
         let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=1b4142652f16b67d9464cb7ee3600b23`; 
       
            fetch(url)
        
           .then(result => { 
                  //  console.log(result);
                    return result.json();
                     })
         .then(data => {
               console.log(data);
                 let nameArea = data.name;
                 let Country = data.sys.country;
                let position = data.coord;
                let groundLevelFromSea = data.main.grnd_level;
                let humidity1 = data.main.humidity;
                let temperature = data.main.temp;
                let temperatureMax = data.main.temp_max;
                let temperatureMin = data.main.temp_min;
                let mainExect = data.weather[0].main;
                let inDetails = data.weather[0].description;
                let symbol = data.weather[0].icon;
                
                
                
                document.getElementById("weather").innerHTML = " lets see the current Weather in detail <br> so start with Current Division : "+ nameArea + " Country code : "+Country +"<br> Ground Level from Sea surface  : "+ groundLevelFromSea +" <br> Humidity is"+humidity1 +"<br> Current Temperature : "+temperature +" In details MIN : "+temperatureMin +  "MAX : "+ temperatureMax +"<br> Weather Type : "+mainExect +" <br>In Detail : " + inDetails + " "+symbol ;
                   
                })
       .catch(error => console.log(error)); 

 
     }
//getWeather();
    
    
        
        
      /*  
          async function getWeather(lot,lon) {
            var res = 
                await axios(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&APPID=1b4142652f16b67d9464cb7ee3600b23`)
              console.log(res);
          }
        getWeather(13.22,73.45);
}
*/
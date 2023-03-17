mapboxgl.accessToken = mapBoxKey;

// Calls on Forecast Function When Page is Opened or Refreshed
geoWeather("San Antonio, TX");

const map = new mapboxgl.Map(
    {
        container: 'map',
        style: `mapbox://styles/mapbox/light-v11`,
        center: [-98.491142,29.424349],
    });

const marker = new mapboxgl.Marker({
    draggable: true
})
marker.setLngLat([-98.491142,29.424349])
marker.addTo(map);

// Draggable Marker Function
marker.on("dragend", function (e){
    let html="";

    let coordinates = e.target._lngLat;


    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${openWeatherKey}&units=imperial`).done(function(data){

        for (var i = 0; i <=39; i +=8) {

            let date = new Date((data.list[i].dt) *1000);
            let forecastCardDate = date.toLocaleDateString("en-US")

            html += `<div class="col-2">`
            html += `<div class="card-body">`
            html += `<h5 class="card-title">Date: ${forecastCardDate}</h5>`
            html += `<h6 class="card-text">Temp: ${data.list[i].main.temp}&deg;F</h6>`
            html += `<h6><img class="icons" src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt=""></h6>`
            html += `<h6 class="card-text">Description: ${data.list[i].weather[0].description}</h6>`
            html += `<h6 class="card-text">Humidity: ${data.list[i].main.humidity}%</h6>`
            html += `<h6 class="card-text">Wind: ${data.list[i].wind.speed} MPH</h6>`
            html += `<h6 class="card-text">Pressure: ${data.list[i].main.pressure}</h6>`
            html += `</div>`
            html += `</div>`
            html += `</div>`

        }
        html += `</div>`

        $("#weatherBody").html(html);

        // Current City
        let city ="";
        city += `<h3>Current Location: ${data.city.name}</h3>`;
        $("#currentCity").html(city)
    })
});

// Searched Forecast Information
$("#myBtn").click(function(e){
    e.preventDefault();
    geoWeather($("#searchInput").val());
})
function geoWeather(searchString) {
    let html = "";
    geocode(searchString, mapBoxKey).then(function (results) {
        let markerFlyTo = {center: results, zoom: 10}
        map.flyTo(markerFlyTo);
        marker.setLngLat(results)

        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${openWeatherKey}&units=imperial`).done(function(data){
            for (var i = 0; i <=39; i +=8) {


                let date = new Date((data.list[i].dt) *1000);
                let forecastCardDate = date.toLocaleDateString("en-US")

                html += `<div class="col-2">`
                html += `<div class="card-body">`
                html += `<h5 class="card-title">Date: ${forecastCardDate}</h5>`
                html += `<h6 class="card-text">Temp: ${data.list[i].main.temp}&deg;F </h6>`
                html += `<h6><img class="icons" src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt=""></h6>`
                html += `<h6 class="card-text">Description: ${data.list[i].weather[0].description}</h6>`
                html += `<h6 class="card-text">Humidity: ${data.list[i].main.humidity}%</h6>`
                html += `<h6 class="card-text">Wind: ${data.list[i].wind.speed} MPH</h6>`
                html += `<h6 class="card-text">Pressure: ${data.list[i].main.pressure}</h6>`
                html += `</div>`
                html += `</div>`
                html += `</div>`

            }
            $("#weatherBody").html(html);

            // Current City
            let city ="";
            city += `<h3>Current Location: ${data.city.name}</h3>`;
            $("#currentCity").html(city)
        })
    })
}
mapboxgl.accessToken = mapBoxKey;

const map = new mapboxgl.Map(
    {
        container: 'map',
        style: `mapbox://styles/mapbox/outdoors-v12`,
        center: [-98.491142,29.424349],
        zoom: 12
    }
);

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.491142,29.424349])
    .addTo(map);

// Marker

marker.on('dragend', function (e){
    let longlat = e.target._lngLat;
    console.log(longlat);

    reverseGeocode({lat: longlat.lat, lng:longlat.lng}, mapBoxKey).then(function (results){
        console.log(results);

        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${openWeatherKey}&units=imperial`).done(function(data){
            for (var i = 0; i <=39; i +=8) {
                html += `<div>`
                html += `<h5>Date: ${data.list[i].dt_txt}</h5> `
                html += `<h6>High / Low: ${data.list[i].main.temp_min}&deg; / ${data.list[i].main.temp_max}&deg;</h6>`
                html += `<h6><img class="icons" src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"</h6>`
                html += `<h6>Description: ${data.list[i].main.humidity}</h6>`
                html += `<h6>Humidity: ${data.list[i].weather[0].description}</h6>`
                html += `<h6>Wind: ${data.list[i].wind.speed}</h6>`
                html += `<h6>Pressure: ${data.list[i].main.pressure}</h6>`
                html += `</div>`
            }
            $("#weatherBody").html(html);
        })
        html = "";
    })

});

function geoWeather(searchString) {
    let html = "";
    geocode(searchString, mapBoxKey).then(function (results) {
        let markerFlyTo = {center: results, zoom: 10}
        map.flyTo(markerFlyTo);
        marker.setLngLat(results)

        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${openWeatherKey}&units=imperial`).done(function(data){
            for (var i = 0; i <=39; i +=8) {
                html += `<div>`
                html += `<h5>Date: ${data.list[i].dt_txt}</h5> `
                html += `<h6>High / Low: ${data.list[i].main.temp_min}&deg; / ${data.list[i].main.temp_max}&deg;</h6>`
                html += `<h6><img class="icons" src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"</h6>`
                html += `<h6>Description: ${data.list[i].main.humidity}</h6>`
                html += `<h6>Humidity: ${data.list[i].weather[0].description}</h6>`
                html += `<h6>Wind: ${data.list[i].wind.speed}</h6>`
                html += `<h6>Pressure: ${data.list[i].main.pressure}</h6>`
                html += `</div>`
            }
            $("#weatherBody").html(html);
        })
        html = "";
    })
}

$("#myBtn").click(function(e){
    e.preventDefault();
    geoWeather($("#searchInput").val());
})
geoWeather("San Antonio, TX");
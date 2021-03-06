window.onload = function () {
  start()
  var hiddenDiv = document.querySelector('.is-hidden')
  var displayedDiv = document.querySelector('.is-overlay')

  displayedDiv.classList.add('animated', 'fadeOut', 'delay-4s')
  var delayInMilliseconds = 1000; //1 second

  setTimeout(function() {
    hiddenDiv.classList.remove('is-hidden')
    hiddenDiv.classList.add('animated', 'fadeIn')
    setTimeout(function() {
      displayedDiv.classList.add('is-hidden')
    }, 1000)
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFpbWVjaHVyIiwiYSI6ImNqc3h2eGxjMTBxNnQ0M3MxaWFidG04Z3QifQ.aczFGO6YS18EDic757AHrA';
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
      center: [121.098523, 14.632511], // starting position
      zoom: 16// starting zoom
    });
    var map2 = new mapboxgl.Map({
      container: 'map2', // container id
      style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
      center: [121.111877, 14.649495], // starting position
      zoom: 16 // starting zoom
    });

    var marker = new mapboxgl.Marker({color: "#B9A481"})
      .setLngLat([121.098523, 14.632511]);
    var marker2 = new mapboxgl.Marker({color: "#B9A481"})
      .setLngLat([121.111877, 14.649495]);

    marker.addTo(map)
    marker2.addTo(map2)
  }, delayInMilliseconds);
}

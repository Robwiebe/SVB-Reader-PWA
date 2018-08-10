app.saveSelectedCities = function() {
    window.localforage.setItem('selectedCities', app.selectedCities);
  };

/*
  document.addEventListener('DOMContentLoaded', function() {
    window.localforage.getItem('selectedCities', function(err, cityList) {
      if (cityList) {
        app.selectedCities = cityList;
        app.selectedCities.forEach(function(city) {
          app.getForecast(city.key, city.label);
        });
      } else {
        app.updateForecastCard(injectedForecast);
        app.selectedCities = [
          {key: injectedForecast.key, label: injectedForecast.label}
        ];
        app.saveSelectedCities();
      }
    });    
  });
*/
var myMap;

ymaps.ready(function () {     
  myMap = new ymaps.Map('yandexMap', {
    center: [47.13329585217115,39.73962197486876],
    zoom: 15.5,
    controls: []
  });

  myPlacemarkMain = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Батайск, ул Луначарского, 177 «А»',
      balloonContent: 'Батайск, ул Луначарского, 177 «А»'
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [94, 94],
      iconImageClipRect: [[213,220], [305, 320]]
  });

  myPlacemarkPark1 = new ymaps.Placemark([47.13039644305577,39.737669326705905], {
      hintContent: 'Парк',
      balloonContent: ''
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [67, 67],
      iconImageClipRect: [[152,257], [216, 320]]
  });

  myPlacemarkPark2 = new ymaps.Placemark([47.135902255915504,39.743248321456896], {
      hintContent: 'Парк',
      balloonContent: ''
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [67, 67],
      iconImageClipRect: [[152,257], [216, 320]]
  });

  myPlacemarkMarket1 = new ymaps.Placemark([47.13223421830042,39.73813066665648], {
      hintContent: 'Магазин',
      balloonContent: ''
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [67, 67],
      iconImageClipRect: [[150,191], [211, 250]]
  });

  myPlacemarkMarket2 = new ymaps.Placemark([47.14153194213638,39.740018941802965], {
      hintContent: 'Магазин',
      balloonContent: ''
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [67, 67],
      iconImageClipRect: [[150,191], [211, 250]]
  });

  myPlacemarkHospital = new ymaps.Placemark([47.14153194213638,39.740018941802965], {
      hintContent: 'Больница',
      balloonContent: ''
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [67, 67],
      iconImageClipRect: [[150,123], [209, 183]]
  });

   myPlacemarkCinema = new ymaps.Placemark([47.137037026368006,39.74375257675168], {
      hintContent: '',
      balloonContent: ''
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [67, 67],
      iconImageClipRect: [[81,121], [144, 184]]
  });

   myPlacemarkStation1 = new ymaps.Placemark([47.136583121111066,39.74046955291747], {
      hintContent: 'Автобусная остановка',
      balloonContent: ''
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [67, 67],
      iconImageClipRect: [[84,255], [144, 320]]
  });

  myPlacemarkStation2 = new ymaps.Placemark([47.13137025223989,39.74240074340819], {
      hintContent: 'Автобусная остановка',
      balloonContent: ''
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [67, 67],
      iconImageClipRect: [[84,255], [144, 320]]
  });

  myPlacemarkBank = new ymaps.Placemark([47.1333324598553,39.73765859786985], {
      hintContent: 'Банк',
      balloonContent: ''
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [67, 67],
      iconImageClipRect: [[81,188], [143, 253]]
  });

  myPlacemarkSchool = new ymaps.Placemark([47.13583636526976,39.73476181213377], {
      hintContent: 'Школа',
      balloonContent: ''
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [67, 67],
      iconImageClipRect: [[8,187], [67, 251]]
  });

  myPlacemarkKindergarten = new ymaps.Placemark([47.12907115511838,39.747808076782206], {
      hintContent: 'Детский сад',
      balloonContent: ''
  }, {
      
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.png',
      iconImageSize: [67, 67],
      iconImageClipRect: [[8,257], [67, 320]]
  });



  myMap.geoObjects.add(myPlacemarkMain);
  myMap.geoObjects.add(myPlacemarkPark1);
  myMap.geoObjects.add(myPlacemarkPark2);
  myMap.geoObjects.add(myPlacemarkMarket1);
  myMap.geoObjects.add(myPlacemarkMarket2);  
  myMap.geoObjects.add(myPlacemarkHospital);
  myMap.geoObjects.add(myPlacemarkCinema);
  myMap.geoObjects.add(myPlacemarkStation1);
  myMap.geoObjects.add(myPlacemarkStation2);  
  myMap.geoObjects.add(myPlacemarkBank);
  myMap.geoObjects.add(myPlacemarkSchool);
  myMap.geoObjects.add(myPlacemarkKindergarten);
    

});


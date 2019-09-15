var color = require('dominant-color');
var imgPath = './randomImage.jpeg';

color(imgPath, function(err, color){
  // hex color by default
  console.log(color) // '5b6c6e'
})

color(imgPath, {format: 'rgb'}, function(err, color){
  console.log(color) // ['91', '108', '110']
})

console.log('Fetching the images')

var API_KEY = '7159995-77ef52f978ebf70313e64948f';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('food')+"&image_type=photo&pretty=true&per_page=50&response_group=high_resolution";


function getRandomImage(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}


function reqListener () {
  let response = JSON.parse(this.responseText)
  if (!response.totalHits || (response.totalHits === 0)) {
  	console.log('No images found')
  } else {
  	let index = getRandomImage(0, response.hits.length - 1)
  	console.log('Index: ', index, response.hits[index])
  	let url = response.hits[index]['largeImageURL']
  	console.log('URL: ', url)
  	let backgroundImageEle = document.getElementById('background-image')
  	backgroundImageEle.style.backgroundImage = "url('" + url + "')"
  	// window.open(url)
  }

}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);

oReq.open("GET", URL);
oReq.send();

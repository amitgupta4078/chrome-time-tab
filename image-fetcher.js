console.log('Fetching the images')

function getRandomImage(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}


var activities = document.getElementById("category");
activities.addEventListener("change", storeInChromeStorage);
function storeInChromeStorage()
{
  var a = document.getElementById('category').value;
  //console.log(a);
  chrome.storage.sync.set({'storedQuery': a});
  callAPI();

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

  }
}


function callAPI() {
  var oReq = new XMLHttpRequest();

  var API_KEY = '7159995-77ef52f978ebf70313e64948f';
  var URL = "";
  chrome.storage.sync.get('storedQuery', function (result) {
    var query = result.storedQuery;

      // Make this query value wala option as selected

    URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(query)+"&image_type=photo&pretty=true&per_page=50&response_group=high_resolution";
    oReq.open("GET", URL);
    oReq.send();
  });

  
  oReq.addEventListener("load", reqListener);

}

callAPI();


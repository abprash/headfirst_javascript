//pair html file - async_2.html

//wait for the window to load
window.onload = init;
function init(){
	//register all the images with the corresponding event handlers
	var images = document.getElementsByTagName("img");
	for (var i = images.length - 1; i >= 0; i--) {
		//register a listener to each image
		images[i].onclick = toggle;
	};

	//now the toggler
	function toggle(event){
		//event contains information regarding the event
		//get the element which was clicked
		var image = event.target;
		//get the id of the image which was clicked
		var imgId = image.id;

		//toggle it
		if(image.src.indexOf("blur") != -1)
			image.src = imgId+".jpg";
		else
			image.src = imgId+"blur.jpg";
	}
}
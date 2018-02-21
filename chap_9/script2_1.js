//pair html file - async_2.html

//wait for the window to load
window.onload = init;
function init(){
	//register all the images with the corresponding event handlers
	var images = document.getElementsByTagName("img");
	for (var i = images.length - 1; i >= 0; i--) {
		//register a listener to each image
		//***********
		//uncomment if you want click driven events
		//images[i].onclick = toggle;
		//***********

		//if you want mouse move driven events
		images[i].onmousemove = toggle;
	};

	//now the toggler
	function toggle(event){
		//event contains information regarding the event
		//get the element which was clicked
		var image = event.target;
		//get the id of the image which was clicked
		var imgId = image.id;

		image.src = imgId+".jpg";

		//make it reblur after 2 seconds
		window.setTimeout(reblur, 2000, image);
	}

	//yay!!

	function reblur(image){
		//reblur it
		image.src = image.id+"blur.jpg";
	}
}
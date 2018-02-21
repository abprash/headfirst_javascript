
//we need to unblur the image when clicked
//register the function on the onclick of the image
window.onload = init;
function init(){
	var image = document.getElementById("zero");
	image.onclick = unblur;
}


function unblur(){
	var image = document.getElementById("zero");
	//console.log(image.src);
	
	//full url
	//console.log(window.location.href);
	
	//current path
	var path = window.location.pathname;
	
	//replace the image
	if(image.src.indexOf("zeroblur.png") != -1)
		image.src = "zero.png";
	else
		image.src = "zeroblur.png";
}
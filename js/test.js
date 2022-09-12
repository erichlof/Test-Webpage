// window.addEventListener('load', function()
// {
// 	console.log('All assets are loaded');
// });

let canvas = document.getElementById('myCanvas');

let context = canvas.getContext('2d');

let pixelRatio = 0.5;


function add(num1, num2)
{
	return num1 + num2;
}

window.addEventListener('resize', handleWindowResize);


let messageElement = document.getElementById('message');
messageElement.innerHTML = "5 + 4 = " + add(5, 4);

let webpageResolutionElement = document.getElementById("webpageResolution");
webpageResolutionElement.innerHTML = "webpage w: " + window.innerWidth + " h: " + window.innerHeight;

let canvasResolutionElement = document.getElementById("canvasResolution");

let sliderElement = document.getElementById('slider');
sliderElement.type = 'range';
sliderElement.min = 0.5;
sliderElement.max = 1.0;
sliderElement.step = 0.05;
sliderElement.value = 0.75;
sliderElement.addEventListener('change', handleWindowResize);
sliderElement.addEventListener('pointermove', handleWindowResize);
sliderElement.addEventListener('pointerdown', handleGrabbing);
sliderElement.addEventListener('pointerup', handleRelease);
function handleGrabbing()
{
	sliderElement.style.cursor = "grabbing";
}
function handleRelease()
{
	sliderElement.style.cursor = "grab";
}

function handleWindowResize()
{
	pixelRatio = sliderElement.value;
	canvas.width = window.innerWidth * pixelRatio;
	canvas.height = window.innerHeight * pixelRatio;

	context.lineWidth = 1;
	
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(Math.floor(canvas.width * 0.5), Math.floor(canvas.height * 0.5));
	context.strokeStyle = 'blue';
	context.stroke();
	context.closePath();

	context.beginPath();
	context.moveTo(100, 100);
	context.lineTo(800, 100);
	context.strokeStyle = 'magenta';
	context.stroke();
	context.closePath();

	context.fillStyle = 'yellow';
	context.fillRect(canvas.width - 10, canvas.height - 10, 10, 10);

	context.fillStyle = 'white';
	context.fillRect(canvas.width / 2, canvas.height / 2, 10, 10);
	

	messageElement.innerHTML = "Resolution: " + pixelRatio;

	canvasResolutionElement.innerHTML = "canvas w: " + canvas.width + " h: " + canvas.height;

}

handleWindowResize();
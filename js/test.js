// window.addEventListener('load', function()
// {
// 	console.log('All assets are loaded');
// });

console.log("Hello from the JavaScript file!");

let canvas = document.getElementById('myCanvas');

let context = canvas.getContext('2d');

let pixelRatio = 0.5;

let rectW = 10;
let rectH = 10;
let rectPosX = 0;
let rectPosY = 0;
let r = 255, g = 0, b = 0;

let colorString = "";//"rgb(" + r + ", " + g + "," + b + ")";


function add(num1, num2)
{
	return num1 + num2;
}

window.addEventListener('resize', handleWindowResize);
window.addEventListener('orientationchange', handleWindowResize);

window.addEventListener('keydown', handleKeyDown);
function handleKeyDown(event)
{
	if (event.code == 'ArrowUp')
	{
		rectPosY -= 1;
		handleWindowResize();
	}

	if (event.code == 'ArrowDown')
	{
		rectPosY += 1;
		handleWindowResize();
	}
	if (event.code == 'ArrowLeft')
	{
		rectPosX -= 1;
		handleWindowResize();
	}
	if (event.code == 'ArrowRight')
	{
		rectPosX += 1;
		handleWindowResize();
	}
}


let messageElement = document.getElementById('message');
messageElement.innerHTML = "5 + 4 = " + add(5, 4);

let webpageResolutionElement = document.getElementById("webpageResolution");
webpageResolutionElement.innerHTML = "webpage w: " + window.innerWidth + " h: " + window.innerHeight;

let canvasResolutionElement = document.getElementById("canvasResolution");

let sliderElement = document.getElementById('slider');
//sliderElement.type = 'range';
sliderElement.min = 0.5;
sliderElement.max = 1.0;
sliderElement.step = 0.05;
sliderElement.value = 0.75;
sliderElement.addEventListener('change', handleWindowResize);
sliderElement.addEventListener('pointermove', handleWindowResize);
sliderElement.addEventListener('pointerdown', handleGrabbing);
sliderElement.addEventListener('pointerup', handleRelease);
sliderElement.addEventListener('touchstart', handleWindowResize);
sliderElement.addEventListener('touchmove', handleWindowResize);
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

	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);

	colorString = "rgb(" + r + "," + g + "," + b + ")";

	context.fillStyle = colorString;
	context.fillRect(canvas.width - 10, canvas.height - 10, rectW, rectH);

	context.fillStyle = colorString;
	context.fillRect(canvas.width / 2 + rectPosX, canvas.height / 2 + rectPosY, rectW, rectH);
	

	messageElement.innerHTML = "Resolution: " + pixelRatio;

	webpageResolutionElement.innerHTML = "webpage w: " + window.innerWidth + " h: " + window.innerHeight;
	canvasResolutionElement.innerHTML = "canvas w: " + canvas.width + " h: " + canvas.height;

}

handleWindowResize();

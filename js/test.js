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
	canvas.width = document.documentElement.clientWidth * pixelRatio;
	canvas.height = document.documentElement.clientHeight * pixelRatio;

	context.lineWidth = 1.0;

	//context.moveTo(0, 0);
	//context.lineTo(Math.floor(canvas.width * 0.5), Math.floor(canvas.height * 0.5));
	
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(Math.floor(canvas.width * 0.5), Math.floor(canvas.height * 0.5));
	context.strokeStyle = 'magenta';
	context.stroke();
	context.closePath();

	
	// context.moveTo(100, 100);
	// context.lineTo(100, 101);
	context.fillStyle = 'yellow';
	context.fillRect(680, 200, 30, 10);

	context.fillStyle = 'white';
	context.fillRect(canvas.width / 2, canvas.height / 2, 10, 10);
	
	//context.stroke();
	//context.closePath();

	messageElement.innerHTML = "Resolution: " + pixelRatio;
}

handleWindowResize();
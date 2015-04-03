//var aabb1 = new AABB ( 0, 0, 2, 2 );
//var aabb2 = new AABB ( 3, 3, 6, 6 );

//window.alert ( aabb1.collidesWithAABB ( aabb2 ) );

/** Introduce these into the global scope because we might want to inspect them */
var running;
var frame;

var canvas;
var context;
var catSprite;

function main ()
{
	console.log ( "main" );
	
	canvas = createCanvas ( 640, 480, "canvas" );
	document.body.appendChild ( canvas );

	context = canvas.getContext ( "2d" );
	context.imageSmoothingEnabled = false;
	
	catSprite = loadSprite ( "favicon.png" );
	
	start ();
	
};

function draw ()
{
	console.log ( "draw" );
	if ( running )
	{
		frame = window.requestAnimationFrame ( draw );
		drawSprite ( context, catSprite, 0, 0, 80, 80 );
	}
}

function start ()
{
	console.log ( "start" );
	running = true;
	frame = window.requestAnimationFrame ( draw );
};

function stop ()
{
	console.log ( "stop" );
	if ( frame )
	{
		window.cancelAnimationFrame ( frame );
	}
	running = false;
}
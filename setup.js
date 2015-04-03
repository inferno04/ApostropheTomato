// Create a canvas for rendering
function createCanvas ( width, height, id )
{
	if ( width == undefined ) return undefined;
	if ( height == undefined ) return undefined;
	var canvas = document.createElement ( "canvas" );
		canvas.width = width;
		canvas.height = height;
		canvas.id = ( id == undefined ) ? "canvas" : id;
	return canvas;
};
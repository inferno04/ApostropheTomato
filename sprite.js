function Sprite ( image, x, y, width, height )
{
	this.img = image;
	this.x = ( x != undefined ) ? x : 0;
	this.y = ( y != undefined ) ? y : 0;
	if ( width != undefined ) this.width = width;
	if ( height != undefined ) this.height = height;
	this.ready = false;
};

function loadSprite ( url )
{
	var sprite = new Sprite ( new Image () );
	{
		var img = sprite.img;

		img.onload = function ()
		{
			sprite.ready = true;
			if ( !sprite.width )  sprite.width  = img.width;
			if ( !sprite.height ) sprite.height = img.height;
		};

		img.src = url;
	}
	return sprite;
};

function drawSprite ( context, sprite, x, y, width, height, rot, rx, ry )
{
	if ( x == undefined ) return;
	if ( y == undefined ) return;
	if ( sprite.width  == undefined ) return;
	if ( sprite.height == undefined ) return;

	context.save ();
	{

		context.translate ( x, y );

		var sx = ( sprite.x != undefined ) ? sprite.x      : 0;
		var sy = ( sprite.y != undefined ) ? sprite.y      : 0;
		var dw = ( width    == undefined ) ? sprite.width  : width;
		var dh = ( height   == undefined ) ? sprite.height : height;

		if ( rotation != undefined ) {

			if ( rx == undefined ) rx = ( dw / 2 );
			if ( ry == undefined ) ry = ( dh / 2 );

			context.translate ( rx, ry );
			context.rotate ( rot );

			rx = -rx;
			ry = -ry;

		} else {

			rx = 0;
			ry = 0;

		}

		context.drawImage (
			sprite.img,
			sx, sy, sprite.width, sprite.height,
			rx, ry, dw,           dh
		);

	}
	context.restore ();

};
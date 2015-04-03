function drawImage ( context, image, x, y, rotation )
{
	context.save ();
	{
		context.translate ( x, y );
		context.rotate ( rotation );
		context.drawImage ( image, -( image.width / 2 ), -( image.height / 2 ) );
	}
	context.restore ();
};
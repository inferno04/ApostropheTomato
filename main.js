
function drawImage(context, image, x, y, rotation)
{
	context.save();

	context.translate(x, y);

	context.rotate(rotation);

	context.drawImage(image, -(image.width / 2), -(image.height / 2));

	context.restore();
};

var aabb1 = new AABB(0, 0, 2, 2);
var aabb2 = new AABB(3, 3, 6, 6);

window.alert(aabb1.collidesWithAABB(aabb2));

(function(window) {
	'use strict';

	var AABB = function(x1, y1, x2, y2)
	{
		this.lower = new Vector2(x1, y1);
		this.upper = new Vector2(x2, y2);
	};

	AABB.prototype =
	{
		constructor: AABB,

		shift: function(x, y)
		{
			this.lower.add(x, y);
			this.upper.add(x, y);
		},

		collidesWithAABB: function(aabb)
		{
			return !(upper.x < aabb.lower.x || 
					lower.x > aabb.upper.x ||
					upper.y < aabblower.y ||
					lower.y > aabb.upper.y);
		},
	};

})(window);
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
			return !(this.upper.x < aabb.lower.x || 
					this.lower.x > aabb.upper.x ||
					this.upper.y < aabb.lower.y ||
					this.lower.y > aabb.upper.y);
		}
	};

	window.AABB = AABB;

})(window);
(function(window) {
	'use strict';

	var Vector2 = function(x, y)
	{
		this.x = typeof x !== 'undefined' ? x : 0;
		this.y = typeof y !== 'undefined' ? y : 0;
	};

	Vector2.UP = new Vector2(0, 1);
	Vector2.DOWN = new Vector2(0, -1);
	Vector2.LEFT = new Vector2(-1, 0);
	Vector2.RIGHT = new Vector2(1, 0);

	Vector2.projectAlongX = function(vector, result)
	{
		result.set(Vector2.dotproduct(vector, Vector2.RIGHT), 0)
	};

	Vector2.projectAlongY = function(vector, result)
	{
		result.set(0, Vector2.dotproduct(vector, Vector2.UP))
	};

	Vector2.dotproduct = function(vector1, vector2) 
	{
		return vector1.x * vector2.x + vector1.y * vector2.y;
	};

	Vector2.prototype = 
	{
		constructor: Vector2,

		set: function(x, y)
		{
			this.x = x;
			this.y = y;
		},

		add: function(x, y)
		{
			this.x += x;
			this.y += y;
		},

		sub: function(x, y)
		{
			this.x -= x;
			this.y -= y;
		},

		mul: function(x, y)
		{
			this.x *= x;
			this.y *= y;
		},

		div: function(x, y)
		{
			this.x /= x;
			this.y /= y;
		}
	};

	window.Vector2 = Vector2;

})(window);
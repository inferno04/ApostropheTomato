(function(window){
    'use strict';

    Timer = function() 
    {
        this.startTime = 0;
        this.stopTime = 0;
        this.totalTime = 0;
        this.running = false;
    };

    Timer.prototype = 
    {
        constructor: Timer,

        start: function()
        {
            this.running = true;
            this.startTime = Date.now( );
        },

        stop: function()
        {
            this.running = false;
            this.stopTime = Date.now();
            this.totalTime += this.stopTime - this.startTime;
        },

        reset: function()
        {
            var time = Date.now();
            this.startTime = time;
            this.stopTime = time;
            this.totalTime = 0;
        },

        getElapsedMs: function()
        {
            if(this.running) 
            {
                return Date.now() - this.startTime + this.totalTime;
            }

            return this.totalTime;
        },

        getElapsedSec: function()
        {
            return Math.floor(this.getElapsedMs() / 1000);
        }

    };

    window.Timer = Timer;

})(window);
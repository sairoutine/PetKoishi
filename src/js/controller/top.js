'use strict';
var m = require('mithril');

var Controller = function() {
	var self = this;

	// Canvas
	self.ctx = null;

	// Canvas 初期化時の route
	self.init_route = null;
};
Controller.prototype.initCanvas = function(elm, context) {
	var self = this;
	self.ctx = elm.getContext('2d');
	self.init_route = m.route();

	var img = new Image();
	img.src = "./img/haikyo.jpg";
	img.onload = function() {
		self.ctx.drawImage(img,
			0,
			0
		);

	}
	var img2 = new Image();
	img2.src = "./img/chara/ikari.png";
	img2.onload = function() {
		self.ctx.drawImage(img2, 0, -150, this.width, this.height, 0, 0, this.width * 0.5, this.height * 0.5);

	}


	self.updateCanvas();
};

Controller.prototype.updateCanvas = function () {
	var self = this;

	// ページを離れたら再描画しない
	if (self.init_route === m.route()) {
		requestAnimationFrame(self.updateCanvas.bind(self));
	}
}

module.exports = Controller;

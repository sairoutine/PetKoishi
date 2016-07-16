'use strict';
var m = require('mithril');

var Controller = function() {
	var self = this;

	// Canvas
	self.ctx = null;

	// Canvas 初期化時の route
	self.init_route = null;

	// requrestAnimationFrame のキャンセル用
	self.requestID = null;

	// 画像の読み込みがすべて完了したかどうか
	self.is_image_loaded = false;
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

	if(self.is_image_loaded) {
		console.log('image done');
	}

	self.requestID = requestAnimationFrame(self.updateCanvas.bind(self));
}
Controller.prototype.onunload = function(e) {
	if(this.requestID !== null) {
		cancelAnimationFrame(this.requestID);
		this.requestID = null;
	}
}
module.exports = Controller;

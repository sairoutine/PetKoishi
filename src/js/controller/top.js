'use strict';
var m = require('mithril');

var config = require('../config');

var Controller = function() {
	var self = this;

	// Canvas
	self.ctx = null;

	// Canvas 初期化時の route
	self.init_route = null;

	// requrestAnimationFrame のキャンセル用
	self.requestID = null;

	// 読み込んだ画像一覧
	self.images = {};

	// 読み込んだ画像数
	self.loaded_image_num = 0;

	self._load_images();
};
Controller.prototype._load_images = function() {
	var self = this;

	var onload_function = function() {
		self.loaded_image_num++;
	};

	for(var key in config.images) {
		self.images[key] = new Image();
		self.images[key].src = config.images[key];
		self.images[key].onload = onload_function;
	}
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

	};
	var img2 = new Image();
	img2.src = "./img/chara/ikari.png";
	img2.onload = function() {
		self.ctx.drawImage(img2, 0, -150, this.width, this.height, 0, 0, this.width * 0.5, this.height * 0.5);

	};


	self.updateCanvas();
};

Controller.prototype.updateCanvas = function () {
	var self = this;

	// 画像の読み込みがすべて完了したかどうか
	if(self.loaded_image_num >= Object.keys(config.images).length) {
		console.log('image done');
	}

	self.requestID = requestAnimationFrame(self.updateCanvas.bind(self));
};
Controller.prototype.onunload = function(e) {
	if(this.requestID !== null) {
		cancelAnimationFrame(this.requestID);
		this.requestID = null;
	}
};
module.exports = Controller;

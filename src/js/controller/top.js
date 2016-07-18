'use strict';
var m = require('mithril');

var config = require('../config');
var Character = require('../model/character');

var Controller = function() {
	var self = this;

	// Canvas
	self.ctx = null;

	// Canvas 初期化時の route
	self.init_route = null;

	// requrestAnimationFrame のキャンセル用
	self.requestID = null;

	// セリフの setTimeout のキャンセル用
	self.timeoutID = null;

	// 読み込んだ画像一覧
	self.images = {};

	// 読み込んだ画像数
	self.loaded_image_num = 0;

	self.character = new Character();
	// 名前
	self.name = "こいし";
	// セリフ
	self.serif = "・・・・・・";
	// 表情
	self.face = "chara_ikari";

	// 画像のプリロード開始
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

	self.updateCanvas();
};

Controller.prototype.updateCanvas = function () {
	var self = this;

	// 画像の読み込みがすべて完了したかどうか
	if(self.loaded_image_num >= Object.keys(config.images).length) {
		self.ctx.drawImage(self.images['bg'],
			0,
			0
		);

		var chara = self.images[self.face];
		self.ctx.drawImage(chara, 0, -150, chara.width, chara.height, 0, 0, chara.width * 0.5, chara.height * 0.5);

	}

	self.requestID = requestAnimationFrame(self.updateCanvas.bind(self));
};
Controller.prototype.onunload = function(e) {
	if(this.requestID !== null) {
		cancelAnimationFrame(this.requestID);
		this.requestID = null;
	}
};
Controller.prototype.onmeal = function() {
	var self = this;
	return function(e) {
		self.face = "chara_tsuyoki";
		self.printMessage("いらない\n(信用されていないようだ)");

	};
};
Controller.prototype.ontalk = function() {
	var self = this;

	return function(e) {
		// 親愛度が上昇
		self.character.love++;

		self.face = "chara_naku";
		self.printMessage("お姉ちゃんのところにかえしてよぅ……");
	};
};
Controller.prototype.onwatch = function() {
	var self = this;

	return function(e) {
		self.face = "chara_komaru";
		self.printMessage("・・・・・・？\n(困っているようだ)");
	};
};

// テキストを1文字ずつパラパラと表示する
Controller.prototype.printMessage = function (message) {
	var self = this;

	// 現在実行中のセリフをキャンセル
	if(self.timeoutID !== null) {
		clearTimeout(self.timeoutID);
		self.timeoutID = null;
	}

	var char_list = message.split("");
	var char_length = char_list.length;

	var idx = 0;

	// 表示されているセリフをクリア
	self.serif = "";

	var output = function() {
		if (idx >= char_length) return;

		// タイポグラフィの速度
		var speed = config.serif_speed;

		var ch = char_list[idx];
		idx++;


		if (ch === "\n") {
			speed += 1000;
			self.serif = "";
		}
		else {
			self.serif = self.serif + ch;
			m.redraw();
		}

		self.timeoutID = setTimeout(output, speed);
	};
	output();
};


module.exports = Controller;

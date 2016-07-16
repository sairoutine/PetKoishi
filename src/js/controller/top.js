'use strict';

var Controller = function() {

};
Controller.prototype.initCanvas = function(elm, context) {
	var self = this;
	self.ctx = elm.getContext('2d');

	var ctx = self.ctx;

	/* Imageオブジェクトを生成 */
	var img = new Image();
	img.src = "./img/haikyo.jpg";
	/* 画像が読み込まれるのを待ってから処理を続行 */
	img.onload = function() {
		ctx.drawImage(img,
			0,
			0
		);

	}

	/* Imageオブジェクトを生成 */
	var img2 = new Image();
	img2.src = "./img/chara/ikari.png";
	/* 画像が読み込まれるのを待ってから処理を続行 */
	img2.onload = function() {
		ctx.drawImage(img2, 0, -150, this.width, this.height, 0, 0, this.width * 0.5, this.height * 0.5);

	}
};

module.exports = Controller;

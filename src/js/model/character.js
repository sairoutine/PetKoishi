'use strict';
var Model = function (ctrl) {
	var self = this;

	// 名前
	self.name = "こいし";

	// 表情
	self.face = "chara_ikari";

	// 最初のセリフ
	self.default_serif = "・・・・・・";

	// 親愛度
	self.love = 0;

	self.ctrl = ctrl;
};

Model.prototype.meal = function() {
	var self = this;
	var ctrl = this.ctrl;
	self.face = "chara_tsuyoki";
	ctrl.printMessage("いらない。\n(信用されていないようだ)");
};

Model.prototype.talk = function() {
	var self = this;
	var ctrl = this.ctrl;

	// 親愛度が上昇
	self.love++;

	self.face = "chara_naku";
	ctrl.printMessage("お姉ちゃんのところにかえしてよぅ……");
};

Model.prototype.watch = function() {
	var self = this;
	var ctrl = this.ctrl;

	self.face = "chara_komaru";
	ctrl.printMessage("・・・・・・？\n(気味悪がられている)");
};

module.exports = Model;

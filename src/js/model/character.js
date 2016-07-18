'use strict';

var config = require('../config');

var Model = function (ctrl) {
	var self = this;

	// 名前
	self.name = "こいし";

	// 表情
	self.face = "chara_ikari";

	// 最初のセリフ
	self.default_serif = "・・・・・・";

	// 親愛度
	self.love = 5;

	// 親愛状態
	self.love_status = "normal";

	self.ctrl = ctrl;
};

Model.prototype.meal = function() {
	var self = this;
	var ctrl = this.ctrl;

	// ノーマル以下の場合
	if(self.love < 10) {
		// 親愛度が減少
		self.minus_love(1);
	}
	else {
		// 親愛度が上昇
		self.plus_love(5);
	}

	// Game Over
	if (self.love_status === "worst") {
		ctrl.can_action = false;

		self.face ="";
		ctrl.printMessage("・・・・・・\n(倒れこんだきり、動かなくなった)\n(彼女はもう何日も何も食べていない)\n・・・・・・\n(彼女は二度と動かない)\n(GAME OVER)");
		return;
	}

	self.action("meal", self.love_status);
};

Model.prototype.talk = function() {
	var self = this;
	var ctrl = this.ctrl;

	// 親愛度が上昇
	self.plus_love(1);

	if(self.love_status === "good" && self.love === 10) {
		self.face ="chara_odoroki";
		ctrl.printMessage("えっ、お姉ちゃんの知り合いなの？\nなーんだ");
		return;
	}

	self.action("talk", self.love_status);
};

Model.prototype.watch = function() {
	var self = this;

	self.action("watch", self.love_status);
};




Model.prototype.action = function(act, status) {
	var self = this;

	var actions_and_statuses = config.serif[act];
	if(!actions_and_statuses) return;

	var actions = actions_and_statuses[status];
	if(!actions) return;

	var action = self.choice_array(actions);

	self.face = action.face;
	self.ctrl.printMessage(action.serif);
};

Model.prototype.plus_love = function(num) {
	this.love += num;

	this.check_and_change_love_status();
};

Model.prototype.minus_love = function(num) {
	this.love -= num;

	this.check_and_change_love_status();
};

Model.prototype.check_and_change_love_status = function() {
	var self = this;
	if(50 <= self.love) {
		self.love_status = "best";
	}
	else if(30 <= self.love && self.love < 50) {
		self.love_status = "better";
	}
	else if(10 <= self.love && self.love < 30) {
		self.love_status = "good";
	}
	else if(0 <= self.love && self.love < 10) {
		self.love_status = "normal";
	}
	else if(-10 <= self.love && self.love < 0) {
		self.love_status = "bad";
	}
	else if(-30 <= self.love && self.love < -10) {
		//self.love_status = "worse";
	}
	else if(self.love < -30) {
		self.love_status = "worst";
	}
};
Model.prototype.choice_array = function(array) {
	return array[Math.floor(Math.random() * array.length)];
};



module.exports = Model;

'use strict';

var Config = {};

// ゲームに必要な画像一覧
Config.images = {
	bg:            "./img/haikyo.jpg",
	chara_ikari:   "./img/chara/ikari.png",
	chara_komaru:  "./img/chara/komaru.png",
	chara_naku:    "./img/chara/naku.png",
	chara_tsuyoki: "./img/chara/tsuyoki.png",
};

// セリフのタイポグラフィスピード
Config.serif_speed = 10;



Config.serif = {
	meal:  {},
	talk:  {},
	watch: {},
};

// ご飯
Config.serif.meal.best = [
];
Config.serif.meal.better = [
];
Config.serif.meal.good = [
];
Config.serif.meal.normal = [
	{face: "chara_tsuyoki", serif: "いらない。\n(信用されていないようだ)"},
];
Config.serif.meal.bad = [
	{face: "chara_tsuyoki", serif: "・・・・・・・"},
];
//Config.serif.meal.worse = [];
//Config.serif.meal.worst = [];

// 会話
Config.serif.talk.best = [
];
Config.serif.talk.better = [
];
Config.serif.talk.good = [
];
Config.serif.talk.normal = [
	{face: "chara_naku", serif: "お姉ちゃんのところにかえしてよぅ……"},
	{face: "chara_naku", serif: "グスン……"},

];
Config.serif.talk.bad = [
	{face: "chara_tsuyoki", serif: "・・・・・・・"},
];
//Config.serif.talk.worse = [];
//Config.serif.talk.worst = [];

// 見つめる
Config.serif.watch.best = [
];
Config.serif.watch.better = [
];
Config.serif.watch.good = [
];
Config.serif.watch.normal = [
	{face: "chara_komaru", serif: "・・・・・・？\n(気味悪がられている)"},
];
Config.serif.watch.bad = [
	{face: "chara_tsuyoki", serif: "・・・・・・・"},
];
//Config.serif.watch.worse = [];
//Config.serif.watch.worst = [];

module.exports = Config;

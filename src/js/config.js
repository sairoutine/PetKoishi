'use strict';

var Config = {};

// ゲームに必要な画像一覧
Config.images = {
	bg:                "./img/haikyo.jpg",
	chara_ikari:       "./img/chara/ikari.png",
	chara_komaru:      "./img/chara/komaru.png",
	chara_naku:        "./img/chara/naku.png",
	chara_tsuyoki:     "./img/chara/tsuyoki.png",
	chara_naki_komari: "./img/chara/naki_komari.png",
	chara_naki_tojiru: "./img/chara/naki_tojiru.png",
	chara_odoroki:     "./img/chara/odoroki.png",
	chara_normal:      "./img/chara/normal.png",
	chara_yorokobi:    "./img/chara/yorokobi.png",
	chara_smile:       "./img/chara/smile.png",
	chara_naku_smile:  "./img/chara/naku_smile.png",
	chara_yoyuu:       "./img/chara/yoyuu.png",
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
	{face: "chara_yorokobi", serif: "おいしーい♡"},
	{face: "chara_yorokobi", serif: "いっしょにたべよー？"},
];
Config.serif.meal.better = [
	{face: "chara_naku_smile", serif: "やーん、お魚きらーい"},
	{face: "chara_normal", serif: "おなかいっぱーい"},
];
Config.serif.meal.good = [
	{face: "chara_yorokobi", serif: "お団子ー！\nおいしーい"},
	{face: "chara_smile", serif: "お煎餅おいしい(ポリポリ)"},
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
	{face: "chara_yorokobi", serif: "きゃー"}, // TODO:
];
Config.serif.talk.better = [
	{face: "chara_yorokobi", serif: "わーい"},
	{face: "chara_yorokobi", serif: "うしろから……\nばぁーっ！"},
];
Config.serif.talk.good = [
	{face: "chara_normal", serif: "うちのおくうは忘れっぽいの"},
	{face: "chara_normal", serif: "うちのお燐は怨霊と会話できるんだよ"},
	{face: "chara_normal", serif: "はやくおうち帰りたーい"},
	{face: "chara_normal", serif: "ひまー"},
	{face: "chara_normal", serif: "つまんなーい"},
];
Config.serif.talk.normal = [
	{face: "chara_naku", serif: "お姉ちゃんのところにかえしてよぅ……"},
	{face: "chara_naku", serif: "グスン……"},
	{face: "chara_naki_komari", serif: "あなた、だれ？"},
	{face: "chara_naki_tojiru", serif: "おねえちゃん……"},
];
Config.serif.talk.bad = [
	{face: "chara_tsuyoki", serif: "・・・・・・・"},
];
//Config.serif.talk.worse = [];
//Config.serif.talk.worst = [];

// 見つめる
Config.serif.watch.best = [
	{face: "chara_yorokobi", serif: "♡\n(ゴキゲンみたいだ)"},
];
Config.serif.watch.better = [
	{face: "chara_yoyuu", serif: "♪\n(ゴキゲンみたいだ)"},
];
Config.serif.watch.good = [
	{face: "chara_normal", serif: "・・・・・・\nどうしたの？"},
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

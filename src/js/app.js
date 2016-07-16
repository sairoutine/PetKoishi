'use strict';

var m = require('mithril');

var Top = require('./component/top');

//HTML要素にコンポーネントをマウント
m.route(document.getElementById("root"), "/", {
	"/": Top,
});

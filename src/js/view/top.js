'use strict';
module.exports = function(ctrl) {
	return <div>
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<span class="navbar-brand">こいしちゃんを監禁する</span>
				</div>
			</div>
		</nav>

		<div class="container-fluid" style="padding-top:80px">
			<div class="row">
			<canvas id="main" width="320" height="320" style="border:1px solid black; width:320px; height:320px;" config={ function(elm, isInitialized, context) {
				if(!isInitialized) {
					ctrl.initCanvas(elm, context);
				}
			} }></canvas>
			</div>
			<div class="row">
				<div class="panel panel-success">
					<div class="panel-heading">
						こいし
					</div>
					<div class="panel-body">
						・・・・・
					</div>
				</div>
			</div>
			<div class="row">
				<div class="panel panel-default">
					<div class="panel-body">
						<button type="button" class="btn btn-warning btn-lg">ご飯</button><button type="button" class="btn btn-info btn-lg">会話</button><button type="button" class="btn btn-primary btn-lg">見つめる</button>
					</div>
				</div>
			</div>
		</div>
	</div>;
};

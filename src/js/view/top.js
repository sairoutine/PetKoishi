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
				if (isInitialized) return;

				ctrl.initCanvas(elm, context);
			} }></canvas>
			</div>
			<div class="row">
				<div class="panel panel-primary">
					<div class="panel-heading">
						{ ctrl.character.name }
					</div>
					<div class="panel-body">
						{ ctrl.serif }
					</div>
				</div>
			</div>
			<div class="row">
				<div class="panel panel-default">
					<div class="panel-body">
					<button type="button" class="btn btn-success btn-lg" onclick={ ctrl.onmeal() }>ご飯</button>
					<button type="button" class="btn btn-info btn-lg" onclick={ ctrl.ontalk() }>会話</button>
					<button type="button" class="btn btn-danger btn-lg" onclick={ ctrl.onwatch() }>見つめる</button>
					</div>
				</div>
			</div>
		</div>
	</div>;
};

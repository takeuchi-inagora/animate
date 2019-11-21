(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,702,178,178],[420,702,224,70],[180,702,238,70],[0,0,2000,700]]}
];


// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.bug = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-44.5,-44.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bug, new cjs.Rectangle(-44.5,-44.5,89,89), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
				
				stage.enableMouseOver(30);
				
				/*stage.on( 'stagemousemove' , function (e){
					var radians = Math.atan2(e.localY - _this.bug.y , e.localX - _this.bug.x);
					var degrees = radians * (180 / Math.PI);
					_this.bug.rotation = degrees - 90;
					_this.bug.y = e.localY;
					_this.bug.x = e.localX;
					_this.bug.d
						
					var shape = new createjs.Shape();
					shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 25);
					shape.cache(-25, -25, 50, 50);
					
					});*/
				
				//https://www.createjs.com/docs/easeljs/classes/Stage.html#method_tick
				//var stage = new createjs.Stage("canvasElementId");
				
				/*スタート 初期設定*/
				game_status = "00";
				game_step = 1;
				score = 0;
				
				_this.score.text = score;
				_this.game_step.text = game_step;
				
				//画像読み込み
				 card_01 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				 card_02 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				 card_03 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				 card_04 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				 card_05 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				 card_06 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				
				 card_11 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				 card_12 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				 card_13 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				 card_14 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				 card_15 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				 card_16 = new createjs.Bitmap("imagePath-assets/card_ura.png");
				
				 stage.addChild(card_01);
				 stage.addChild(card_02);
				 stage.addChild(card_03);
				 stage.addChild(card_04);
				 stage.addChild(card_05);
				 stage.addChild(card_06);
				 
				 stage.addChild(card_11);
				 stage.addChild(card_12);
				 stage.addChild(card_13);
				 stage.addChild(card_14);
				 stage.addChild(card_15);
				 stage.addChild(card_16);
				 
				 //衝突判定用シェイプ
				 // button.addEventListener("mousedown", buttonMouseDownHandler);
				 card_01_hit = new createjs.Shape();
				 card_02_hit = new createjs.Shape();
				 card_03_hit = new createjs.Shape();
				 card_04_hit = new createjs.Shape();
				 card_05_hit = new createjs.Shape();
				 card_06_hit = new createjs.Shape();
				 
				 card_11_hit = new createjs.Shape();
				 card_12_hit = new createjs.Shape();
				 card_13_hit = new createjs.Shape();
				 card_14_hit = new createjs.Shape();
				 card_15_hit = new createjs.Shape();
				 card_16_hit = new createjs.Shape();
		
				 card_01.hitArea = card_01_hit;
				 card_02.hitArea = card_02_hit;
				 card_03.hitArea = card_03_hit;
				 card_04.hitArea = card_04_hit;
				 card_05.hitArea = card_05_hit;
				 card_06.hitArea = card_06_hit;
		
				 card_11.hitArea = card_11_hit;
				 card_12.hitArea = card_12_hit;
				 card_13.hitArea = card_13_hit;
				 card_14.hitArea = card_14_hit;
				 card_15.hitArea = card_15_hit;
				 card_16.hitArea = card_16_hit;
		
				 stage.addChild(card_01_hit);
				 stage.addChild(card_02_hit);
				 stage.addChild(card_03_hit);
				 stage.addChild(card_04_hit);
				 stage.addChild(card_05_hit);
				 stage.addChild(card_06_hit);
		
				 stage.addChild(card_11_hit);
				 stage.addChild(card_12_hit);
				 stage.addChild(card_13_hit);
				 stage.addChild(card_14_hit);
				 stage.addChild(card_15_hit);
				 stage.addChild(card_16_hit);
				 
				 //x座標
				 var card_x = [10,170,340,510,680,850,10,170,340,510,680,850];
				 //y座標
				 var card_y = [10,10,10,10,10,10,170,170,170,170,170,170];
				
				for (var i = 0 ; i < 12 ; i++) {
					var num = Math.floor(Math.random()*12);
					//入れ替える数字を保存
					//x座標
					var card_num_x = card_x[i];
					//y座標
					var card_num_y = card_y[i];
				
					//xとyの座標を入れ替える
					card_x[i] = card_x[num];
					card_x[num] = card_num_x;
				
					card_y[i] = card_y[num];
					card_y[num] = card_num_y;
					}
				
				console.log("card_x ----> " + card_x);
				console.log("card_y ----> " + card_y);
				
				 //x座標
				 card_01.x = card_x[0];
				 card_02.x = card_x[1];
				 card_03.x = card_x[2];
				 card_04.x = card_x[3];
				 card_05.x = card_x[4];
				 card_06.x = card_x[5];
				
				 card_11.x = card_x[6];
				 card_12.x = card_x[7];
				 card_13.x = card_x[8];
				 card_14.x = card_x[9];
				 card_15.x = card_x[10];
				 card_16.x = card_x[11];
				
				//y座標
				 card_01.y = card_y[0];
				 card_02.y = card_y[1];
				 card_03.y = card_y[2];
				 card_04.y = card_y[3];
				 card_05.y = card_y[4];
				 card_06.y = card_y[5];
				
				 card_11.y = card_y[6];
				 card_12.y = card_y[7];
				 card_13.y = card_y[8];
				 card_14.y = card_y[9];
				 card_15.y = card_y[10];
				 card_16.y = card_y[11];
				 
				 
				 //ダミーボタン準備
				 card_01_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_01.x+75, card_01.y+75, 75);
				 card_02_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_02.x+75, card_02.y+75, 75);
				 card_03_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_03.x+75, card_03.y+75, 75);
				 card_04_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_04.x+75, card_04.y+75, 75);
				 card_05_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_05.x+75, card_05.y+75, 75);
				 card_06_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_06.x+75, card_06.y+75, 75);
		
				 card_11_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_11.x+75, card_11.y+75, 75);
				 card_12_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_12.x+75, card_12.y+75, 75);
				 card_13_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_13.x+75, card_13.y+75, 75);
				 card_14_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_14.x+75, card_14.y+75, 75);
				 card_15_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_15.x+75, card_15.y+75, 75);
				 card_16_hit.graphics.beginFill("rgba(255,255,255,0.05)").drawCircle(card_16.x+75, card_16.y+75, 75);
				
				 // [表裏、、カードめくれる有無、カードの種類、カードの番号]
				card_01_status = [false,0,true,1,1];
				card_02_status = [false,0,true,2,2];
				card_03_status = [false,0,true,3,3];
				card_04_status = [false,0,true,4,4];
				card_05_status = [false,0,true,5,5];
				card_06_status = [false,0,true,6,6];
		
				card_11_status = [false,0,true,1,11];
				card_12_status = [false,0,true,2,12];
				card_13_status = [false,0,true,3,13];
				card_14_status = [false,0,true,4,14];
				card_15_status = [false,0,true,5,15];
				card_16_status = [false,0,true,6,16];
				
				// createjs.Ticker.addEventListener("tick", handleTick);
				// function handleTick(e) {
				     //image.x += 10;
				     //stage.update();
				 	 //console.log("tick");
				//}
				 
				/*
				ステージに配置したムービークリップの時のイベント処理
				
				イベント付与
				_this.bug.instance.addEventListener("click", function(e) {
				     console.log(_this.bug == this); // false, scope is ambiguous.
				 });
				 
				 トリガー
				_this.bug.instance.on("click", function(e) {
				 	 console.log("_this.bug click");
				});
				
				*/
		
			/*セット完了*/
			game_status = "01";
		
		
				card_01_hit.on("click", function(e) {
					if(card_reverse_flag[1]){
						 card_01.width = 150;
						
						if(card_01_status[0]){
							 card_01.image.src = 'imagePath-assets/card_01.png';
							 card_01_status[0] = false;
							}else{
							 card_01.image.src = 'imagePath-assets/card_ura.png';
							 card_01_status[0] = true;
							}
		
						createjs.Tween.get(card_01, {override:true}).to({scaleX:0.1, x:card_x[0]+75}, 300).call(handleComplete_card_01);
						}
						
					});
				function handleComplete_card_01() {
					console.log("handleComplete_card_01");
					
					if(!card_01_status[0]){
							//Tween complete
							card_01.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_01.image.src = 'imagePath-assets/card_01.png';
						}
						
					//カード集計へ
					if(game_status == '01'){
							//1枚目
							console.log("1枚目");
							createjs.Tween.get(card_01, {override:true}).to({scaleX:1, x:card_x[0]}, 300);
							card_pre_num = card_01_status[4];
							card_pre = card_01_status[3];
							// 01 と 03 から 02 に変更
							game_status = '02';
						}else if(game_status == '03'){
							//裏に戻すのみ
							console.log("裏にもどす");
							createjs.Tween.get(card_01, {override:true}).to({scaleX:1, x:card_x[0]}, 300);
							game_status = '02';
						}else{
							//2枚目以降
							console.log("2枚目");
							console.log(card_01_status[0]);
							card_next_num = card_01_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								console.log("1枚目に戻る");
								card_01_status[0] = false;
								createjs.Tween.get(card_01, {override:true}).to({scaleX:1, x:card_x[0]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_01, {override:true}).to({scaleX:1, x:card_x[0]}, 300).call(card_result,[1]);
								card_next = card_01_status[3];
							}
							console.log("game_status ---> " + game_status);
		
						}
					}
		
				card_02_hit.on("click", function(e) {
					if(card_reverse_flag[2]){
						 card_02.width = 150;
						
						if(card_02_status[0]){
							 card_02.image.src = 'imagePath-assets/card_02.png';
							 card_02_status[0] = false;
							}else{
							 card_02.image.src = 'imagePath-assets/card_ura.png';
							 card_02_status[0] = true;
							}
		
						createjs.Tween.get(card_02, {override:true}).to({scaleX:0.1, x:card_x[1]+75}, 300).call(handleComplete_card_02);
						}
					});
				
				function handleComplete_card_02() {
					console.log("handleComplete_card_02");
					
					if(!card_02_status[0]){
							//Tween complete
							card_02.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_02.image.src = 'imagePath-assets/card_02.png';
						}
						
					//カード集計へ
					if(game_status == '01'){
							createjs.Tween.get(card_02, {override:true}).to({scaleX:1, x:card_x[1]}, 300);
							card_pre_num = card_02_status[4];
							card_pre = card_02_status[3];
							game_status = '02';
						}else if(game_status == '03'){
							createjs.Tween.get(card_02, {override:true}).to({scaleX:1, x:card_x[1]}, 300);
							game_status = '02';
						}else{
						//2枚目以降
						console.log("2枚目");
						console.log(card_02_status[0]);
						card_next_num = card_02_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								card_02_status[0] = false;
								createjs.Tween.get(card_02, {override:true}).to({scaleX:1, x:card_x[1]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_02, {override:true}).to({scaleX:1, x:card_x[1]}, 300).call(card_result,[2]);
								card_next = card_02_status[3];
							}
						}
					}	
		
				card_03_hit.on("click", function(e) {
					if(card_reverse_flag[3]){
						 card_03.width = 150;
						
						if(card_03_status[0]){
							 card_03.image.src = 'imagePath-assets/card_03.png';
							 card_03_status[0] = false;
							}else{
							 card_03.image.src = 'imagePath-assets/card_ura.png';
							 card_03_status[0] = true;
							}
		
						createjs.Tween.get(card_03, {override:true}).to({scaleX:0.1, x:card_x[2]+75}, 300).call(handleComplete_card_03);
						}
					});
		
				function handleComplete_card_03() {
					console.log("handleComplete_card_03");
					
					if(!card_03_status[0]){
							//Tween complete
							card_03.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_03.image.src = 'imagePath-assets/card_03.png';
						}
						
					//カード集計へ
					if(game_status == '01'){
							createjs.Tween.get(card_03, {override:true}).to({scaleX:1, x:card_x[2]}, 300);
							card_pre_num = card_03_status[4];
							card_pre = card_03_status[3];
							game_status = '02';
						}else if(game_status == '03'){
							createjs.Tween.get(card_03, {override:true}).to({scaleX:1, x:card_x[2]}, 300);
							game_status = '02';
						}else{
						//2枚目以降
						console.log("2枚目");
						console.log(card_03_status[0]);
						card_next_num = card_03_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								card_03_status[0] = false;
								createjs.Tween.get(card_03, {override:true}).to({scaleX:1, x:card_x[2]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_03, {override:true}).to({scaleX:1, x:card_x[2]}, 300).call(card_result,[3]);
								card_next = card_03_status[3];
							}					
						}
					}	
				
				card_04_hit.on("click", function(e) {
					if(card_reverse_flag[4]){
						 card_04.width = 150;
						
						if(card_04_status[0]){
							 card_04.image.src = 'imagePath-assets/card_04.png';
							 card_04_status[0] = false;
							}else{
							 card_04.image.src = 'imagePath-assets/card_ura.png';
							 card_04_status[0] = true;
							}
		
						createjs.Tween.get(card_04, {override:true}).to({scaleX:0.1, x:card_x[3]+75}, 300).call(handleComplete_card_04);
						}
					});
		
				function handleComplete_card_04() {
					console.log("handleComplete_card_04");
					if(!card_04_status[0]){
							//Tween complete
							card_04.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_04.image.src = 'imagePath-assets/card_04.png';
						}
						
					//カード集計へ
					if(game_status == '01'){
							createjs.Tween.get(card_04, {override:true}).to({scaleX:1, x:card_x[3]}, 300);
							card_pre_num = card_04_status[4];
							card_pre = card_04_status[3];
							game_status = '02';
						}else if(game_status == '03'){
							createjs.Tween.get(card_04, {override:true}).to({scaleX:1, x:card_x[3]}, 300);
							game_status = '02';
						}else{
						//2枚目以降
						console.log("2枚目");
						console.log(card_04_status[0]);
						card_next_num = card_04_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								card_04_status[0] = false;
								createjs.Tween.get(card_04, {override:true}).to({scaleX:1, x:card_x[3]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_04, {override:true}).to({scaleX:1, x:card_x[3]}, 300).call(card_result,[4]);
								card_next = card_04_status[3];
							}					
						}
					}	
		
				card_05_hit.on("click", function(e) {
					if(card_reverse_flag[5]){
						 card_05.width = 150;
						
						if(card_05_status[0]){
							 card_05.image.src = 'imagePath-assets/card_05.png';
							 card_05_status[0] = false;
							}else{
							 card_05.image.src = 'imagePath-assets/card_ura.png';
							 card_05_status[0] = true;
							}
		
							createjs.Tween.get(card_05, {override:true}).to({scaleX:0.1, x:card_x[4]+75}, 300).call(handleComplete_card_05);
						}
					});
		
				function handleComplete_card_05() {
					console.log("handleComplete_card_05");
					
					if(!card_05_status[0]){
							//Tween complete
							card_05.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_05.image.src = 'imagePath-assets/card_05.png';
						}
						
					//カード集計へ
					if(game_status == '01'){
							createjs.Tween.get(card_05, {override:true}).to({scaleX:1, x:card_x[4]}, 300);
							card_pre_num = card_05_status[4];
							card_pre = card_05_status[3];
							game_status = '02';
						}else if(game_status == '03'){
							createjs.Tween.get(card_05, {override:true}).to({scaleX:1, x:card_x[4]}, 300);
							game_status = '02';
						}else{
						//2枚目以降
						console.log("2枚目");
						console.log(card_05_status[0]);
						card_next_num = card_05_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								card_05_status[0] = false;
								createjs.Tween.get(card_05, {override:true}).to({scaleX:1, x:card_x[4]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_05, {override:true}).to({scaleX:1, x:card_x[4]}, 300).call(card_result,[5]);
								card_next = card_05_status[3];
							}					
						}
					}	
				
				card_06_hit.on("click", function(e) {
					if(card_reverse_flag[6]){
						 card_06.width = 150;
						
						if(card_06_status[0]){
							 card_06.image.src = 'imagePath-assets/card_06.png';
							 card_06_status[0] = false;
							}else{
							 card_06.image.src = 'imagePath-assets/card_ura.png';
							 card_06_status[0] = true;
							}
		
							createjs.Tween.get(card_06, {override:true}).to({scaleX:0.1, x:card_x[5]+75}, 300).call(handleComplete_card_06);
						}
					});
		
				function handleComplete_card_06() {
					console.log("handleComplete_card_06");
					
					if(!card_06_status[0]){
							//Tween complete
							card_06.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_06.image.src = 'imagePath-assets/card_06.png';
						}
						
					//カード集計へ
					if(game_status == '01'){
							createjs.Tween.get(card_06, {override:true}).to({scaleX:1, x:card_x[5]}, 300);
							card_pre_num = card_06_status[4];
							card_pre = card_06_status[3];
							game_status = '02';
						}else if(game_status == '03'){
							createjs.Tween.get(card_06, {override:true}).to({scaleX:1, x:card_x[5]}, 300);
							game_status = '02';
						}else{
						//2枚目以降
						console.log("2枚目");
						console.log(card_06_status[0]);
						card_next_num = card_06_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								card_06_status[0] = false;
								createjs.Tween.get(card_06, {override:true}).to({scaleX:1, x:card_x[5]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_06, {override:true}).to({scaleX:1, x:card_x[5]}, 300).call(card_result,[6]);
								card_next = card_06_status[3];
							}					
						}				
					}	
		
				card_11_hit.on("click", function(e) {
					if(card_reverse_flag[11]){
						 card_11.width = 150;
						
						if(card_11_status[0]){
							 card_11.image.src = 'imagePath-assets/card_01.png';
							 card_11_status[0] = false;
							}else{
							 card_11.image.src = 'imagePath-assets/card_ura.png';
							 card_11_status[0] = true;
							}
							
							createjs.Tween.get(card_11, {override:true}).to({scaleX:0.1, x:card_x[6]+75}, 300).call(handleComplete_card_11);
						}
					});
				
				function handleComplete_card_11() {
					console.log("handleComplete_card_11");
					
					if(!card_11_status[0]){
							//Tween complete
							card_11.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_11.image.src = 'imagePath-assets/card_01.png';
						}
						
					//カード集計へ
					if(game_status == '01'){
							createjs.Tween.get(card_11, {override:true}).to({scaleX:1, x:card_x[6]}, 300);
							card_pre = card_11_status[3];
							card_pre_num = card_11_status[4];
							game_status = '02';
						}else if(game_status == '03'){
							createjs.Tween.get(card_11, {override:true}).to({scaleX:1, x:card_x[6]}, 300);
							game_status = '02';
						}else{
						//2枚目以降
						console.log("2枚目");
						console.log(card_11_status[0]);
						card_next_num = card_11_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								card_11_status[0] = false;
								createjs.Tween.get(card_11, {override:true}).to({scaleX:1, x:card_x[6]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_11, {override:true}).to({scaleX:1, x:card_x[6]}, 300).call(card_result,[11]);
								card_next = card_11_status[3];
							}					
						}
					}	
				
				card_12_hit.on("click", function(e) {
					if(card_reverse_flag[12]){
						 card_12.width = 150;
						
						if(card_12_status[0]){
							 card_12.image.src = 'imagePath-assets/card_02.png';
							 card_12_status[0] = false;
							}else{
							 card_12.image.src = 'imagePath-assets/card_ura.png';
							 card_12_status[0] = true;
							}
							
							createjs.Tween.get(card_12, {override:true}).to({scaleX:0.1, x:card_x[7]+75}, 300).call(handleComplete_card_12);
						}
					});
		
				function handleComplete_card_12() {
					console.log("handleComplete_card_12");
					
					if(!card_12_status[0]){
							//Tween complete
							card_12.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_12.image.src = 'imagePath-assets/card_02.png';
						}
						
					//カード集計へ
					if(game_status == '01'){
							createjs.Tween.get(card_12, {override:true}).to({scaleX:1, x:card_x[7]}, 300);
							card_pre_num = card_12_status[4];
							card_pre = card_12_status[3];
							game_status = '02';
						}else if(game_status == '03'){
							createjs.Tween.get(card_12, {override:true}).to({scaleX:1, x:card_x[7]}, 300);
							game_status = '02';
						}else{
						//2枚目以降
						console.log("2枚目");
						console.log(card_12_status[0]);
						card_next_num = card_12_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								card_12_status[0] = false;
								createjs.Tween.get(card_12, {override:true}).to({scaleX:1, x:card_x[7]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_12, {override:true}).to({scaleX:1, x:card_x[7]}, 300).call(card_result,[12]);
								card_next = card_12_status[3];
							}					
						}
					}	
				
				card_13_hit.on("click", function(e) {
					if(card_reverse_flag[13]){
						 card_13.width = 150;
						
						if(card_13_status[0]){
							 card_13.image.src = 'imagePath-assets/card_03.png';
							 card_13_status[0] = false;
							}else{
							 card_13.image.src = 'imagePath-assets/card_ura.png';
							 card_13_status[0] = true;
							}
							
							createjs.Tween.get(card_13, {override:true}).to({scaleX:0.1, x:card_x[8]+75}, 300).call(handleComplete_card_13);
						}
					});
		
				function handleComplete_card_13() {
					console.log("handleComplete_card_13");
					
					if(!card_13_status[0]){
							//Tween complete
							card_13.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_13.image.src = 'imagePath-assets/card_03.png';
						}
						
					//カード集計へ
					if(game_status == '01'){
							createjs.Tween.get(card_13, {override:true}).to({scaleX:1, x:card_x[8]}, 300);
							card_pre_num = card_13_status[4];
							card_pre = card_13_status[3];
							game_status = '02';
						}else if(game_status == '03'){
							createjs.Tween.get(card_13, {override:true}).to({scaleX:1, x:card_x[8]}, 300);
							game_status = '02';
						}else{
						//2枚目以降
						console.log("2枚目");
						console.log(card_13_status[0]);
						card_next_num = card_13_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								card_13_status[0] = false;
								createjs.Tween.get(card_13, {override:true}).to({scaleX:1, x:card_x[8]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_13, {override:true}).to({scaleX:1, x:card_x[8]}, 300).call(card_result,[13]);
								card_next = card_13_status[3];
							}					
						}
					}	
		
				card_14_hit.on("click", function(e) {
					if(card_reverse_flag[14]){
						 card_14.width = 150;
						
						if(card_14_status[0]){
							 card_14.image.src = 'imagePath-assets/card_04.png';
							 card_14_status[0] = false;
							}else{
							 card_14.image.src = 'imagePath-assets/card_ura.png';
							 card_14_status[0] = true;
							}
							
							createjs.Tween.get(card_14, {override:true}).to({scaleX:0.1, x:card_x[9]+75}, 300).call(handleComplete_card_14);
						}
					});
				
				function handleComplete_card_14() {
					console.log("handleComplete_card_14");
					
					if(!card_14_status[0]){
							//Tween complete
							card_14.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_14.image.src = 'imagePath-assets/card_04.png';
						}
		
					//カード集計へ
					if(game_status == '01'){
							createjs.Tween.get(card_14, {override:true}).to({scaleX:1, x:card_x[9]}, 300);
							card_pre_num = card_14_status[4];
							card_pre = card_14_status[3];
							game_status = '02';
						}else if(game_status == '03'){
							createjs.Tween.get(card_14, {override:true}).to({scaleX:1, x:card_x[9]}, 300);
							game_status = '02';
						}else{
						//2枚目以降
						console.log("2枚目");
						console.log(card_14_status[0]);
						card_next_num = card_14_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								card_14_status[0] = false;
								createjs.Tween.get(card_14, {override:true}).to({scaleX:1, x:card_x[9]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_14, {override:true}).to({scaleX:1, x:card_x[9]}, 300).call(card_result,[14]);
								card_next = card_14_status[3];
							}					
						}
					}	
				
				card_15_hit.on("click", function(e) {
					if(card_reverse_flag[15]){
						 card_15.width = 150;
						
						if(card_15_status[0]){
							 card_15.image.src = 'imagePath-assets/card_05.png';
							 card_15_status[0] = false;
							}else{
							 card_15.image.src = 'imagePath-assets/card_ura.png';
							 card_15_status[0] = true;
							}
							
							createjs.Tween.get(card_15, {override:true}).to({scaleX:0.1, x:card_x[10]+75}, 300).call(handleComplete_card_15);
						}
					});
		
				function handleComplete_card_15() {
					console.log("handleComplete_card_15");
					
					if(!card_15_status[0]){
							//Tween complete
							card_15.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_15.image.src = 'imagePath-assets/card_05.png';
						}
		
					//カード集計へ
					if(game_status == '01'){
							createjs.Tween.get(card_15, {override:true}).to({scaleX:1, x:card_x[10]}, 300);
							card_pre_num = card_15_status[4];
							card_pre = card_15_status[3];
							game_status = '02';
						}else if(game_status == '03'){
							createjs.Tween.get(card_15, {override:true}).to({scaleX:1, x:card_x[10]}, 300);
							game_status = '02';
						}else{
						//2枚目以降
						console.log("2枚目");
						console.log(card_15_status[0]);
						card_next_num = card_15_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								card_15_status[0] = false;
								createjs.Tween.get(card_15, {override:true}).to({scaleX:1, x:card_x[10]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_15, {override:true}).to({scaleX:1, x:card_x[10]}, 300).call(card_result,[15]);
								card_next = card_15_status[3];
							}					
						}
					}	
		
				card_16_hit.on("click", function(e) {
					if(card_reverse_flag[16]){
						 card_16.width = 150;
						
						if(card_16_status[0]){
							 card_16.image.src = 'imagePath-assets/card_06.png';
							 card_16_status[0] = false;
							}else{
							 card_16.image.src = 'imagePath-assets/card_ura.png';
							 card_16_status[0] = true;
							}
							
							createjs.Tween.get(card_16, {override:true}).to({scaleX:0.1, x:card_x[11]+75}, 300).call(handleComplete_card_16);
						}
					});
		
				function handleComplete_card_16() {
					console.log("handleComplete_card_16");
					
					if(!card_16_status[0]){
							//Tween complete
							card_16.image.src = 'imagePath-assets/card_ura.png';
						}else{
							//Tween complete
							card_16.image.src = 'imagePath-assets/card_06.png';
						}
			
					//カード集計へ
					if(game_status == '01'){
							createjs.Tween.get(card_16, {override:true}).to({scaleX:1, x:card_x[11]}, 300);
							card_pre_num = card_16_status[4];
							card_pre = card_16_status[3];
							game_status = '02';
						}else if(game_status == '03'){
							createjs.Tween.get(card_16, {override:true}).to({scaleX:1, x:card_x[11]}, 300);
							game_status = '02';
						}else{
						//2枚目以降
						console.log("2枚目");
						console.log(card_16_status[0]);
						card_next_num = card_16_status[4];
		
						//同じカードならばgame_statusを戻す。card_statusm初期値へ。
						if(card_pre_num == card_next_num){
								card_16_status[0] = false;
								createjs.Tween.get(card_16, {override:true}).to({scaleX:1, x:card_x[11]}, 300);
								card_next_num = 0;
								card_pre_num = 0;
								card_pre = 0;
								game_status = '01';
							}else{
								createjs.Tween.get(card_16, {override:true}).to({scaleX:1, x:card_x[11]}, 300).call(card_result,[16]);
								card_next = card_16_status[3];
							}					
						}
					}	
		
				function card_result(num){
					console.log("card_result");
					
					if(game_status == '02'){
						game_step = game_step + 1;
						console.log(game_step);
						
						_this.game_step.text = game_step;
		
						if(card_pre == card_next) {
							score = score + 1;
							
							console.log("card_pre--> " + card_pre);
							console.log("card_next--> " + card_next);
							console.log(score);
							
							_this.score.text = score;
				
								if(score == 6){
									//_thi.gotoPlay(next);
									console.log("finish");
									game_status = '04';
									for (let i = 0 ; i < 17 ; i++) {
										card_reverse(i);
									}
									
									//元に戻す
									window.setTimeout(Reload, 1000);
									function Reload() {
										//location.reload(true);
										card_pre = 0;
										card_next = 0;
										game_status = '01';
									}
									
								} else {
									card_reverse_flag[card_pre_num] = false;
									card_reverse_flag[card_next_num] = false;
		
									//元に戻す
									card_pre = 0;
									card_next = 0;
									game_status = '01';
		
									console.log("揃った");
									console.log(card_reverse_flag);
									
								}
		
								console.log("game_status ----> " + game_status);
		
							} else {
		
								game_status = '03';
								console.log("game_status ----> " + game_status);
								console.log("card_reverse：card_next ----> " + card_next);
								card_reverse(card_next_num);
							}
						}
		
					/*外れた時元に戻す*/
					function card_reverse(m){
						var card_num = m;
						console.log("card_pre ----> " + card_pre);
						console.log("card_next ----> " + card_next);
						console.log("card_next_num ----> " + card_num);
		
						//card_num = 1;
		
						switch( card_num ){
							case 1 :
								card_01_status[0] = false;
								createjs.Tween.get(card_01, {override:true}).to({scaleX:0.1, x:card_x[0]+75}, 300).call(handleComplete_card_01);
								console.log("case 1：" + card_pre);
								break;
							case 2 :
								card_02_status[0] = false;
								createjs.Tween.get(card_02, {override:true}).to({scaleX:0.1, x:card_x[1]+75}, 300).call(handleComplete_card_02);
								console.log("case 2：" + card_pre);
								break;
							case 3 :
								card_03_status[0] = false;
								createjs.Tween.get(card_03, {override:true}).to({scaleX:0.1, x:card_x[2]+75}, 300).call(handleComplete_card_03);
								console.log("case 3：" + card_pre);
								break;
							case 4 :
								card_04_status[0] = false;
								createjs.Tween.get(card_04, {override:true}).to({scaleX:0.1, x:card_x[3]+75}, 300).call(handleComplete_card_04);
								console.log("case 4：" + card_pre);
								break;
							case 5 :
								card_05_status[0] = false;
								createjs.Tween.get(card_05, {override:true}).to({scaleX:0.1, x:card_x[4]+75}, 300).call(handleComplete_card_05);
								console.log("case 5：" + card_pre);
								break;
							case 6 :
								card_06_status[0] = false;
								createjs.Tween.get(card_06, {override:true}).to({scaleX:0.1, x:card_x[5]+75}, 300).call(handleComplete_card_06);
								console.log("case 6：" + card_pre);
								break;
		
							case 11 :
								card_11_status[0] = false;
								createjs.Tween.get(card_11, {override:true}).to({scaleX:0.1, x:card_x[6]+75}, 300).call(handleComplete_card_11);
								console.log("case 11：" + card_pre);
								break;
							case 12 :
								card_12_status[0] = false;
								createjs.Tween.get(card_12, {override:true}).to({scaleX:0.1, x:card_x[7]+75}, 300).call(handleComplete_card_12);
								console.log("case 12：" + card_pre);
								break;
							case 13 :
								card_13_status[0] = false;
								createjs.Tween.get(card_13, {override:true}).to({scaleX:0.1, x:card_x[8]+75}, 300).call(handleComplete_card_13);
								console.log("case 13：" + card_pre);
								break;
							case 14 :
								card_14_status[0] = false;
								createjs.Tween.get(card_14, {override:true}).to({scaleX:0.1, x:card_x[9]+75}, 300).call(handleComplete_card_14);
								console.log("case 14：" + card_pre);
								break;
							case 15 :
								card_15_status[0] = false;
								createjs.Tween.get(card_15, {override:true}).to({scaleX:0.1, x:card_x[10]+75}, 300).call(handleComplete_card_15);
								console.log("case 15：" + card_pre);
								break;
							case 16 :
								card_16_status[0] = false;
								createjs.Tween.get(card_16, {override:true}).to({scaleX:0.1, x:card_x[11]+75}, 300).call(handleComplete_card_16);
								console.log("case 16：" + card_pre);
								break;
		
							default:
								console.log("case default");
								break;
						}
						console.log( 'typeof card_num = ' + (typeof card_num) );
		
					}
				}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.game_step = new cjs.Text("game_step", "24px 'Futura PT Demi'", "#333333");
	this.game_step.name = "game_step";
	this.game_step.lineHeight = 33;
	this.game_step.lineWidth = 131;
	this.game_step.parent = this;
	this.game_step.setTransform(181,391.25);

	this.score = new cjs.Text("score", "24px 'Futura PT Demi'", "#333333");
	this.score.name = "score";
	this.score.lineHeight = 33;
	this.score.lineWidth = 131;
	this.score.parent = this;
	this.score.setTransform(181,426);

	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(37,424,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(37,386,0.5,0.5);

	this.bug = new lib.bug();
	this.bug.setTransform(-99.45,49.6);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.bug},{t:this.instance_1},{t:this.instance},{t:this.score},{t:this.game_step}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(356.1,250,643.9,209);
// library properties:
lib.properties = {
	id: 'C49CF37110FA4EC681F38EF5BE599AC7',
	width: 1000,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1574312355299", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C49CF37110FA4EC681F38EF5BE599AC7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
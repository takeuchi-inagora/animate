(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sample_atlas_", frames: [[0,0,178,178]]}
];


// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["sample_atlas_"]);
	this.gotoAndStop(0);
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-44.5,-44.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bug, new cjs.Rectangle(-44.5,-44.5,89,89), null);


// stage content:
(lib.sample = function(mode,startPosition,loop) {
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
		
		card_01_status = [false,0,status,1];
		card_02_status = [false,0,status,2];
		card_03_status = [false,0,status,3];
		card_04_status = [false,0,status,4];
		card_05_status = [false,0,status,5];
		card_06_status = [false,0,status,6];
		card_11_status = [false,0,status,1];
		card_12_status = [false,0,status,2];
		card_13_status = [false,0,status,3];
		card_14_status = [false,0,status,4];
		card_15_status = [false,0,status,5];
		card_16_status = [false,0,status,6];
		
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
		function handleComplete_card_01() {
			
			if(!card_01_status[0]){
					//Tween complete
					card_01.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_01, {override:true}).to({scaleX:1, x:card_x[0]}, 300);
				}else{
					//Tween complete
					card_01.image.src = 'imagePath-assets/card_01.png';
					createjs.Tween.get(card_01, {override:true}).to({scaleX:1, x:card_x[0]}, 300);
				}
				
			//カード集計へ
			if(card_pre){
					card_next = card_01_status[3];
				}else{
					card_pre = card_01_status[3];
				}
						
			card_result(1);
			}	
		function handleComplete_card_02() {
			
			if(!card_02_status[0]){
					//Tween complete
					card_02.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_02, {override:true}).to({scaleX:1, x:card_x[1]}, 300);
				}else{
					//Tween complete
					card_02.image.src = 'imagePath-assets/card_02.png';
					createjs.Tween.get(card_02, {override:true}).to({scaleX:1, x:card_x[1]}, 300);
				}
				
			//カード集計へ
			if(card_pre){
					card_next = card_02_status[3];
				}else{
					card_pre = card_02_status[3];
				}
						
			card_result(2);
			}	
		
		function handleComplete_card_03() {
			
			if(!card_03_status[0]){
					//Tween complete
					card_03.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_03, {override:true}).to({scaleX:1, x:card_x[2]}, 300);
				}else{
					//Tween complete
					card_03.image.src = 'imagePath-assets/card_03.png';
					createjs.Tween.get(card_03, {override:true}).to({scaleX:1, x:card_x[2]}, 300);
				}
				
			//カード集計へ
			if(card_pre){
					card_next = card_03_status[3];
				}else{
					card_pre = card_03_status[3];
				}
						
			card_result(3);
			}	
		
		function handleComplete_card_04() {
			
			if(!card_04_status[0]){
					//Tween complete
					card_04.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_04, {override:true}).to({scaleX:1, x:card_x[3]}, 300);
				}else{
					//Tween complete
					card_04.image.src = 'imagePath-assets/card_04.png';
					createjs.Tween.get(card_04, {override:true}).to({scaleX:1, x:card_x[3]}, 300);
				}
				
			//カード集計へ
			if(card_pre){
					card_next = card_04_status[3];
				}else{
					card_pre = card_04_status[3];
				}
						
			card_result(4);
			}	
		
		function handleComplete_card_05() {
			
			if(!card_05_status[0]){
					//Tween complete
					card_05.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_05, {override:true}).to({scaleX:1, x:card_x[4]}, 300);
				}else{
					//Tween complete
					card_05.image.src = 'imagePath-assets/card_05.png';
					createjs.Tween.get(card_05, {override:true}).to({scaleX:1, x:card_x[4]}, 300);
				}
				
			//カード集計へ
			if(card_pre){
					card_next = card_05_status[3];
				}else{
					card_pre = card_05_status[3];
				}
						
			card_result(5);
				
			}	
		
		function handleComplete_card_06() {
			
			if(!card_06_status[0]){
					//Tween complete
					card_06.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_06, {override:true}).to({scaleX:1, x:card_x[5]}, 300);
				}else{
					//Tween complete
					card_06.image.src = 'imagePath-assets/card_06.png';
					createjs.Tween.get(card_06, {override:true}).to({scaleX:1, x:card_x[5]}, 300);
				}
				
			//カード集計へ
			if(card_pre){
					card_next = card_06_status[3];
				}else{
					card_pre = card_06_status[3];
				}
						
			card_result(6);
				
			}	
		
		card_01.on("click", function(e) {
			 card_01.width = 150;
			 console.log( card_01.scaleX );
			 console.log(card_01.width);
			 console.log(card_01[0]);
			 console.log("--------------------------");
			
			if(card_01_status[0]){
				 //card_01.image.src = 'imagePath-assets/card_01.png';
				 console.log("card_01 click");
				 console.log(card_01[0]);
				 createjs.Tween.get(card_01, {override:true}).to({scaleX:0.1, x:card_x[0]+75}, 300).call(handleComplete_card_01);
				 card_01_status[0] = false;
				}else{
				 //card_01.image.src = 'imagePath-assets/card_ura.png';
				 console.log("card_01 click");
				 createjs.Tween.get(card_01, {override:true}).to({scaleX:0.1, x:card_x[0]+75}, 300).call(handleComplete_card_01);
				 card_01_status[0] = true;
				}
			
			});
		
		card_02.on("click", function(e) {
			 card_02.width = 150;
			
			if(card_02_status[0]){
				 card_02.image.src = 'imagePath-assets/card_02.png';
				 createjs.Tween.get(card_02, {override:true}).to({scaleX:0.1, x:card_x[1]+75}, 300).call(handleComplete_card_02);
				 card_02_status[0] = false;
				}else{
				 card_02.image.src = 'imagePath-assets/card_ura.png';
				 createjs.Tween.get(card_02, {override:true}).to({scaleX:0.1, x:card_x[1]+75}, 300).call(handleComplete_card_02);
				 card_02_status[0] = true;
				}
			
			});
		
		card_03.on("click", function(e) {
			 card_03.width = 150;
			
			if(card_03_status[0]){
				 card_03.image.src = 'imagePath-assets/card_03.png';
				 createjs.Tween.get(card_03, {override:true}).to({scaleX:0.1, x:card_x[2]+75}, 300).call(handleComplete_card_03);
				 card_03_status[0] = false;
				}else{
				 card_03.image.src = 'imagePath-assets/card_ura.png';
				 createjs.Tween.get(card_03, {override:true}).to({scaleX:0.1, x:card_x[2]+75}, 300).call(handleComplete_card_03);
				 card_03_status[0] = true;
				}
			
		});
		
		card_04.on("click", function(e) {
			 card_04.width = 150;
			
			if(card_04_status[0]){
				 card_04.image.src = 'imagePath-assets/card_04.png';
				 createjs.Tween.get(card_04, {override:true}).to({scaleX:0.1, x:card_x[3]+75}, 300).call(handleComplete_card_04);
				 card_04_status[0] = false;
				}else{
				 card_04.image.src = 'imagePath-assets/card_ura.png';
				 createjs.Tween.get(card_04, {override:true}).to({scaleX:0.1, x:card_x[3]+75}, 300).call(handleComplete_card_04);
				 card_04_status[0] = true;
				}
			
		});
		
		card_05.on("click", function(e) {
			 card_05.width = 150;
			
			if(card_05_status[0]){
				 card_05.image.src = 'imagePath-assets/card_05.png';
				 createjs.Tween.get(card_05, {override:true}).to({scaleX:0.1, x:card_x[4]+75}, 300).call(handleComplete_card_05);
				 card_05_status[0] = false;
				}else{
				 card_05.image.src = 'imagePath-assets/card_ura.png';
				 createjs.Tween.get(card_05, {override:true}).to({scaleX:0.1, x:card_x[4]+75}, 300).call(handleComplete_card_05);
				 card_05_status[0] = true;
				}
		});
		
		card_06.on("click", function(e) {
			 card_06.width = 150;
			
			if(card_06_status[0]){
				 card_06.image.src = 'imagePath-assets/card_06.png';
				 createjs.Tween.get(card_06, {override:true}).to({scaleX:0.1, x:card_x[5]+75}, 300).call(handleComplete_card_06);
				 card_06_status[0] = false;
				}else{
				 card_06.image.src = 'imagePath-assets/card_ura.png';
				 createjs.Tween.get(card_06, {override:true}).to({scaleX:0.1, x:card_x[5]+75}, 300).call(handleComplete_card_06);
				 card_06_status[0] = true;
				}
		});
		
		function handleComplete_card_11() {
			
			if(!card_11_status[0]){
					//Tween complete
					card_11.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_11, {override:true}).to({scaleX:1, x:card_x[6]}, 300);
				}else{
					//Tween complete
					card_11.image.src = 'imagePath-assets/card_01.png';
					createjs.Tween.get(card_11, {override:true}).to({scaleX:1, x:card_x[6]}, 300);
				}
				
			//カード集計へ
			if(card_pre){
					card_next = card_11_status[3];
				}else{
					card_pre = card_11_status[3];
				}
						
			card_result(11);
			}	
			
		function handleComplete_card_12() {
			
			if(!card_12_status[0]){
					//Tween complete
					card_12.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_12, {override:true}).to({scaleX:1, x:card_x[7]}, 300);
				}else{
					//Tween complete
					card_12.image.src = 'imagePath-assets/card_02.png';
					createjs.Tween.get(card_12, {override:true}).to({scaleX:1, x:card_x[7]}, 300);
				}
				
			//カード集計へ
			if(card_pre){
					card_next = card_12_status[3];
				}else{
					card_pre = card_12_status[3];
				}
						
			card_result(12);
			}	
		
		function handleComplete_card_13() {
			
			if(!card_13_status[0]){
					//Tween complete
					card_13.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_13, {override:true}).to({scaleX:1, x:card_x[8]}, 300);
				}else{
					//Tween complete
					card_13.image.src = 'imagePath-assets/card_03.png';
					createjs.Tween.get(card_13, {override:true}).to({scaleX:1, x:card_x[8]}, 300);
				}
				
			//カード集計へ
			if(card_pre){
					card_next = card_13_status[3];
				}else{
					card_pre = card_13_status[3];
				}
						
			card_result(13);
			}	
		
		function handleComplete_card_14() {
			
			if(!card_14_status[0]){
					//Tween complete
					card_14.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_14, {override:true}).to({scaleX:1, x:card_x[9]}, 300);
				}else{
					//Tween complete
					card_14.image.src = 'imagePath-assets/card_04.png';
					createjs.Tween.get(card_14, {override:true}).to({scaleX:1, x:card_x[9]}, 300);
				}
			//カード集計へ
			if(card_pre){
					card_next = card_14_status[3];
				}else{
					card_pre = card_14_status[3];
				}
						
			card_result(14);
			}	
		
		function handleComplete_card_15() {
			
			if(!card_15_status[0]){
					//Tween complete
					card_15.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_15, {override:true}).to({scaleX:1, x:card_x[10]}, 300);
				}else{
					//Tween complete
					card_15.image.src = 'imagePath-assets/card_05.png';
					createjs.Tween.get(card_15, {override:true}).to({scaleX:1, x:card_x[10]}, 300);
				}
			//カード集計へ
			if(card_pre){
					card_next = card_15_status[3];
				}else{
					card_pre = card_15_status[3];
				}
						
			card_result(15);
			}	
		
		function handleComplete_card_16() {
			
			if(!card_16_status[0]){
					//Tween complete
					card_16.image.src = 'imagePath-assets/card_ura.png';
					createjs.Tween.get(card_16, {override:true}).to({scaleX:1, x:card_x[11]}, 300);
				}else{
					//Tween complete
					card_16.image.src = 'imagePath-assets/card_06.png';
					createjs.Tween.get(card_16, {override:true}).to({scaleX:1, x:card_x[11]}, 300);
				}
				
			//カード集計へ
			if(card_pre){
					card_next = card_16_status[3];
				}else{
					card_pre = card_16_status[3];
				}
						
			card_result(11);
			}	
		
			
		card_11.on("click", function(e) {
			 card_11.width = 150;
			
			if(card_11_status[0]){
				 card_11.image.src = 'imagePath-assets/card_01.png';
				 createjs.Tween.get(card_11, {override:true}).to({scaleX:0.1, x:card_x[6]+75}, 300).call(handleComplete_card_11);
				 card_11_status[0] = false;
				}else{
				 card_11.image.src = 'imagePath-assets/card_ura.png';
				 createjs.Tween.get(card_11, {override:true}).to({scaleX:0.1, x:card_x[6]+75}, 300).call(handleComplete_card_11);
				 card_11_status[0] = true;
				}
		});
		card_12.on("click", function(e) {
			 card_12.width = 150;
			
			if(card_12_status[0]){
				 card_12.image.src = 'imagePath-assets/card_02.png';
				 createjs.Tween.get(card_12, {override:true}).to({scaleX:0.1, x:card_x[7]+75}, 300).call(handleComplete_card_12);
				 card_12_status[0] = false;
				}else{
				 card_12.image.src = 'imagePath-assets/card_ura.png';
				 createjs.Tween.get(card_12, {override:true}).to({scaleX:0.1, x:card_x[7]+75}, 300).call(handleComplete_card_12);
				 card_12_status[0] = true;
				}
		});
		
		card_13.on("click", function(e) {
			 card_13.width = 150;
			
			if(card_13_status[0]){
				 card_13.image.src = 'imagePath-assets/card_03.png';
				 createjs.Tween.get(card_13, {override:true}).to({scaleX:0.1, x:card_x[8]+75}, 300).call(handleComplete_card_13);
				 card_13_status[0] = false;
				}else{
				 card_13.image.src = 'imagePath-assets/card_ura.png';
				 createjs.Tween.get(card_13, {override:true}).to({scaleX:0.1, x:card_x[8]+75}, 300).call(handleComplete_card_13);
				 card_13_status[0] = true;
				}
		});
		
		card_14.on("click", function(e) {
			 card_14.width = 150;
			
			if(card_14_status[0]){
				 card_14.image.src = 'imagePath-assets/card_04.png';
				 createjs.Tween.get(card_14, {override:true}).to({scaleX:0.1, x:card_x[9]+75}, 300).call(handleComplete_card_14);
				 card_14_status[0] = false;
				}else{
				 card_14.image.src = 'imagePath-assets/card_ura.png';
				 createjs.Tween.get(card_14, {override:true}).to({scaleX:0.1, x:card_x[9]+75}, 300).call(handleComplete_card_14);
				 card_14_status[0] = true;
				}
		});
		
		card_15.on("click", function(e) {
			 card_15.width = 150;
			
			if(card_15_status[0]){
				 card_15.image.src = 'imagePath-assets/card_05.png';
				 createjs.Tween.get(card_15, {override:true}).to({scaleX:0.1, x:card_x[10]+75}, 300).call(handleComplete_card_15);
				 card_15_status[0] = false;
				}else{
				 card_15.image.src = 'imagePath-assets/card_ura.png';
				 createjs.Tween.get(card_15, {override:true}).to({scaleX:0.1, x:card_x[10]+75}, 300).call(handleComplete_card_15);
				 card_15_status[0] = true;
				}
		});
		
		card_16.on("click", function(e) {
			 card_16.width = 150;
			
			if(card_16_status[0]){
				 card_16.image.src = 'imagePath-assets/card_06.png';
				 createjs.Tween.get(card_16, {override:true}).to({scaleX:0.1, x:card_x[11]+75}, 300).call(handleComplete_card_16);
				 card_16_status[0] = false;
				}else{
				 card_16.image.src = 'imagePath-assets/card_ura.png';
				 createjs.Tween.get(card_16, {override:true}).to({scaleX:0.1, x:card_x[11]+75}, 300).call(handleComplete_card_16);
				 card_16_status[0] = true;
				}
		});
		
		
		
		function card_result(num){
			game_step++;
			console.log(game_step);
			
			if(card_pre && card_next){
				if(card_pre == card_next) {
					score++;
					
					console.log(score);
		
					if(game_step == 6){
						//_thi.gotoPlay(next);
						console.log("終わり");
					}
				}
						
			card_reverse(card_pre);
			card_reverse(card_next);
				
			//元に戻す
			card_pre = false;
			card_next = false;
			
			}
			
			
		}
		
		function card_reverse(m){
			switch (m) {
				case 1 :
					handleComplete_card_01();
					break;
				case 2 :
					handleComplete_card_02();
					break;
				case 3 :
					handleComplete_card_03();
					break;
				case 4 :
					handleComplete_card_04();
					break;
				case 5 :
					handleComplete_card_05();
					break;
				
				case 6 :
					handleComplete_card_06();
					break;
				case 11 :
					handleComplete_card_11();
					break;
				case 12 :
					handleComplete_card_12();
					break;
				case 13 :
					handleComplete_card_13();
					break;
				case 14 :
					handleComplete_card_14();
					break;
				case 15 :
					handleComplete_card_15();
					break;
				case 16 :
					handleComplete_card_16();
					break;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.bug = new lib.bug();
	this.bug.setTransform(108.55,74.6);

	this.timeline.addTween(cjs.Tween.get(this.bug).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(564.1,280.1,-411,-161.00000000000003);
// library properties:
lib.properties = {
	id: 'C49CF37110FA4EC681F38EF5BE599AC7',
	width: 1000,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sample_atlas_.png?1573543196509", id:"sample_atlas_"}
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
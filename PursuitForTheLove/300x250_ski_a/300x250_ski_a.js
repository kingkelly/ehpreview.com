(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_ski_a_atlas_", frames: [[0,756,300,41],[0,0,300,250],[0,252,300,250],[0,504,300,250]]}
];


// symbols:



(lib.bbWoody = function() {
	this.initialize(ss["300x250_ski_a_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dblCabin = function() {
	this.initialize(ss["300x250_ski_a_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dblFamily = function() {
	this.initialize(ss["300x250_ski_a_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dblHike = function() {
	this.initialize(ss["300x250_ski_a_atlas_"]);
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


(lib.woody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggApIAAhRIBBAAIAAATIgrAAIAAANIAnAAIAAARIgnAAIAAAMIArAAIAAAUg");
	this.shape.setTransform(266.75,34.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMApIgQgZIgBAAIgJAAIAAAZIgXAAIAAhRIAmAAQASAAAJAJQAHAHAAAMIAAAAQAAASgRAGIAUAdgAgOAAIAOAAQAGAAADgDQADgDAAgEQAAgLgMAAIgOAAg");
	this.shape_1.setTransform(257.95,34.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAeQgNgMAAgRIAAgBQAAgQANgNQAMgNASAAQATAAANANQAMAMAAARQAAASgMAMQgNANgTAAQgSAAgMgNgAgOgPQgGAHAAAIQAAAJAGAHQAGAGAIAAQAJAAAGgGQAGgGAAgJIAAgBQAAgIgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_2.setTransform(247.65,34.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUApIAAguIgUAfIAAAAIgVgfIAAAuIgVAAIAAhRIAXAAIATAgIAUggIAYAAIAABRg");
	this.shape_3.setTransform(236.9,34.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATApIgjgsIAAAsIgVAAIAAhRIAVAAIAgAqIAAgqIAWAAIAABRg");
	this.shape_4.setTransform(222.15,34.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALApIgPgZIgBAAIgJAAIAAAZIgWAAIAAhRIAlAAQASAAAJAJQAHAHAAAMIAAAAQAAASgRAGIATAdgAgOAAIAOAAQAGAAADgDQADgDAAgEQAAgLgMAAIgOAAg");
	this.shape_5.setTransform(212.8,34.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVApIgFgOIgfAAIgGAOIgYAAIAjhRIAVAAIAjBRgAAJAJIgJgWIgIAWIARAAg");
	this.shape_6.setTransform(202.8,34.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggApIAAhRIBAAAIAAATIgqAAIAAANIAnAAIAAARIgnAAIAAAMIArAAIAAAUg");
	this.shape_7.setTransform(193.5,34.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeApIAAhRIAWAAIAAA9IAnAAIAAAUg");
	this.shape_8.setTransform(185.2,34.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D40031").s().p("ApRCQIAAkfISjAAIAAEfg");
	this.shape_9.setTransform(225.45,35.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_2
	this.instance = new lib.bbWoody();
	this.instance.setTransform(0,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woody, new cjs.Rectangle(0,20.9,300,46.1), null);


(lib.underline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,1).p("AogAAIRBAA");
	this.shape.setTransform(88.5,-92);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.underline, new cjs.Rectangle(33,-93,111,2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dblFamily();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,300,250), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwCdQgZAAgBgPQABgGAIgJQAKgHAAgJIAAiBIgKAAQgQAAAAgSQAAgQASAAIAJAAIAAgMQAAgxAZgXQAVgUAhAAQAbAAAQAPQAOANAAAUQAAAPgJAJQgJAIgLAAQgWAAgGgWQgDgVgNAAQgTAAAAAcQAAAVAQASIAfAAQATAAAAAQQAAASgVAAIgQAAIAACAQAAAJAJAIQAKAJAAAGQAAAPgaAAg");
	this.shape.setTransform(21.6,52.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSBTQgjgdAAgzQAAgxAkghQAiggAxABQAzAAAfAbQAiAdAAA0QAAAygiAgQghAggzgBQgyAAgggcgAgogiQAAAlANAiQAQApAXAAQAcgBAAgrQAAgkgMgiQgQgpgWAAQgeAAAAArg");
	this.shape_1.setTransform(-0.125,57.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBSQgfgdAAgxQAAgxAeggQAfghAxAAQAqAAAZAYQAYAWAAAeQABAigiAAIhjAAQAKA3AzAAQAaAAATgVQAHgGAHAAQANAAgBAPQAAAHgDAJQgIAWgVAOQgYAQggAAQg0AAgegdgAgXg+QgKAOgBAVIBEAAIACgKQAAgogiAAQgPAAgKAPg");
	this.shape_2.setTransform(224.85,19.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbBkQgMgKgJgWIgqh3QgCgGgNgJQgKgIAAgNQAAgRAdAAIBJAAQAXAAAAARQAAALgKAHQgJAHAAAIQACAcAZBFQAGAPAHAAQAHAAAKgZQAPghABgWQAAgOgKgPQgKgPAAgLQAAgPAKgJQAKgJARAAQAjAAAAAjQAAAVgNAqQgNAmgPAiQgOAcgMALQgOAMgXAAQgYAAgPgLg");
	this.shape_3.setTransform(201.025,19.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSBTQgjgdAAgyQAAgzAkggQAiggAxABQAzgBAfAcQAiAeAAAzQAAAygiAgQghAggzAAQgyAAgggdgAgogiQAAAlANAiQAQApAXAAQAcAAAAgsQAAgkgMgiQgQgogWAAQgeAAAAAqg");
	this.shape_4.setTransform(176.975,19.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUCPQgcAAAAgQQAAgIAKgJQAKgJAAgJIAAi3QAAgJgKgJQgKgJAAgIQAAgQAcAAIA9AAQAaAAAAAQQAAAIgIAJQgKAJAAAJIAACtQAAAPACAFQAEAFAJAAIAkAAQAWAAAJgRIAMgXQAHgLALAAQAQAAAAAVQgCAagLAcQgCAHgEACQgEADgKAAg");
	this.shape_5.setTransform(152.5507,16.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhFBSQgggdAAgxQAAgxAfggQAfghAxAAQApAAAaAYQAZAWAAAeQAAAigiAAIhjAAQAKA3AzAAQAaAAATgVQAHgGAGAAQANAAABAPQgBAHgDAJQgIAWgVAOQgYAQggAAQgzAAgfgdgAgXg+QgJAOgBAVIBDAAIACgKQgBgoggAAQgPAAgLAPg");
	this.shape_6.setTransform(119.8,19.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnCdQgaAAAAgPQAAgGAJgIQAKgJAAgIIAAhBQAAgwgcAAQgcAAAAAsIAABFQAAAIAJAJQAJAHAAAHQAAAPgaAAIg8AAQgaAAAAgPQAAgHAKgHQAJgJAAgIIAAjDQAAgRgKgHIgLgIQgEgEAAgGQAAgKAcgLQAagJASAAQAUAAAAAWIAAByIACAAQAWgnAsABQBHAAAABfIAABKQAAAIAJAJQAJAIAAAGQAAAPgZAAg");
	this.shape_7.setTransform(95.375,14.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzBsQgKgWAAgvIAAhMIgMAAQgRgBAAgQQAAgRAUAAIAFAAQAbAAANgkIAKgZQAGgLAJAAQAIAAADAGQACAFAAAPIAAAuIAoAAQASAAAAAQQAAASgUAAIgmAAIAABzQAAASADAGQADAJAJAAQAQAAAAgjQAAgcAYAAQAXAAAAAdQAAAbgQASQgTAWgnAAQgyAAgSgkg");
	this.shape_8.setTransform(73.375,16.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag7BsQgZAAAAgPQAAgHAJgHQAJgJAAgIIAAhhQABgRgKgIIgLgHQgEgEAAgHQAAgKAbgJQAZgKAUAAQASAAAAAWIAAATIACAAQAHgTAQgMQAOgKAPAAQAlAAAAAnQAAAngkgBQgHAAgIgCQgJgCgGAAQgRAAAAAbIAABFQAAAIAJAJQAKAHAAAHQAAAPgaAAg");
	this.shape_9.setTransform(46.225,19.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhSBTQgjgdAAgyQAAgzAkggQAiggAxABQAzgBAfAcQAiAeAAAzQAAAygiAgQghAggzAAQgyAAgggdgAgogiQAAAlANAiQAQApAXAAQAcAAAAgsQAAgkgMgiQgQgogWAAQgeAAAAAqg");
	this.shape_10.setTransform(23.475,19.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhNCPQgcAAAAgQQAAgIAKgJQAKgJAAgJIAAi3QAAgJgKgJQgKgJAAgIQAAgQAcAAICYAAQARAAADANIALAwQACALgFAHQgFAFgHAAQgKAAgIgJIgMgWQgJgRgWAAIgaAAQgMAAAAARIAABQIAZAAQASAAAFgNIAFgLQAEgFAHAAQAQAAAAAuQAAAwgQAAQgGAAgEgFIgGgMQgFgNgSAAIgZAAIAABCQAAAJAJAJQAJAJAAAIQAAAQgaAAg");
	this.shape_11.setTransform(-0.5609,16.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-15,-16,262,103.2), null);


(lib.roller = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBbQgVgOAAgVQAAgJAHgHQAGgHAJABQASAAAQAVQAQAVANAAQATABAAgTQAAgSgogTQgdgNgOgMQgPgQAAgYQAAgeAZgRQAXgRAjABQAngBAYAOQAVAPAAATQAAAJgGAIQgGAGgJABQgSgBgPgTQgPgTgPgBQgQAAAAAQQgBAKAIAHQAHAIAdANQAcAOAMAMQARAQgBAYQAAAdgWASQgZARgnABQgogBgZgRg");
	this.shape.setTransform(158.4,-43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEBQQgegdAAgvQAAgwAegfQAeggAwAAQApAAAZAXQAXAVAAAeQAAAhggAAIhhAAQAKA2AxAAQAaAAATgVQAGgGAGAAQANAAAAAPQAAAHgDAIQgIAWgVANQgXAQgfAAQgyAAgfgcgAgWg9QgKAOAAAVIBBAAIACgKQAAgoggAAQgPAAgKAPg");
	this.shape_1.setTransform(137.675,-43.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhvCFQAAgEAKgMQAFgHAAgOIAAiqQAAgRgKgIIgKgIQgEgDAAgHQAAgKAbgKQAYgIATAAQAQAAAAAUIAAAIIADAAQAVgcAoAAQApAAAYAaQAaAdAAA2QAAAtgZAeQgaAggsAAQgbAAgWgOIAAAgQAAAKAKAGQAOAHAAAHQAAAPgyAIQgWAEgOAAQgaAAAAgNgAgXg+IAAASQAAAiANAWQAMAYASAAQAdAAABgsQAAgggMgdQgOghgUAAQgbAAAAAog");
	this.shape_2.setTransform(113.525,-40.0298);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhRBSQghgdgBgyQABgwAjggQAigfAvABQAygBAeAbQAiAdAAAxQgBAyghAfQghAegxABQgxAAgggbgAgmghQAAAkAMAhQAPAnAWAAQAcAAAAgqQAAgjgMghQgPgogWAAQgcAAAAAqg");
	this.shape_3.setTransform(88.25,-43.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaCZQgZAAABgOQgBgHAJgIQAKgIgBgIIAAi+QAAgRgLgJIgJgHQgEgDAAgGQAAgKAcgKQAZgIARAAQAaAAAAAWIAADuQAAAIAJAIQAKAIgBAHQAAAOgZAAg");
	this.shape_4.setTransform(69.05,-48.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhQB/QgfgTAAgYQAAgOAJgHQAHgIALABQAOAAAKAIQAHAFAKAOQAKANAHAGQAKAIAOAAQAiAAAAgdQAAgRgPgLQgKgJgkgRQglgUgRgUQgQgVAAgbQAAgmAcgXQAdgXAuABQAxgBAdAUQAaAQAAAYQAAAMgIAHQgHAIgMAAQgWAAgTgaQgKgNgEgFQgJgHgLgBQgMAAgJAHQgKAHAAANQAAAgA9AbQAmAQAQAQQAWAWAAAhQAAAjgcAWQgeAag2AAQgvgBghgSg");
	this.shape_5.setTransform(50.275,-47.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBBbQgVgOAAgVQAAgJAHgHQAGgHAJABQASAAAQAVQAQAVANAAQATABAAgTQAAgSgogTQgdgNgOgMQgPgQAAgYQAAgeAZgRQAXgRAjABQAngBAYAOQAVAPAAATQAAAJgGAIQgGAGgJABQgSgBgPgTQgPgTgPgBQgQAAAAAQQgBAKAIAHQAHAIAdANQAcAOAMAMQARAQgBAYQAAAdgWASQgZARgnABQgogBgZgRg");
	this.shape_6.setTransform(176.4,-91.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnCXQgDgFAAgPIAAgHIgDAAQgVAggnAAQgqAAgZgcQgbgdAAgyQAAgxAcgdQAcgfAvAAQAYAAATALIAAgkQAAgTgNgIQgMgHAAgIQAAgKAcgJQAZgJATAAQAZAAAAAWIAADiQAAAMAKAFIAKAHQAFAEAAAGQAAAKgZAKQgXAJgUAAQgLAAgEgFgAgxATQAAAgAMAcQAOAhAUAAQANAAAHgNQAHgLAAgTIAAgOQAAgigNgXQgMgXgSAAQgdAAgBAsg");
	this.shape_7.setTransform(154.175,-96.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBpQgZAAAAgOQAAgGAJgJQAJgIAAgIIAAhFQAAgpgbAAQgcAAAAAsIAABCQAAAIAJAIQAJAJAAAGQAAAOgZAAIg7AAQgZAAAAgOQAAgGAJgJQAJgIAAgIIAAhgQAAgQgKgGIgKgIQgEgEAAgGQAAgKAbgJQAZgKATABQAKAAAEAEQAEAFAAALIAAARIADAAQATglAsAAQBGAAAABUIAABQQAAAIAJAIQAJAJAAAGQAAAOgZAAg");
	this.shape_8.setTransform(128.025,-92.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEBQQgegdAAgvQAAgwAegfQAeggAwAAQApAAAZAXQAXAVAAAeQAAAhggAAIhhAAQAKA2AxAAQAaAAATgVQAGgGAGAAQANAAAAAPQAAAHgDAIQgIAWgVANQgXAQgfAAQgyAAgfgcgAgWg9QgKAOAAAVIBBAAIACgKQAAgoggAAQgPAAgKAPg");
	this.shape_9.setTransform(103.975,-91.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaCbQgZAAAAgOQAAgHAJgIQAJgIAAgIIAAhgQAAgQgLgJIgJgGQgDgEgBgGQABgKAagJQAYgJATAAQAaAAABAXIAACOQgBAIAKAIQAJAIAAAHQAAAOgaAAgAgfhXQgMgLAAgSQAAgRAMgLQANgKASAAQAUAAAMAKQAMALAAARQAAASgMALQgMALgUAAQgSAAgNgLg");
	this.shape_10.setTransform(86.4,-97.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag6BpQgZAAAAgOQABgGAIgJQAJgIAAgIIAAheQABgRgKgHIgKgIQgEgEAAgGQAAgKAbgJQAZgJATAAQARgBAAAWIAAATIADAAQAGgUAPgKQAOgLAOABQAlAAAAAmQAAAlgkAAQgHAAgHgCQgJgCgGAAQgQAAAAAbIAABCQAAAIAJAIQAJAJAAAGQAAAOgZAAg");
	this.shape_11.setTransform(70.75,-92.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhLCLQgcAAAAgPQAAgIAKgIQAKgJAAgJIAAiyQAAgKgKgIQgKgJAAgIQAAgQAcAAICUAAQARAAADANIAKAvQADAKgFAIQgFAEgHAAQgKAAgHgJIgMgVQgJgQgVAAIgaAAQgMAAAAAQIAABPIAZAAQARAAAGgOIAEgLQAEgEAGAAQARAAAAAuQAAAtgQABQgGgBgEgEIgFgMQgGgMgRAAIgZAAIAABAQAAAJAJAJQAJAIAAAIQAAAPgaAAg");
	this.shape_12.setTransform(50.1417,-95.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag5BpQgZAAAAgOQgBgGAKgJQAJgIAAgIIAAheQAAgRgKgHIgKgIQgEgEAAgGQAAgKAagJQAagJASAAQASgBAAAWIAAATIACAAQAHgUAPgKQANgLAPABQAlAAAAAmQAAAlgkAAQgHAAgIgCQgIgCgFAAQgRAAAAAbIAABCQAAAIAJAIQAJAJAAAGQAAAOgZAAg");
	this.shape_13.setTransform(168.9,-140.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhEBQQgegdAAgvQAAgwAegfQAeggAwAAQApAAAZAXQAXAVAAAeQAAAhggAAIhhAAQAKA2AxAAQAaAAATgVQAGgGAGAAQANAAAAAPQAAAHgDAIQgIAWgVANQgXAQgfAAQgyAAgfgcgAgWg9QgKAOAAAVIBBAAIACgKQAAgoggAAQgPAAgKAPg");
	this.shape_14.setTransform(148.125,-140.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyBpQgJgVgBguIAAhKIgMAAQgPgBgBgPQAAgRAUAAIAEAAQAbAAANgjIAJgZQAGgLAJAAQAIAAACAGQACAFAAAPIAAAtIAoAAQASAAAAAPQAAASgUAAIglAAIAABwQAAARADAHQACAIAJAAQAQAAAAgiQAAgbAXAAQAXAAAAAdQgBAagPARQgSAWgmAAQgxAAgSgkg");
	this.shape_15.setTransform(128.3,-143.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAmBpQgZAAAAgOQAAgGAJgJQAJgIAAgIIAAhFQAAgpgbAAQgcAAAAAsIAABCQAAAIAJAIQAJAJAAAGQAAAOgZAAIg7AAQgZAAAAgOQAAgGAJgJQAJgIAAgIIAAhgQAAgQgKgGIgKgIQgEgEAAgGQAAgKAbgJQAZgKATABQAKAAAEAEQAEAFAAALIAAARIADAAQATglAsAAQBGAAAABUIAABQQAAAIAJAIQAJAJAAAGQAAAOgZAAg");
	this.shape_16.setTransform(106.075,-140.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaCbQgZAAAAgOQAAgHAJgIQAJgIAAgIIAAhgQAAgQgLgJIgJgGQgEgEABgGQAAgKAagJQAZgJARAAQAbAAAAAXIAACOQABAIAIAIQAJAIAAAHQABAOgZAAgAgfhXQgNgLAAgSQAAgRANgLQAMgKATAAQAUAAAMAKQAMALAAARQAAASgMALQgMALgUAAQgTAAgMgLg");
	this.shape_17.setTransform(86.45,-145.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA6CGQgKgIgGgUIgghkIggBbQgLAcgHAHQgKALgWAAQgTAAgKgIQgIgIgJgVIhHjAQgGgPgKgIQgJgHAAgJQAAgPAWAAIBOAAQAWAAAAAPQAAAKgLAHQgLAGACALIA0CaQACAHAFAAQAEAAACgHIAohxIgMgkQgFgPgLgJQgIgHAAgJQAAgPAVAAIBLAAQAVAAABAQQAAAKgLAGQgMAGADALIArCaQABAJAFgBQAFAAABgIIArifQACgJgLgIQgIgGAAgIQAAgOAUAAIApAAQASAAAAAQQAAAIgKAHQgMAIgCAGIg3DCQgKAbgHAIQgLALgVAAQgTAAgKgJg");
	this.shape_18.setTransform(58.7,-143.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roller, new cjs.Rectangle(36,-175.2,152.5,160.39999999999998), null);


(lib.photo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dblCabin();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo3, new cjs.Rectangle(0,0,300,250), null);


(lib.photo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dblHike();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo1, new cjs.Rectangle(0,0,300,250), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiZA5IALgNQAaAXAeAAQAQAAAKgHQAKgJAAgMIAAAAQAAgMgIgHQgKgHgYgFQgdgGgNgKQgNgKABgUIAAAAQgBgUAPgMQAQgMAXAAQAgAAAYATIgKAPQgVgSgaAAQgPAAgKAHQgJAIAAALIAAABQAAALAIAIQAKAGAaAGQAbAGAMAKQAOAKAAATIAAAAQgBAVgPANQgPAMgZAAQgkAAgegagACIBRIAAiDIg7BWIgBAAIg7hVIAACCIgRAAIAAihIARAAIA8BYIA7hYIASAAIAAChg");
	this.shape.setTransform(77.4016,-326.6202,0.169,0.169);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C42939").s().p("AAQCXQgQgVgXgLQgZgKgaAFQgZAEgTARIDOlEQAIgMANAFQANAGgEANIhXF3QgBgZgOgWg");
	this.shape_1.setTransform(57.2956,-326.3203,0.169,0.169);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsDFQgNgGADgNIBWl3QABAaAPAVQAPAVAYALQAZAKAagFQAagEAUgTIjQFGQgFAIgIAAIgHgBg");
	this.shape_2.setTransform(55.3229,-319.4597,0.169,0.169);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBErIAAncIi2AAIAAh5IHvAAIAAB5Ii2AAIAAHcg");
	this.shape_3.setTransform(68.0615,-322.9703,0.169,0.169);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai/DtQhFhEAAiDIAAlVICEAAIAAFSQAABIAiAmQAiAmA8AAQA9AAAigkQAigmAAhGIAAlWICEAAIAAFRQAACFhHBGQhEBDh7AAQh7AAhDhDg");
	this.shape_4.setTransform(44.3711,-322.89,0.169,0.169);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah0EcQhDgZg1gvIBOhdQArAjApASQAuAUAwAAQAoAAAXgPQAXgPAAgbIAAgCQAAgagXgPQgZgQhIgTQhngagpgfQg2grAAhSIAAgCQAAhRA7gyQA6gxBdAAQB/AABeBMIhEBjQhVg7hGAAQglAAgVAPQgTAPAAAWIAAACQAAAdAaAPQAYAOBOAVQBiAZArAkQAxArAABLIAAABQAABYg9AyQg8AwhjAAQhEAAhBgYg");
	this.shape_5.setTransform(29.8307,-322.966,0.169,0.169);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABpErIiAi/IhnAAIAAC/IiEAAIAApVIERAAQBxAAA9A8QA0A0AABVIAAACQAABGgjAvQgiAtg7AXICSDVgAh+gIICFAAQAvABAbgYQAagXAAgmIAAgCQAAgpgbgXQgbgWgxAAIiCAAg");
	this.shape_6.setTransform(16.0972,-322.9703,0.169,0.169);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai/DtQhFhEAAiDIAAlVICEAAIAAFSQAABIAiAmQAiAmA8AAQA9AAAigkQAigmAAhGIAAlWICEAAIAAFRQAACFhHBGQhEBDh7AAQh7AAhDhDg");
	this.shape_7.setTransform(0.6993,-322.89,0.169,0.169);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjsErIAApVID0AAQBqgBA+A6QA9A5AABdIAAABQAABjhGA5QhDA2hoAAIhkAAIAACzgAhoACIBoAAQAwAAAcgZQAcgYAAgoIAAgCQAAgsgdgXQgcgYgxAAIhmAAg");
	this.shape_8.setTransform(-13.5538,-322.9703,0.169,0.169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-17.5,-329.7,97.5,13.599999999999966), null);


// stage content:
(lib._300x250_ski_a = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logoblack
	this.instance = new lib.logo();
	this.instance.setTransform(112.25,562.5,1,1,0,0,0,72.2,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(280));

	// jasper
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARAxIgUggIgRAAIAAAgIgVAAIAAhhIArAAQASAAAKAJQAJAIAAAPQAAANgGAGQgFAIgKADIAYAjgAgUgBIAVAAQAIAAAEgDQAEgEAAgGQAAgIgEgDQgFgDgHAAIgVAAg");
	this.shape.setTransform(93.325,33.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAxIAAhhIBIAAIAAATIgzAAIAAAUIAtAAIAAASIgtAAIAAAVIA0AAIAAATg");
	this.shape_1.setTransform(79.475,33.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmAxIAAhhIAnAAQAJAAAHACQAHADAFAFQAEAEADAGQADAHAAAHQAAAIgDAGQgEAGgFAFQgFAEgIACQgHACgHAAIgQAAIAAAegAgQAAIAQAAQAIABAEgEQAFgEAAgGQAAgIgFgEQgFgDgHAAIgQAAg");
	this.shape_2.setTransform(66.275,33.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAuQgLgDgJgJIANgPQAHAGAHADQAHADAHABQAHgBAEgCQAEgCAAgFIgBgEIgDgDIgGgCIgJgEIgOgDIgKgGQgEgCgCgGQgDgEAAgHIAAgBQAAgGADgGQACgFAFgEQAEgEAHgCQAGgCAHAAQAKgBAJAEQAJADAIAGIgLARIgNgIQgHgDgFABQgGgBgDADQgEADAAADIAAABIABADQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAGADIAKACIANAFQAGACAEACQAEAEACAEQACAGAAAFIAAABQAAAIgDAFQgCAGgFADQgFAFgGACQgHACgIAAQgKAAgLgFg");
	this.shape_3.setTransform(52.625,33.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdAxIgJgWIgoAAIgJAWIgWAAIAqhhIASAAIArBhgAgMAIIAYAAIgMgfg");
	this.shape_4.setTransform(38.75,33.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAtQgIgEgGgGIAOgPIAJAHQAEADAFAAQAFAAADgEQAEgEAAgJIAAg+IAXAAIAAA/QAAAJgDAHQgDAGgEAFQgFAEgGACQgHADgGAAQgMAAgHgFg");
	this.shape_5.setTransform(24.9,33.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(280));

	// wood
	this.instance_1 = new lib.woody();
	this.instance_1.setTransform(150,331.1,1,1,0,0,0,150,63);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(133).to({_off:false},0).to({y:247},34,cjs.Ease.quintInOut).wait(113));

	// line
	this.instance_2 = new lib.underline();
	this.instance_2.setTransform(67.2,215.9,0.0368,1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({scaleX:1.1538,x:33.25},24,cjs.Ease.quartOut).wait(23).to({scaleX:1.308,x:27.25},18).wait(44).to({regX:0.2,scaleX:1.2424,x:30.15},14,cjs.Ease.quadIn).wait(138));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvWDxIAAnhIetAAIAAHhg");
	mask.setTransform(126.025,107.975);

	// roly
	this.instance_3 = new lib.roller();
	this.instance_3.setTransform(105.85,150.4,1,1,0,0,0,73.9,40.8);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:192.4,alpha:1},30,cjs.Ease.quintInOut).wait(36).to({y:240.5},18,cjs.Ease.quartInOut).wait(44).to({x:104.85,y:289.65},18,cjs.Ease.quartInOut).wait(134));

	// ForTheLove
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(125.95,106.1,1,1,0,0,0,94,64.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:115.55,alpha:1},22,cjs.Ease.quintInOut).wait(258));

	// photo3
	this.instance_5 = new lib.photo3();
	this.instance_5.setTransform(150,304,1.07,1.07,0,0,0,150,300);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(123).to({_off:false},0).to({scaleX:1.0555,scaleY:1.0555,y:303,alpha:1},18).to({scaleX:1,scaleY:1,y:301},134,cjs.Ease.quadOut).wait(5));

	// photo2
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(61).to({_off:false},0).to({scaleX:1.0227,scaleY:1.0227,y:303,alpha:1},18).to({scaleX:1.07,scaleY:1.07,y:304},62).wait(139));

	// photo1
	this.instance_7 = new lib.photo1();
	this.instance_7.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.07,scaleY:1.07,y:305},84).wait(196));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(139.5,108,171,227.10000000000002);
// library properties:
lib.properties = {
	id: 'F7347F05D14D4FE180D9C72A54A16737',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_ski_a_atlas_.jpg", id:"300x250_ski_a_atlas_"}
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
an.compositions['F7347F05D14D4FE180D9C72A54A16737'] = {
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
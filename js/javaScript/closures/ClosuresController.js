define(['BSTController', 'HeapController', 'ClosureTest'], function(BSTController, HeapController, ClosureTest) {

	class ClosuresController {

		constructor() {
			this.order = 15;
			this.type = "object";

			let bst = new BSTController();
			let heap = new HeapController();
			let test = new ClosureTest();

			this.multiplyValue(function(){
				return this.order * 2;
			}.bind(bst));
			console.log(this.multipliedOrder);

			this.multiplyValue(function(){
				return this.order * 2;
			}.bind(heap));
			console.log(this.multipliedOrder);

			this.multiplyValue(function(){
				return this.order * 2;
			}.bind(this));
			console.log(this.multipliedOrder);

			test.print();
			test.print.apply(this);
			test.print.call(this);
		}

		multiplyValue(func){
			this.multipliedOrder = func();
		}
	}

	return ClosuresController;
});
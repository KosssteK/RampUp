define(['BSTController', 'HeapController'], function(BSTController, HeapController) {

	class ClosuresController {

		constructor() {
			this.order = 10;
			this.type = "object";

			let bst = new BSTController();
			let heap = new HeapController();

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
		}

		multiplyValue(func){
			this.multipliedOrder = func();
		}
	}

	return ClosuresController;

});
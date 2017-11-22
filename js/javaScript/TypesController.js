define(['Types'], function(Types) {

	class TypesController {

		constructor(){
			this.startValue = 5;
			this.endValue = 7;
		}

		showTypesDifference() {
			let primitive = this.startValue;
			let object = {x: this.startValue};
			let objectCopy = object;

			this.changeValue(primitive);
			this.changeObjectValue(objectCopy);
			this.print(primitive, object);
		}

		changeValue(value) {
			value = this.endValue;
		}

		changeObjectValue(object) {
			object.x = this.endValue;
		}

		print(value, object) {
			Types.print(value, object);
		}
	}

	return TypesController;
});
define(['Types','msg', 'FunctionUtil'], function(Types, msg, FunctionUtil) {

	class TypesController {

		constructor(){
			FunctionUtil.bind(this);
			this.startValue = 90;
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
			msg.on("final", this.onFinalState);
		}

		onFinalState(){
			console.log("Event emit has been executed! " + this.startValue);
		}
	}

	return TypesController;
});
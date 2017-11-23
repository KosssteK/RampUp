define([], function() {

	class ClosuresTest {

		constructor(){
			this.order = 4;
			this.type = "object";
		}

		print() {
			console.log(this.order);
		}
	}

	return ClosuresTest;
});
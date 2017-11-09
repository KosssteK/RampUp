define([], function() {

	class Stack {

		static setDivValues(value) {
			document.getElementById('stack').innerHTML = value;
		}
	}

	return Stack;
});
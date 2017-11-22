define([], function() {

	class Tree {

		static setDivValues(target, value) {
			document.getElementById(target).innerHTML += value;
		}
	}

	return Tree;
});
define([], function() {

	class TreeNodeModel {
		constructor(value) {
			this.value = value;
			this.visited = false;
			this.left = null;
			this.right = null;
		}
	}

	return TreeNodeModel;
});
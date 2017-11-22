define([], function() {

	class TreeNodeModel {
		constructor(value) {
			this.value = value;
			this.parent = null;
			this.left = null;
			this.right = null;
		}
	}

	return TreeNodeModel;
});
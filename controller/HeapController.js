define(['Tree', 'heapModel', 'TreeNodeModel'], function(Tree, heapModel, TreeNodeModel) {

	class HeapController {

		static show() {
			console.log(heapModel);
		}

		static add(value) {
			if (heapModel.start === null) {
				heapModel.start = new TreeNodeModel(value);
				heapModel.lastLeaf++;
			}
			else {
				this.addToHeap(value);
			}
		}

		static addToHeap(value) {
			let steps = this.findPathToLastLeaf(heapModel.lastLeaf);
			let leaf = this.addValue(steps, value);
			this.restoreHeap(leaf);
			heapModel.lastLeaf++;
		}

		static findPathToLastLeaf(position) {
			let steps = [];
			steps.unshift(position);
			while (position !== 1) {
				position = Math.floor(position / 2);
				steps.unshift(position);
			}
			return steps;
		}

		static addValue(steps, value) {
			let nodePosition = heapModel.start;
			let nodeParent = nodePosition;
			for (let position = 1; position < steps.length - 1; position++) {
				if (steps[position] % 2 === 0) {
					nodeParent = nodePosition;
					nodePosition = nodePosition.left;
				}
				else {
					nodeParent = nodePosition;
					nodePosition = nodePosition.right;
				}
			}
			if (steps[steps.length - 1] % 2 === 0) {
				nodePosition.left = new TreeNodeModel(value);
				nodePosition.left.parent = nodePosition;
				return nodePosition.left;
			}
			else {
				nodePosition.right = new TreeNodeModel(value);
				nodePosition.right.parent = nodePosition;
				return nodePosition.right;
			}

		}

		static restoreHeap(leaf) {
			let node = leaf;
			while (node !== heapModel.start && node.value > node.parent.value) {
				node = this.changePositions(node, node.parent);
			}
		}

		static changePositions(son, parent) {
			let otherSon = null;
			if (son === parent.left) {
				otherSon = parent.right;
				parent.left = son.left;
				parent.right = son.right;
				son.left = parent;
				son.right = otherSon;
				if (otherSon !== null) {
					otherSon.parent = son;
				}
				son.parent = parent.parent;
				if (parent.parent !== null && parent === parent.parent.left) {
					parent.parent.left = son;
				}
				else if (parent.parent !== null && parent === parent.parent.right) {
					parent.parent.right = son;
				}
				parent.parent = son;
			}
			else {
				otherSon = parent.left;
				parent.left = son.left;
				parent.right = son.right;
				son.right = parent;
				son.left = otherSon;
				if (otherSon !== null) {
					otherSon.parent = son;
				}
				son.parent = parent.parent;
				if (parent.parent !== null && parent === parent.parent.left) {
					parent.parent.left = son;
				}
				else if (parent.parent !== null && parent === parent.parent.right) {
					parent.parent.right = son;
				}
				parent.parent = son;
			}
			if (parent === heapModel.start) {
				heapModel.start = son;
			}
			return son;
		}

		static print() {
			let heapString = this.convertHeapToString();
			Tree.setDivValues('heap', heapString);
		}

		static convertHeapToString() {
			let steps = [];
			let completeString = heapModel.start.value + "->";
			for (let position = 2; position < heapModel.lastLeaf; position++) {
				steps = this.findPathToLastLeaf(position);
				completeString += this.getHeapValue(steps);
			}
			return "Head->" + completeString + "NULL";
		}

		static getHeapValue(steps) {
			let nodePosition = heapModel.start;
			let nodeParent = nodePosition;
			for (let position = 1; position < steps.length - 1; position++) {
				if (steps[position] % 2 === 0) {
					nodeParent = nodePosition;
					nodePosition = nodePosition.left;
				}
				else {
					nodeParent = nodePosition;
					nodePosition = nodePosition.right;
				}
			}
			if (steps[steps.length - 1] % 2 === 0) {
				return nodePosition.left.value + "->";
			}
			else {
				return nodePosition.right.value + "->";
			}
		}
	}

	return HeapController;
});
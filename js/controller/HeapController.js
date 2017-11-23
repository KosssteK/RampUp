define(['Tree', 'HeapModel', 'TreeNodeModel', 'FunctionUtil', 'msg'], function(Tree, HeapModel, TreeNodeModel, FunctionUtil, msg) {

	class HeapController {

		constructor(){
			FunctionUtil.bind(this);
			this.heapModel = new HeapModel();
			this.order = 5;
			msg.on("final", this.onFinalState);
		}

		async onFinalState() {
			console.log("Event emit has been executed! " + this.order);
		}

		show() {
			console.log(this.heapModel);
		}

		add(value) {
			if (this.heapModel.start === null) {
				this.heapModel.start = new TreeNodeModel(value);
				this.heapModel.lastLeaf++;
			}
			else {
				this.addToHeap(value);
			}
		}

		addToHeap(value) {
			let steps = this.findPathToLastLeaf(this.heapModel.lastLeaf);
			let leaf = this.addValue(steps, value);
			this.restoreHeap(leaf);
			this.heapModel.lastLeaf++;
		}

		findPathToLastLeaf(position) {
			let steps = [];
			steps.unshift(position);
			while (position !== 1) {
				position = Math.floor(position / 2);
				steps.unshift(position);
			}
			return steps;
		}

		addValue(steps, value) {
			let nodePosition = this.heapModel.start;
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

		restoreHeap(leaf) {
			let node = leaf;
			while (node !== this.heapModel.start && node.value > node.parent.value) {
				node = this.changePositions(node, node.parent);
			}
		}

		changePositions(son, parent) {
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
			if (parent === this.heapModel.start) {
				this.heapModel.start = son;
			}
			return son;
		}

		print() {
			let heapString = this.convertHeapToString();
			Tree.setDivValues('heap', heapString);
		}

		convertHeapToString() {
			let steps = [];
			let completeString = this.heapModel.start.value + "->";
			for (let position = 2; position < this.heapModel.lastLeaf; position++) {
				steps = this.findPathToLastLeaf(position);
				completeString += this.getHeapValue(steps);
			}
			return "Head->" + completeString + "NULL";
		}

		getHeapValue(steps) {
			let nodePosition = this.heapModel.start;
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
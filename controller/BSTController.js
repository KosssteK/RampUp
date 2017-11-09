define(['Tree', 'TreeModel', 'TreeNodeModel'], function(Tree, TreeModel, TreeNodeModel) {

	class BSTController {

		constructor() {
			this.treeModel = new TreeModel();
		}

		add(value) {
			let node = new TreeNodeModel(value);
			if (this.treeModel.start === null) {
				this.treeModel.start = node;
			}
			else {
				this.addToTree(this.treeModel.start, node);
			}
		}

		addToTree(father, son) {
			if (son.value < father.value) {
				if (father.left) {
					this.addToTree(father.left, son);
				}
				else {
					father.left = son;
				}
			}
			else {
				if (father.right) {
					this.addToTree(father.right, son);
				}
				else {
					father.right = son;
				}
			}
		}

		print() {
			this.printOrder();
			this.setOutputString();
			this.setDives();
		}

		setOutputString() {
			this.treeModel.preorder = "Pre-order: " + this.createOutputString(this.treeModel.preorder);
			this.treeModel.inorder = "In-order: " + this.createOutputString(this.treeModel.inorder);
			this.treeModel.postorder = "Post-order: " + this.createOutputString(this.treeModel.postorder);
		}

		createOutputString(value) {
			let finalList = "Head->";
			finalList += value;
			finalList += "NULL";
			return finalList;
		}

		setDives() {
			Tree.setDivValues("preorder", this.treeModel.preorder);
			Tree.setDivValues("inorder", this.treeModel.inorder);
			Tree.setDivValues("postorder", this.treeModel.postorder);
		}

		printOrder() {
			let pointer = this.treeModel;
			if (pointer.start === null) {
				console.log("Empty tree");
			}
			else {
				this.printPreorder(pointer.start);
				this.printInorder(pointer.start);
				this.printPostorder(pointer.start);
			}
		}

		printPreorder(pointer) {
			if (pointer) {
				this.treeModel.preorder += pointer.value + "->";
				this.printPreorder(pointer.left);
				this.printPreorder(pointer.right);
			}
		}

		printInorder(pointer) {
			if (pointer) {
				this.printInorder(pointer.left);
				this.treeModel.inorder += pointer.value + "->";
				this.printInorder(pointer.right);
			}
		}

		printPostorder(pointer) {
			if (pointer) {
				this.printPostorder(pointer.left);
				this.printPostorder(pointer.right);
				this.treeModel.postorder += pointer.value + "->";
			}
		}

	}

	return BSTController;
});
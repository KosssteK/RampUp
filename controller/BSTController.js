define(['Tree', 'treeModel', 'TreeNodeModel'], function(Tree, treeModel, TreeNodeModel) {

	class BSTController {

		static add(value) {
			let node = new TreeNodeModel(value);
			if (treeModel.start === null) {
				treeModel.start = node;
			}
			else {
				this.addToTree(treeModel.start, node);
			}
		}

		static addToTree(father, son) {
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

		static print() {
			this.printOrder();
			this.setOutputString();
			this.setDives();
		}

		static setOutputString(){
			treeModel.preorder = this.createOutputString(treeModel.preorder);
			treeModel.inorder = this.createOutputString(treeModel.inorder);
			treeModel.postorder = this.createOutputString(treeModel.postorder);
		}

		static createOutputString(value){
			let finalList = "Head->";
			finalList += value;
			finalList += "NULL";
			return finalList;
		}

		static setDives(){
			Tree.setDivValues("preorder", treeModel.preorder);
			Tree.setDivValues("inorder", treeModel.inorder);
			Tree.setDivValues("postorder", treeModel.postorder);
		}

		static printOrder() {
			let pointer = treeModel;
			if (pointer.start === null) {
				console.log("Empty tree");
			}
			else {
				this.printPreorder(pointer.start);
				this.printInorder(pointer.start);
				this.printPostorder(pointer.start);
			}
		}

		static printPreorder(pointer) {
			if (pointer) {
				treeModel.preorder += pointer.value + "->";
				this.printPreorder(pointer.left);
				this.printPreorder(pointer.right);
			}
		}

		static printInorder(pointer) {
			if (pointer) {
				this.printInorder(pointer.left);
				treeModel.inorder += pointer.value + "->";
				this.printInorder(pointer.right);
			}
		}

		static printPostorder(pointer) {
			if (pointer) {
				this.printPostorder(pointer.left);
				this.printPostorder(pointer.right);
				treeModel.postorder += pointer.value + "->";
			}
		}

	}

	return BSTController;
});
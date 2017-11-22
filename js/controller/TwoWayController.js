define(['TwoWayModel', 'TwoWayNodeModel', 'TwoWay'], function(TwoWayModel, TwoWayNodeModel, TwoWay) {

	class TwoWayController {
		constructor() {
			this.twoWayModel = new TwoWayModel();
			this.order = 1;
		}

		add(value) {
			let node = new TwoWayNodeModel(value);
			if (!this.twoWayModel.next) {
				this.twoWayModel.next = node;
			}else
			{
				node.next = this.twoWayModel.next;
				this.twoWayModel.next.previous = node;
				this.twoWayModel.next = node;
			}
			this.twoWayModel.length++;
		}

		remove() {
			let node = this.twoWayModel.next;
			this.twoWayModel.next = node.next;
			this.twoWayModel.next.previous = null;
			node = null;
			this.twoWayModel.length--;
		}

		removeFromPosition(positionToRemove) {
			if (positionToRemove <= this.twoWayModel.length && positionToRemove > 1) {
				let previousNode = this.getPreviousNode(positionToRemove);
				let actualNode = previousNode.next;
				this.removeNode(previousNode, actualNode);
			}else{
				this.remove();
			}
		}

		removeNode(previousNode, actualNode) {
			previousNode.next = actualNode.next;
			if(actualNode.next){
				actualNode.next.previous = previousNode;
			}
			actualNode = null;
			this.twoWayModel.length--;
		}

		getPreviousNode(positionToRemove) {
			let previousNode = this.twoWayModel;
			for (let position = 0; position < positionToRemove - 1; position++) {
				previousNode = previousNode.next;
			}
			return previousNode;
		}

		removeByValue(valueToRemove) {
			let previousNode = this.twoWayModel;
			let actualNode = previousNode;
			while (actualNode.next) {
				if (actualNode.value === valueToRemove) {
					if(actualNode === this.twoWayModel.next){
						this.remove();
					}else{
						this.removeNode(previousNode, actualNode);
					}
					return;
				}
				previousNode = actualNode;
				actualNode = actualNode.next;
			}
		}

		convertToString() {
			return [this.printForward(), this.printBackward()];
		};

		printForward() {
			let finalList = "Head->";
			let pointer = this.twoWayModel;
			while (pointer.next) {
				finalList += pointer.next.value + "->";
				pointer = pointer.next;
			}
			finalList += "NULL";
			return finalList;
		}

		printBackward() {
			let finalList = "NULL->";
			let pointer = this.twoWayModel;
			while (pointer.next) {
				pointer = pointer.next;
			}
			finalList += pointer.value + "->";
			while (pointer.previous) {
				finalList += pointer.previous.value + "->";
				pointer = pointer.previous;
			}
			finalList += "Head";
			return finalList;
		}

		print(){
			TwoWay.setDivValues(this.convertToString());
		}
	}

	return TwoWayController;
});
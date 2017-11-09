define(['OneWayModel', 'OneWayNodeModel', 'OneWay'], function(OneWayModel, OneWayNodeModel, OneWay) {

	class OneWayController {

		constructor(){
			this.oneWayModel = new OneWayModel();
		}

		add(value) {
			let node = new OneWayNodeModel(value);
			if (!this.oneWayModel.next) {
				this.oneWayModel.next = node;
			}
			else {
				node.next = this.oneWayModel.next;
				this.oneWayModel.next = node;
			}
			this.oneWayModel.length++;
		}

		remove() {
			let node = this.oneWayModel.next;
			this.oneWayModel.next = node.next;
			node = null;
			this.oneWayModel.length--;
		}

		removeFromPosition(positionToRemove) {
			if (positionToRemove <= this.oneWayModel.length && positionToRemove > 1) {
				let previousNode = this.getPreviousNode(positionToRemove);
				let actualNode = previousNode.next;
				this.removeNode(previousNode, actualNode);
			}else{
				this.remove();
			}
		}

		removeNode(previousNode, actualNode) {
			previousNode.next = actualNode.next;
			actualNode = null;
			this.oneWayModel.length--;
		}

		getPreviousNode(positionToRemove) {
			let previousNode = this.oneWayModel;
			for (let position = 0; position < positionToRemove - 1; position++) {
				previousNode = previousNode.next;
			}
			return previousNode;
		}

		removeByValue(valueToRemove) {
			let previousNode = this.oneWayModel;
			let actualNode = previousNode;
			while (actualNode.next) {
				if (actualNode.value === valueToRemove) {
					this.removeNode(previousNode, actualNode);
					return;
				}
				previousNode = actualNode;
				actualNode = actualNode.next;
			}
		}

		convertToString(){
			let finalList = "Head->";
			let pointer = this.oneWayModel;
			while(pointer.next !== null && pointer.next !== undefined){
				finalList += pointer.next.value + "->";
				pointer = pointer.next;
			}
			finalList += "NULL";
			return finalList;
		}

		print(){
			OneWay.setDivValues(this.convertToString());
		}
	}

	return OneWayController;
});
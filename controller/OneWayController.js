define(['oneWayModel', 'OneWayNodeModel'], function(oneWayModel, OneWayNodeModel) {

	class OneWayController {
		constructor() {
		}

		static addToList(value) {
			let node = new OneWayNodeModel(value);
			if (!oneWayModel.next) {
				oneWayModel.next = node;
			}
			else {
				node.next = oneWayModel.next;
				oneWayModel.next = node;
			}
			oneWayModel.length++;
		}

		static removeFromList() {
			let node = oneWayModel.next;
			oneWayModel.next = node.next;
			node = null;
			oneWayModel.length--;
		}

		static removeFromPosition(positionToRemove) {
			if (positionToRemove <= oneWayModel.length) {
				let previousNode = this.getPreviousNode(positionToRemove);
				let actualNode = previousNode.next;
				this.removeNode(previousNode, actualNode);
			}
		}

		static removeNode(previousNode, actualNode) {
			previousNode.next = actualNode.next;
			actualNode = null;
			oneWayModel.length--;
		}

		static getPreviousNode(positionToRemove) {
			let previousNode = oneWayModel;
			for (let position = 0; position < positionToRemove - 1; position++) {
				previousNode = previousNode.next;
			}
			return previousNode;
		}

		static removeByValue(valueToRemove) {
			let previousNode = oneWayModel;
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
	}

	return OneWayController;
});
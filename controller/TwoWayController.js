define(['twoWayModel', 'TwoWayNodeModel', 'TwoWay'], function(twoWayModel, TwoWayNodeModel, TwoWay) {

	class TwoWayController {
		constructor() {
		}

		static add(value) {
			let node = new TwoWayNodeModel(value);
			if (!twoWayModel.next) {
				twoWayModel.next = node;
			}else
			{
				node.next = twoWayModel.next;
				twoWayModel.next.previous = node;
				twoWayModel.next = node;
			}
			twoWayModel.length++;
		}

		static remove() {
			let node = twoWayModel.next;
			twoWayModel.next = node.next;
			twoWayModel.next.previous = null;
			node = null;
			twoWayModel.length--;
		}

		static removeFromPosition(positionToRemove) {
			if (positionToRemove <= twoWayModel.length && positionToRemove > 1) {
				let previousNode = this.getPreviousNode(positionToRemove);
				let actualNode = previousNode.next;
				this.removeNode(previousNode, actualNode);
			}else{
				this.remove();
			}
		}

		static removeNode(previousNode, actualNode) {
			previousNode.next = actualNode.next;
			if(actualNode.next){
				actualNode.next.previous = previousNode;
			}
			actualNode = null;
			twoWayModel.length--;
		}

		static getPreviousNode(positionToRemove) {
			let previousNode = twoWayModel;
			for (let position = 0; position < positionToRemove - 1; position++) {
				previousNode = previousNode.next;
			}
			return previousNode;
		}

		static removeByValue(valueToRemove) {
			let previousNode = twoWayModel;
			let actualNode = previousNode;
			while (actualNode.next) {
				if (actualNode.value === valueToRemove) {
					if(actualNode === twoWayModel.next){
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

		static print(){
			TwoWay.setDivValues();
		}
	}

	return TwoWayController;
});
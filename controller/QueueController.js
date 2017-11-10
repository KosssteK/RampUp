define(['QueueModel', 'OneWayNodeModel', 'OneWayController', 'Queue'], function(QueueModel, OneWayNodeModel, OneWayController, Queue) {

	class QueueController {

		constructor(){
			this.queueModel = new QueueModel();
			this.order = 2;
		}

		add(value) {
			let node = new OneWayNodeModel(value);
			if (!this.queueModel.next) {
				this.queueModel.next = node;
			}
			else {
				node.next = this.queueModel.next;
				this.queueModel.next = node;
			}
			this.queueModel.length++;
		}

		remove() {
			let previousNode = this.getPreviousNode(this.queueModel.length);
			let actualNode = previousNode.next;
			OneWayController.removeNode(previousNode, actualNode);
		}

		getPreviousNode(positionToRemove) {
			let previousNode = this.queueModel;
			for (let position = 0; position < positionToRemove - 1; position++) {
				previousNode = previousNode.next;
			}
			return previousNode;
		}

		convertToString(){
			let finalList = "Head->";
			let pointer = this.queueModel;
			while (pointer.next) {
				finalList += pointer.next.value + "->";
				pointer = pointer.next;
			}
			finalList += "NULL";
			return finalList;
		}

		print(){
			Queue.setDivValues(this.convertToString());
		}
	}

	return QueueController;
});
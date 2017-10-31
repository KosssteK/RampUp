define(['queueModel', 'OneWayNodeModel', 'OneWayController', 'Queue'], function(queueModel, OneWayNodeModel, OneWayController, Queue) {

	class QueueController {

		static addToQueue(value) {
			let node = new OneWayNodeModel(value);
			if (!queueModel.next) {
				queueModel.next = node;
			}
			else {
				node.next = queueModel.next;
				queueModel.next = node;
			}
			queueModel.length++;
		}

		static removeFromQueue() {
			let previousNode = this.getPreviousNode(queueModel.length);
			let actualNode = previousNode.next;
			OneWayController.removeNode(previousNode, actualNode);
		}

		static getPreviousNode(positionToRemove) {
			let previousNode = queueModel;
			for (let position = 0; position < positionToRemove - 1; position++) {
				previousNode = previousNode.next;
			}
			return previousNode;
		}

		static print(){
			Queue.setDivValues();
		}
	}

	return QueueController;
});
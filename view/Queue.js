define(['queueModel'], function(queueModel) {

	class Queue {
		static printQueue() {
			let finalList = "Head->";
			let pointer = queueModel;
			while (pointer.next) {
				finalList += pointer.next.value + "->";
				pointer = pointer.next;
			}
			finalList += "NULL";
			return finalList;
		}

		static setDivValues() {
			document.getElementById('queue').innerHTML = this.printQueue();
		}
	}

	return Queue;
});
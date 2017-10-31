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
			document.getElementById('output1').innerHTML = this.printQueue();
			document.getElementById('output2').innerHTML = '';
			document.getElementById('output3').innerHTML = '';
		}
	}

	return Queue;
});
define(['twoWayModel'], function(twoWayModel) {

	class TwoWay {
		constructor() {
		}

		static printList() {
			return [this.printForward(), this.printBackward()];
		};

		static printForward() {
			let finalList = "Head->";
			let pointer = twoWayModel;
			while (pointer.next) {
				finalList += pointer.next.value + "->";
				pointer = pointer.next;
			}
			finalList += "NULL";
			return finalList;
		}

		static printBackward() {
			let finalList = "NULL->";
			let pointer = twoWayModel;
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

		static setDivValues() {
			document.getElementById('twoWay1').innerHTML = this.printList()[0];
			document.getElementById('twoWay2').innerHTML = this.printList()[1];
		}

	}

	return TwoWay;
});
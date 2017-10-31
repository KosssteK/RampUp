define(['stackModel'], function(stackModel) {

	class Stack {
		static printStack() {
			let finalList = "Head->";
			let pointer = stackModel;
			while (pointer.next) {
				finalList += pointer.next.value + "->";
				pointer = pointer.next;
			}
			finalList += "NULL";
			return finalList;
		}

		static setDivValues() {
			document.getElementById('stack').innerHTML = this.printStack();
		}
	}

	return Stack;
});
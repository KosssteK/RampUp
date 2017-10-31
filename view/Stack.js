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
			document.getElementById('output1').innerHTML = this.printStack();
			document.getElementById('output2').innerHTML = '';
			document.getElementById('output3').innerHTML = '';
		}
	}

	return Stack;
});
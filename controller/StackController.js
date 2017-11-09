define(['StackModel', 'OneWayNodeModel', 'Stack'], function(StackModel, OneWayNodeModel, Stack) {

	class StackController {

		constructor(){
			this.stackModel = new StackModel();
		}

		add(value) {
			let node = new OneWayNodeModel(value);
			if (!this.stackModel.next) {
				this.stackModel.next = node;
			}
			else {
				node.next = this.stackModel.next;
				this.stackModel.next = node;
			}
			this.stackModel.length++;
		}

		remove() {
			let node = this.stackModel.next;
			this.stackModel.next = node.next;
			node = null;
			this.stackModel.length--;
		}

		convertToString(){
			let finalList = "Head->";
			let pointer = this.stackModel;
			while (pointer.next) {
				finalList += pointer.next.value + "->";
				pointer = pointer.next;
			}
			finalList += "NULL";
			return finalList;
		}

		print(){
			Stack.setDivValues(this.convertToString());
		}
	}

	return StackController;
});
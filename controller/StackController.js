define(['stackModel', 'OneWayNodeModel', 'Stack'], function(stackModel, OneWayNodeModel, Stack) {

	class StackController {

		static add(value) {
			let node = new OneWayNodeModel(value);
			if (!stackModel.next) {
				stackModel.next = node;
			}
			else {
				node.next = stackModel.next;
				stackModel.next = node;
			}
			stackModel.length++;
		}

		static remove() {
			let node = stackModel.next;
			stackModel.next = node.next;
			node = null;
			stackModel.length--;
		}

		static print(){
			Stack.setDivValues();
		}
	}

	return StackController;
});
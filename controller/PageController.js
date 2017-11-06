define(['OneWayController', 'TwoWayController', 'QueueController', 'StackController', 'BSTController', 'HeapController'],
	function(OneWayController, TwoWayController, QueueController, StackController, BSTController, HeapController) {

	class PageController {
		constructor() {
			this.setData();
		}

		setData(){
			OneWayController.add(6);
			OneWayController.add(1);
			OneWayController.add(5);
			OneWayController.add(4);
			OneWayController.add(12);
			OneWayController.add(8);
			OneWayController.add(5);
			OneWayController.add(2);
			OneWayController.remove();
			OneWayController.removeFromPosition(5);
			OneWayController.removeByValue(3);
			OneWayController.removeByValue(33);

			TwoWayController.add(1);
			TwoWayController.add(2);
			TwoWayController.add(3);
			TwoWayController.add(4);
			TwoWayController.add(5);
			TwoWayController.add(6);
			TwoWayController.remove();
			TwoWayController.removeFromPosition(1);
			TwoWayController.removeByValue(4);

			QueueController.add(5);
			QueueController.add(6);
			QueueController.add(4);
			QueueController.add(1);
			QueueController.remove();

			StackController.add(7);
			StackController.add(5);
			StackController.add(1);
			StackController.add(3);
			StackController.remove();

			BSTController.add(10);
			BSTController.add(5);
			BSTController.add(15);
			BSTController.add(20);
			BSTController.add(3);
			BSTController.add(2);
			BSTController.add(6);
			BSTController.add(4);

			HeapController.add(10);
			HeapController.add(15);
			HeapController.add(20);
			HeapController.add(16);
			HeapController.add(6);
			HeapController.add(50);
			HeapController.add(61);
			HeapController.add(22);
			HeapController.show();
			HeapController.print();

		}

		print(){
			OneWayController.print();
			TwoWayController.print();
			QueueController.print();
			StackController.print();
			BSTController.print();
		}

	}

	return PageController;
});
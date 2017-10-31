define(['OneWayController', 'TwoWayController', 'QueueController', 'StackController'],
	function(OneWayController, TwoWayController, QueueController, StackController) {

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
		}

		print(){
			OneWayController.print();
			TwoWayController.print();
			QueueController.print();
			StackController.print();
		}

	}

	return PageController;
});
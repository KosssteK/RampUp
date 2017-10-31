define('game', ['QuickSortController', 'OneWayController', 'TwoWayController', 'QueueController', 'StackController'], function(QuickSortController, OneWayController, TwoWayController, QueueController, StackController) {

	new QuickSortController();

	OneWayController.addToList(1);
	OneWayController.addToList(2);
	OneWayController.addToList(3);
	OneWayController.addToList(4);
	OneWayController.addToList(5);
	OneWayController.addToList(6);
	OneWayController.removeFromList();
	OneWayController.removeFromPosition(5);
	OneWayController.removeByValue(3);
	OneWayController.removeByValue(33);
	TwoWayController.print();

	TwoWayController.addToList(1);
	TwoWayController.addToList(2);
	TwoWayController.addToList(3);
	TwoWayController.addToList(4);
	TwoWayController.addToList(5);
	TwoWayController.addToList(6);
	TwoWayController.removeFromList();
	TwoWayController.removeFromPosition(1);
	TwoWayController.removeByValue(4);
	TwoWayController.print();

	QueueController.addToQueue(5);
	QueueController.addToQueue(6);
	QueueController.addToQueue(4);
	QueueController.addToQueue(1);
	QueueController.removeFromQueue();
	QueueController.print();

	StackController.addToStack(7);
	StackController.addToStack(5);
	StackController.addToStack(1);
	StackController.addToStack(3);
	StackController.removeFromStack();
	StackController.print();

});

define('game', ['QuickSortController', 'OneWayController', 'OneWay', 'TwoWayController', 'TwoWay', 'QueueController', 'Queue'], function(QuickSortController, OneWayController, OneWay, TwoWayController, TwoWay, QueueController, Queue) {

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
	OneWay.setDivValues();

	TwoWayController.addToList(1);
	TwoWayController.addToList(2);
	TwoWayController.addToList(3);
	TwoWayController.addToList(4);
	TwoWayController.addToList(5);
	TwoWayController.addToList(6);
	TwoWayController.removeFromList();
	TwoWayController.removeFromPosition(1);
	TwoWayController.removeByValue(4);
	TwoWay.setDivValues();

	QueueController.addToQueue(5);
	QueueController.addToQueue(6);
	QueueController.addToQueue(4);
	QueueController.addToQueue(1);
	QueueController.removeFromQueue();
	Queue.setDivValues();

});

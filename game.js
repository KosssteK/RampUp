define('game',['QuickSortController', 'OneWayController', 'OneWay', 'TwoWayController', 'TwoWay'], function(QuickSortController, OneWayController, OneWay, TwoWayController, TwoWay) {

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

	// TwoWayController.addToList(10);
	// TwoWayController.addToList(5);
	// TwoWayController.addToList(6);
	// TwoWay.setDivValues();





});

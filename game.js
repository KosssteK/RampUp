define('game',['QuickSortController', 'OneWayController', 'OneWay'], function(QuickSortController, OneWayController, OneWay) {

	new QuickSortController();
	OneWayController.addToList(5);
	OneWayController.addToList(4);
	OneWayController.addToList(10);
	OneWay.setDivValues();

});

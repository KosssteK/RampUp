define('quickSortModel', ['QuickSortModel'], function(QuickSortModel) {
	return new QuickSortModel(20);
});

define('quickSort', ['QuickSort'], function(QuickSort) {
	return new QuickSort();
});

define('oneWayModel', ['OneWayModel'], function(OneWayModel) {
	return new OneWayModel();
});

require(['game']);
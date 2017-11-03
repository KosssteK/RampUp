define('quickSortModel', ['QuickSortModel'], function(QuickSortModel) {
	return new QuickSortModel(20);
});

define('quickSort', ['QuickSort'], function(QuickSort) {
	return new QuickSort();
});

define('oneWayModel', ['OneWayModel'], function(OneWayModel) {
	return new OneWayModel();
});

define('twoWayModel', ['TwoWayModel'], function(TwoWayModel) {
	return new TwoWayModel();
});

define('queueModel', ['QueueModel'], function(QueueModel) {
	return new QueueModel();
});

define('stackModel', ['StackModel'], function(StackModel) {
	return new StackModel();
});

define('treeModel', ['TreeModel'], function(TreeModel) {
	return new TreeModel();
});

require(['game']);

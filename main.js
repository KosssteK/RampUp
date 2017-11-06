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

define('heapModel', ['HeapModel'], function(HeapModel) {
	return new HeapModel();
});

require(['game']);

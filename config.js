requirejs.config({
	paths: {
		main: 'main',
		QuickSort: 'view/QuickSort',
		QuickSortModel: 'model/QuickSortModel',
		QuickSortController: 'controller/QuickSortController',
		OneWayModel: 'model/OneWayModel',
		OneWayNodeModel: 'model/OneWayNodeModel',
		OneWayController: 'controller/OneWayController',
		OneWay: 'view/OneWay',
		TwoWayModel: 'model/TwoWayModel',
		TwoWayNodeModel: 'model/TwoWayNodeModel',
		TwoWayController: 'controller/TwoWayController',
		TwoWay: 'view/TwoWay',
		QueueModel: 'model/QueueModel',
		QueueController: 'controller/QueueController',
		Queue: 'view/Queue',
		StackModel: 'model/StackModel',
		StackController: 'controller/StackController',
		Stack: 'view/Stack'
	}
});
require(['main']);
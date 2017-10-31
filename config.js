requirejs.config({
	paths: {
		main: 'main',
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
		Stack: 'view/Stack',
		PageController: 'controller/PageController'
	}
});
require(['main']);
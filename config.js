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
		TreeModel: 'model/TreeModel',
		TreeNodeModel: 'model/TreeNodeModel',
		Tree: 'view/Tree',
		BSTController: 'controller/BSTController',
		HeapModel: 'model/HeapModel',
		HeapController: 'controller/HeapController',
		PageController: 'controller/PageController',
		DataStructureFactory: 'factory/DataStructureFactory',
		Strategy: 'strategy/Strategy'
	}
});
require(['game']);
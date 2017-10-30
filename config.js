requirejs.config({
	paths: {
		main: 'main',
		QuickSort: 'view/QuickSort',
		QuickSortModel: 'model/QuickSortModel',
		QuickSortController: 'controller/QuickSortController',
		OneWayModel: 'model/OneWayModel',
		OneWayNodeModel: 'model/OneWayNodeModel'
	}
});
require(['main']);
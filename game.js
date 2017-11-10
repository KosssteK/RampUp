define('game', ['DataStructureFactory', 'Strategy'],
	function(DataStructureFactory, Strategy,) {

	// let dataStructureFactory = new DataStructureFactory();
	// let product = dataStructureFactory.createDataStructure("oneWay");
	// product.add(4);
	// product.add(5);
	// product.add(87);
	// product.print();

	let strategyController = new StrategyController();
	strategyController.setDataType(HeapController);
	strategyController.add(5);
	strategyController.add(33);
	strategyController.add(6);
	strategyController.add(-3);
	strategyController.add(0);
	strategyController.add(51);
	strategyController.add(21);
	strategyController.print();
});
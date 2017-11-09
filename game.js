define('game', ['DataStructureFactory'], function(DataStructureFactory) {

	let dataStructureFactory = new DataStructureFactory();
	let product = dataStructureFactory.createDataStructure("oneWay");
	product.add(4);
	product.add(5);
	product.add(87);
	product.print();
});
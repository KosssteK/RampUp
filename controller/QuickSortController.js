define(['quickSortModel', 'quickSort'], function(quickSortModel, quickSort) {


	
	function QuickSortController() {
		this.sortingAlgorithm();
	}

	QuickSortController.prototype.printValues = function() {
		quickSort.setDivsValues(this.getValues());
	};

	QuickSortController.prototype.getValues = function() {
		return {
			listLabel: quickSortModel.convertTableToString(quickSortModel.originalOrderedTable),
			isAscendingLabel: quickSortModel.isAscending(),
			sortedListLabel: quickSortModel.convertTableToString(quickSortModel.valueTable)
		}
	};

	QuickSortController.prototype.sortingAlgorithm = function() {
		this.setTableValues();
		this.sortValueTable(0, quickSortModel.valueTable.length - 1);
		this.printValues();
	};

	QuickSortController.prototype.sortValueTable = function(left, right) {
		if (left < right) {
			let middle = this.divideValueTable(left, right);
			this.sortValueTable(left, middle - 1);
			this.sortValueTable(middle + 1, right);
		}
	};

	QuickSortController.prototype.divideValueTable = function(left, right) {
		let partitionPoint = this.findPartitionPoint(left, right);
		let partitionValue = quickSortModel.valueTable[partitionPoint];
		this.changePlaces(partitionPoint, right);
		let currentPoint = left;
		for (let position = left; position <= (right - 1); position++) {
			if (quickSortModel.valueTable[position] < partitionValue) {
				this.changePlaces(position, currentPoint);
				currentPoint = currentPoint + 1;
			}
		}
		this.changePlaces(currentPoint, right);
		return currentPoint;
	};

	QuickSortController.prototype.findPartitionPoint = function(left, right) {
		return Math.floor((left + right) / 2);
	};

	QuickSortController.prototype.changePlaces = function(point1, point2) {
		let placeHolder = quickSortModel.valueTable[point1];
		quickSortModel.valueTable[point1] = quickSortModel.valueTable[point2];
		quickSortModel.valueTable[point2] = placeHolder;
	};

	QuickSortController.prototype.setTableValues = function() {
		quickSortModel.addRandomNumbers();
	};

	return QuickSortController;
});

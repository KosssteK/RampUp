define([], function() {

	function QuickSortModel(tableLength) {
		this.originalOrderedTable = [];
		this.valueTable = [];
		this.tableLength = tableLength || 10;
	}

	QuickSortModel.prototype.addRandomNumbers = function() {
		for (var column = 0; column < this.tableLength; column++) {
			this.valueTable[column] = Math.round(Math.random() * 50 + 1);
		}
		this.originalOrderedTable = this.valueTable.slice(0);
	};

	QuickSortModel.prototype.convertTableToString = function(table) {
		var valueTableToString = "";
		for (var column = 0; column < table.length; column++) {
			valueTableToString += table[column];
			if (column !== table.length - 1) valueTableToString += " - ";
		}
		return valueTableToString;
	};

	QuickSortModel.prototype.isAscending = function() {
		for(var column = 0; column < this.valueTable.length-2; column++) {
			if(this.valueTable[column] > this.valueTable[column+1]){
				return false;
			}
		}
		return true;
	};

	return QuickSortModel;
});

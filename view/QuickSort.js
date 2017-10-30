define([], function() {

	function QuickSort() {
		this.listLabel = document.getElementById('listLabel');
		this.isAscendingLabel = document.getElementById('isAscendingLabel');
		this.sortedListLabel = document.getElementById('sortedListLabel');
	}

	QuickSort.prototype.setDivsValues = function(options) {
		this.listLabel.innerHTML = options.listLabel;
		this.isAscendingLabel.innerHTML ="Is ascending:? " + options.isAscendingLabel;
		this.sortedListLabel.innerHTML = options.sortedListLabel;
	};

	return QuickSort;
});
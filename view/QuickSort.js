define([], function() {

	function QuickSort() {
		this.listLabel = document.getElementById('output1');
		this.isAscendingLabel = document.getElementById('output2');
		this.sortedListLabel = document.getElementById('output3');
	}

	QuickSort.prototype.setDivsValues = function(options) {
		this.listLabel.innerHTML = options.listLabel;
		this.isAscendingLabel.innerHTML ="Is ascending:? " + options.isAscendingLabel;
		this.sortedListLabel.innerHTML = options.sortedListLabel;
	};

	return QuickSort;
});
define(['msg', 'FunctionUtil'], function(msg, FunctionUtil) {

	class EventFlow {

		constructor(){
			FunctionUtil.bind(this);
			this.createListeners();
			this.createButton();
		}

		createListeners() {
			msg.on("spin/begin", this.onSpinBegin);
			msg.on("spin/start", this.onSpinStart);
			msg.on("spin/dataLoaded", this.onSpinDataLoaded);
			msg.on  ("spin/stop", this.onSpinStop);
			msg.on("column/stoppingStarted", this.onColumnStoppingStarted);
			msg.on("column/allSymbolsReady", this.onColumnAllSymbolsReady);
			msg.on("column/stopped", this.onColumnStopped);
			msg.on("spin/end", this.onSpinEnd);
			msg.on("winPresentation/end", this.onWinPresentationEnd);
			msg.on("spin/definiteEnd", this.onSpinDefiniteEnd);
		}

		createButton() {
			let button = document.createElement('button');
			button.innerHTML = 'JavaScript Event Flow';
			button.className = "jsEventFlow";
			button.onclick = function() {
				this.onClick();
			}.bind(this);
			document.body.appendChild(button);
		}

		onClick() {
			msg.emit("spin/begin");
		}

		onSpinBegin() {
			console.log("spin/begin");
			msg.emit("spin/start");
		}

		onSpinStart() {
			console.log("spin/start");
			msg.emit("spin/dataLoaded");
		}

		onSpinDataLoaded() {
			console.log("spin/dataLoaded");
			msg.emit("spin/stop");
		}

		onSpinStop() {
			console.log("spin/stop");
			msg.emit("column/stoppingStarted");
		}

		onColumnStoppingStarted() {
			console.log("column/stoppingStarted");
			msg.emit("column/allSymbolsReady");
		}

		onColumnAllSymbolsReady() {
			console.log("column/allSymbolsReady");
			msg.emit("column/stopped");
		}

		onColumnStopped() {
			console.log("column/stopped");
			msg.emit("spin/end");
		}

		onSpinEnd() {
			console.log("spin/end");
			msg.emit("winPresentation/end");
		}

		onWinPresentationEnd() {
			console.log("winPresentation/end");
			msg.emit("spin/definiteEnd");
		}

		onSpinDefiniteEnd() {
			console.log("spin/definiteEnd");
			msg.emit("Zeby pokazac ze nie ma takiego =)");
		}

	}

	return EventFlow;
});
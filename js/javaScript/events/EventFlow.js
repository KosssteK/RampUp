define(['msg', 'FunctionUtil', 'Event'], function(msg, FunctionUtil, Event) {

	class EventFlow {

		constructor(){
			FunctionUtil.bind(this);
			this.createListeners();
			this.createButton();
			this.createOutputDiv();
		}

		createListeners() {
			msg.on("spin/begin", this.onSpinBegin);
			msg.on("spin/start", this.onSpinStart);
			msg.on("spin/dataLoaded", this.onSpinDataLoaded);
			msg.on("spin/stop", this.onSpinStop);
			msg.on("column/stoppingStarted", this.onColumnStoppingStarted);
			msg.on("column/allSymbolsReady", this.onColumnAllSymbolsReady);
			msg.on("column/stopped", this.onColumnStopped);
			msg.on("spin/end", this.onSpinEnd);
			msg.on("initialAnimation/show", this.onInitialAnimationShow);
			msg.on("initialAnimation/end", this.onInitialAnimationEnd);
			msg.on("winPresentation/end", this.onWinPresentationEnd);
			msg.on("spin/definiteEnd", this.onSpinDefiniteEnd);
		}

		createOutputTemplate() {
			return "START\n|\nV\n";
		}

		print() {
			this.output += "V\nEND";
			Event.setDivValues(this.output);
		}

		createButton() {
			let button = document.createElement('button');
			button.innerHTML = 'JavaScript Event Flow';
			button.className = "jsEventFlow";
			button.onclick = function() {
				this.onClick();
			}.bind(this);
			document.getElementById("table2").appendChild(button);
		}

		createOutputDiv() {
			let div = document.createElement("div");
			div.innerHTML = '';
			div.id = "jsEventFlowOutput";
			document.getElementById("table2").appendChild(div);
		}

		onClick() {
			this.output = this.createOutputTemplate();
			msg.emit("spin/begin");
		}

		onSpinBegin() {
			this.output += "spin/begin\n|\n";
			msg.emit("spin/start");
		}

		onSpinStart() {
			this.output += "spin/start\n|\n";
			msg.emit("spin/dataLoaded");
		}

		onSpinDataLoaded() {
			this.output += "spin/dataLoaded\n|\n";
			msg.emit("spin/stop");
		}

		onSpinStop() {
			this.output += "spin/stop\n|\n";
			msg.emit("column/stoppingStarted");
		}

		onColumnStoppingStarted() {
			this.output += "column/stoppingStarted\n|\n";
			msg.emit("column/allSymbolsReady");
		}

		onColumnAllSymbolsReady() {
			this.output += "column/allSymbolsReady\n|\n";
			msg.emit("column/stopped");
		}

		onColumnStopped() {
			this.output += "column/stopped\n|\n";
			msg.emit("spin/end");
		}

		onSpinEnd() {
			this.output += "spin/end\n|\n";
			if (Math.round(Math.random())) {
				msg.emit("winPresentation/end");
			}
			else {
				msg.emit("initialAnimation/show");
			}
		}

		onInitialAnimationShow() {
			this.output += "initialAnimation/show\n|\n";
			msg.emit("initialAnimation/end");
		}

		onInitialAnimationEnd() {
			this.output += "initialAnimation/end\n|\n";
			msg.emit("winPresentation/end");
		}

		onWinPresentationEnd() {
			this.output += "winPresentation/end\n|\n";
			msg.emit("spin/definiteEnd");
		}

		onSpinDefiniteEnd() {
			this.output += "spin/definiteEnd\n|\n";
			this.print();
			msg.emit("Zeby pokazac ze nie ma takiego =)");
		}

	}

	return EventFlow;
});
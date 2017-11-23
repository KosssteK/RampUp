define('msg', ['EventDispatcher'], function(EventDispatcher) {
	return new EventDispatcher();
});

require(['game']);
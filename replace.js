chrome.browserAction.onClicked.addListener(function(tab) {
	doScripts(true);
});

function getClickHandler(info, tab) {
	doScripts(false);
}
function doScripts(context){
	chrome.tabs.executeScript(null, {file:"jquery.js"}, function() {
	chrome.tabs.executeScript(null, {file:"box2d.js"}, function(){
	chrome.tabs.executeScript(null, {code: "var doingBrowserAction = "+context+";"}, function(){
	chrome.tabs.executeScript(null, {file: "myscript.js"}, function(){
	chrome.tabs.executeScript(null, {file: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"},function () {
		// body...
	});	
							
						});
					});
				});
			});

}

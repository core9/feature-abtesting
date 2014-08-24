function ready(func) {
	var span = document.createElement('span');
	var ms = 0;
	setTimeout(function() {
		try {
			document.body.appendChild(span);
			document.body.removeChild(span);
			func();
		} catch (e) {
			setTimeout(arguments.callee, ms);
		}
	}, ms);
}

var domReady = function (f) {
    (/complete|loaded|interactive/.test(document.readyState)) ?
        f() :
        setTimeout(domReady, 9, f);
  };

var myGetElementByXpath = function(path) {
	return document.evaluate(path, document, null, 9, null).singleNodeValue;
}

ready(function() {
	myGetElementByXpath('/html/body/div/div[3]/div/div/div/div/div[3]/a/span').innerHTML = "test blue";
});

domReady(function() {
	myGetElementByXpath('/html/body/div/div[3]/div/div/div/div/div[3]/a/span').innerHTML = "test red";
});
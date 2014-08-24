
var myGetElementByXpath = function(path) {
	return document.evaluate(path, document, null, 9, null).singleNodeValue;
}








	document.evaluate('/html/body/div/div[3]/div/div/div/div/div[3]/a/span', document, null, 9, null).singleNodeValue.innerHTML = "testdsda";


myGetElementByXpath('/html/body/div/div[3]/div/div/div/div/div[3]/a/span').innerHTML = "testdsdafs";


document.evaluate('/html/body/div/div[3]/div/div/div/div/div[3]/a/span', document, null, 9, null).singleNodeValue.innerHTML = "testdsda";

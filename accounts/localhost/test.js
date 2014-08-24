
function ready(func) {
  var span = document.createElement('span');
  var ms = 0;
  setTimeout(function() {
    try {
      document.body.appendChild(span);

      document.body.removeChild(span);

      //Still here? Then document is ready
      func();
    } catch(e) {
      //Whoops, document is not ready yet, try again...

      setTimeout(arguments.callee, ms);
    }
  }, ms);
}


var myGetElementByXpath = function(path) {
	return document.evaluate(path, document, null, 9, null).singleNodeValue;
}








	document.evaluate('/html/body/div/div[3]/div/div/div/div/div[3]/a/span', document, null, 9, null).singleNodeValue.innerHTML = "testdsda";


myGetElementByXpath('/html/body/div/div[3]/div/div/div/div/div[3]/a/span').innerHTML = "testdsdafs";


document.evaluate('/html/body/div/div[3]/div/div/div/div/div[3]/a/span', document, null, 9, null).singleNodeValue.innerHTML = "testdsda";





ready(function(){
	document.evaluate('/html/body/div/div[3]/div/div/div/div/div[3]/a/span', document, null, 9, null).singleNodeValue.innerHTML = "testdsda";
});
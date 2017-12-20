var clockElement = document.getElementById("clock");
function updateClock(clock){
	clock.InnerHTML = new Date().toLocalTimeString();
}
setInterval(function(){
	updateClock(clockElement);
}, 1000);
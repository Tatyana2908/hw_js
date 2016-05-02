

var clocktimer,
	dateObj,
	dataHour,
	datamin,
	datasec;
var readout=''; 
var hour = 1,
	min = 1,
	tm = 1,
	sec = 0,
	ts = 0,
	msec = 0,
	show = true,
	init = 0;



function startTIME() {
	var base = 60;
	var cdateObj = new Date();
	var time = (cdateObj.getTime() - dateObj.getTime())-(sec * 1000);
	
	if (time > 999) { sec++; }
	if (sec >= (min * base)) {
		ts = 0;
		min++;
	} else { 
		ts = parseInt((msec / 1000) + sec);
		if(ts >= base) { ts = ts - ((min - 1) * base); }
	} 
	if (min > (hour * base)) {
		tm = 1;
		hour++;
	} else { 
		tm = parseInt((msec / 1000) + min);
		if(tm >= base) { tm = tm -((hour - 1) *  base); }
	}
	msec = Math.round(time);
	if (msec >= 999) {msec = 0;}
	if (msec == 0) {msec = '000';}
	if (msec > 0 && msec <= 99) { msec = '0' + msec; }
	if (ts > 0) { datasec = ts;
	if (ts <= 9) { datasec = '0' + ts; }} else { datasec = '00'; }
	datamin = tm - 1;
	if (datamin > 0) { if (datamin <= 9) { datamin = '0' + datamin; }} else { datamin = '00'; }
	//dataHour = hour-1;
	if (dataHour > 0) { if (dataHour <= 9) { dataHour = '0' + dataHour; }} else { dataHour = '00'; }
	readout = dataHour + ':' + datamin + ':' + datasec + '.' + msec;
	if (show == true) { document.TestForm.stopwatch.value = readout;
	document.getElementById("count").value = "PAUSE"; }
	clocktimer = setTimeout("startTIME()",10);
	} 



function pause() {
	document.getElementById("count").value = "START";
	if (init == 0) { dateObj = new Date();
	startTIME(); 
	init = 1;
		} else { if(show == true) {
		show = false;
	} else {
		show = true; } }
}

function clearСlock() {
	clearTimeout(clocktimer);
	hour = 1;
	min = 1;
	tm = 1;
	sec = 0;
	ts = 0;
	msec = 0;
	init = 0;
	show = true;
	readout='00:00:00.000';
	document.TestForm.stopwatch.value = readout;
	document.getElementById("count").value = 'START';

}



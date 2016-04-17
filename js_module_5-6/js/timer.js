

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
	var t = (cdateObj.getTime() - dateObj.getTime())-(sec*1000);
	
	if (t>999) { sec++; }
	if (sec >= (min*base)) {
		ts = 0;
		min++;
	} else { 
		ts = parseInt((msec/100) + sec);
		if(ts >= base) { ts = ts - ((min-1)*base); }
	} 
	if (min > (hour*base)) {
		tm = 1;
		hour++;
	} else { 
		tm = parseInt((msec/100) + min);
		if(tm >= base) { tm = tm -((hour-1)*base); }
	}
	msec = Math.round(t/10);
	if (msec > 99) {msec = 0;}
	if (msec == 0) {msec = '00';}
	if (msec > 0&&msec <= 9) { msec = '0' + msec; }
	if (ts>0) { datasec = ts; if (ts<10) { datasec = '0'+ts; }} else { datasec = '00'; }
	datamin = tm - 1;
	if (datamin > 0) { if (datamin < 10) { datamin = '0' + datamin; }} else { datamin = '00'; }
	dataHour = hour-1;
	if (dataHour > 0) { if (dataHour < 10) { dataHour = '0' + dataHour; }} else { dataHour = '00'; }
	readout = dataHour + ':' + datamin + ':' + datasec + '.' + msec;
	if (show==true) { document.TestForm.stopwatch.value = readout;
	document.getElementById("count").value = "PAUSE"; } 
	clocktimer = setTimeout("startTIME()",1); 
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
	readout='00:00:00.00';
	document.TestForm.stopwatch.value = readout;
	document.getElementById("count").value = 'START';

}



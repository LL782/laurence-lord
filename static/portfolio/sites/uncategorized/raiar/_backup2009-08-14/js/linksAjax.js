window.addEvent('domready', function() {
																																					
var fn = function() {
	var box = $('log');
	var fx = new Fx.Style(box, 'background-color', {
		duration: 800,
		transition: Fx.Transitions.Quad.easeOut
	}).start('#808080', '#f9f9f9');
}
 

$('links1').addEvent('click', function(e) {
	e = new Event(e).stop();
 
	var url = "../links/links1.html";
	
	new Ajax(url, {
		method: 'get',
		update: $('log'),
		onComplete: fn
	}).request();
});

$('links2').addEvent('click', function(e) {
	e = new Event(e).stop();
 
	var url = "../links/links2.html";
	
	new Ajax(url, {
		method: 'get',
		update: $('log'),
		onComplete: fn
	}).request();
});

$('links3').addEvent('click', function(e) {
	e = new Event(e).stop();
 
	var url = "../links/links3.html";
	
	new Ajax(url, {
		method: 'get',
		update: $('log'),
		onComplete: fn
	}).request();
});

$('links4').addEvent('click', function(e) {
	e = new Event(e).stop();
 
	var url = "../links/links4.html";
	
	new Ajax(url, {
		method: 'get',
		update: $('log'),
		onComplete: fn
	}).request();
});

$('links5').addEvent('click', function(e) {
	e = new Event(e).stop();
 
	var url = "../links/links5.html";
	
	new Ajax(url, {
		method: 'get',
		update: $('log'),
		onComplete: fn
	}).request();
});

$('links6').addEvent('click', function(e) {
	e = new Event(e).stop();
 
	var url = "../links/links6.html";
	
	new Ajax(url, {
		method: 'get',
		update: $('log'),
		onComplete: fn
	}).request();
});

$('links7').addEvent('click', function(e) {
	e = new Event(e).stop();
 
	var url = "../links/links7.html";
	
	new Ajax(url, {
		method: 'get',
		update: $('log'),
		onComplete: fn
	}).request();
});

$('links8').addEvent('click', function(e) {
	e = new Event(e).stop();
 
	var url = "../links/links8.html";
	
	new Ajax(url, {
		method: 'get',
		update: $('log'),
		onComplete: fn
	}).request();
});

$('links9').addEvent('click', function(e) {
	e = new Event(e).stop();
 
	var url = "../links/links9.html";
	
	new Ajax(url, {
		method: 'get',
		update: $('log'),
		onComplete: fn
	}).request();
});

$('links10').addEvent('click', function(e) {
	e = new Event(e).stop();
 
	var url = "../links/links10.html";
	
	new Ajax(url, {
		method: 'get',
		update: $('log'),
		onComplete: fn
	}).request();
});
	
});
// -------------------------------------------------------------------
// RSS Display Box (Ajax invocation)- Created Dec 2nd 2006 | Last updated Dec 18th, 2006
// Author: Dynamic Drive (http://www.dynamicdrive.com)
// -------------------------------------------------------------------

//Path to "main.php" *relative* to "demo.htm", or the HTML page on your server displaying the RSS Box:

var rssoutputscript="rssbox/main.php"

//Switch to full URL to "main.php" on your server below, so script will work with any page on your server, not just "demo.htm"
//Do NOT change window.location.hostname, which is your site's root domain, dynamically determined
//Configure below line and uncomment it to activate it:

rssoutputscript="http://"+window.location.hostname+"/01/pt/sobre/rssbox/main.php"


////////////No need to edit beyond here//////////////

// -------------------------------------------------------------------
// PUBLIC: rssdisplaybox(RSS_id, cachetime, divId, divClass)
// Main RSS Display Box Object function.
// -------------------------------------------------------------------

function rssdisplaybox(RSS_id, divId, divClass){
this.loadingHTML='<div style="padding: 5px 0 5px 25px; background: transparent url('+rssoutputscript.replace('main.php', '')+'/loading.gif) no-repeat left center;">Buscando not&iacute;cias mais recentes...</div>' //Specify HTTML to show while feed is being fetched
this.RSS_id=RSS_id //Array key indicating which RSS feed to display
this.boxid=divId //CSS ID of DIV that will hold the RSS feed items
this.boxclass=divClass //CSS class of DIV
this.cachetime=30 //default cache time, in minutes
this.template=""
this.paginatemode="auto" //default display mode for pagination interface- "auto"
this.pos_or_div="bottom" //default position of auto pagination interface (or if manual interface, id of user specified pagination DIV)
document.write('<div id="'+divId+'-maincontainer"></div>') //Output a master DIV to contain RSS box and pagination div, plus to anchor box's position on the page
}

rssdisplaybox.getvirtualpaginate=function(){} //inherit methods from virtualpaginate() object
rssdisplaybox.getvirtualpaginate.prototype=virtualpaginate.prototype
rssdisplaybox.prototype=new rssdisplaybox.getvirtualpaginate
rssdisplaybox.prototype.constructor=rssdisplaybox


// -------------------------------------------------------------------
// PUBLIC: set_items_shown(items_fetched, items_shown_per_page)
// 1) Sets how many RSS items to fetch (0 indicates all) 2) Optionally, how many items to show "per page block".
// -------------------------------------------------------------------

rssdisplaybox.prototype.set_items_shown=function(items_fetched, items_shown_per_page){
this.utotalitems=parseInt(items_fetched) //user defined # of items to fetch (may differ from what's actually available)
if (typeof items_shown_per_page!="undefined" && (items_shown_per_page<items_fetched || items_fetched==0))
this.uchunksize=parseInt(items_shown_per_page) //user defined items to show per page (so paginate links are created. May differ from what's available).
}

// -------------------------------------------------------------------
// PUBLIC: set_template(name)- Specifies the name of a template, used within if/else logic of function outputbody() in outputbody.php
// -------------------------------------------------------------------

rssdisplaybox.prototype.set_template=function(tname){
this.template=tname.toLowerCase()
}

// -------------------------------------------------------------------
// PUBLIC: set_cache_time(minutes)- Set cache time in minutes. INT.
// -------------------------------------------------------------------

rssdisplaybox.prototype.set_cache_time=function(minutes){
this.cachetime=parseInt(minutes)
}

// -------------------------------------------------------------------
// PUBLIC: setpagination(paginatemode, pos_or_div)- Sets pagination mode ("auto" or "manual"), plus position (in "auto" mode) or id (in "manual" mode) of the paginate div.
// -------------------------------------------------------------------

rssdisplaybox.prototype.setpagination=function(paginatemode, pos_or_div){
this.paginatemode=paginatemode
this.pos_or_div=pos_or_div
}

// -------------------------------------------------------------------
// PUBLIC: start()- User initiated start() function, to tell the script to initialize itself.
// -------------------------------------------------------------------

rssdisplaybox.prototype.start=function(){
var rssboxhtml='<div id="'+this.boxid+'" class="'+this.boxclass+'"></div>'
if (typeof this.uchunksize!="undefined" && this.paginatemode=="auto") //if pagination links are needed AND mode is "auto"
document.getElementById(this.boxid+'-maincontainer').innerHTML=this.rssboxhtmlauto(rssboxhtml, this.pos_or_div)
else //in all other cases (paginate mode is "manual", or no pagination links needed at all)
document.getElementById(this.boxid+'-maincontainer').innerHTML=rssboxhtml
if (typeof this.uchunksize!="undefined")
this.paginatedivid=(this.paginatemode=="auto")? this.boxid+"-paginatediv" : this.pos_or_div
this.ajaxobj=createAjaxObj()
this.getAjaxcontent()
}

// -------------------------------------------------------------------
// PRIVATE: rssboxhtmlauto(rssboxhtml, paginatesetting)- Returns the full HTML to write out when pagination interface is set to "auto" generate
// -------------------------------------------------------------------

rssdisplaybox.prototype.rssboxhtmlauto=function(rssboxhtml, position){
var paginatedivauto='<div id="'+this.boxid+'-paginatediv" class="rsspaginate"><form><a href="#" rel="previous">Prev</a> <select class="paginateselect"></select> <a href="#" rel="next">Next</a></form></div>'
var rssboxhtmlauto=(position=="top")? paginatedivauto+rssboxhtml : rssboxhtml+paginatedivauto
return rssboxhtmlauto
}

// -------------------------------------------------------------------
// PRIVATE: getAjaxcontent()- Makes asynchronous GET request to "content.php" with the supplied parameters
// -------------------------------------------------------------------

rssdisplaybox.prototype.getAjaxcontent=function(){
if (this.ajaxobj){
var instanceOfBox=this
var parameters="id="+encodeURIComponent(this.RSS_id)+"&cachetime="+this.cachetime+"&limit="+this.utotalitems+"&template="+this.template+"&bustcache="+new Date().getTime()
document.getElementById(this.boxid).innerHTML=this.loadingHTML
this.loadingHTML=null
this.ajaxobj.onreadystatechange=function(){instanceOfBox.initialize()}
this.ajaxobj.open('GET', rssoutputscript+"?"+parameters, true)
this.ajaxobj.send(null)
}
}

// -------------------------------------------------------------------
// PRIVATE: initialize()- Initialize RSS Display Box method.
// -------------------------------------------------------------------

rssdisplaybox.prototype.initialize=function(){ 
if (this.ajaxobj.readyState == 4){ //if request of file completed
if (this.ajaxobj.status==200){ //if request was successful
var rsscontent=this.ajaxobj.responseText
if (typeof this.uchunksize!="undefined"){ //If variable containing how many items to show per page is defined
document.getElementById(this.boxid).style.visibility="hidden" //Hide display box before creating the pages and rendering pagination links
document.getElementById(this.boxid).innerHTML=rsscontent
this.gatheritems() //Round up all the items in the display box dynamically for breaking up into "pages". Items stored as <div class="rsscontainer"> elements.
}
else //else, just show RSS items without further delay
document.getElementById(this.boxid).innerHTML=rsscontent
}
else //if an error has occured
document.getElementById(this.boxid).innerHTML=this.ajaxobj.responseText
}
}

// -------------------------------------------------------------------
// PRIVATE: gatheritems()- Gather all the RSS items within display box (<div class="rsscontainer">), store as array, and prepare to create pagination div
// -------------------------------------------------------------------

rssdisplaybox.prototype.gatheritems=function(){
var rssdivtags=document.getElementById(this.boxid).getElementsByTagName("div") //find all div tags within RSS display box
this.pieces=[] //define array to hold items
for (var i=0; i<rssdivtags.length; i++){ //loop thru the div tags
if (rssdivtags[i].className=="rsscontainer")
this.pieces[this.pieces.length]=rssdivtags[i] //store each RSS item DIV inside array
}
this.pagecount=Math.ceil(this.pieces.length/this.uchunksize) //calculate number of pages needed to show the items
for (var i=0; i<this.pieces.length; i++)
this.pieces[i].style.display="none" //Hide all items to begin with as we figure out which should be shown per the page selected
this.chunksize=(this.uchunksize>0 && this.uchunksize <this.pieces.length)? this.uchunksize : this.pieces.length //Determine TRUE "chunk size" (# of items to show per page)
this.pagecount=Math.ceil(this.pieces.length/this.chunksize) //calculate number of "pages" needed to show the chunks
this.showpage(-1) //show no pages (aka hide all)
this.currentpage=0 //Having hidden all pages, set currently visible page to 1st page
this.showpage(this.currentpage) //Show first page
if (this.chunksize!=this.pieces.length) //if pagination links are indeed needed
this.buildpagination(this.paginatedivid)
else
document.getElementById(this.paginatedivid).style.display="none" //else, hide pagination div user has erroneously created
document.getElementById(this.boxid).style.visibility="visible"
}

////////// END RSSDISPLAYBOX() FUNCTION ////////////////////

//Create Ajax instance function

function createAjaxObj(){
var httprequest=false
if (window.XMLHttpRequest){ // if Mozilla, IE7, Safari etc
httprequest=new XMLHttpRequest()
}
else if (window.ActiveXObject){ // if IE6 or below
try {
httprequest=new ActiveXObject("Msxml2.XMLHTTP");
} 
catch (e){
try{
httprequest=new ActiveXObject("Microsoft.XMLHTTP");
}
catch (e){}
}
}
return httprequest
}


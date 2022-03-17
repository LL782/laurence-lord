function hide(tag) {
	 if (tag.style.visibility=='visible') {
	  	 tag.style.visibility='hidden'
	  } else {
	 	  tag.style.display='hidden'
	  }
}

function reveal(tag) {
	 if (tag.style.visibility=='hidden') {
	  	 tag.style.visibility='visible'
	  } else {
	 	  tag.style.display='visible'
	  }
}

function appear(tag) {
	 if (tag.style.display=='none') {
	  	 tag.style.display=''
	  } else {
	 	  tag.style.display=''
	  }
}

function disappear(tag) {
	 if (tag.style.display=='') {
	  	 tag.style.display='none'
	  } else {
	 	  tag.style.display='none'
	  }
}

function toggle(tag) {
	 if (tag.style.display=='') {
	  	 tag.style.display='none'
	  } else {
	 	  tag.style.display=''
	  }
}

function togglegal(tag, tag2) {
	 if (tag.style.display=='') {
	  	 tag.style.display='none'
	  } else {
	 	  tag.style.display=''
	  }
	  	 if (tag2.style.display=='') {
	  	 tag2.style.display='none'
	  } else {
	 	  tag2.style.display=''
	  }
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
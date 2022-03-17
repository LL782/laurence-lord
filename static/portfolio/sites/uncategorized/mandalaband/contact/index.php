<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><link rel="shortcut icon" type="image/x-icon" href="../img/logos/mandalaband.ico"><script language="javascript" type="text/javascript" src="../js/validateContactForm.js"></script><title>Mandalaband - Contact</title><link href="../css/contact.css" rel="stylesheet" type="text/css" /><script type="text/javascript" src="../js/analytics.js"></script></head><body><div id="mainContainer01"> <div id="header01">   <h1>Mandalaband</h1>    <a id="homeLink01" href="../home"></a>  </div>  <ul id="menu01">  <li><a id="homeLink02" href="../home"><span>Home</span></a></li>  <li><a id="albumsLink02" href="../albums"><span>Albums</span></a></li>  <li><a id="newsLink02" href="../news"><span>News</span></a></li>  <li><a id="shopLink02" href="../shop"><span>Shop</span></a></li>  <li><a id="bandLink02" href="../band"><span>The Band</span></a></li>  <li class="selected"><a id="contactLink02" href="../contact"><span>Contact</span></a></li> </ul>  <div id="mainContainer02">    <div id="primaryAnnouncement01">   <img src="../img/decorations/gebel-musa_01.jpg" width="903" height="385" />  </div>    <div class="anchorHolder"><a id="contact" name="contact"></a></div>     <div id="container3">		 <?php    if($_REQUEST['sent'] == "yes")				 {   ?>       <p id="successNote">Thank you! The form was sent successfully.</p>    			<?      }    else if($_REQUEST['sent'] == "no")      {   ?>         <p id="successNote">There was a problem sending your message.  Please click the <a href="javascript:history.back()">back</a> button in your browser and try again.</p>   <?			  }									else 				 {			?>      <form name="contactForm" id="contactForm" action="contactFormSender.php" method="post" onsubmit="return validateContactForm();">     <div id="colLeft1">          <h2>Contact</h2>    <p style="padding-top:3px;">You can make contact with Mandalaband via Legend Records.</p>        <p>Visit <a href="http://legendrecords.co.uk" target="_blank">legendrecords.co.uk</a> or use the form provided here.  We would like to know how you first heard of Mandalaband and what you think of the albums.</p>       <p>If you would like to be included in our electronic mailing list then please check the box below before sending the form.</p>           <div id="newsButton">        <label for="newsContact">Tick the box and send the form to receive news.</label>     <input name="newsContact" type="checkbox" id="newsContact" value="news" />    </div>   </div><!-- end:colLeft1 -->      <div id="colRight1">    <h2>Message Form</h2>         <div class="inputs1">         <div class="line"><label for="nameContact">Name:</label>     <input name="nameContact" type="text" id="nameContact" />     <br></div>          <div class="line"><label for="emailContact">Email:</label>     <input name="emailContact" type="text" id="emailContact" />     <br></div>         <div class="line"><label for="messageContact">Message:</label>     <textarea name="messageContact" id="messageContact"></textarea></div>         </div><!-- inputs1 -->           <div class="buttons">     <input name="submitContact" type="submit" id="submitContact" value="Send" />    </div><!-- buttons -->         </form>       </div><!-- end:colRight1 -->     			<?    }   ?>   </div><!-- end:container3 -->    <div id="contactDiv2">   <h2><span>myspace</span></h2>   <a id="myspaceLink01" href="http://myspace.com/mandalaband3" target="_blank"></a>   <p>Add us on myspace and we will keep you up to date with the latest news and all the information about live events and new releases:  <a href="http://myspace.com/mandalaband3" target="_blank">myspace.com/mandalaband3</a></p>  </div><!-- end:homeDiv2 -->    </div><!-- end: mainContainer02 -->  <div id="mainContainer02-footer"></div> </div><!-- end: mainContainer01 --><div id="pageFooter01"> <p>&copy; 2010 Legend Music Limited.  All rights reserved.</p></div> <div id="preload01"> <div id="homeLink03a"></div> <div id="homeLink03b"></div> <div id="homeLink03c"></div> <div id="albumsLink03a"></div> <div id="albumsLink03b"></div> <div id="albumsLink03c"></div> <div id="newsLink03a"></div> <div id="newsLink03b"></div> <div id="newsLink03c"></div> <div id="shopLink03a"></div> <div id="shopLink03b"></div> <div id="shopLink03c"></div> <div id="bandLink03a"></div> <div id="bandLink03b"></div> <div id="bandLink03c"></div> <div id="contactLink03a"></div> <div id="contactLink03b"></div> <div id="contactLink03c"></div>  <div id="myspaceLink02"></div> <div id="submitContact2"></div> </div></body></html>
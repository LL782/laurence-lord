<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link rel="shortcut icon" href="../../img/logos/favicon.ico">
<link href="../../css/site.css" rel="stylesheet" type="text/css">
<link href="../../css/menu.css" rel="stylesheet" type="text/css">

<script language="javascript" type="text/javascript" src="validateNewsletterForm.js"></script>
<script language="javascript" type="text/javascript" src="validateContactForm.js"></script>

<script type="text/javascript" src="../../js/mootools-release-1.11.js"></script>
<script type="text/javascript" src="../../js/smoothTricks.js"></script>
<script type="text/javascript" src="../../js/slideAndHideTricks.js"></script>
<script type="text/javascript" src="../../js/opportunitiesAccordian.js"></script>
<script type="text/javascript" src="../../js/linksAjax.js"></script>



<title>Raiar - Further Information</title>

</head>

<body>

<a id="top" name="top"></a><!--
<div id="langSelect">
 <a href="../../pt/home" title="Clique aqui para ver a versão em português">Português</a>
</div>

<div id="container01">

 <div id="topContainer01">
 
  <a id="horizontalLogo01" href="../home"><h1 class="noDisplay">Instituto Raiar</h1> </a>
  
  <ul id="topMenu">
   <li><a id="aAboutRaiar01" href="../about"><span class="noDisplay">About Raiar</span></a></li>
   <li><a id="aOurTeams01" href="../teams"><span class="noDisplay">Our Teams</span></a></li>
   <li><a id="aOurPrograms01" href="../programs"><span class="noDisplay">Our Programs</span></a></li>
   <li class="selected"><a id="aFurtherInformation01" href="../further"><span class="noDisplay">Further Information</span></a></li>
  </ul>
  
  <h2 id="h2FurtherInformation02"><span class="noDisplay">Further Information</span></h2>
 </div><!-- end of topContainer01 -->
 
   
  
   
 <div id="mainContainer01">
 
 
  <div class="anchorHolder"><a id="newsletter" name="newsletter"></a></div>
  <div class="subsection">
  
  
   <ul class="sideMenu">
    <li class="selected"><a href="#newsletter"><span>Newsletter</span></a></li>
    <li><a href="#contact"><span>Contact Information</span></a></li>
    <li><a href="#blog"><span>Raiar News Blog</span></a></li>
    <li><a href="#links"><span>Related Links</span></a></li>
    <li><a href="#opportunities"><span>Opportunities</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Newsletter</h3>
    
    <?php
     if($_REQUEST['sent'] == "news") {
    ?>
    
    <div class="successNote">
     <h4>Message Sent</h4>
     
     <p>Your message has been successfully sent.  Thank you for choosing to subscribe to our newsletter, we will contact you in the near future to confirm your request.</p>
     
     <p>If for any reason you wish to unsubscribe you can do so by sending a blank email to <a href="mailto:unsubscribe@raiar.org">unsubscribe@raiar.org</a>.</p>
    
    </div>
    
    <div class="noDisplay">
    
     <h4>Receive Updates</h4>
     
     <p>If you would like to receive occassional updates drawing your attention to new developments within the Instituto Raiar please fill out and send the following form.</p>
     
     <form name="newsletterFormEn" id="newsletterFormEn" action="newsletterFormSender.php" onsubmit="return validateNews();" method="post">
     
      <div class="inputs1">
      
       <label for="nameNews">Name :</label>
       <input name="nameNews" type="text" id="nameNews" />
       <br>
       
       <label for="emailNews">Email address :</label>
       <input name="emailNews" type="text" id="emailNews" />
      </div><!-- inputs1 -->
      
      <h5 id="h5Optional1">
       <a href="#" id="slidein">Optional Details (click here) : </a></h5>
      
      <div id="optionalInputs">      
      
       <h5 id="h5Optional2">Optional Details</h5>
      
       <label for="orgNews">Organisation :</label>
       <input name="orgNews" type="text" id="orgNews" />
       <br>
       
       <label for="locationNews">Location :</label>
       <input name="locationNews" type="text" id="locationNews" />
       <br>
       
       <label for="siteNews">Website :</label>
       <input name="siteNews" type="text" id="siteNews" value="http://" />
       <br>
       
       <label for="interestNews">Interest in Raiar :</label>
       <input name="interestNews" type="text" id="interestNews" />
      </div><!-- optionalInputs -->
      
      
      <div class="buttons">
       <input name="resetNews" type="reset" id="resetNews" value="Clear Form"  onMouseDown="reset();" />
       <input name="submitNews" type="submit" id="submitNews" value="Send Form" />
      </div><!-- buttons -->
     </form>
     
    </div><!-- no display -->
     
     <? } 
					
					else {
					
					?>
    
    <h4>Receive Updates</h4>
    
    <p>If you would like to receive occassional updates drawing your attention to new developments within the Instituto Raiar please fill out and send the following form.</p>
    
    <form name="newsletterFormEn" id="newsletterFormEn" action="newsletterFormSender.php" onsubmit="return validateNews();" method="post">
    
     <div class="inputs1">
     
      <label for="nameNews">Name :</label>
      <input name="nameNews" type="text" id="nameNews" />
      <br>
      
      <label for="emailNews">Email address :</label>
      <input name="emailNews" type="text" id="emailNews" />
     </div><!-- inputs1 -->
     
     <h5 id="h5Optional1">
      <a href="#" id="slidein">Optional Details (click here) : </a></h5>
     
     <div id="optionalInputs">      
     
      <h5 id="h5Optional2">Optional Details</h5>
     
      <label for="orgNews">Organisation :</label>
      <input name="orgNews" type="text" id="orgNews" />
      <br>
      
      <label for="locationNews">Location :</label>
      <input name="locationNews" type="text" id="locationNews" />
      <br>
      
      <label for="siteNews">Website :</label>
      <input name="siteNews" type="text" id="siteNews" value="http://" />
      <br>
      
      <label for="interestNews">Interest in Raiar :</label>
      <input name="interestNews" type="text" id="interestNews" />
     </div><!-- optionalInputs -->
     
     
     <div class="buttons">
      <input name="resetNews" type="reset" id="resetNews" value="Clear Form"  onMouseDown="reset();" />
      <input name="submitNews" type="submit" id="submitNews" value="Send Form" />
     </div><!-- buttons -->
    </form>
    
    <? } ?>
    
   <div class="subsectionEnder">
     <a class="upArrow" href="#top"></a>
     <a class="downArrow" href="#contact"></a>    </div>
   </div><!-- end of mainContainer02 -->
   
   
   <div class="sideLinks">
       
    
    <h5>For previous newsletters click:</h5>
    
    <div class="sideLink"><a href="#" target="_blank">Newsletter May 2008</a></div>
    
    <div class="sideLink"><a href="#" target="_blank">Newsletter April 2008</a></div>
    
    <div class="sideLink"><a href="#" target="_blank">Newsletter March 2008</a></div>
   </div><!-- end of sideLinks -->
  </div><!-- end of subSection -->
  
  
  
  <div class="anchorHolder"><a id="contact" name="contact"></a></div>
  <div class="subsection">
  
  
   <ul class="sideMenu">
    <li><a href="#newsletter"><span>Newsletter</span></a></li>
    <li class="selected"><a href="#contact"><span>Contact Information</span></a></li>
    <li><a href="#blog"><span>Raiar News Blog</span></a></li>
    <li><a href="#links"><span>Related Links</span></a></li>
    <li><a href="#opportunities"><span>Opportunities</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Contact Information</h3>
    
    <?php
     if($_REQUEST['sent'] == "contact") {
    ?>
    
    <div class="successNote">
     <h4>Message Sent Successfully</h4>
     
     <p>Thank you for making contact with the Instituto Raiar.  We will contact you in the near future in response to any requests or queries.</p>
    
    </div>
    
    <div class="noDisplay">
    
     <h4>Contact Form</h4>
     
     <form name="contactFormEn" id="contactFormEn" action="contactFormSender.php" onsubmit="return validateContactForm();" method="post">
     
      <div class="inputs1">
      
       <label for="nameContact">Name :</label>
       <input name="nameContact" type="text" id="nameContact" />
       <br>
       
       <label for="emailContact">Email address :</label>
       <input name="emailContact" type="text" id="emailContact" />
       <br>
      
       <label for="messageContact">Message :</label>
       <textarea name="messageContact" id="messageContact"></textarea>
       
      </div><!-- inputs1 -->
      
      <h5 id="h5Optional1B">
       <a href="#" id="slideinB">Optional Details (click here) : </a></h5>
      
      <div id="optionalInputsB">      
      
       <div class="inputs1">
       
        <h5 id="h5Optional2B">Optional Details</h5>
      
        <label for="orgContact">Organisation :</label>
        <input name="orgContact" type="text" id="orgContact" />
        <br>
        
        <label for="locationContact">Location :</label>
        <input name="locationContact" type="text" id="locationContact" />
        <br>
        
        <label for="siteContact">Website :</label>
        <input name="siteContact" type="text" id="siteContact" value="http://" />
        <br>
        
        <label for="interestContact">Interest in Raiar :</label>
        <input name="interestContact" type="text" id="interestContact" />
        
       </div><!-- inputs 1 -->
      
       <div class="inputs2">
       
        <label for="newsContact">Check this box to receive our newsletter :</label>
        <input name="newsContact" type="checkbox" id="newsContact" value="news" />
       
       </div><!-- inputs2 -->
       
      </div><!-- optional inputs B -->
      
  
      <div class="buttons">
       <input name="resetContact" type="reset" id="resetContact" value="Clear Form" onMouseDown="reset();" />
       <input name="submitContact" type="submit" id="submitContact" value="Send Form" />
      </div><!-- buttons -->
      
     </form>
     
    </div><!-- no display-->
    
    <? } 
				
				else {
				
				?>
    
    <h4>Contact Form</h4>
    
    <form name="contactFormEn" id="contactFormEn" action="contactFormSender.php" onsubmit="return validateContactForm();" method="post">
    
     <div class="inputs1">
     
      <label for="nameContact">Name :</label>
      <input name="nameContact" type="text" id="nameContact" />
      <br>
      
      <label for="emailContact">Email address :</label>
      <input name="emailContact" type="text" id="emailContact" />
      <br>
     
      <label for="messageContact">Message :</label>
      <textarea name="messageContact" id="messageContact"></textarea>
      
     </div><!-- inputs1 -->
     
     <h5 id="h5Optional1B">
      <a href="#" id="slideinB">Optional Details (click here) : </a></h5>
     
     <div id="optionalInputsB">      
     
      <div class="inputs1">
      
       <h5 id="h5Optional2B">Optional Details</h5>
     
       <label for="orgContact">Organisation :</label>
       <input name="orgContact" type="text" id="orgContact" />
       <br>
       
       <label for="locationContact">Location :</label>
       <input name="locationContact" type="text" id="locationContact" />
       <br>
       
       <label for="siteContact">Website :</label>
       <input name="siteContact" type="text" id="siteContact" value="http://" />
       <br>
       
       <label for="interestContact">Interest in Raiar :</label>
       <input name="interestContact" type="text" id="interestContact" />
       
      </div><!-- inputs 1 -->
     
      <div class="inputs2">
      
       <label for="newsContact">Check this box to receive our newsletter :</label>
       <input name="newsContact" type="checkbox" id="newsContact" value="news" />
      
      </div><!-- inputs2 -->
      
     </div><!-- optional inputs B -->
     
 
     <div class="buttons">
      <input name="resetContact" type="reset" id="resetContact" value="Clear Form" onMouseDown="reset();" />
      <input name="submitContact" type="submit" id="submitContact" value="Send Form" />
     </div><!-- buttons -->
     
    </form>
    
    <? } ?>
    
        
    <h4>For postal corrispondance please use the following address:</h4>
    
    <p>Av. Miguel Castro, 1517<br>
     Lagoa Nova, Natal / RN<br>
     59075-740<br>
     Brazil</p>
  
    <div class="subsectionEnder">
     <a class="upArrow" href="#top"></a>
     <a class="downArrow" href="#blog"></a>
    </div>
   </div><!-- end of mainContainer02 -->
   
   
   <div class="sideLinks">
   
    <h5>Telephone:</h5>
    
    <div class="sideLink">+55 (0) 84 3231 xxxx</div>
   
    <h5>Email Addresses:</h5>
    
    <div class="sideLink">General enquires<br>
     <a href="mailto:info@raiar.org">info@raiar.org</a></div>
    
    <div class="sideLink">Breno and Breno related<br>
     <a href="mailto:email2@raiar.org">breno@raiar.org</a></div>
    
    <div class="sideLink">Geralda and Geralda related<br>
     <a href="mailto:email3@raiar.org">geralda@raiar.org</a></div>
    
    <div class="sideLink">Graphic and webdesign related<br>
     <a href="mailto:monkeyzbox@raiar.org">monkeyzbox@raiar.org</a></div>
    
    
   </div><!-- end of sideLinks -->
  </div><!-- end of subSection -->
 
 
  <div class="anchorHolder"><a id="blog" name="blog"></a></div>
  <div class="subsection">
  
  
   <ul class="sideMenu">
    <li><a href="#newsletter"><span>Newsletter</span></a></li>
    <li><a href="#contact"><span>Contact Information</span></a></li>
    <li class="selected"><a href="#blog"><span>Raiar News Blog</span></a></li>
    <li><a href="#links"><span>Related Links</span></a></li>
    <li><a href="#opportunities"><span>Opportunities</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Raiar News Blog</h3>
    
    <p>News and announcements relating to the Instituto Raiar are available via the blogs listed below.  Each blog operates independantly.  News and information directed specifically to people based in Brazil is covered primarily by the Portuguese language blog whereas the English language blog contains information selected for potentially international audience.</p>
    
    <ul>
    
     <li>English Language Raiar News Blog:<br>
      <a href="http://raiarnews.blog.com/" target="blank">http://raiarnews.blog.com</a></li>
     <li>Portuguese Language Raiar News:<br>
      <a href="http://raiarnoticias.blog.com/" target="blank">http://raiarnoticias.blog.com</a></li>
     
    </ul>
    
    <p>Please be aware that news and announcements are also issued via our <a href="#newsletter" title="Click for more information regarding the newsletter.">newsletter</a>.  Please click the link for more information.</p>
    
    <div class="subsectionEnder">
     <a class="upArrow" href="#top"></a>
     <a class="downArrow" href="#links"></a>
    </div>
    
   </div>
   
   
   <div class="sideLinks">
      
   </div><!-- end of sideLinks -->
  </div><!-- end of subSection -->
 
 
 	<div class="anchorHolder"><a id="links" name="links"></a></div>
  <div class="subsection">
  
  
   <ul class="sideMenu">
    <li><a href="#newsletter"><span>Newsletter</span></a></li>
    <li><a href="#contact"><span>Contact Information</span></a></li>
    <li><a href="#blog"><span>Raiar News Blog</span></a></li>
    <li class="selected"><a href="#links"><span>Related Links</span></a></li>
    <li><a href="#opportunities"><span>Opportunities</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Related Links</h3>
    
    <div id="log">    
     <p>Please select a list of links from the submenu on the right...</p>
     <div class="spacer250"></div>
    </div>
    
    <div class="subsectionEnder">
     <a class="upArrow" href="#top"></a>
     <a class="downArrow" href="#opportunities"></a>    </div>
   </div><!-- end of mainContainer02 -->
   
   
   <div class="sideLinks">
   
    <div id="sideLinksSpecial">
    
     <h5>Submenu of Links:</h5>
     
     <div class="sideLink"><a id="links1" href="#">Centros Avançados de Educação</a></div>
     
     <div class="sideLink"><a id="links2" href="#">Ecocentros</a></div>
     
     <div class="sideLink"><a id="links3" href="#">Educação Ambiental</a></div>
     
     <div class="sideLink"><a id="links4" href="#">Notícias e Blogs</a></div>
     
     <div class="sideLink"><a id="links5" href="#">Bioconstruções e Permacultura</a></div>
     
     <div class="sideLink"><a id="links6" href="#">Organizações Não Governamentais</a></div>
     
     <div class="sideLink"><a id="links7" href="#">Mestres</a></div>
     
     <div class="sideLink"><a id="links8" href="#">Responsabilidade Social</a></div>
     
 <span class="noDisplay">
     
     <div class="sideLink"><a id="links9" href="#">Links 9</a></div>
     
     <div class="sideLink"><a id="links10" href="#">Links 10</a></div>
     
 </span>
 
    </div>
    
   </div><!-- end of sideLinks -->
  </div><!-- end of subSection -->
  
  
 	<div class="anchorHolder"><a id="opportunities" name="opportunities"></a></div>
  <div class="subsection">
  
  
   <ul class="sideMenu">
    <li><a href="#newsletter"><span>Newsletter</span></a></li>
    <li><a href="#contact"><span>Contact Information</span></a></li>
    <li><a href="#blog"><span>Raiar News Blog</span></a></li>
    <li><a href="#links"><span>Related Links</span></a></li>
    <li class="selected"><a href="#opportunities"><span>Opportunities</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Opportunities</h3>
     
    <p>Please click on the links below to access more information:</p>
 
    <div id="accordion">
     
     <h4 class="toggler atStart">Title of Opportunity I :  Brief description in about as many words as are used here in this title.</h4>
    
     <div class="element atStart">
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. typesetting, remaining essentially unchanged.</p>
      <p>If you are interested in this opportunity or would like more information please contact <a href="mailto:geralda@raiar.org">geralda@raiar.org</a>.</p>
     </div>

     
     <h4 class="toggler atStart">Title of Opportunity II : Also with a brief description in about as many words as are used here in this title.</h4>
     
     <div class="element atStart">
    
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    
      <p>It has survived not only five centuries, but also the leap into electronic. typesetting, remaining unchanged, <a href="#">in line link.</a> It was with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software. </p>
      
      <p>If you are interested in this opportunity or would like more information please contact <a href="mailto:breno@raiar.org">breno@raiar.org</a>.</p>
      
     </div>

    </div><!-- end of accordian -->
    
    <div class="subsectionEnder">
     <a class="upArrow" href="#top"></a>
    </div>
   </div><!-- end of mainContainer02 -->
   
   
   <div class="sideLinks">  
    
    <!--<h5>Example Title</h5>-->
    
    <!--<div class="sideLink">Example Link Description<br><a href="#" target="_blank">www.examplelink.com</a></div>-->
    
   </div><!-- end of sideLinks -->
   
   
  </div><!-- end of subSection -->
  
 </div><!-- end of mainContainer01 -->
 
</div><!-- end of container 01 -->
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-4437475-5");
pageTracker._trackPageview();
} catch(err) {}</script>
</body>
</html>

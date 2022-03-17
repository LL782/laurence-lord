<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link rel="shortcut icon" href="../../img/logos/favicon.ico">

<link href="../../css/site.css" rel="stylesheet" type="text/css">

<script language="javascript" type="text/javascript" src="validateNewsletterForm.js"></script>
<script language="javascript" type="text/javascript" src="validateContactForm.js"></script>

<script type="text/javascript" src="../../js/mootools-release-1.11.js"></script>
<script type="text/javascript" src="../../js/smoothTricks.js"></script>
<script type="text/javascript" src="../../js/slideAndHideTricks.js"></script>
<script type="text/javascript" src="../../js/opportunitiesAccordian.js"></script>
<script type="text/javascript" src="../../js/linksAjax.js"></script>



<title>Instituto Raiar - Mais Informações</title>

</head>

<body>

<a id="top" name="top"></a>

<div id="langSelect">
 <a href="../../en/home" title="Click here for the English version">English</a>
</div>

<div id="container01">

 <div id="topContainer01">
 
  <a id="horizontalLogo01" href="../home"><h1 class="noDisplay">Instituto Raiar</h1> </a>
  
  <ul id="topMenu">
   <li><a id="aSobreRaiar01" href="../sobre"><span class="noDisplay">Sobre O Raiar</span></a></li>
   <li><a id="aNossosTimes01" href="../times"><span class="noDisplay">Nossos Times</span></a></li>
   <li><a id="aNossosProgramas01" href="../programas"><span class="noDisplay">Nossos Programas</span></a></li>
   <li class="selected"><a id="aMaisInformacoes01" href="../mais"><span class="noDisplay">Mais Informações</span></a></li>
  </ul>
  
  <h2 id="h2MaisInformacoes02"><span class="noDisplay">Mais Informações</span></h2>
 </div><!-- end of topContainer01 -->
 
   
  
   
 <div id="mainContainer01">
 
 
  <div class="anchorHolder"><a id="newsletter" name="newsletter"></a></div>
  <div class="subsection">
  
  
   <ul class="sideMenu">
    <li class="selected"><a href="#newsletter"><span>Newsletter</span></a></li>
    <li><a href="#contato"><span>Informação de Contato</span></a></li>
    <li><a href="#blog"><span>Blog de Notícias do Raiar</span></a></li>
    <li><a href="#links"><span>Links Destacados</span></a></li>
    <li><a href="#oportunidades"><span>Oportunidades</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Newsletter</h3>
    
    <?php
     if($_REQUEST['sent'] == "news") {
    ?>
    
    <div class="successNote">
     <h4>Mensagem Enviada com Sucesso</h4>
     
     <p>Obrigado por subscrever nossa newsletter. Nós entraremos em contato com você em breve para confirmar sua subscrição.</p>
     
     <p>Se por qualquer razão você deseja cancelar sua assinatura do newsletter, envie um email em branco para <a href="mailto:assinatura@raiar.org">assinatura@raiar.org</a>.</p>
    
    </div>
    
    <div class="noDisplay">
    
     
     <h4>Receba atualizações</h4>
     
     <p>Se você deseja receber atualizações eventuais sobre novos desenvolvimentos do Instituto Raiar, por favor preencha e envie o seguinte formulário.</p>
     
     <form name="newsletterFormEn" id="newsletterFormEn" action="newsletterFormSender.php" onsubmit="return validateNews();" method="post">
     
      <div class="inputs1">
      
       <label for="nameNews">Nome :</label>
       <input name="nameNews" type="text" id="nameNews" />
       <br>
       
       <label for="emailNews">Email :</label>
       <input name="emailNews" type="text" id="emailNews" />
      </div><!-- inputs1 -->
      
      <h5 id="h5Optional1">
       <a href="#" id="slidein">Detalhes Opcionais (clique aqui) : </a></h5>
      
      <div id="optionalInputs">      
      
       <h5 id="h5Optional2">Detalhes Opcionais</h5>
      
       <label for="orgNews">Organização :</label>
       <input name="orgNews" type="text" id="orgNews" />
       <br>
       
       <label for="locationNews">Localidade :</label>
       <input name="locationNews" type="text" id="locationNews" />
       <br>
       
       <label for="siteNews">Website :</label>
       <input name="siteNews" type="text" id="siteNews" value="http://" />
       <br>
       
       <label for="interestNews">Interesse no Raiar :</label>
       <input name="interestNews" type="text" id="interestNews" />
      </div><!-- optionalInputs -->
      
      
      <div class="buttons">
       <input name="resetNews" type="reset" id="resetNews" value="Limpar"  onMouseDown="reset();" />
       <input name="submitNews" type="submit" id="submitNews" value="Enviar" />
      </div><!-- buttons -->
     </form>
     
    </div><!-- no display -->
     
     <? } 
					
					else {
					
					?>
    
     
    <h4>Receba atualizações</h4>
    
    <p>Se você deseja receber atualizações eventuais sobre novos desenvolvimentos do Instituto Raiar, por favor preencha e envie o seguinte formulário.</p>
    
    <form name="newsletterFormEn" id="newsletterFormEn" action="newsletterFormSender.php" onsubmit="return validateNews();" method="post">
    
     <div class="inputs1">
     
      <label for="nameNews">Nome :</label>
      <input name="nameNews" type="text" id="nameNews" />
      <br>
      
      <label for="emailNews">Email :</label>
      <input name="emailNews" type="text" id="emailNews" />
     </div><!-- inputs1 -->
     
     <h5 id="h5Optional1">
      <a href="#" id="slidein">Detalhes Opcionais (clique aqui) : </a></h5>
     
     <div id="optionalInputs">      
     
      <h5 id="h5Optional2">Detalhes Opcionais</h5>
     
      <label for="orgNews">Organização :</label>
      <input name="orgNews" type="text" id="orgNews" />
      <br>
      
      <label for="locationNews">Localidade :</label>
      <input name="locationNews" type="text" id="locationNews" />
      <br>
      
      <label for="siteNews">Website :</label>
      <input name="siteNews" type="text" id="siteNews" value="http://" />
      <br>
      
      <label for="interestNews">Interesse no Raiar :</label>
      <input name="interestNews" type="text" id="interestNews" />
     </div><!-- optionalInputs -->
     
     
     <div class="buttons">
      <input name="resetNews" type="reset" id="resetNews" value="Limpar"  onMouseDown="reset();" />
      <input name="submitNews" type="submit" id="submitNews" value="Enviar" />
     </div><!-- buttons -->
    </form>
    
    <? } ?>
    
    
    
  <div class="subsectionEnder">
     <a class="upArrow" href="#top"></a>
     <a class="downArrow" href="#contato"></a>    </div>
   </div><!-- end of mainContainer02 -->
   
   
   <div class="sideLinks">
       
    
    <h5>For previous newsletters click:</h5>
    
    <div class="sideLink"><a href="#" target="_blank">Newsletter May 2008</a></div>
    
    <div class="sideLink"><a href="#" target="_blank">Newsletter April 2008</a></div>
    
    <div class="sideLink"><a href="#" target="_blank">Newsletter March 2008</a></div>
   </div><!-- end of sideLinks -->
  </div><!-- end of subSection -->
  
  
  
  <div class="anchorHolder"><a id="contato" name="contato"></a></div>
  <div class="subsection">
  
  
   <ul class="sideMenu">
    <li><a href="#newsletter"><span>Newsletter</span></a></li>
    <li class="selected"><a href="#contato"><span>Informação de Contato</span></a></li>
    <li><a href="#blog"><span>Blog de Notícias do Raiar</span></a></li>
    <li><a href="#links"><span>Links Destacados</span></a></li>
    <li><a href="#oportunidades"><span>Oportunidades</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Informação de Contato</h3>
    
    <?php
     if($_REQUEST['sent'] == "contact") {
    ?>
    
    <div class="successNote">
     <h4>Mensagem Enviada com Sucesso</h4>
     
     <p>Obrigado por entrar em contato com o Instituto Raiar. Nós entraremos em contato com você brevemente, respondendo aos seus pedidos ou dúvidas.</p>
    
    </div>
    
    <div class="noDisplay">
    
     <h4>Formulário de Contato</h4>
     
     <form name="contactFormEn" id="contactFormEn" action="contactFormSender.php" onsubmit="return validateContactForm();" method="post">
     
      <div class="inputs1">
      
       <label for="nameContact">Nome :</label>
       <input name="nameContact" type="text" id="nameContact" />
       <br />
       
       <label for="emailContact">Email :</label>
       <input name="emailContact" type="text" id="emailContact" />
       <br />
      
       <label for="messageContact">Mensagem :</label>
       <textarea name="messageContact" id="messageContact"></textarea>
       
      </div><!-- inputs1 -->
      
      <h5 id="h5Optional1B">
       <a href="#" id="slideinB">Detalhes Opcionais (clique aqui) : </a></h5>
      
      <div id="optionalInputsB">      
      
       <div class="inputs1">
       
        <h5 id="h5Optional2B">Detalhes Opcionais</h5>
      
        <label for="orgContact">Organização :</label>
        <input name="orgContact" type="text" id="orgContact" />
        <br>
        
        <label for="locationContact">Localidade :</label>
        <input name="locationContact" type="text" id="locationContact" />
        <br>
        
        <label for="siteContact">Website :</label>
        <input name="siteContact" type="text" id="siteContact" value="http://" />
        <br>
        
        <label for="interestContact">Interesse no Raiar :</label>
        <input name="interestContact" type="text" id="interestContact" />
        
       </div><!-- inputs 1 -->
      
       <div class="inputs2">
       
        <label for="newsContact">Selecione esta caixa para receber nosso newsletter :</label>
        <input name="newsContact" type="checkbox" id="newsContact" value="news" />
       
       </div><!-- inputs2 -->
       
      </div><!-- optional inputs B -->
      
  
      <div class="buttons">
       <input name="resetContact" type="reset" id="resetContact" value="Limpar" onMouseDown="reset();" />
       <input name="submitContact" type="submit" id="submitContact" value="Enviar" />
      </div><!-- buttons -->
      
     </form>
     
    </div><!-- no display-->
    
    <? } 
				
				else {
				
				?>
    
    <h4>Formulário de Contato</h4>
    
    <form name="contactFormEn" id="contactFormEn" action="contactFormSender.php" onsubmit="return validateContactForm();" method="post">
    
     <div class="inputs1">
     
      <label for="nameContact">Nome :</label>
      <input name="nameContact" type="text" id="nameContact" />
      <br />
      
      <label for="emailContact">Email :</label>
      <input name="emailContact" type="text" id="emailContact" />
      <br />
     
      <label for="messageContact">Mensagem :</label>
      <textarea name="messageContact" id="messageContact"></textarea>
      
     </div><!-- inputs1 -->
     
     <h5 id="h5Optional1B">
      <a href="#" id="slideinB">Detalhes Opcionais (clique aqui) : </a></h5>
     
     <div id="optionalInputsB">      
     
      <div class="inputs1">
      
       <h5 id="h5Optional2B">Detalhes Opcionais</h5>
     
       <label for="orgContact">Organização :</label>
       <input name="orgContact" type="text" id="orgContact" />
       <br>
       
       <label for="locationContact">Localidade :</label>
       <input name="locationContact" type="text" id="locationContact" />
       <br>
       
       <label for="siteContact">Website :</label>
       <input name="siteContact" type="text" id="siteContact" value="http://" />
       <br>
       
       <label for="interestContact">Interesse no Raiar :</label>
       <input name="interestContact" type="text" id="interestContact" />
       
      </div><!-- inputs 1 -->
     
      <div class="inputs2">
      
       <label for="newsContact">Selecione esta caixa para receber nosso newsletter :</label>
       <input name="newsContact" type="checkbox" id="newsContact" value="news" />
      
      </div><!-- inputs2 -->
      
     </div><!-- optional inputs B -->
     
 
     <div class="buttons">
      <input name="resetContact" type="reset" id="resetContact" value="Limpar" onMouseDown="reset();" />
      <input name="submitContact" type="submit" id="submitContact" value="Enviar" />
     </div><!-- buttons -->
     
    </form>
    
    <? } ?>
    
        
    <h4>For postal corrispondance please use the following address:</h4>
    
    <p>Av. Miguel Castro, 1517<br />
     Lagoa Nova, Natal / RN<br />
     59075-740<br />
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
    
    <div class="sideLink">General enquires<br />
     <a href="mailto:info@raiar.org">info@raiar.org</a></div>
    
    <div class="sideLink">Breno and Breno related<br />
     <a href="mailto:email2@raiar.org">breno@raiar.org</a></div>
    
    <div class="sideLink">Geralda and Geralda related<br />
     <a href="mailto:email3@raiar.org">geralda@raiar.org</a></div>
    
    <div class="sideLink">Graphic and webdesign related<br />
     <a href="mailto:monkeyzbox@raiar.org">monkeyzbox@raiar.org</a></div>
    
    
   </div><!-- end of sideLinks -->
  </div><!-- end of subSection -->
 
 
  <div class="anchorHolder"><a id="blog" name="blog"></a></div>
  <div class="subsection">
  
  
   <ul class="sideMenu">
    <li><a href="#newsletter"><span>Newsletter</span></a></li>
    <li><a href="#contato"><span>Informação de Contato</span></a></li>
    <li class="selected"><a href="#blog"><span>Blog de Notícias do Raiar</span></a></li>
    <li><a href="#links"><span>Links Destacados</span></a></li>
    <li><a href="#oportunidades"><span>Oportunidades</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Blog de Notícias do Raiar</h3>
    
    <p>News and announcements relating to the Instituto Raiar are available via the blogs listed below.  Each blog operates independantly.  News and information directed specifically to people based in Brazil is covered primarily by the Portuguese language blog whereas the English language blog contains information selected for potentially international audience.</p>
    
    <ul>
    
     <li>English Language Raiar News Blog:<br />
      <a href="http://raiarnews.blog.com/" target="blank">http://raiarnews.blog.com</a></li>
     <li>Portuguese Language Raiar News:<br />
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
    <li><a href="#contato"><span>Informação de Contato</span></a></li>
    <li><a href="#blog"><span>Blog de Notícias do Raiar</span></a></li>
    <li class="selected"><a href="#links"><span>Links Destacados</span></a></li>
    <li><a href="#oportunidades"><span>Oportunidades</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Related Links</h3>
    
    <div id="log">    
     <p>Por favor selecione uma lista de links do submenu à direita...</p>
     <div class="spacer250"></div>
    </div>
    
    <div class="subsectionEnder">
     <a class="upArrow" href="#top"></a>
     <a class="downArrow" href="#oportunidades"></a>    </div>
   </div><!-- end of mainContainer02 -->
   
   
   <div class="sideLinks">
   
    <div id="sideLinksSpecial">
    
     <h5>Submenu de Links:</h5>
     
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
  
  
 	<div class="anchorHolder"><a id="oportunidades" name="oportunidades"></a></div>
  <div class="subsection">
  
  
   <ul class="sideMenu">
    <li><a href="#newsletter"><span>Newsletter</span></a></li>
    <li><a href="#contato"><span>Informação de Contato</span></a></li>
    <li><a href="#blog"><span>Blog de Notícias do Raiar</span></a></li>
    <li><a href="#links"><span>Links Destacados</span></a></li>
    <li class="selected"><a href="#oportunidades"><span>Oportunidades</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Oportunidades</h3>
     
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

</body>
</html>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link rel="shortcut icon" href="../../img/logos/favicon.ico">

<link href="../../css/site.css" rel="stylesheet" type="text/css">
<link href="../../css/menu.css" rel="stylesheet" type="text/css">

<script language="javascript" type="text/javascript" src="validateContactForm.js"></script>

<script type="text/javascript" src="../../js/mootools-release-1.11.js"></script>
<script type="text/javascript" src="../../js/smoothTricks.js"></script>
<script type="text/javascript" src="../../js/slideAndHideTricks.js"></script>
<script type="text/javascript" src="../../js/linksAjax.js"></script>



<title>Raiar - Mais Informações</title>

</head>

<body>

<a id="top" name="top"></a>
<!--<!--
<div id="langSelect">
 <a href="../../en/home" title="Click here for the English version">English</a>
</div>
-->

<div id="container01">

 <div id="topContainer01">
 
  <a id="horizontalLogo01" href="../home"><h1 class="noDisplay">Raiar</h1> </a>
  
  <ul id="topMenu">
   <li><a id="aSobreRaiar01" href="../sobre"><span class="noDisplay">Sobre O Raiar</span></a></li>
   <li><a id="aNossosTimes01" href="../times"><span class="noDisplay">Nossos Times</span></a></li>
   <li><a id="aNossosProgramas01" href="../programas"><span class="noDisplay">Nossos Programas</span></a></li>
   <li class="selected"><a id="aMaisInformacoes01" href="../mais"><span class="noDisplay">Mais Informações</span></a></li>
  </ul>
  
  <h2 id="h2MaisInformacoes02"><span class="noDisplay">Mais Informações</span></h2>
 </div><!-- end of topContainer01 -->
 
   
  
   
 <div id="mainContainer01">
 
 
  <div class="anchorHolder"><a id="contato" name="contato"></a></div>
  <div class="subsection">
  
  
   <ul class="sideMenu">
    <li class="selected"><a href="#contato"><span>Informação de Contato</span></a></li>
    <li><a href="#links"><span>Links Destacados</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Informação de Contato</h3>
    
    <?php
     if($_REQUEST['sent'] == "contact") {
    ?>
    
    <div class="successNote">
     <h4>Mensagem Enviada com Sucesso</h4>
     
     <p>Obrigado por entrar em contato com o Raiar. Nós entraremos em contato com você brevemente, respondendo aos seus pedidos ou dúvidas.</p>
    
    </div>
    
    <?
	 } 
				
	else 
	 {
	?>
    
    <h4>Formulário de Contato</h4>
    
    <form name="contactFormEn" id="contactFormEn" action="contactFormSender.php" onsubmit="return validateContactForm();" method="post">
    
     <div class="inputs1">
     
      <label for="nameContact">Nome :</label>
      <input name="nameContact" type="text" id="nameContact" />
      
     </div>
     
     <div class="inputs1">
      
      <label for="emailContact">Email :</label>
      <input name="emailContact" type="text" id="emailContact" />
      
     </div>
     
     <div class="inputs1">
      
      <label for="messageContact" id="messageLabel1">Mensagem :</label>
      <textarea name="messageContact" id="messageContact"></textarea>
      
     </div>
     <!-- inputs1 -->
     
     <h5 id="h5Optional1B">
      <a href="#" id="slideinB">Detalhes Opcionais (clique aqui) : </a></h5>
     
     <div id="optionalInputsB">      
     
      <div class="inputs1">
      
       <h5 id="h5Optional2B">Detalhes Opcionais</h5>
      
      </div>
     
      <div class="inputs1">
     
       <label for="orgContact">Organização :</label>
       <input name="orgContact" type="text" id="orgContact" />
      
      </div>
     
      <div class="inputs1">
       
       <label for="locationContact">Localidade :</label>
       <input name="locationContact" type="text" id="locationContact" />
      
      </div>
     
      <div class="inputs1">
       
       <label for="siteContact">Website :</label>
       <input name="siteContact" type="text" id="siteContact" value="http://" />
      
      </div>
     
      <div class="inputs1">
        
       <label for="interestContact">Interesse no Raiar :</label>
       <input name="interestContact" type="text" id="interestContact" />
      
      </div>
     
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
    
        
    <h4>Para correspondências postais use o seguinte endereço:</h4>
    
    <p>R. Des. José Gomes da Costa 1890, Apto. 1502<br>
     Capim Macio,<br>
     Natal / RN 59082-140<br>
     Brazil</p>
  
    <div class="subsectionEnder">
     <a class="upArrow" href="#top"></a>
     <a class="downArrow" href="#links"></a>
    </div>
   </div><!-- end of mainContainer02 -->
   
   
   <div class="sideLinks">
   
    <h5>Telefone:</h5>
    
    <div class="sideLink">00 55 84 8868 8730</div>
   
    <h5>Endereços de Email:</h5>
    
    <div class="sideLink">Dúvidas gerais:<br>
     <a href="mailto:info@raiar.org">info@raiar.org</a></div>
    
    <div class="sideLink">Breno Xavier:<br>
     <a href="mailto:email2@raiar.org">breno@raiar.org</a></div>
    
    <div class="sideLink">Geralda Xavier:<br>
     <a href="mailto:email3@raiar.org">geralda@raiar.org</a></div>
    
    <div class="sideLink">Webdesign e Website:<br>
     <a href="mailto:laurence@raiar.org">laurence@raiar.org</a></div>
    
    
   </div><!-- end of sideLinks -->
  </div><!-- end of subSection -->
 
 
  <div class="anchorHolder"><a id="links" name="links"></a></div>
  <div class="subsection">
  
  
   <ul class="sideMenu">
    <li><a href="#contato"><span>Informação de Contato</span></a></li>
    <li class="selected"><a href="#links"><span>Links Destacados</span></a></li>
   </ul>
   
   
   <div class="mainContainer02">
   
    <h3>Links Destacados</h3>
    
    <div id="log">    
     <p>Por favor selecione uma lista de links do submenu à direita...</p>
     <div class="spacer250"></div>
    </div>
    
    <div class="subsectionEnder">
     <a class="upArrow" href="#top"></a>
    </div>
     
    <div class="spacer250"></div>
    
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
 
    </div>
    
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

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link rel="shortcut icon" href="../../../img/logos/favicon.ico">

<script language="javascript" type="text/javascript" src="validateForm.js"></script>

<link href="../../../css/pops.css" rel="stylesheet" type="text/css">
<style>

.successNote {min-height: 227px;}
</style>

<title>Raiar - Mestre Aprendiz - Formul&aacute;rio Inscri&ccedil;&atilde;o </title>

</head>

<body>

<a id="top" name="top"></a>

<div id="container01">

 <div id="topContainer01">
 
  <a id="horizontalLogo01" href="../../home"><h1 class="noDisplay">Raiar</h1> </a>

 </div><!-- end of topContainer01 -->
 
   
 <div id="mainContainer01">
 
  <div class="subsection">
   
   <div class="mainContainer02">
   
    <h3>Mestre Aprendiz - Formul&aacute;rio Inscri&ccedil;&atilde;o</h3>
	
	
	<?php
     if($_REQUEST['sent'] == "yes") {
    ?>
    
    <div class="successNote">
     <h4>Mensagem Enviada com Sucesso</h4>
     
     <p>Boas vindas ao Mestre Aprendiz! Entraremos em contato com voc&ecirc; para informar os detalhes deste evento.</p>
    
    </div>
    
    <?
	 } 
				
	else 
	 {
	?>
    
    <h4>Formul�rio Inscri��o</h4>
    
    <p>Deseja participar da pr&oacute;xima edi&ccedil;&atilde;o do Mestre Aprendiz? Prencha o formul&aacute;rio abaixo e entraremos em contato. Vagas limitadas a 35 participantes.</p>
    
    <form name="inscriptionForm" id="inscriptionForm" action="formSender.php" onsubmit="return validateForm();" method="post">
    
     <div class="inputs1">     
      <label for="nameContact">Nome :</label>
      <input name="nameContact" type="text" id="nameContact" />      
     </div>
     
     <div class="inputs1">      
      <label for="emailContact">Email :</label>
      <input name="emailContact" type="text" id="emailContact" />      
     </div>
 
     <div class="buttons">
      <input name="submitContact" type="submit" id="submitContact" value="Enviar" />
     </div><!-- buttons -->
     
    </form>
    
    <? } ?>
    
    <div class="subsectionEnder">
     <a class="backArrow" href="../#mestre" title="Voltar"></a>
    </div>

   </div><!-- end of mainContainer02 -->
   
   
   <div class="sideLinks">
   
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
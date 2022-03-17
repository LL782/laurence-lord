<?php


$send = $_REQUEST['send'];

if ($send == 'yes') {

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>

<!-- META TAGS FOR THE PAGE ARE PLACED HERE -->
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<!-- THE TITLE OF THE PAGE SHOWN BY THE BROWSER IS HERE -->
<title>Torema - Cases de Sucesso</title>


<!-- THE CSS FILE THAT WILL APPLY TO THE PAGE IS LINKED-IN HERE -->
<link type="text/css" rel="stylesheet" href="css/cases.css" />


<!-- CHANGE THE MENU HERE -->
<script type="text/javascript">

/***********************************************
* AnyLink Drop Down Menu- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

//Contents for menu 1
var menu1=new Array()
menu1[0]='<a href="quem.html">Quem Somos</a>'
menu1[1]='<a href="parcerias.html">Nossas Parcerias</a>'
menu1[2]='<a href="clientes.html">Nossos Clientes</a>'

//Contents for menu 2
var menu2=new Array()
menu2[0]='<a href="gestao.html">Gest&atilde;o de Ativos</a>'
menu2[1]='<a href="treinamento.html">Treinamento e&nbsp;Eventos</a>'

//Contents for menu 3
var menu3=new Array()
menu3[0]='<a href="cases.php">Cases de&nbsp;Sucesso</a>'

//Contents for menu 4
var menu4=new Array()
menu4[0]='<a href="contato.php">Fale Conosco</a>'
menu4[1]='<a href="curriculo.html">Curr&iacute;culo</a>'
		
var menuwidth='200px' //default menu width
var menubgcolor='black'  //menu bgcolor
var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="yes" //hide menu when user clicks within menu?

/////No further editting needed
</script>


<!-- SOME MORE JAVASCRIPT THAT IS NEEDED TO MAKE THE MENU WORK -->
<script type="text/javascript" src="js/dropDown.js"></script>



<script type="text/javascript">
<!--

function checkState() {

	if (document.form2.state.value == "EX"){
		obj = document.getElementById('pais');	obj.style.visibility="visible";}

	else {
		obj = document.getElementById('pais');	obj.style.visibility="hidden";}
}
//-->
</script>

<script type="text/javascript">
<!--

function show(elementName) {

obj = document.getElementById(elementName)
obj.style.visibility="visible"
}

//-->
</script>

<script type="text/javascript">
<!--
function hide(elementName) {

obj = document.getElementById(elementName)
obj.style.visibility="hidden"
}
//-->
</script>


<script type="text/javascript">
<!--


function getCookie(c_name)
{
	if (document.cookie.length>0)
	{ 
	c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1)
		{ 
		c_start=c_start + c_name.length+1 
		c_end=document.cookie.indexOf(";",c_start)
		if (c_end==-1) c_end=document.cookie.length
		return unescape(document.cookie.substring(c_start,c_end))
		} 
	}
	return ""
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}

function checkCookie()
{
	completed=getCookie('myform')
	//if there is something other than nothing in the cookie, the form doesn't get shown
	if (completed!=null && completed!="")
	{
	obj = document.getElementById('alphaBackground'); obj.style.display='none';
	obj = document.getElementById('cadastroContainer'); obj.style.display='none';
	}
	//else the form gets shown
	else 
	{
	obj = document.getElementById('alphaBackground'); obj.style.display='block';
	obj = document.getElementById('cadastroContainer'); obj.style.display='block';
	}
}

function checkPassword()
{
	//check if the password is wrong
	if(document.passwordForm.password.value!='monkey') 
		{
		alert('password incorrect!')
		}
	//if it's not, write the cookie
	else
		{
		setCookie('myform','completed',365)
		obj = document.getElementById('alphaBackground'); obj.style.display='none';		
		obj = document.getElementById('cadastroContainer'); obj.style.display='none';
		
		}
}


function closeCadastro {
	obj = document.getElementById('alphaBackground'); obj.style.display='none';		
	obj = document.getElementById('cadastroContainer'); obj.style.display='none';
	}

//-->
</script>

<script language="JavaScript">
<!-- Original: wsabstract.com -->

<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->

<!-- Begin
function checkrequired(which) {
var pass=true;
if (document.images) {
for (i=0;i<which.length;i++) {
var tempobj=which.elements[i];
if (tempobj.name.substring(0,8)=="required") {
if (((tempobj.type=="text"||tempobj.type=="textarea")&&
tempobj.value=='')||(tempobj.type.toString().charAt(0)=="s"&&
tempobj.selectedIndex==0)) {
pass=false;
break;
         }
      }
   }
}
if (!pass) {
shortFieldName=tempobj.name.substring(8,30);
alert("Você precisa preencha o campo de "+shortFieldName+".");
return false;
}
else
return true;
}
//  End -->
</script>


<script type="text/javascript">
<!--
function setCookie(c_name,value,expiredays)
{
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}

setCookie('myform','completed',365);
//-->
</script>

</head>
<?
}

else {

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>

<!-- META TAGS FOR THE PAGE ARE PLACED HERE -->
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<!-- THE TITLE OF THE PAGE SHOWN BY THE BROWSER IS HERE -->
<title>Torema - Cases de Sucesso</title>


<!-- THE CSS FILE THAT WILL APPLY TO THE PAGE IS LINKED-IN HERE -->
<link type="text/css" rel="stylesheet" href="css/cases.css" />


<!-- CHANGE THE MENU HERE -->
<script type="text/javascript">

/***********************************************
* AnyLink Drop Down Menu- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

//Contents for menu 1
var menu1=new Array()
menu1[0]='<a href="quem.html">Quem Somos</a>'
menu1[1]='<a href="parcerias.html">Nossas Parcerias</a>'
menu1[2]='<a href="clientes.html">Nossos Clients</a>'

//Contents for menu 2
var menu2=new Array()
menu2[0]='<a href="gestao.html">Gest&atilde;o de Ativos</a>'
menu2[1]='<a href="treinamento.html">Treinamento e&nbsp;Eventos</a>'

//Contents for menu 3
var menu3=new Array()
menu3[0]='<a href="cases.php">Cases de&nbsp;Sucesso</a>'

//Contents for menu 4
var menu4=new Array()
menu4[0]='<a href="contato.php">Fale Conosco</a>'
menu4[1]='<a href="curriculo.html">Curr&iacute;culo</a>'
		
var menuwidth='200px' //default menu width
var menubgcolor='black'  //menu bgcolor
var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="yes" //hide menu when user clicks within menu?

/////No further editting needed
</script>


<!-- SOME MORE JAVASCRIPT THAT IS NEEDED TO MAKE THE MENU WORK -->
<script type="text/javascript" src="js/dropDown.js"></script>



<script type="text/javascript">
<!--

function checkState() {

	if (document.form2.state.value == "EX"){
		obj = document.getElementById('pais');	obj.style.visibility="visible";}

	else {
		obj = document.getElementById('pais');	obj.style.visibility="hidden";}
}
//-->
</script>

<script type="text/javascript">
<!--

function show(elementName) {

obj = document.getElementById(elementName)
obj.style.visibility="visible"
}

//-->
</script>

<script type="text/javascript">
<!--
function hide(elementName) {

obj = document.getElementById(elementName)
obj.style.visibility="hidden"
}
//-->
</script>


<script type="text/javascript">
<!--


function getCookie(c_name)
{
	if (document.cookie.length>0)
	{ 
	c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1)
		{ 
		c_start=c_start + c_name.length+1 
		c_end=document.cookie.indexOf(";",c_start)
		if (c_end==-1) c_end=document.cookie.length
		return unescape(document.cookie.substring(c_start,c_end))
		} 
	}
	return ""
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}

function checkCookie()
{
	completed=getCookie('myform')
	//if there is something other than nothing in the cookie, the form doesn't get shown
	if (completed!=null && completed!="")
	{
	obj = document.getElementById('alphaBackground'); obj.style.display='none';
	obj = document.getElementById('cadastroContainer'); obj.style.display='none';
	}
	//else the form gets shown
	else 
	{
	obj = document.getElementById('alphaBackground'); obj.style.display='block';
	obj = document.getElementById('cadastroContainer'); obj.style.display='block';
	}
}

function checkPassword()
{
	//check if the password is wrong
	if(document.passwordForm.password.value!='monkey') 
		{
		alert('password incorrect!')
		}
	//if it's not, write the cookie
	else
		{
		setCookie('myform','completed',365)
		obj = document.getElementById('alphaBackground'); obj.style.display='none';		
		obj = document.getElementById('cadastroContainer'); obj.style.display='none';
		
		}
}

//-->
</script>

<script language="JavaScript">
<!-- Original: wsabstract.com -->

<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->

<!-- Begin
function checkrequired(which) {
var pass=true;
if (document.images) {
for (i=0;i<which.length;i++) {
var tempobj=which.elements[i];
if (tempobj.name.substring(0,8)=="required") {
if (((tempobj.type=="text"||tempobj.type=="textarea")&&
tempobj.value=='')||(tempobj.type.toString().charAt(0)=="s"&&
tempobj.selectedIndex==0)) {
pass=false;
break;
         }
      }
   }
}
if (!pass) {
shortFieldName=tempobj.name.substring(8,30);
alert("Você precisa preencha o campo de "+shortFieldName+".");
return false;
}
else
return true;
}
//  End -->
</script>
</head>


<? 
}
?>



<body onload="checkCookie()">
<div id="alphaBackground">
</div>

<div id="cadastroContainer">

	<div id="cadstroContainer2">

		<div id="cadLeft">
			<div id="imgHolder2"></div>
			<div id="sideMenu">
				<h2>Acesso aos casos de sucesso:</span></h2>
				<ul>
				  <li><a href="index.html" title="Voltar ao Home">Voltar à página inicial</a></li>
				  <p><li><a href="#" onclick="show('senha'); return false;">J&aacute me cadastrei</a>
				  </li></p>
				</ul>

				<div id="senha">
					<form name="passwordForm" onsubmit="checkPassword(); return false;">
						Entre a Senha:<br> <input type="password" id="password">
						<input id="submit" type="submit" value="enviar">
					</form>
					<a href="ajuda.html" target="blank">Ajuda.</a><a href="senha.php" target="blank">Não sabe a senha?</a>
				</div><!-- end of senha section -->
					
			</div><!-- end of side menu -->
		</div><!-- end of cadLeft div -->
		
		<!-- CAD RIGHT DIV STARTS HERE -->
		<div id="cadRight">
		
			<h2>Acessar os Casos de Sucesso</h2>

			<h3>Cadastre-se</h3>

			<p id="pageIntro">Para ver os otários que caíram na nossa falcatrua, envie seus dados para que você possa cair também.</p>

			<form id="form2" name="form2" onsubmit="return checkrequired(this)"  action="cases-sender.php" method="post">
				
				
				<h4 id="obs">Dados Obrigatórios</h4>

				<div id="cadLeft2">			
		
					<label for="name" id="firstLabel">Nome:</label><input type="text" name="requiredNome" id="name"><br>
					<label for="company">Empresa:</label><input type="text" name="requiredEmpresa" id="company"><br>
					<label for="position">Cargo:</label><input type="text" name="requiredCargo" id="position"><br>
					<label for="telephone">Telefone:</label><input type="text" name="requiredTelefone" id="telephone"><br>
					<label for="email">E-mail:</label><input type="text" name="requiredE-mail" id="email"><br>
					<label for="city">Cidade:</label><input type="text" name="requiredCidade" id="city">
					<select name="requiredEstado" id="state" onChange="checkState()" value="Escolher seu estado">
						<option value="--" selected disabled>Estado</option>
						<option value="EX">Exterior</option>
						<option value="AC">AC</option>
						<option value="AL">AL</option>			
						<option value="AM">AM</option>
						<option value="AP">AP</option>
						<option value="BA">BH</option>
						<option value="CE">CE</option>
						<option value="DF">DF</option>
						<option value="ES">ES</option>		
						<option value="GO">GO</option>
						<option value="MA">MA</option>
						<option value="MG">MG</option>			
						<option value="MS">MS</option>
						<option value="MT">MT</option>
						<option value="PA">PA</option>
						<option value="PB">PB</option>
						<option value="PE">PE</option>
						<option value="PI">PI</option>
						<option value="PR">PR</option>
						<option value="RJ">RJ</option>			
						<option value="RN">RN</option>
						<option value="RO">RO</option>
						<option value="RR">RR</option>
						<option value="RS">RS</option>
						<option value="SC">SC</option>
						<option value="SE">SE</option>
						<option value="SP">SP</option>			
						<option value="TO">TO</option>
					  </select><br>
					<div id="pais">
						<label for="country">Pais:</label>
						<input type="text" name="country" id="country"><br>
					</div>
						<label for="intrest">Área de Interesse:</label><input type="text" name="requiredInteresse" id="interest">
				</div> <!-- end of cadLeft2 -->

				<h4 id="ops">Dados Opcionais:</h4>

				<div id="cadRight2">

					<label id="mensagem" for="message">Mensagem:</label>
					<textarea name="message" id="message"></textarea><br>
					<div id="seuSite">
						<label for="site">Site:</label>www. <input type="text" name="site" id="site">
					</div>
					
					<div id="deseja">
						<div id="options">
							<span class="label" for="contactType">Como prefere ser contactado?</span>
							<label for="tel" onClick="show('horario')">          Telefone:</label>
							<input type="radio" name="contactType" id="tel" value="tel"  onClick="show('horario')">
							<label for="e-mail"  onClick="hide('horario')">E-mail:</label>
							<input type="radio" name="contactType" id="e-mail" value="e-mail" onClick="hide('horario')">
						</div>
						<div id="horario">
							<label for="timeTable">Horario de contato:</label>
							<input type="text" name="timeTable" id="timeTable">
						</div>
					</div>
					

				</div><!-- end of cadRight2 -->

				<div id="formButtons">
					
					<input type="reset" value="Limpar">
					<input type="submit" value="Enviar">

				</div><!-- end of formButtons -->

				<?php
	
					$send = $_REQUEST['send'];

					if ($send == "no") {

					  echo '
				<p id="successEcho">
				  O lembrete de senha não foi emitido por causa de uma problema com o script ou o servidor.<br>
				  Por favor tenta de novo mais tarde!</p>';
					}

					else {
					   //nada com o PHP
					}		
					
				?>
			</form>		

		</div> <!-- end of cadRight -->

	</div><!-- end of cadastro container 2 -->

</div><!-- end of cadastro container div -->

<div id="container0"><!-- container holding everything -->

<a name="top" class="anchor"></a><!-- an anchor to make the "TOP" buttons work -->

	<div id="container1">


		<!-- THE PAGE HEADER IS HERE  i.e. LOGO BANNER AND MAIN MENU -->
		<div id="pageHeader">

			<!-- THIS DIV HOLDS THE LOGO.
			\t   to change the logo image details see the CSS file 'site.css'  -->
			<div id="logoHolder">&nbsp;</div>

			<!-- THE BANNER TEXT IS HERE -->
			<h2>Engenharia de Manuten&ccedil;&atilde;o &amp; Confiabilidade</h2>

			<!-- THIS IS THE MAIN MENU - THE JAVASCRIPT IN THE <HEAD> IS ALSO INVOLVED --> 
			<div id="topMenu">

				<ul><li class="selected"><a href="index.html" title="Home" accesskey="h">Home</a></li
					><li><a href="quem.html" onMouseOver="dropdownmenu(this, event, menu1, '110px')" onMouseOut="delayhidemenu()">A Empresa</a></li
					><li><a href="gestao.html" onMouseOver="dropdownmenu(this, event, menu2, '110px')" onMouseOut="delayhidemenu()">Servi&ccedil;os</a></li
					><li><a href="cases.php" onMouseOver="dropdownmenu(this, event, menu3, '110px')" onMouseOut="delayhidemenu()">Cases</a></li
					><li><a href="contato.php" onMouseOver="dropdownmenu(this, event, menu4, '110px')" onMouseOut="delayhidemenu()">Contato</a></li
				></ul>

			</div><!-- end of topMenu -->

		</div><!-- end of pageHeader -->

		<!-- MAIN PAGE STARTS HERE -->
		<div id="mainPage">

			<div id="leftCol">

				<div id="imgHolder"></div>

				<div id="sideMenu">

					<h2>Cases submenu:</span></h2>

					<ul>
						<li class="selected"><a href="cases.php" title="&Iacute;ndex de Cases de Sucesso">&Iacute;ndex de Cases</a></li>
						<li><a href="case1.html">Case1</a></li>
						<li><a href="case2.html">Case2</a></li>
						<li><a href="case3.html">Case3</a></li>
					</ul>


				


				</div><!-- end of side menu -->

				<?php
	
					$send = $_REQUEST['send'];

					if ($send == "yes") {

					  echo '<p id="successEcho">Seus dados foi emitido com sucesso. Obrigado!</p>';					  					
					}

					else {
					   //nada
					}		
					
				?>

			</div><!-- end of left column -->


			<!-- RIGHT COLUMN STARTS HERE -->
			<div id="rightCol"><!-- this column holds the majority of the page specific detail -->

				<h2>Casos de Sucesso</h2>

				<p id="pageIntro">Otários que caíram como patinhos nos truques mais valhos do mundo.</p>
				
				<h3>Casos mais recentes</h3>			


				<h4><a href="case1.html">Rainha Elizabeth</a></h4>					

				<p>A otária comprou uma coroa de ouro com pedras preciosas por R$25.000.000,00 a qual foi comprada no camelô.
				  <a class="subtle" href="case1.html">Mais...</a></p>							

				<div class="spacer10"></div>

			</div><!-- end of right column -->

		</div><!-- end of main page -->

	</div><!-- end of container1 -->

</div><!-- end of container0 -->



<div id="pageFootnote">
	<p> COPYRIGHT &copy; - TOREMA 2006 - Todo os direitos reservados. (All right reserved) </p>
</div>

</body>
</html>

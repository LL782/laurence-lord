<?php


//define values for redirect 
$host  = $_SERVER['HTTP_HOST'];
$uri  = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');

//define some other things

$name = $_REQUEST['requiredNome'];
$company = $_REQUEST['requiredEmpresa'];
$position = $_REQUEST['requiredCargo'];
$telephone = $_REQUEST['requiredTelefone'];
$email = $_REQUEST['requiredE-mail'];
$city = $_REQUEST['requiredCidade'];
$state = $_REQUEST['requiredEstado'];
$country = $_REQUEST['country'];
$interest = $_REQUEST['requiredInteresse'];
$mensagem = $_REQUEST['message'];
$site = $_REQUEST['site'];
$contactType = $_REQUEST['contactType'];
$timeTable = $_REQUEST['timeTable'];



// send the mail
		
		//define some things for sending the email
		
		//if state is set to Exterior state becomes country
		if ($state=="EX") {

			$stateMes = "{$country}";

			}

		else {

			$stateMes = $state;

			}

		//if a website has been given prepare site message 
		if ($site!="") {
		
			$siteMes = "Site: www.{$site}.";

			}

		else {

			$siteMes = "";

			}

		//if a message was given prepare it
		if ($mensagem!="") {
			
			$mensagemMes = "Mensagem: {$mensagem}.\r\n\r\n";

			}

		else {

			$mensagemMes = "";

			}

		//if contact was asked for prepare a contact message
		if ($contactType == "tel") {

			$contactMes = "Deseja contato por telephone - {$telephone}.";

			}

		elseif ($contactType == "email") {

			$contactMes = "Deseja contato por email - {$email}";

			}

		else {

			$contactMes = "";

			}

		//if a time table for contact was given prepare this
		if ($timeTable == "") {

			$horario = "";

			}

		else {

			$horario = "\r\nHorario: {$timeTable}";

			}
		
		//message details for Torema
		$message1 = "Esses dados foi pegados por o cadastro do site:\r\n\r\n";
		$message1 .="{$name} ({$position})\r\n";
		$message1 .="{$company}, {$city} / {$stateMes}.\r\n";
		$message1 .="Tel: {$telephone}. Email: {$email}. {$siteMes}\r\n\r\n";
		$message1 .="Intressa: {$interest}.\r\n\r\n";
		$message1 .="{$mensagemMes}{$contactMes}{$horario}\r\n\r\n";
		
		mail("Admin <webmaster@torema.com.br>", "Dados de Cadastro",
		$message1, "From: Cadastro <cadastro@torema.com.br>");
		 

		//message details for client 
		$message2 = "Olâ {$name},\r\n\r\n";
		$message2 .= "Você cadastrou com Torema Brasil hoje!\r\n\r\n";
		$message2 .= "Agora você tem asessa ao todo o site www.torema.com.br.  ";
		$message2 .= "Seja bem-vindo ler os detales dos Cases de Sucesso da Torema Brasil.  Clique no link embaixa ir aí agora:\r\nwww.torema.com.br/cases.php\r\n\r\n";
		$message2 .= "Um dia talvez vai apprecir o formulario de cadastro de novo.  Poderia passar esse formulario via o link \"Já Cadastei\" e vai segindo os opcão de entrada.\r\n\r\n";
		$message2 .= "Obrigado de cadastou e bem-vindo à Torema Brasil,\r\n\r\nBest wishes,\r\nTorema Brasil\r\n\r\nwww.torema.com.br";

		mail("{$name}<{$email}>", "Bem Vindo à Torema Brasil",$message2, 		
		"From: Torema Brasil <torema@torema.com.br>");

		// redirect to show success message;
		$extra = 'cases.php?send=yes';
		header("Location: http://$host$uri/$extra");
		exit;



?>

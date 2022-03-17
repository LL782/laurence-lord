<?php
// redirects deets
$host  = $_SERVER['HTTP_HOST'];
$uri  = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');




    //define details for the emails
    
    $name = $_REQUEST['requiredNome'];
	$company = $_REQUEST['requiredEmpresa'];
	$position = $_REQUEST['requiredCargo'];
	$tel = $_REQUEST['requiredTelefone'];
	$email = $_REQUEST['requiredE-mail'] ; 
	$city = $_REQUEST['requiredCidade'];
	$state = $_REQUEST['requiredEstado'];
	$country = $_REQUEST['country'];
	$interest = $_REQUEST['requiredInteresse'];
	$contactType = $_REQUEST['contactType'];
	$timeTable = $_REQUEST['timeTable'];
	$message = $_REQUEST['message'];
	$site = $_REQUEST['site'];

	//set state as country there is one;

	if ($country == '') {

		 $stateMes = $state;

		}

   
	else {
   
		 $stateMes = $country;
   
		}
    
    $subject2 = 'Contato com a Torema Brasil';

    //set the message to be sent to Torema
	
	//details for message to Torema
	
	//prepare it message about the users website.
	if ($site=="") {	

		$siteMes = "";

		}

	else {

		$siteMes ="Site: www.{$site}.";

		}

	//if they wrote a message prepare it
    if ($message!='') { 

		$messageMes =  "Mensagem: {$message}\r\n\r\n";

		}
        
    else { 

		$messageMes = "";
    
		}


	//if they've picked a type of contact prepare it along with the timetable for calling
	if ($contactType == "e-mail") {
		
		$contactMes = "Deseja contato por e-mail: {$name}<{$email}>";

		}

	elseif ($contactType =="tel") {

		$contactMes = "Deseja contato por telephone - ({$tel})";

		}

	else {
			
		$contactMes = "";

		}

	//define a value for horario based on whether anything was given in the timeTable field
	if ($timeTable =="") {
			
		$horario = ".";

		}

	else {

		$horario = "\r\nHorario: {$timeTable}.";

		}


    $message1 = "Os dados seguinte foi submitado do formulario de contato: \r\n\r\n";
    $message1 .= "{$name} ({$position}) \r\n";
    $message1 .= "Empresa: {$company}, {$city} / {$stateMes}.\r\n";
	$message1 .= "Tel: {$tel}. E-mail: {$email}. {$siteMes}\r\n\r\n";
	$message1 .= "Intressa: {$interest} \r\n\r\n";
	$message1 .= "{$messageMes}";
	$message1 .= "$contactMes$horario\r\n\r\n";


    //message to be sent to user
    $message2 = "Olâ {$name},\r\n\r\nObrigado por o seu mensagem à Torema Brasil. \r\n\r\n";
    $message2 .= "Sé mendou um duvida ou pregunta ou peder contato com a Torema esperamos responder à sua duvida em menos de 24 horas.\r\n\r\n";
	$message2 .= "Sé essa é sua primera vez contatando a Torema é bem-vindo. Acessa as paginas do Cases de Sucesso está liberado por você agora.  Clique no link embaixo ir aí agora.  Sé a formulario de cadastro apereicer, pode passar via o buttom \"Já Cadastei \".\r\n";
	$message2 .= "www.torema.com.br/cases.php\r\n\r\n";
    $message2 .= "Best wishes,\r\n\r\nSupport, Torema Brasil. \r\n\r\n www.torema.com.br";
                    
    //send the email to Torema
    mail("Admin <webmaster@torema.com.br>", "Fale com a Torema", $message1, "From: Formalario de Contato <contato@torema.com.br>");

    //send the email to the user
    mail("{$name} <{$email}>", $subject2, $message2, "From: Torema Brasil <torema@torema.com.br>"); 

    //redirect to the original page and show a success note.

    $extra = "contato.php?send=yes";
    header("Location: http://$host$uri/$extra");
    exit;



?> 

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>Cases</title>
	<link href="css/test.css" rel="stylesheet" type="text/css" />    
	<script src="javascripts/toggle.js"></script>
	
	
	<script type="text/javascript" src="/javascripts/prototype.js"> </script> 
	<script type="text/javascript" src="/javascripts/window.js"> </script> 
	<link href="/stylesheets/default.css" rel="stylesheet" type="text/css"></link>
	<link href="/stylesheets/login.css" rel="stylesheet" type="text/css"></link> 
	
	
	
</head>

<body>
<p>this page needs a form to appear infront and block the content.</p>


        <div id="body_blocker" style="display: none;">
        </div>
        <div id="dvImgDet" style="display: none;">
            <a href="#" onclick="toggle(document.getElementById('body_blocker'));toggle(document.getElementById('dvImgDet'))">
                <span>Clique na imagem para fechar</span></a>
            <div>
                <a href="#" onclick="toggle(document.getElementById('body_blocker'));toggle(document.getElementById('dvImgDet'))"
                    style="border: #C39229 solid 2px;">
                    <img id="imgDet" class="detImg" src="images/produtos4/joias338.jpg" style="border-width:0px;" /></a></div>

        </div>
		
		
		<!--
		<a href="#" onclick="toggle(document.getElementById('body_blocker'));toggle(document.getElementById('dvImgDet'))">
                                                <span id="img3$ajaxdest" name="__ajaxmark">click here to make the blocker appear</span></a>
-->
<p onclick="toggle(document.getElementById('body_blocker'));toggle(document.getElementById('dvImgDet'))">
click here to make the blocker appear</p>

<div id="login" style="display:none"> 
	 <p><span id='login_error_msg' class="login_error" style="display:none">&nbsp;</span></p> 
	 <div style="clear:both"></div> 
	 <p><span class="login_label">login</span><span class="login_input"><input type="text"/></span></p> 
	 <div style="clear:both"></div> 
	 <p><span class="login_label">password</span> <span class="login_input"><input type="password"/></span></p> 
	 <div style="clear:both"></div> 
</div>

<!-- win = new Window('window_id', {className: "mac_os_x", title: "Sample", width:200, height:150}); 
   win.getContent().innerHTML = "<h1>Hello world !!</h1>"; 
	 win.setDestroyOnClose(); 
	 win.showCenter(); -->
	 
	<span onclick="win.showCenter(document.getElementById('login'));">show that login jazz!</span>
</body>
</html>

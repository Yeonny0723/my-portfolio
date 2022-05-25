<?php session_start(); ?>
<html>
<head>
    <title>Login Test</title>
</head>
<body>
    <?php 
		error_reporting(E_ALL & ~E_NOTICE);
		session_start();
	
		include('signin.php'); 
		// echo '
		// <a href="logout.php">Logout</a>
		// ';
	?>
</body>
</html>
<?php
	$servername = "localhost";
	$username = "root";
	$password = "Anupam@30";
	try {
		
		$conn = new PDO("mysql:host=$servername;dbname=quiz", $username, $password);
		// set the PDO error mode to exception
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		echo "Connected successfully <br>";
		$name = $_POST['name'];
		$username = $_POST['username'];
		$email = $_POST['email'];
		$password = $_POST['password'];
		$c_no = $_POST['cno'];
		$addr = $_POST['addr'];
		$sql = "insert into users values('$name','$username','$email', '$password','$c_no','$addr')";
		$conn->exec($sql);
		header('Location:login.html');
	 }
	catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }
?>
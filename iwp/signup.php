<?php
session_start();

// echo "hello"
$user = 'root';
$password = '';
 
// Database name is geeksforgeeks
$database = 'musicplayer';
 
// Server is localhost with
// port number 3306
$servername='localhost';
$mysqli = new mysqli($servername, $user, $password, $database);
 
// Checking for connections
if ($mysqli->connect_error) {
    die('Connect Error (' .$mysqli->connect_errno . ') '.$mysqli->connect_error);
}

$name = $_POST['rname'];
$email = $_POST['remail'];
$password = $_POST['rpassword'];

echo $name

$sql = "insert into musicplayer (name,email,password) values('$name','$email','$password') ";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$mysqli->close();
?>
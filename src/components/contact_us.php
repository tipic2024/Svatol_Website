<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Credentials: true");

$servername = "localhost";
$username = "u425383992_svatol_user";
$password = "^GrlVKaOZ8y";
$dbname = "u425383992_svatol";


$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
 
    die("Connection failed: " . $conn->connect_error);

}

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$name = $data['name'];
$email = $data['email'];
$mobile = $data['mobile'];
$message = $data['message'];


// $sql = "INSERT INTO appointment (name, email, mobile, message)
// VALUES ('".$name."', '"$email"', '".$mobile."', '".$message."')";
$sql = "INSERT INTO contact_us(name, email, mobile, message) 
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name,$email, $mobile, $message);

if ($conn->query($sql) === TRUE) {
  echo "SUCCESS";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
} 
$conn->close();
?>
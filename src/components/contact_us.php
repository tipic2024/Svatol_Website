<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "savatol";


$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
 
    die("Connection failed: " . $conn->connect_error);

}

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$name = $data['patientName'];
$enquery = $data['enquiryType'];
$mobile = $data['patientMobile'];
$email = $data['patientEmail'];
$date = $data['appointmentDate'];
$times = $data['timeSlot'];

$sql = "INSERT INTO appointment (p_name, p_mobile, p_email, appointment_date,enquiry_type,time )
VALUES ('".$name."', '".$mobile."', '".$email."', '".$date."','".$enquery."','".$times."')";

if ($conn->query($sql) === TRUE) {
  echo "SUCCESS";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
} 
$conn->close();
?>
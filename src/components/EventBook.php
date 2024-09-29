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

// Get the posted data
$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$mobile = $data['mobile'];
$treatment_type = $data['treatment_type'];
$time = $data['time'];
$date = $data['date'];


// SQL query to insert data into the database
$sql = "INSERT INTO appointment_form(name, email, mobile, treatment_type, time, date) 
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssss", $name,$email, $mobile, $treatment_type,$time, $date);

if ($stmt->execute()) {
    echo "SUCCESS";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>

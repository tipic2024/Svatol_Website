<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Credentials: true");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "savatol";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the posted data
$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$whatsappMobile = $data['whatsappMobile'];
$address = $data['address'];
$email = $data['email'];
$gender = $data['gender'];
$transactionId = $data['transactionId'];
$screenshot = $data['screenshot'];

// SQL query to insert data into the database
$sql = "INSERT INTO event (name, whatsappMobile, address, email, gender, screenshot, transactionId) 
        VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssss", $name, $whatsappMobile, $address, $email, $gender, $screenshot, $transactionId);

if ($stmt->execute()) {
    echo "SUCCESS";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>

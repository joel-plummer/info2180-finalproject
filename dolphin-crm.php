<?php
header("Access-Control-Allow-Origin: *");
$host = 'localhost';
$username = 'proj_user';
$password = 'password123';
$dbname = 'dolphin_crm';

$email = $_GET['email'];
$pass = $_GET['password'];

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$user = $conn->query("SELECT * FROM Users WHERE email = '$email'");

if ($user ->rowCount()>0) {
    $row = $user->fetch(PDO::FETCH_ASSOC);
    // Verify hashed password
    if (password_verify($pass, $row['password'])) {
        echo "success";
    } else {
        echo "Invalid";
    }
} else {
    echo "NotFound";
}

?>


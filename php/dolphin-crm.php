<?php
session_start();

header("Access-Control-Allow-Origin: *");
$host = 'localhost';
$username = 'proj_user';
$password = 'password123';
$dbname = 'dolphin_crm';

function sanitize($input) {
    $input = trim($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

if ($_GET['type']==="login"){
    $email = $_GET['email'];
    $pass = $_GET['password'];

    $user = $conn->query("SELECT * FROM Users WHERE email = '$email'");

    if ($user ->rowCount()>0) {
        $row = $user->fetch(PDO::FETCH_ASSOC);
        if (password_verify($pass, $row['password'])) {
            $_SESSION['role'] = $row['role'];
            echo "success";
        } else {
            echo "Invalid";
        }
    } else {
        echo "NotFound";
    }
}
else if ($_GET['type']==="addU"){
    $u_fname = sanitize($_GET['fname']);
    $u_lname = sanitize($_GET['lname']);
    $u_email = sanitize($_GET['email']);
    $u_pass = password_hash(sanitize($_GET['pass']), PASSWORD_DEFAULT);
    $u_role = $_GET['role'];

    try{
        $user = $conn->query("INSERT INTO Users (firstname, lastname, email, password, role) VALUES ('$u_fname', '$u_lname', '$u_email', '$u_pass', '$u_role')");
        echo "User Added Successfully";
    }
    catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
else if ($_GET['type']==="showU"){

    $user = $conn->query("SELECT firstname, lastname, email, role, created_at FROM Users");
    $results = $user->fetchAll(PDO::FETCH_ASSOC);
    echo("<table>");
        echo("<tr>");
        echo("<th>NAME</th>");
        echo("<th>EMAIL</th>");
        echo("<th>ROLE</th>");
        echo("<th>CREATED</th>");
        echo("</tr>");
    foreach ($results as $row){
        echo("<tr>");
        echo("<td>" . $row["firstname"] . " " . $row["lastname"] . "</td>");
        echo("<td>".$row["email"]."</td>");
        echo("<td>".$row["role"]."</td>");
        echo("<td>".$row["created_at"]."</td>");
        echo("</tr>");
    }
    echo("</table>");
    
}

?>

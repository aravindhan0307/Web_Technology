<?php
require_once 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $message = $conn->real_escape_string($_POST['message']);
    
    $sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";
    
    if ($conn->query($sql) {
        echo "<script>alert('Thank you for your message! We will get back to you soon.'); window.location.href='../index.html';</script>";
    } else {
        echo "<script>alert('Error: " . $conn->error . "'); window.history.back();</script>";
    }
    
    $conn->close();
} else {
    header("Location: ../index.html");
}
?>
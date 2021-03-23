<?php
$sql = "INSERT INTO users (firstname, lastname, email ,age,business_email,password,business_name,phone_number,country,linked_profile) VALUES ('$_POST['firstname']', '$_POST['lastname']', '$_POST['email']','$_POST['business_email']','md5($_POST['password'])','$_POST['business_name']','$_POST['phone_number']','$_POST['country']','$_POST['linked_profile']')";

?>
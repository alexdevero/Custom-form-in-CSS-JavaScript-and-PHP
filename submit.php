<?php
$myemail = "yourmail@mail.com";
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
/* Message template */
$message = "Hi,

This message has been sent by:
Name: $name
E-mail: $email
Phone: $phone
";
mail($myemail, “Jobs”, $message);
?>

<?php

if (isset($_POST['submit'])) {

}
$name = htmlspecialchars($_POST['name']);
$visitor_email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

$email_from = "Mon Portfolio";
$email_subject = "New form submission";
$email_body = "You have received a new message from the user $name.\n".
                "Here is the message:\n $message".

$to = "bryanmorato38@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

mail($to ,$email_subject ,$email_body ,$headers);


?>
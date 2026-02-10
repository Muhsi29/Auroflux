<?php
// Allow Angular requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight (Angular / browser)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Load Composer autoload
require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Read JSON input
$input = json_decode(file_get_contents("php://input"), true);

// Validate input
if (
    empty($input['name']) ||
    empty($input['email']) ||
    empty($input['message'])
) {
    echo json_encode([
        "success" => false,
        "message" => "No data received"
    ]);
    exit;
}

$name    = htmlspecialchars($input['name']);
$email   = htmlspecialchars($input['email']);
$message = htmlspecialchars($input['message']);

$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'mailresponses07@gmail.com';        // 🔴 your Gmail
    $mail->Password   = 'ctad ztmt tgtl ppaf';     // 🔴 Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Email headers
    $mail->setFrom('mailresponses07@gmail.com', 'Mail from Auroflux');
    $mail->addAddress('raja@auroflux.com'); // where you want to receive mail
    $mail->addReplyTo($email, $name);

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
   $mail->Body = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      background-color: #f4f6f8;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .header {
      background: #0b5ed7;
      color: #ffffff;
      padding: 15px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    .content {
      padding: 20px;
      color: #333333;
      line-height: 1.6;
    }
    .label {
      font-weight: bold;
      color: #555;
      width: 120px;
      display: inline-block;
    }
    .message-box {
      background: #f1f3f5;
      padding: 12px;
      border-radius: 4px;
      margin-top: 8px;
    }
    .footer {
      background: #f8f9fa;
      padding: 12px;
      text-align: center;
      font-size: 12px;
      color: #777;
    }
  </style>
</head>

<body>
  <div class='container'>
    <div class='header'>
      New Contact Form Submission
    </div>

    <div class='content'>
      <p><span class='label'>Name:</span> {$name}</p>
      <p><span class='label'>Email:</span> {$email}</p>

      <p class='label'>Message:</p>
      <div class='message-box'>
        {$message}
      </div>
    </div>

    <div class='footer'>
      This email was sent from your website contact form.
    </div>
  </div>
</body>
</html>
";


    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Mail sent successfully"
    ]);

} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "message" => "Mailer Error: {$mail->ErrorInfo}"
    ]);
}

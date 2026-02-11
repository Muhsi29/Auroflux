<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// ✅ CORS
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Read JSON data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid JSON"]);
    exit;
}

// Validate fields
$name    = htmlspecialchars($input['name']);
$email   = htmlspecialchars($input['email']);
$message = htmlspecialchars($input['message']);
$phone   = !empty($input['phone']) ? htmlspecialchars($input['phone']) : 'Not provided';
$subject = !empty($input['subject']) ? htmlspecialchars($input['subject']) : 'General Inquiry';


if (!$name || !$email || !$message) {
    echo json_encode(["success" => false, "message" => "All fields required"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // ✅ SMTP CONFIG
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'mailresponses07@gmail.com';
    $mail->Password   = 'osvcgbswrvtuhdhn'; // App password WITHOUT spaces
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // ✅ Email Setup
    $mail->setFrom('mailresponses07@gmail.com', 'Auroflux Website');
    $mail->addAddress('muhsinsameer123@gmail.com');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "New Enquiry: {$subject}";


    $mail->Body = "
<div style='font-family:Arial,Helvetica,sans-serif;background:#f4f8f4;padding:20px'>
  <div style='max-width:650px;margin:auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.1)'>

    <!-- HEADER -->
    <div style='background:#22B34A;color:#ffffff;padding:18px;text-align:center;font-size:22px;font-weight:bold'>
      🌿 New Contact Form Submission
    </div>

    <!-- CONTENT -->
    <div style='padding:25px;color:#333;line-height:1.7;font-size:15px'>

      <table width='100%' cellpadding='8' cellspacing='0' style='border-collapse:collapse'>
        <tr style='background:#f1fdf4'>
          <td style='font-weight:bold;width:140px'>Name</td>
          <td>{$name}</td>
        </tr>

        <tr>
          <td style='font-weight:bold'>Email</td>
          <td>{$email}</td>
        </tr>

        <tr style='background:#f1fdf4'>
          <td style='font-weight:bold'>Phone</td>
          <td>{$phone}</td>
        </tr>

        <tr>
          <td style='font-weight:bold'>Subject</td>
          <td>{$subject}</td>
        </tr>
      </table>

      <!-- MESSAGE BOX -->
      <div style='margin-top:20px'>
        <div style='font-weight:bold;margin-bottom:8px;color:#22B34A'>Message</div>
        <div style='background:#f6f6f6;padding:15px;border-radius:5px;border-left:4px solid #22B34A'>
          {$message}
        </div>
      </div>

    </div>

    <!-- FOOTER -->
    <div style='background:#eef7ee;padding:12px;text-align:center;font-size:12px;color:#555'>
      This message was sent from the <b>Auroflux Website</b> contact form.
    </div>

  </div>
</div>";

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Mail sent successfully"
    ]);

} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "message" => "Mailer Error: " . $mail->ErrorInfo
    ]);
}

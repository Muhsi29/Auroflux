<?php
// Disable display_errors to prevent HTML from breaking JSON response
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// ✅ CORS (Allow development localhost:4200 and production domain)
$allowedOrigins = [
  "https://auroflux.com",
  "http://localhost:4200"
];

if (isset($_SERVER['HTTP_ORIGIN'])) {
  $origin = $_SERVER['HTTP_ORIGIN'];
  if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $origin);
  }
}
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

$autoloadPath = __DIR__ . '/vendor/autoload.php';
if (!file_exists($autoloadPath)) {
  echo json_encode(["success" => false, "message" => "Backend Error: Vendor dependencies missing. Run 'composer install' in the api directory."]);
  exit;
}

require $autoloadPath;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Read JSON data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
  echo json_encode(["success" => false, "message" => "Invalid JSON"]);
  exit;
}


// Clean inputs (trim whitespace)
$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';
$phone = !empty($data['phone']) ? trim($data['phone']) : 'Not provided';
$subject = !empty($data['subject']) ? trim($data['subject']) : 'General Inquiry';

if (!$name || !$email || !$message) {
  echo json_encode(["success" => false, "message" => "All fields required"]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo json_encode(["success" => false, "message" => "Invalid email"]);
  exit;
}

// Escaped variables for safe output inside the HTML email body
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safePhone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeSubject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

$mail = new PHPMailer(true);

try {
  // ✅ SMTP CONFIG
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'mailresponses07@gmail.com';
  $mail->Password = 'osvcgbswrvtuhdhn'; // App password WITHOUT spaces
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = 587;

  // ✅ Email Setup
  $mail->setFrom('mailresponses07@gmail.com', 'Auroflux Website');
  $mail->addAddress('aurofluxsales@gmail.com');
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
          <td>{$safeName}</td>
        </tr>

        <tr>
          <td style='font-weight:bold'>Email</td>
          <td>{$safeEmail}</td>
        </tr>

        <tr style='background:#f1fdf4'>
          <td style='font-weight:bold'>Phone</td>
          <td>{$safePhone}</td>
        </tr>

        <tr>
          <td style='font-weight:bold'>Subject</td>
          <td>{$safeSubject}</td>
        </tr>
      </table>

      <!-- MESSAGE BOX -->
      <div style='margin-top:20px'>
        <div style='font-weight:bold;margin-bottom:8px;color:#22B34A'>Message</div>
        <div style='background:#f6f6f6;padding:15px;border-radius:5px;border-left:4px solid #22B34A'>
          {$safeMessage}
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

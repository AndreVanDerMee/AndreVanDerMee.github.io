<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set header to return JSON
header('Content-Type: application/json');

// Log file for debugging (optional - helps you see what's happening)
$log_file = 'contact_form_log.txt';

function writeLog($message) {
    global $log_file;
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($log_file, "[$timestamp] $message\n", FILE_APPEND);
}

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    writeLog("Error: Method not allowed - " . $_SERVER["REQUEST_METHOD"]);
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

writeLog("Form submission received");

// Get and sanitize form data
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$company = isset($_POST['company']) ? strip_tags(trim($_POST['company'])) : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

writeLog("Data received - Name: $name, Email: $email");

// Validate inputs
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Valid email is required';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

// If there are errors, return them
if (!empty($errors)) {
    writeLog("Validation errors: " . implode(', ', $errors));
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Email configuration
$to = 'info@laixr.ai'; // IMPORTANT: This email must exist in your HostPresto email accounts!
$subject = 'New Contact Form Submission from LAIXR Website';

// Build email content
$email_content = "New contact form submission:\n\n";
$email_content .= "Name: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Company: " . ($company ?: 'Not provided') . "\n\n";
$email_content .= "Message:\n$message\n";

// Use info@laixr.ai as the FROM address (must exist in HostPresto)
$from_email = 'info@laixr.ai';

// Email headers - using proper format for shared hosting
$headers = "From: LAIXR Contact Form <$from_email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

writeLog("Attempting to send email to: $to");

// Send email
if (mail($to, $subject, $email_content, $headers)) {
    writeLog("Email sent successfully to $to");
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.']);
} else {
    writeLog("ERROR: Failed to send email. Check server mail configuration.");
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Sorry, there was an error sending your message. Please email us directly at info@laixr.ai']);
}
?>

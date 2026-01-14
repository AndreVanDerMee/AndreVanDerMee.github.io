<?php
header('Content-Type: application/json');

// Test email addresses - CHANGE THESE TO YOUR ACTUAL EMAILS
$to = 'info@laixr.ai';
$from = 'info@laixr.ai'; // Must exist in your HostPresto email accounts!

$subject = 'Test Email from LAIXR Website';
$message = "This is a test email.\n\nIf you receive this, your PHP mail() function is working correctly!\n\nTime sent: " . date('Y-m-d H:i:s');

$headers = "From: LAIXR Website <$from>\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Attempt to send
if (mail($to, $subject, $message, $headers)) {
    echo json_encode([
        'success' => true,
        'message' => "Test email sent to $to! Check your inbox (and spam folder)."
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => "Failed to send email. Possible reasons:\n- Email address doesn't exist in HostPresto\n- PHP mail() is not configured\n- Server restrictions"
    ]);
}
?>

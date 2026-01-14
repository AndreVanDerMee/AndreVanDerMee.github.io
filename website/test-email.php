<!DOCTYPE html>
<html>
<head>
    <title>Email Test - LAIXR</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .test-box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        button {
            background: #4F46E5;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background: #4338CA;
        }
        .result {
            margin-top: 15px;
            padding: 10px;
            border-radius: 5px;
            display: none;
        }
        .success {
            background: #D1FAE5;
            color: #065F46;
            border: 1px solid #10B981;
        }
        .error {
            background: #FEE2E2;
            color: #991B1B;
            border: 1px solid #EF4444;
        }
        pre {
            background: #f9f9f9;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>LAIXR Email Test</h1>
    
    <div class="test-box">
        <h2>Test 1: PHP Mail Function</h2>
        <p>This will test if PHP's mail() function works on your server.</p>
        <button onclick="testPHPMail()">Test PHP Mail</button>
        <div id="result1" class="result"></div>
    </div>
    
    <div class="test-box">
        <h2>Test 2: Contact Form</h2>
        <p>This will test your actual contact form submission.</p>
        <button onclick="testContactForm()">Test Contact Form</button>
        <div id="result2" class="result"></div>
    </div>
    
    <div class="test-box">
        <h2>Test 3: Check Log File</h2>
        <p>View what's being logged by the contact form.</p>
        <button onclick="checkLog()">View Log</button>
        <div id="result3" class="result"></div>
    </div>
    
    <div class="test-box">
        <h2>Important Checklist:</h2>
        <ul>
            <li>✓ Make sure <strong>info@laixr.ai</strong> exists in your HostPresto email accounts</li>
            <li>✓ Create <strong>noreply@laixr.ai</strong> in HostPresto (or change line 72 in send-email.php)</li>
            <li>✓ Check your spam folder</li>
            <li>✓ Upload all files including send-email.php</li>
        </ul>
    </div>

    <script>
        async function testPHPMail() {
            const result = document.getElementById('result1');
            result.style.display = 'block';
            result.className = 'result';
            result.innerHTML = 'Testing...';
            
            try {
                const response = await fetch('test-email-backend.php');
                const data = await response.json();
                
                if (data.success) {
                    result.className = 'result success';
                    result.innerHTML = '<strong>✓ Success!</strong><br>' + data.message;
                } else {
                    result.className = 'result error';
                    result.innerHTML = '<strong>✗ Failed</strong><br>' + data.message;
                }
            } catch (error) {
                result.className = 'result error';
                result.innerHTML = '<strong>✗ Error</strong><br>' + error.message;
            }
        }
        
        async function testContactForm() {
            const result = document.getElementById('result2');
            result.style.display = 'block';
            result.className = 'result';
            result.innerHTML = 'Testing...';
            
            const formData = new FormData();
            formData.append('name', 'Test User');
            formData.append('email', 'test@example.com');
            formData.append('company', 'Test Company');
            formData.append('message', 'This is a test message from the contact form.');
            
            try {
                const response = await fetch('send-email.php', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                
                if (data.success) {
                    result.className = 'result success';
                    result.innerHTML = '<strong>✓ Success!</strong><br>' + data.message + '<br><small>Check info@laixr.ai inbox</small>';
                } else {
                    result.className = 'result error';
                    result.innerHTML = '<strong>✗ Failed</strong><br>' + data.message;
                }
            } catch (error) {
                result.className = 'result error';
                result.innerHTML = '<strong>✗ Error</strong><br>' + error.message;
            }
        }
        
        async function checkLog() {
            const result = document.getElementById('result3');
            result.style.display = 'block';
            result.className = 'result';
            result.innerHTML = 'Loading...';
            
            try {
                const response = await fetch('contact_form_log.txt');
                const text = await response.text();
                
                result.className = 'result success';
                result.innerHTML = '<strong>Log Contents:</strong><pre>' + (text || 'No log entries yet') + '</pre>';
            } catch (error) {
                result.className = 'result error';
                result.innerHTML = '<strong>No log file found</strong><br>Submit the form first to create it.';
            }
        }
    </script>
</body>
</html>

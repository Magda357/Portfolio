<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case 'OPTIONS': // preflight
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        exit;

    case 'POST':
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json; charset=utf-8');

        $json = file_get_contents('php://input');
        $params = json_decode($json); 


        $name    = isset($params->name)    ? trim($params->name)    : '';
        $email   = isset($params->email)   ? trim($params->email)   : '';
        $message = isset($params->message) ? trim($params->message) : '';
        $privacy = isset($params->privacy) ? (bool)$params->privacy : false;

        if (!$privacy) {
            http_response_code(400);
            echo json_encode(['ok' => false, 'error' => 'Privacy not accepted']);
            exit;
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['ok' => false, 'error' => 'Invalid email']);
            exit;
        }

        $recipient = 'magdadan91@magda-danielyan.de';
        $subject   = "Contact From <{$email}>";

        $body = "From: " . htmlspecialchars($name) . " &lt;{$email}&gt;<br><br>"
              . nl2br(htmlspecialchars($message));

        $headers   = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = 'From: noreply@mywebsite.com';

        $sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

        echo json_encode(['ok' => $sent]);
        break;

    default:
        header('Allow: POST, OPTIONS', true, 405);
        exit;
}
    

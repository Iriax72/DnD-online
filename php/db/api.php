<?php
header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Méthode non autorisée.']);
    exit;
}

$email = $_GET['email'] ?? null;
if (!is_string($email) || $email === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Adresse e-mail manquante ou invalide.']);
    exit;
}

require_once __DIR__ . '/../database.php';

$stmt = $pdo->prepare('SELECT 1 FROM accounts WHERE email = :email LIMIT 1');
$stmt->execute(['email' => $email]);
$isEmailFree = $stmt->fetchColumn() === false;

echo json_encode([$isEmailFree]);
exit;

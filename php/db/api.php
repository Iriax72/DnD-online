<?php
$stmt = $pdo->query("SELECT * FROM accounts");
$data = $stmt->fetchAll();
header('Content-Type: application:json');
echo json_encode($data);
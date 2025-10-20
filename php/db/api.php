<?php
$stmt = $pdo->query("SELECT email FROM accounts");
$data = $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
header('Content-Type: application:json');
echo json_encode($data);
<?php
$db_host = getenv('DB_HOST');
$db_port = getenv('DB_PORT');
$db_name = getenv('DB_NAME');
$db_user = getenv('DB_USERNAME');
$db_pass = getenv('DB_PASSWORD');

$pdo = new PDO(
    "mysql:host=$db_host;port=$db_port;dbname=$db_name;charset=utf8",
    $db_user,
    $db_pass
);

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

$sql_file = file_get_contents(__DIR__ . '/../sql/accounts.sql');
$pdo->exec($sql_file);
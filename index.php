<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();

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

if (isset($_POST['new_pseudo'])) {
    //ajouter le compte dans la db sql
} else if (isset($_POST['pseudo'])) {
    //contecter l'utilisateur
}

$_SESSION['connected'] = $_SESSION['connected'] ?? false;
$page = $_GET['page'] ?? 'accueil';
?>

<DOCTYPE html>
<html lang="fr">
    <?php require __DIR__ . '/php/head.php'; ?>
    <body class="m-0 p-0">
        <?php
        require __DIR__ . '/php/header.php';
        require __DIR__ . '/php/nav.php';
        ?>
        <main class="clickToQuitNav">
            <?php 
            require __DIR__ . '/php/form/login.php';
            require __DIR__ . '/php/form/signin.php';
            require __DIR__ . "/php/sections/$page.php"; 
            ?>
        </main>
        <?php
        require __DIR__ . '/php/footer.php';
        ?>
    </body>
</html>
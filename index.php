<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
require __DIR__ . '/php/database.php';
require __DIR__ . '/php/db/api.php';

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
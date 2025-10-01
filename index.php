<?php
session_start();
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
            require __DIR__ . '/php/login.php';
            require __DIR__ . '/php/signin.php';
            require __DIR__ . "/php/sections/$page.php"; 
            ?>
        </main>
        <?php
        require __DIR__ . '/php/footer.php';
        ?>
    </body>
</html>
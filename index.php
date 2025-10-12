<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
require __DIR__ . '/php/database.php';
if (isset($_POST['new_pseudo'])) {
    $pseudo = $_POST['new_pseudo'];
    $password = $_POST['new_password'];
    $email = $_POST['new_email'] ?? null;
    $date = time();
    $stmt = $pdo->prepare("INSERT INTO accounts (pseudo, `password`, email, created_at) VALUES (?, ?, ?, ?)");
    $stmt->execute([$peudo, $password, $email, $date]);
} else if (isset($_POST['pseudo'])) {
    echo 'connexion...';
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
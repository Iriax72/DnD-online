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

//-------------------------

function signin($pdo):void {
    $email = $_POST['new_email'];
    $stmt = $pdo->prepare("SELECT * FROM accounts WHERE email = :email LIMIT 1");
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch();
    if (!$user) {
        $pseudo = $_POST['new_pseudo'];
        $password = $_POST['new_password'];
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("INSERT INTO accounts (pseudo, hashed_password, email, created_at) VALUES (?, ?, ?, ?)");
        $stmt->execute([$pseudo, $hash, $email, time()]);
        echo "compte ($pseudo) enregistré.";
    } else {
        echo "cette adresse mail est déjà utilisée sur DnD Online.";
        echo "clickez ici si c'est la votre et que vous voulez un message de récupération du mot de passe (pas encore immlelmenté).";
    }
}

function login($pdo):void {
    $email = $_POST['email'];
    $pseudo = $_POST['pseudo'];
    $password = $_POST['password'];
    if (login_correspond($pdo, $email, $pseudo, $password)) {
        $_SESSION['connected'] = true;
        $_SESSION['id'] = idOf($email, $pdo);
        $_SESSION['pseudo'] = $_POST['pseudo'];
        echo "vous etes connecté en tant que $pseudo.";
    } else {
        //gérer ça !!
        echo "error: identifiants incorrects.";
    }
}

function login_correspond($pdo, string $email, string $pseudo, string $password):bool {
    $stmt = $pdo->prepare("SELECT * FROM accounts WHERE email = :email LIMIT 1");
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch();
    if (!$user) {
        echo "email ($email) introuvable.";
        return false;
    }
    if ($pseudo != user['pseudo']) {
        echo "le pseudo ($pseudo) ne correspond pas à l'email ($email).";
        return false;
    }
    if (!password_verify($password, $user['hashed_password'])) {
        echo 'mot de passe incorrect';
        return false;
    }
    return true;
}

function idOf(string $email, $pdo):str {
    $stmt = $pdo->prepare("SELECT id FROM accounts WHERE email = :email LIMIT 1");
    $stmt->execute(['email' => $email]);
    return $stmt->fetch();
}

$sql_file = file_get_contents(__DIR__ . '/../sql/accounts.sql');
$pdo->exec($sql_file);

if (isset($_POST['new_email'])) {
    signin($pdo);
} else if (isset($_POST['email'])) {
    login($pdo);
}
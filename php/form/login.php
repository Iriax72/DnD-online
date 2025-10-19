<?php
require_once __DIR__ . '/form.php';
echo form('login', 'connexion');
echo input_HTML('email', 'email', 'email');
echo input_HTML('text', 'pseudo', 'pseudo');
echo input_HTML('text', 'password', 'mot de passe');
echo close_form('Se connecter');
?>
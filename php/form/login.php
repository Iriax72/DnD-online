<?php
require_once __DIR__ . '/form.php';
echo form('login', 'connexion');
echo input('email', 'email', 'email');
echo input('text', 'pseudo', 'pseudo');
echo input('text', 'password', 'mot de passe');
echo close_form('text', 'Se connecter');
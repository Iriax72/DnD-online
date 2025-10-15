<?php
require_once __DIR__ . '/form.php';
echo form('login', 'connexion');
echo text_input('email', 'email');
echo text_input('pseudo', 'pseudo');
echo text_input('password', 'mot de passe');
echo close_form('Se connecter');
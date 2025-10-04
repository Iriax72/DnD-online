<?php
require_once __DIR__ . './form.php';
form('login', 'connexion');
text_input('pseudo', 'pseudo');
text_input('password', 'mot de passe');
close_form('Se connecter');
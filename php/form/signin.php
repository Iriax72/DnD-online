<?php
require_once __DIR__ . '/form.php';
echo form('signin', 'Créer un compte');
echo input_HTML('text', 'new_pseudo', 'Pseudo');
echo input_HTML('text', 'new_password', 'Mot de passe');
echo input_HTML('text', 'confirm_new_password', 'Confirmer le mot de passe', false, true);
echo input_HTML('email', 'new_email', 'Email de récupération');
echo close_form('Créer le compte');
?>
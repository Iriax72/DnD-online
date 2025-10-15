<?php
require_once __DIR__ . '/form.php';
echo form('signin', 'Créer un compte');
?>
<p>Nécessaire</p>
<?php
echo text_input('new_pseudo', 'Pseudo');
echo text_input('new_password', 'Mot de passe');
echo text_input('confirm_new_password', 'Confirmer le mot de passe', false, true);
echo text_input('new_email', 'Email de récupération');
echo close_form('Créer le compte');
<?php
require_once __DIR__ . '/form.php';
echo form('signin', 'Créer un compte');
?>
<p>Nécessaire</p>
<?php
echo input_HTML('new_pseudo', 'Pseudo');
echo input_HTML('new_password', 'Mot de passe');
echo input_HTML('confirm_new_password', 'Confirmer le mot de passe', false, true);
echo input_HTML('new_email', 'Email de récupération');
echo close_form('Créer le compte');
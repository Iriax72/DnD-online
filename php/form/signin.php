<?php
require_once __DIR__ . '/form.php';
echo form('signin', 'Créer un compte');
?>
<p>Nécessaire</p>
<?php
echo input('new_pseudo', 'Pseudo');
echo input('new_password', 'Mot de passe');
echo input('confirm_new_password', 'Confirmer le mot de passe', false, true);
echo input('new_email', 'Email de récupération');
echo close_form('Créer le compte');
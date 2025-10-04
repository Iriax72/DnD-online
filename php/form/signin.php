<?php
require_once __DIR__ . '/form.php';
form('signin', 'Créer un compte');
?>
<p>Nécessaire</p>
<?php
text_input('new_pseudo', 'Pseudo');
text_input('new_password', 'Mot de passe');
text_input('confirm_new_password', 'Confirmer le mot de passe');
?>
<p>Optionel</p>
<?php
text_input('new_email', 'Email de récupération', true);
close_form('Créer le compte');
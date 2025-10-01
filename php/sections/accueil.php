<?php session_start() ?>

<section id="accueil">
    <h2>Accueil</h2>
    <?php if($_SESSION['connected']): ?>
        taratadam
    <?php else: ?>
        <div class="element">
            <p>Bienvenue sur DnD Online !</p>
            <p>Connectez-vous pour accéder à toutes les fonctionnalités.</p>
            <button class="login">Se connecter</button>
            <p>Vous n'avez pas encore de compte?</p>
            <button class="create-account">Créer un compte</button>
        </div>
    <?php endif; ?>
</section>
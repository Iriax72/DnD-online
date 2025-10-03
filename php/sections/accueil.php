<section id="accueil">
    <h2>Accueil</h2>
    <p>Debug</p>
    <p id="debug"></p>
    <?php if($_SESSION['connected']): ?>
        taratadam
    <?php else: ?>
        <div class="element">
            <p>Bienvenue sur DnD Online !</p>
            <p>Connectez-vous pour accéder à toutes les fonctionnalités.</p>
            <button class="b-login nice-btn">Se connecter</button>
            <p>Vous n'avez pas encore de compte?</p>
            <button class="b-signin nice-btn">Créer un compte</button>
        </div>
    <?php endif; ?>
</section>
<section id="account">
    <h2>Compte</h2>
    <?php if(!$_SESSION['connected']): ?>
        <div class="element">
            <p>Vous n'êtes pas encore connecté</p>
            <button class="b-login nice-btn">Se connecter</button>
            <p>Vous n'avez pas encore de compte?</p>
            <button class="b-signin nice-btn">Créer un compte</button>
        </div>
    <?php else: ?>
        <p>Connecté en tant que <?= $_SESSION['pseudo'] ?></p>
    <?php endif; ?>
</section>
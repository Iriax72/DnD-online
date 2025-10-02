<div id="signin_pop" class="pop-box hidden">
    <span class="span cross-span m-0 p-0">
        <button class="img-container close-pop m-0 p-0">
            <img src="../assets/images/cross.jpeg" alt="image de croix" class="img">
        </button>
    </span>
    <form id="signin_form" method="post" class="form">
        <h2>Créer un compte</h2>
        <p>Nésséssaire:</p>
        <label for="new_pseudo">Pseudo</label>
        <input type="text" id="new_pseudo" name="new_pseudo">
        <br/>
        <label for="new_password">Mot de passe</label>
        <input type="text" id="new_password" name="new_password">
        <br/>
        <label for="confirm_new_password">Confirmer le mot de passe</label>
        <input type="text" id="confirm_new_password" name="confirm_new_password">
        <p>Facultatif:</p>
        <label for="new_email">Email de récupération</label>
        <input type="text" id="new_email" name="new_email">
        <br/>
        <button type="submit" class="nice-btn">Créer le compte</button>
    </form>
</div>
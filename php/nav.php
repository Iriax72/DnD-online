<?php
function navButton(string $page, string $name):string {
    return <<<HTML
    <li class="nav-element">
        <a href="/index.php?page=$page">$name</a>
    </li>
HTML;
}
?>

<div class="nav-container">
    <nav id="nav" class="nav">
        <ul class="m-0 p-0 ul-no-style">
            <?= navButton('accueil', 'Accueil');?>
            <?= navButton('account', 'Compte');?>
            <?= navButton('play', 'Jouer');?>
            <?= navButton('infos', 'Infos');?>
            <?= navButton('social', 'Social');?>
            <?= navButton('settings', 'Réglages');?>
        </ul>
    </nav>
</div>
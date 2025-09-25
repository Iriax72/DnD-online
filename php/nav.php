<?php
function navButton(string $page, string $name):string {
    return <<<HTML
    <li>
        <a href="/index.php?page=$page">$name</a>
    </li>
HTML;
}
?>

<nav id="nav" class="nav-container">
    <ul class="m-0 p-0">
        <?= navButton('accueil', 'Accueil');?>
        <?= navButton('account', 'Compte');?>
        <?= navButton('play', 'Jouer');?>
        <?= navButton('infos', 'Infos');?>
        <?= navButton('social', 'Social');?>
        <?= navButton('settings', 'Réglages');?>
    </ul>
</nav>
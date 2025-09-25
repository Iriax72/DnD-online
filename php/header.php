<?php
$pageNames = [
    'accueil' => 'Accueil',
    'account' => 'Compte',
    'play' => 'Jouer',
    'infos' => 'Infos',
    'social' => 'Social',
    'settings' => 'Réglages'
];
$pageName = $pageNames[$page];

function navButton(string $name, array $pageNames):string {
    $label = $pageNames[$name];
    return <<<HTML
    <li>
        <a href="/index.php?page=$name">$label</a>
    </li>
HTML;
}
?>

<header class="m-0">
    <div id="l1" class="m-0 clickToQuitNav">
        <h1 class="main-h1">DnD Online</h1>
    </div>
    <div id="l2" class="m-0">
        <span class="l2-span p-0 clickToQuitNav">
            <img src="" alt="logo du site">
        </span>
        <h2 class="clickToQuitNav">
            <?=$pageName?>
        </h2>
        <span class="l2-span p-0">
            <button id="nav_button" class="m-0 p-0 clickToOpenNav">
                <img src="../assets/images/hamburger-picture.jpeg" alt="boutton d'ouverture du memu" class="b-img">
            </button>
        </span>
        <nav id="nav" class="nav-container">
            <ul class="m-0 p-0">
                <?= navButton('accueil', $pageNames) ?>
                <?= navButton('account', $pageNames) ?>
                <?= navButton('play', $pageNames) ?>
                <?= navButton('infos', $pageNames) ?>
                <?= navButton('social', $pageNames) ?>
                <?= navButton('settings', $pageNames) ?>
            </ul>
        </nav>
    </div>
</header>
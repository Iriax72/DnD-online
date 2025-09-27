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
?>

<header class="m-0">
    <div id="l1" class="m-0 p-0 clickToQuitNav">
        <h1 class="main-h1">DnD Online</h1>
    </div>
    <div id="l2" class="m-0 p-0">
        <span class="l2-span p-0 clickToQuitNav">
            <img src="/assets/images/logo.png" alt="logo du site" class="l2-img">
        </span>
        <h2 class="clickToQuitNav">
            <?=$pageName?>
        </h2>
        <span class="l2-span p-0">
            <button id="nav_button" class="m-0 p-0">
                <img src="../assets/images/hamburger-picture.jpeg" alt="boutton d'ouverture du memu" class="l2-img">
            </button>
        </span>
    </div>
</header>
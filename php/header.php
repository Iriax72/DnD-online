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

<header>
    <div id="l1">
        <h1 class="main-h1">DnD Online</h1>
    </div>
    <div id="l2">
        <span>
            <img src="" alt="logo du site">
        </span>
        <h2><?=$pageName?></h2>
        <span class="b-span">
            <button id="nav_button">
                <img src="../assets/images/hamburger-picture.jpeg" alt="boutton d'ouverture du memu" class="b-img">
            </button>
        </span>
        <nav id="nav" class="nav-container">
            <ul>
                <li>
                    <a href="/index.php?page=accueil">Accueil</a>
                </li>
                <li>
                    <a href="/index.php?page=account">Compte</a>
                </li>
                <li>
                    <a href="/index.php?page=play">Jouer</a>
                </li>
                <li>
                    <a href="/index.php?page=infos">Infos</a>
                </li>
                <li>
                    <a href="/index.php?page=social">Social</a>
                </li>
                <li>
                    <a href="/index.php?page=settings">Réglages</a>
                </li>
            </ul>
        </nav>
    </div>
</header>
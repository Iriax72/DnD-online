<?php
$page = $_GET['page'] ?? 'accueil';
require "./php/sections/$page.php"
?>
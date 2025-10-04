<?php
function form(string $form_name, string $title):string {
    $html = <<<HTML
<div id="{$form}_pop" class="pop-box hidden">
    <span class="span cross-span m-0 p-0">
        <button class="img-container close-pop m-0 p-0">
            <img src="/assets/images/cross.jpeg" alt="image de croix" class="img">
        </button>
    </span>
    <form id="{$form_name}_form" method="post" class="form">
        <h2>$title</h2>
HTML;
    return $html;
};

function close_form(string $btn_text):string {
    $html = <<<HTML
        <button type="submit" class="nice-btn">$btn_text</button>
    </form>
</div>
HTML;
    return $html;
};

function text_input(string $name, string $text, bool $optional =false):string {
    $html = <<<HTML
<label for="{$name}" id="{$name}_label">$text</label>
<input type="text" id="{$name}" name="{$name}">
<br/>
HTML;
    return $html;
};
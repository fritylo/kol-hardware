<?php
function text_field($name, $placeholder) {
?>
<div class="text-field" name="<?= $name ?>">
   <input type="text" placeholder="<?= $placeholder ?>" />
</div>
<?php
}
?>
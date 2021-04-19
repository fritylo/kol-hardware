<?php
function checkbox($name, $text) {
?>
   <label class="checkbox" name="<?= $name ?>"><?= $text ?>
      <input type="checkbox" checked="checked" />
      <span class="checkmark"></span>
   </label>
<?php
}
?>
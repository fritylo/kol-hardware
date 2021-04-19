<?php
function radio_group($name, $options, $checked_i) {
?>

   <div class="radio-button-group col" name="<?= $name ?>">
      <?php $i = 0; ?>
      <?php foreach ($options as $option => $value) : ?>
         <div class="radio-button">
            <label class="container"><?= $option ?>
               <input type="radio"
                  value="<?= $value ?>"
                  name="<?= $name ?>"
                  <?= $i == $checked_i ? 'checked' : '' ?> />
               <span class="checkmark"></span>
            </label>
         </div>
         <?php $i++; ?>
      <?php endforeach; ?>
   </div>

<?php
}
?>
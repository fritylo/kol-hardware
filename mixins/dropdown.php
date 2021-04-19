<?php
function dropdown($name, $options) {
?>

   <select class="dropdown" name="<?= $name ?>">
      <?php foreach ($options as $option => $value) : ?>
         <!-- Этот хтмл будет выведен несколько раз -->
         <option value="<?= $value ?>"><?= $option ?></option> <!-- Создаём option и вставляем в него название города -->
      <?php endforeach; // закрываем цикл тут директивой endforeach 
      ?>
   </select>

<?php
}
?>
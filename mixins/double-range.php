<?php
function double_range($name, $minValue, $maxValue, $step, $units) {
?>
<div>
   <div class="double-range" name="<?= $name ?>" data-min="<?= $minValue ?>" data-max="<?= $maxValue ?>" data-step="<?= $step ?>">
      <div class="text-fields row">
         <div class="field field_from row">
            <span>от</span>
            <!-- И сюда -->
            <input class="text-field text-field_short" value="<?= $minValue ?>" id="fieldQuadFrom" />
            <span><?= $units ?></span>
         </div>
         <div class="field field_to row">
            <span>до</span>
            <!-- И сюда -->
            <input class="text-field text-field_short" value="<?= $maxValue ?>" id="fieldQuadTo" />
            <span><?= $units ?></span>
         </div>
      </div>
      <div class="line"></div>
      <!-- Вставляем минимальное значение в вёрстку. -->
      <!-- Чтобы понять как работает шкала, смотри устройство PUG файлов и файл index.js. -->
      <!-- Суть в том, что джес скрип всё подтянет сам если мы положим это значение сюда -->
      <!-- Так что мы положим -->
      <div class="thumb thumb1 abs clickbl" data-value="<?= $minValue ?>">
         <div class="position"></div>
      </div>
      <!-- Ещё положим максимальную квадратуру -->
      <div class="thumb thumb2 abs clickbl" data-value="<?= $maxValue ?>">
         <div class="position"></div>
      </div>
   </div>
</div>
<?php
}
?>
<!DOCTYPE html>
<html lang="ru">

<?php require './mixins/double-range.php'; ?>
<?php require './mixins/checkbox.php'; ?>
<?php require './mixins/subtitle.php'; ?>
<?php require './mixins/dropdown.php'; ?>
<?php require './mixins/radio-group.php'; ?>
<?php require './mixins/text_field.php'; ?>

<?php $VER = '1.00'; ?>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Недвижимость</title>
    <link rel="stylesheet" href="index.css?v<?= $VER ?>" />
</head>

<body>
    <div class="page-wrapper row rel">
        <div class="filters-block col">
            <div class="toggle-button abs clickbl">
                <div></div>
            </div>
            <div class="close-button abs clickbl">
                <div class="right abs"></div>
                <div class="left abs"></div>
            </div>
            <div class="filters-block_title">Finder</div>
            <?php
            text_field('search', 'Что искать?..');

            subtitle('Магазин');
            checkbox('shop-optima', 'Optima-Computers');
            checkbox('shop-indicator', 'Индикатор');
            checkbox('shop-komtek', 'КомТек');
            checkbox('shop-patron', 'Патрон-Сервис');
            checkbox('shop-fotosklad', 'Фотосклад');

            subtitle('В наличии');
            radio_group('in-stock', [
                'В наличии' => 'in-stock',
                'Нет в наличии' => 'not-in-stock',
                'Без разницы' => 'any'
            ], 2);

            subtitle('Цена');
            double_range('price', 10000, 100000, 1000, 'руб');

            subtitle('Сортировка');
            dropdown('order-param', [
                'По цене' => 'price',
                'По дате добавления' => 'add-date',
            ]);
            dropdown('order-direction', [
                'По возрастанию' => 'asc',
                'По убыванию' => 'desc',
            ]);
            ?>
            <button class="filters-block_find-button">НАЙТИ</button>
        </div>
        <div class="products">
            <?php
            $products = [
                [
                    'link' => 'https://google.com',
                    'title' => 'Ноутбук Acer Aspire 5 A515-56G-54JD (NX.A1LEU.00A) Pure Silver',
                    'shop' => 'http://sun9-52.userapi.com/c836630/v836630067/2b439/iEavREuMlOk.jpg',
                    'price' => '10 000',
                    'in-stock' => true,
                    'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHzcAFveyU8rjs6sCq_FSq9sMBwlUcaaBww&usqp=CAU',
                ],
                [
                    'link' => 'https://google.com',
                    'title' => 'Apple iPhone 12 Pro Max',
                    'shop' => 'http://toplogos.ru/images/logo-dns.png',
                    'price' => '20 000',
                    'in-stock' => false,
                    'image' => 'https://cdn.svyaznoy.ru/upload/iblock/2c3/ruru_iphone12promax_q121_pacificblue_pdp-image-1b.jpg/resize/307x224/',
                ],
            ];
            ?>

            <?php foreach ($products as $product) : ?>
                <a href="<?= $product['link'] ?>" class="product">
                    <div class="product__image" style="background-image: url('<?= $product['image'] ?>')"></div>
                    <div class="product__content">
                        <div class="product__title">
                            <?= $product['title'] ?>
                        </div>
                        <div class="product__price">
                            <?= $product['price'] ?>
                        </div>
                        <div class="product__shop-info">
                            <div class="product__shop">
                                <img src="<?= $product['shop'] ?>" />
                            </div>
                            <?php if ($product['in-stock']) : ?>
                                <div class="product__in-stock">
                                    <svg width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999">
                                        <path style="fill:#B7E183;" d="M502.87,75.474c-12.201-12.204-31.952-12.205-44.154-0.001L163.89,370.299L53.284,259.693
        c-12.201-12.204-31.952-12.205-44.154-0.001c-12.173,12.174-12.173,31.981,0,44.153L141.814,436.53
        c12.199,12.198,31.953,12.2,44.153,0L502.87,119.626C515.042,107.453,515.042,87.645,502.87,75.474z" />
                                        <path style="fill:#71DE56;" d="M502.87,75.474c-12.201-12.204-31.952-12.205-44.154-0.001L243.511,290.678v88.306L502.87,119.626
        C515.042,107.453,515.042,87.645,502.87,75.474z" />
                                    </svg>
                                    <span>В наличии</span>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </a>

            <?php endforeach; ?>
            <!-- Тут цикл для карточки заканчивается -->
        </div>
    </div>
</body>

<!-- Тут подключаем библиотеку jQuery для JavaScript, которая облегчает манипуляции со страницей -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

<script src="js/mobile-filters-toggle.js?v<?= $VER ?>"></script>
<script src="js/double-range.js?v<?= $VER ?>"></script>
<!-- Ну и наш скрипт, который управляет страницей -->
<script src="index.js?v<?= $VER ?>"></script>

</html>
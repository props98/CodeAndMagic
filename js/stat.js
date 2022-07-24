"use strict";

(function() {

    //* Размеры и координаты облака
    const CLOUD_W = 420;
    const CLOUD_H = 270;
    const CLOUD_BG = '#fff';
    const CLOUD_TEXT_HEIGHT = 20;
    const CLOUD_X = 100;
    const CLOUD_Y = 10;
    const GAP = 20;
    
    //* Гистограмма времен участников
    let barWidth = 50;
    let barHeight= CLOUD_H - (((GAP + GAP) * 2) + CLOUD_TEXT_HEIGHT + GAP);
    console.log(barHeight);

    //* Рандомный цвет гистограммы остальных игроков
    let historamPlayersColor = function() {
        let alpha = Math.random() * (1 - 0.2) + 0.2;
        return `rgba(0, 83, 138, ${alpha.toFixed(1)})`;
    };

    //* Массив игроков
    let names = ['Вы', 'Марк', 'Майкл', 'Джон'];

    //* Функция перебора массива
    // function findInArr(arr) {
    //     let randArr = arr[0];
    //     for (let i = 0; i < arr.length; i++) {
    //         if (randArr < arr[i]) {
    //             randArr = arr[i];
    //         }
    //     }
    //     return randArr;
    // } 

    //* Функция для создания облака
    let renderCloud = function(ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, CLOUD_W, CLOUD_H);
    }

    //* Отрисовка облака с результатми игроков
    window.renderStatistics = function(ctx, names, times) {
        //* Отрисовка тени и сомого облака с помощью функции
        renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
        renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_BG);

        //* Текст о победителях
        ctx.fillStyle = '#000';
        ctx.fillText('Ура вы победили!', CLOUD_X + GAP, GAP + GAP);
        ctx.fillStyle = '#000';
        ctx.fillText('Список результатов:', CLOUD_X + GAP, GAP + GAP + CLOUD_TEXT_HEIGHT);

        //* Отрисовка гистограммы игроков
        ctx.fillStyle = '#000';
        ctx.fillText('Вы', CLOUD_X + (GAP * 2), CLOUD_H - CLOUD_Y);
        ctx.fillRect(CLOUD_X + (GAP * 2), (GAP + GAP) * 2 + CLOUD_Y, barWidth, barHeight); 

    }

})();
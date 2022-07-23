"use strict";

(function() {

    //* Размеры и координаты облака
    const CLOUD_WIDTH = 420;
    const CLOUD_HEIGHT = 270;
    const CLOUD_BG = '#fff';
    const CLOUD_TEXT_COLOR = 'black';
    const CLOUD_TEXT_FONT = '16px PT Mono';
    const CLOUD_POSITION_X = 100;
    const CLOUD_POSITION_Y = 10;

    //* Гистограмма времен участников
    let histogramHeigt = 150;
    let histogramWidth = 40;
    let histogramGap = 50;
    let histogramPlayerColor = 'rgba(255, 0, 0, 1)';

    //* Рандомный цвет гистограммы остальных игроков
    let historamPlayersColor = function() {
        let alpha = Math.random() * (1 - 0.2) + 0.2;
        return `rgba(0, 83, 138, ${alpha.toFixed(1)})`;
    };

    //* Массив игроков
    let names = ['Вы', 'Марк', 'Майкл', 'Джон'];

    //TODO
    //* Функция перебора массива
    function findInArr(arr) {
        let randArr = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (randArr < arr[i]) {
                randArr = arr[i];
            }
        }
        return randArr;
    }

    //* Функция для создания облака
    let renderCloud = function(ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
    }

    //* Отрисовка облака с результатми игроков
    window.renderStatistics = function(ctx, names, times) {
        //* Рисуем тень от облака со смещением в права и вниз
        renderCloud(ctx, CLOUD_POSITION_X + 10, CLOUD_POSITION_Y + 10, 'rgba(0, 0, 0, 0.3)');
        //* Рисуем основное облако
        renderCloud(ctx, CLOUD_POSITION_X, CLOUD_POSITION_Y, CLOUD_BG);

    }


})();
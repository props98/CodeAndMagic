"use strict";

(function() {

    //* Размеры и координаты облака
    const cloudWidth = 420;
    const cloudHeight = 270;
    const cloudBgColor = 'white';
    const cloudTextColor = 'black';
    const cloudTextStyle = '16px PT Mono';
    const cloudTextLineHeight = 20;
    const cloudPositionX = 100;
    const cloudPositionY = 10;

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
            console.log(arr[i]);
            if (randArr < arr[i]) {
                randArr = arr[i];
            }
        }

        return randArr;
    }

    //TODO
    //* Отрисовка облака с результатми игроков
    window.renderStatistics = function(ctx, names, times) {



    }


})();
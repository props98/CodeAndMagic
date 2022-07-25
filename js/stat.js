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
    
    //* Гистограмма времени участников
    let barWidth = 50;
    let barHeight= CLOUD_H - (((GAP + GAP) * 2) + CLOUD_TEXT_HEIGHT + GAP);

    //* Рандомный цвет других игроков
    let historamPlayersColor = function() {
        let alpha = Math.random() * (1 - 0.2) + 0.2;
        return `rgba(0, 83, 138, ${alpha.toFixed(1)})`;
    };

    // //* Массив игроков
    // let names = ['Вы', 'Марк', 'Майкл', 'Джон'];

    let renderCloud = function(ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, CLOUD_W, CLOUD_H);
    }

    //* Определение максимального элемента в массиве
    let getMaxElement = function(arr) {
        let maxElement = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxElement) {
                maxElement = arr[i];
            }
        }

        return maxElement;
    };

    //* Отрисовка облака с результатми игроков
    window.renderStatistics = function(ctx, names, times) {

        //* Отрисовка тени и облака
        renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
        renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_BG);

        //* Текст с результатами
        ctx.fillStyle = '#000';
        ctx.fillText('Ура вы победили!', CLOUD_X + GAP, GAP + GAP);
        ctx.fillStyle = '#000';
        ctx.fillText('Список результатов:', CLOUD_X + GAP, GAP + GAP + CLOUD_TEXT_HEIGHT);

        //* Отрисовка гистограммы игроков
        ctx.fillStyle = '#000';

        let maxTime = getMaxElement(times);

        //* Подсчет прогресса игроков
        let collHeight = function(time) {
            return Math.floor((barHeight * time) / maxTime);
        };
        
        //* Отрисовка результатов
        for (let i = 0; i < names.length; i++) {

            if (names[i] === 'Вы') {
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
            } else {
                ctx.fillStyle = historamPlayersColor();
            }

            let playerBarHeight = collHeight(times[i]);

            ctx.fillText(Math.floor(times[i]), CLOUD_X + (GAP + GAP) + (barWidth + GAP + GAP) * i, -playerBarHeight + (CLOUD_H - CLOUD_Y - GAP) - 5);
            ctx.fillRect(CLOUD_X + (GAP + GAP) + (barWidth + GAP + GAP) * i, CLOUD_H - CLOUD_Y - GAP, barWidth, -playerBarHeight); 
            ctx.fillText(names[i], CLOUD_X + (GAP + GAP) + (barWidth + GAP + GAP) * i, CLOUD_H - CLOUD_Y);
            
        }
        
    }

})();
"use strict";

(function() {

    //* Выводим окно выбора мага
    let setup = document.querySelector('.setup');
    setup.classList.remove('hidden');

    //* Выводим блок с похожими магами
    document.querySelector('.setup-similar').classList.remove('hidden');

    //* Элемент куда будут вставленны похожие маги
    let similarListElement = document.querySelector('.setup-similar-list');

    //* Шаблон который будет копироваться и вставляться в элемент
    let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    //* Данные для выбора случайного персонажа
    const WIZARD_NAMES = [
        'Иван', 
        'Хуан Себастьян', 
        'Мария', 'Кристоф', 
        'Виктор', 'Юлия', 
        'Люпита', 
        'Вашингтон'
    ];
    const WIZARD_LAST_NAMES = [
        'да Марья', 
        'Верон', 
        'Мирабелла', 
        'Вальц', 
        'Онопко', 
        'Топольницкая',
        'Нионго', 
        'Ирвинг'
    ];
    let coatColors = [
        'rgb(101, 137, 164)', 
        'rgb(241, 43, 107)', 
        'rgb(146, 100, 161)', 
        'rgb(56, 159, 117)', 
        'rgb(215, 210, 55)', 
        'rgb(0, 0, 0)'
    ];
    let eyesColors = [
        'black', 
        'red', 
        'blue', 
        'yellow', 
        'green'
    ];

    const WIZARD_COUNT = 4;

    //* Получаем случайный индекс
    var random = function(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };

    //* Получаем случайный свойство по случайному индексу
    var randomItem = function(array) {
        return array[random(0, array.length - 1)];
    };

    //TODO: Сделать функцию для создания рандомного персонажа
    for (let i = 0; i < WIZARD_COUNT; i++) {
        let wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[i];

        similarListElement.appendChild(wizardElement);
    }

})();
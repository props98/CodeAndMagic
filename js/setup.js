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
    const WIZARD_LAST_NAME = [
        'да Марья', 
        'Верон', 
        'Мирабелла', 
        'Вальц', 
        'Онопко', 
        'Топольницкая',
        'Нионго', 
        'Ирвинг'
    ];
    let coatColor = [
        'rgb(101, 137, 164)', 
        'rgb(241, 43, 107)', 
        'rgb(146, 100, 161)', 
        'rgb(56, 159, 117)', 
        'rgb(215, 210, 55)', 
        'rgb(0, 0, 0)'
    ];
    let eyesColor = [
        'black', 
        'red', 
        'blue', 
        'yellow', 
        'green'
    ];

    const WIZARD_COUNT = 4;

    for (let i = 0; i < WIZARD_COUNT; i++) {
        let wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[i];

        similarListElement.appendChild(wizardElement);
    }

})();
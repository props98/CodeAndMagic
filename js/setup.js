"use strict";

//* Находим и выводим окно выбора мага
let setup = document.querySelector('.setup');
setup.classList.remove('hidden');

//* Ноходим и выводим блок с похожими магами
document.querySelector('.setup-similar').classList.remove('hidden');

//* Элемент куда будут вставленны похожие маги
let similarListElement = document.querySelector('.setup-similar-list');

//* Шаблон который будет копироваться и вставляться в элемент
let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

//* Данные с именами магов
// const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер'];

for (let i = 0; i < WIZARD_NAMES.length; i++) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[i];

    similarListElement.appendChild(wizardElement);
}
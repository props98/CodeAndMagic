"use strict";

(function() {

    //* Шаблон который будет копироваться и вставляться в элемент
    let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    //* Данные для выбора случайного персонажа
    const WIZARD_NAMES = [
        'Иван', 
        'Хуан Себастьян', 
        'Мария', 
        'Кристоф', 
        'Виктор', 
        'Юлия', 
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
        'Ирвинг',
    ];
    const COAT_COLORS = [
        'rgb(101, 137, 164)', 
        'rgb(241, 43, 107)', 
        'rgb(146, 100, 161)', 
        'rgb(56, 159, 117)', 
        'rgb(215, 210, 55)', 
        'rgb(0, 0, 0)',
    ];
    const EYES_COLORS = [
        'black', 
        'purple', 
        'blue', 
        'yellow', 
        'green',
        'grey',
        'white',
    ];
    const FIREBALL_COLORS = [
        '#ee4830',
        '#30a8ee',
        '#5ce6c0',
        '#e848d5',
        '#e6e848',
      ];

    //* Получаем случайный индекс
    var random = function(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };

    //* Получаем случайный свойство по случайному индексу
    var randomItem = function(array) {
        return array[random(0, array.length - 1)];
    };

    const WIZARD_COUNT = 4;
    let wizards = [];

    let generateWizard = function(count) {
        
        //* Храним содержимое всего фрагмента
        let wizardsCloneElem = document.createDocumentFragment();
        let wizardHTML;

        for (let i = 0; i < count; i++) {
            
            wizards[i] = {
                name: `${randomItem(WIZARD_NAMES)} ${randomItem(WIZARD_LAST_NAMES)}`,
                coat: randomItem(COAT_COLORS),
                eyes: randomItem(EYES_COLORS)
            };
            
            //* Делаем глубокое клонирование присваиваем переменной wizardHTML
            //* Случайным выбором изменяем имя, цвет плаща и цвет глаз
            wizardHTML = similarWizardTemplate.cloneNode(true);
            wizardHTML.querySelector('.setup-similar-label').textContent = wizards[i].name;
            wizardHTML.querySelector('.wizard-coat').style.fill = wizards[i].coat;
            wizardHTML.querySelector('.wizard-eyes').style.fill = wizards[i].eyes;
            wizardsCloneElem.appendChild(wizardHTML);
        }

        // console.log(wizardsCloneElem);
        return wizardsCloneElem;
        
    };
    
    //* Элемент куда будут вставленны похожие маги
    let similarListElement = document.querySelector('.setup-similar-list');
    similarListElement.appendChild(generateWizard(WIZARD_COUNT));
    
    //* Выводим блок с похожими магами
    document.querySelector('.setup-similar').classList.remove('hidden');



    //* Открытие / Закрытие окна настройки персонажа
    //* Выводим окно выбора мага
    let setup = document.querySelector('.setup');
    let setupOpenIcon = document.querySelector('.setup-open');
    let setupCloseIcon = document.querySelector('.setup-close');
    const  ESCAPE = 27;
    const  ENTER = 13;
    
    //* Open / Close setup
    let onSetupEscPress = function(evt) {
        if (evt.keyCode === ESCAPE) {
            closeSetup();
        }
    };

    let openSetup = function() {
        setup.classList.remove('hidden');
        document.addEventListener('keydown', onSetupEscPress);
    };

    let closeSetup = function() {
        setup.classList.add('hidden');
        document.removeEventListener('keydown', onSetupEscPress);
    };

    setupOpenIcon.addEventListener('click', function() {
        openSetup();
    });

    setupOpenIcon.addEventListener('keydown', function(evt) {
        if (evt.keyCode === ENTER) {
            openSetup();
        }
    });

    setupCloseIcon.addEventListener('click', function() {
        closeSetup();
    });

    setupCloseIcon.addEventListener('keydown', function(evt) {
        if (evt.keyCode === ENTER) {
            closeSetup();
        }
    });


    //* Валидация ввода имени персонажа.
    let userNameInput = setup.querySelector('.setup-user-name');

    userNameInput.addEventListener('invalid', function(evt) {
        if (userNameInput.validity.tooShort) {
            userNameInput.setCustomValidity('Чувак, имя должно состоять минимум из 2-х символов');
        } else if (userNameInput.validity.tooLong) {
            userNameInput.setCustomValidity('Чувак, имя не должно превышать 25-ти символов');
        } else if (userNameInput.validity.valueMissing) {
            userNameInput.setCustomValidity('Чувак, обязательное поле')
        } else {
            userNameInput.setCustomValidity('');
        }
    });

    userNameInput.addEventListener('input', function (evt) {
        let target = evt.target;
        if (target.value.length < 2) {
            target.setCustomValidity('Чувак, имя должно состоять минимум из 2-х символов');
        } else {
            target.setCustomValidity('');
        }
    });


    //* 3. Изменение цвета мантии персонажа по нажатию
    // Получаем нужные элементы
    let wizardCoat = document.querySelector('.wizard-coat');
    let form = setup.querySelector('.setup-wizard-form');

    // Получаем слдедующий цвет в массиве
    let nextElement = function(array, element) {
        let current = array.indexOf(element);
        if (current !== array.length -1) {
            return array[current + 1];
        }
        return array[0];
    };
    
    // Отслеживаем событие клика по выбранному элементу
    wizardCoat.addEventListener('click', function() {
        switchWizardCoatColor();
    });

    // Магия выбора следующего цвета
    // Нахождене нужного элемента по атрибуту name
    // Вставка следующего цвета в атрибут value
    // Перекрашивание элемента при клике в следующий цвет
    let switchWizardCoatColor = function() {
        // Получение атрибута value мага
        let wizardCoatColor = form.elements['coat-color'].value;
        // console.log(wizardCoatColor);
        let nextColor = nextElement(COAT_COLORS, wizardCoatColor);
        form.elements['coat-color'].value = nextColor;
        wizardCoat.style.fill = nextColor;
    };

    //* 4. Изменение цвета глаз персонажа по нажатию
    let wizardEyes = document.querySelector('.wizard-eyes');

    wizardEyes.addEventListener('click', function() {
        switchWIzardEyesColor();
    });

    let switchWIzardEyesColor = function() {
        let wizardEyesColor = form.elements['eyes-color'].value;
        // console.log(wizardEyesColor);
        let nextColor = nextElement(EYES_COLORS, wizardEyesColor);
        form.elements['eyes-color'].value = nextColor;
        wizardEyes.style.fill = nextColor;
    };

    //* 5. Изменение цвета фаерболов по нажатию
    let fireball = document.querySelector('.setup-fireball-wrap');

    fireball.addEventListener('click', function() {
        switchFireballColor();
    });

    let switchFireballColor = function() {
        let fireballColor = form.elements['fireball-color'].value;
        let nextColor = nextElement(FIREBALL_COLORS, fireballColor);
        form.elements['fireball-color'].value = nextColor;
        fireball.style.backgroundColor = nextColor;
    };

    //Todo 6. Форма должна отправляться на урл https://js.dump.academy/code-and-magick методом POST с типом multipart/form-data
    
    
})();
// $(document).ready(() => {

//     function goToSection(id) {
//         $('.link').removeClass('active');
//         $(`.link[href='${id}']`).addClass('active');
//     }

//     var sectionId = window.location.hash.split('#').pop();
//     goToSection(`#${sectionId}`)

//     $('.link').click(function () {
//         const ID = $(this).attr('href');
//         const OFFSET = $(ID).offset().top;

//         goToSection(ID)

//         $('html').animate({
//             scrollTop: OFFSET
//         }, 1000)
//     })

//     $('.arrow').click(function () {
//         const ID = $(this).attr('href');
//         const OFFSET = $(ID).offset().top;

//         goToSection(ID);

//         $('html').animate({
//             scrollTop: OFFSET
//         }, 1000)
//     })

//     $('a').mouseover(function () {
//         $(this).css("backgroundColor", "white");
//         $(this).find('.add-window-for-panel').css("visibility", "visible");
//     })


//     $('a').mouseout(function () {
//         $(this).css("backgroundColor", "");
//         $(this).find('.add-window-for-panel').css("visibility", "hidden");
//     })

//     $('.arrow').mouseover(function () {
//         $(this).css("color", "black");
//         $(this).css("backgroundColor", "transparent")
//     })

//     $('.arrow').mouseout(function () {
//         $(this).css("color", "")
//     })
// })


const WRAPPER = document.querySelector('.wrapper');
const TEXT = document.querySelectorAll('.text');
const BOLD_TEXT_BUTTON = document.getElementById('bold-text-button');
const ITALIC_TEXT_BUTTON = document.getElementById('italic-text-button');
const UNDERLINE_TEXT_BUTTON = document.getElementById('underline-text-button');
const STRIKE_THROUGH_TEXT_BUTTON = document.getElementById('strike-through-text-button');
const TEXT_ALIGN_LEFT = document.getElementById('text-align-left');
const TEXT_ALIGN_CENTER = document.getElementById('text-align-center');
const TEXT_ALIGN_RIGHT = document.getElementById('text-align-right');
const ARIAL = document.getElementById('arial');
const GEORGIA = document.getElementById('georgia');
const IMPACT = document.getElementById('impact');
const TAHOMA = document.getElementById('tahoma');
const TIMES_NEW_ROMAN = document.getElementById('times-new-roman');
const VERDANA = document.getElementById('verdana');
const FONT_DROPDOWN_ITEMS = document.querySelectorAll('.dropdown-item-font');
const SIZE_DROPDOWN_ITEMS = document.querySelectorAll('.dropdown-item-size');
const COLOR_CELLS = document.querySelectorAll('.color-cell');
const BACKGROUND_COLOR_CELLS = document.querySelectorAll('.background-color-cell');
const BG_IMGS = document.querySelectorAll('.bg-img');



BOLD_TEXT_BUTTON.addEventListener('click', function () {
    TEXT.forEach(text => {
        if (text.style.fontWeight == "") {
            text.style.fontWeight = 'bold'
        } else {
            text.style.fontWeight = ''
        }
    })
})

ITALIC_TEXT_BUTTON.addEventListener('click', function () {
    TEXT.forEach(text => {
        if (text.style.fontStyle == "") {
            text.style.fontStyle = 'italic'
        } else {
            text.style.fontStyle = ''
        }
    })
})

UNDERLINE_TEXT_BUTTON.addEventListener('click', function () {
    TEXT.forEach(text => {
        if (text.style.textDecoration == "") {
            text.style.textDecoration = 'underline'
        } else {
            text.style.textDecoration = ''
        }
    })
})

STRIKE_THROUGH_TEXT_BUTTON.addEventListener('click', function () {
    TEXT.forEach(text => {
        if (text.style.textDecoration == "") {
            text.style.textDecoration = 'line-through'
        } else {
            text.style.textDecoration = ''
        }
    })
})

TEXT_ALIGN_LEFT.addEventListener('click', function () {
    WRAPPER.style.alignItems = 'flex-start'
})

TEXT_ALIGN_CENTER.addEventListener('click', function () {
    // console.log('click')
    WRAPPER.style.alignItems = 'center'
})
TEXT_ALIGN_RIGHT.addEventListener('click', function () {
    WRAPPER.style.alignItems = 'flex-end'
})


FONT_DROPDOWN_ITEMS.forEach(fontDropdownItem => {
    fontDropdownItem.addEventListener('click', function () {
        TEXT.forEach(text => {
            text.style.fontFamily = getComputedStyle(this).fontFamily;
        })
    })
})


SIZE_DROPDOWN_ITEMS.forEach(sizeDropdownItem => {
    sizeDropdownItem.addEventListener('click', function () {
        TEXT.forEach(text => {
            text.style.fontSize = getComputedStyle(this).fontSize;
        })
    })
})

COLOR_CELLS.forEach(colorCell => {
    colorCell.addEventListener('click', function () {
        TEXT.forEach(text => {
            text.style.color = getComputedStyle(this).backgroundColor;
        })
    })
})

BACKGROUND_COLOR_CELLS.forEach(backgroundColorCell => {
    backgroundColorCell.addEventListener('click', function () {
        TEXT.forEach(text => {
            text.style.backgroundColor = getComputedStyle(this).backgroundColor;
        })
    })
})

BG_IMGS.forEach(bgImg => {
    bgImg.addEventListener('click', function () {
        // TEXT.forEach(text=>{
        //     text.style.backgroundImage = getComputedStyle(this).backgroundImage;
        // })
        WRAPPER.style.backgroundImage = getComputedStyle(this).backgroundImage;
      
        
    })
})


// Завдання
// Необхідно розробити наступний функціонал як на відео TextEditor2.0, а саме:
// ⦁	Кнопка “B” задає жирність тексту, другий клік її забирає;
// ⦁	Кнопка “І” задає курсивність тексту, другий клік її забирає;
// ⦁	Кнопка “U” задає підкресленість тексту, другий клік її забирає;
// ⦁	Кнопка “S” задає закресленість тексту, другий клік її забирає;
// ⦁	Кнопка “ ” задає вирівнювання по лівому краю;
// ⦁	Кнопка “ ” задає вирівнювання по центру;
// ⦁	Кнопка “ ” задає вирівнювання по правому краю;
// ⦁	Кнопка “А” відкриває випадаюче меню в якому вибирається родовід шрифта;
// ⦁	Кнопка “Т” відкриває випадаюче меню в якому вибирається розмір шрифта;
// ⦁	Кнопка   відкриває випадаюче меню в якому вибирається колір тексту;
// ⦁	Кнопка   відкриває випадаюче меню в якому вибирається колір фону, або картинка на фон, або можна загрузити картинку вибравши її на комп’ютері;
//  Кнопка   відкриває модальне вікно з логінуванням;
//  При кліку на кнопку Sign In провіряємо чи правильно введений логін та пароль. Якщо ні підсвічує поля червоним кольором та видає повідомлення “Please check your login or password”. Якщо ж правильно розблоковує кнопку   ;
//  Кнопка     відкриває блок редагування з можливістю змінки тексту а також добавлення списку та таблиці;
//  Кнопка    відкриває модальне вікно з можливістю добавлення таблиці. Таблицю не можна добавити поки правильно не заповнено всі поля. Валідацію полів провіряємо через регулярні вирази;
//  Кнопка    відкриває модальне вікно з можливістю добавлення нумерованого списку. Список не можна добавити поки правильно не заповнено всі поля. Валідацію полів провіряємо через регулярні вирази;
//   Кнопка    відкриває модальне вікно з можливістю добавлення маркованого списку. Список не можна добавити поки правильно не заповнено всі поля. Валідацію полів провіряємо через регулярні вирази;
// ⦁	Кнопка    збрегірає всі зміни в блоку редагування і переходить назад в блок стилізування.

// Вимоги
// ⦁	Реалізувати максимально подібний вигляд(можна використовувати bootstrap);
// ⦁	Коментарі (до функцій і головних змінних, за що вони відповідають);
// ⦁	Оптимізація (використовуємо функції, не дублюємося в коді);
// ⦁	Структура коду (код має бути відформатований);
// ⦁	Валідація полів;
// ⦁	Повинно все працювати.
// Завдання можe бути реалізоване з використанням jQuery.
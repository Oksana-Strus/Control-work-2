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


let active = true;
let isBold, isItalic, isUnderline, isStrikeThroughText = false;

$('#uploadFile').on('change', function (event) {
    let file = this.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
        $('#wrapper').css('background-image', 'url("' + reader.result + '")');
    }

    if (file) {
        reader.readAsDataURL(file);
    }
});

$('#btnSignOut').on('click', function () {
    console.log('lllllllll')
    $("#btn-close-lock").css('display', 'block');
    $("#btn-open-lock").css('display', 'none');
    $('#open-tables').attr('disabled', true);

})

$('#open-tables').on('click', function () {
    $(".content").css('display', 'none');
    $("#edit-content").css('display', 'block');
    $('#edit-content').val($(".content").html());
    $('#edit-toolbar').removeClass('hidden-toolbar');
    $('#style-toolbar').addClass('hidden-toolbar');
})

$('#save-changes-btn').on('click', function () {
    $("#edit-content").css('display', 'none');
    $(".content").css('display', 'block');
    $(".content").html($('#edit-content').val());

    $('#edit-toolbar').addClass('hidden-toolbar');
    $('#style-toolbar').removeClass('hidden-toolbar');
})
//submit for all inputs
$('[type="submit"]').on('click', function () {
    $(this)
        .closest('form')
        .find('[required]')
        .addClass('required');

    let form = $(this).closest('form');
    if (form[0].checkValidity()) {
        form.removeClass('invalid');
    } else {
        form.addClass('invalid');
    }
});
//Form for creating table
$('#createTableForm').on('submit', function (event) {
    event.preventDefault()
    event.stopPropagation()

    let countTR = event.target.elements['countTr'].value;
    let countTD = event.target.elements['countTd'].value;
    let widthTD = event.target.elements['widthTd'].value;
    let heightTD = event.target.elements['heigthTd'].value;
    let widthBorder = event.target.elements['widthBorder'].value;
    let styleBorder = event.target.elements['styleBorder'].value;
    let colorBorder = event.target.elements['colorBorder'].value;

    let table = $('<table></table>');

    for (let i = 0; i < countTR; i++) {
        let tr = $('<tr>');
        table.append(tr);
        for (let j = 0; j < countTD; j++) {
            let td = $('<td>').css({
                'width': `${widthTD}`,
                'heigth': `${heightTD}`,
                'border': `${widthBorder}px ${styleBorder} ${colorBorder} `
            }).append('TD');
            tr.append(td);
        }
    }
    $("#edit-content").val($("#edit-content").val() + table.prop('outerHTML'));
})
//Form for creating OL list
$('#OlWithLiForm').on('submit', function (event) {
    event.preventDefault()
    event.stopPropagation()

    let count = event.target.elements['count'].value;
    let style = event.target.elements['style'].value;

    let messageAboutInputValue = $('.messageAboutInputValue');

    if (count == '' || style == '') {
        messageAboutInputValue.css('color', 'red');
        messageAboutInputValue.html('Invalid value')
    } else {
        let ol = $('<ol>').css('list-style-type', `${style}`);
        for (let i = 1; i <= count; i++) {
            let li = $('<li>').append('item' + i);
            ol.append(li);
        }
        messageAboutInputValue.html('');
        $("#edit-content").val($("#edit-content").val() + ol.prop('outerHTML'));
    }
})
//Form for creating UL list

$('#UlWithLiForm').on('submit', function (event) {
    event.preventDefault()
    event.stopPropagation()

    let count = event.target.elements['count'].value;
    let style = event.target.elements['style'].value;
    let messageAboutInputValue = $('.messageAboutInputValueUl');

    if (count == '' || style == '') {
        messageAboutInputValue.css('color', 'red');
        messageAboutInputValue.html('Invalid value')
    } else {
        let ul = $('<ul>').css('list-style-type', `${style}`);
        for (let i = 1; i <= count; i++) {
            let li = $('<li>').append('item' + i);
            ul.append(li);
        }
        messageAboutInputValue.html('');
        $("#edit-content").val($("#edit-content").val() + ul.prop('outerHTML'));
    }
})
//Form for registration
$('#signInForm').on('submit', function (event) {
    event.preventDefault()
    event.stopPropagation()

    if (!event.target.checkValidity()) {

        let password = event.target.elements['password'].value;
        let email = event.target.elements['email'].value;
        let validationMessage = $('#sign-form-validation-message')
        validationMessage.css('color', 'red');
        validationMessage.html('Please check your login or password');

        if (password == '' && email == '') {
            validationMessage.css('color', 'red');
            validationMessage.html('Value is empty');
        }
    } else {
        $('#open-tables').attr('disabled', false);
        $("#btn-close-lock").css('display', 'none');
        $("#btn-open-lock").css('display', 'block');
        $('#signInModal').modal('hide');
    }

    event.target.classList.add('was-validated')
})

//text style
$('#italic-text-button').on('click', function () {
    isItalic = !isItalic;
    $('.text').css('font-style', isItalic ? 'italic' : '')
})


$('#bold-text-button').on('click', function () {
    isBold = !isBold;
    $('.text').css('font-weight', isBold ? 'bold' : '')
})

$('#underline-text-button').on('click', function () {
    isUnderline = !isUnderline;
    $('.text').css('text-decoration', isUnderline ? 'underline' : '')
})


$('#strike-through-text-button').on('click', function () {
    isStrikeThroughText = !isStrikeThroughText;
    $('.text').css('text-decoration', isStrikeThroughText ? 'line-through' : '')
})


//text alignment
$('#text-align-left').on('click', function () {
    $('#wrapper').css('align-items', 'flex-start');
})

$('#text-align-center').on('click', function () {
    $('#wrapper').css('align-items', 'center');
})

$('#text-align-right').on('click', function () {
    $('#wrapper').css('align-items', 'flex-end')
})

//font and size
$('.dropdown-item-font').on('click', function () {
    $('.text').css('font-family', $(this).css('font-family'))
})

$('.dropdown-item-size').on('click', function () {
    $('.text').css('font-size', $(this).css('font-size'))
})

$('.color-cell').on('click', function () {
    $('.text').css('color', $(this).css('background-color'))
})

$('.background-color-cell').on('click', function () {
    $('.text').css('background-color', $(this).css('background-color'))
})

$('.bg-img').on('click', function () {
    $('#wrapper').css('background-image', $(this).css('background-image'));
})
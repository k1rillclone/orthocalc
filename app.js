// Функция для получения числового значения из ячейки
function getValue(id) {
    const input = document.getElementById(id);
    if (input && input.value) {
        return parseFloat(input.value);
    }
    return NaN;
}

// Функция для установки значения в ячейку
function setValue(id, value) {
    const cell = document.getElementById(id);
    if (cell) {
        // Округляем до двух знаков после запятой и заменяем точку на запятую
        cell.textContent = value.toFixed(2).replace('.', ',');
    }
}

// Основная функция для вычислений
function calculate() {
    // Получаем значения из ячеек B2, B3, C2, C3
    const b2 = getValue('b2');
    const b3 = getValue('b3');
    const c2 = getValue('c2');
    const c3 = getValue('c3');

    console.log("Полученные значения:", { b2, b3, c2, c3 }); // Отладочная информация

    // Проверяем, что все значения введены корректно
    if (isNaN(b2) || isNaN(b3) || isNaN(c2) || isNaN(c3)) {
        alert("Пожалуйста, введите корректные числа в ячейки B2, B3, C2, C3.");
        return;
    }

    // Выполняем вычисления с большей точностью
    const b4 = b2 / b3;
    const c4 = c3 / c2;
    const b6 = (1.33 / b4) * b2;
    const c6 = (c4 / 0.77) * c2;
    const b7 = (b4 / 1.33) * b3;
    const c7 = (0.77 / c4) * c3;
    const b8 = b6 - b2;
    const c8 = c6 - c2;
    const b9 = b7 - b3;
    const c9 = c7 - c3;

    // Обновляем значения в таблице с округлением до двух знаков после запятой
    setValue('b4', b4); // B4
    setValue('c4', c4); // C4
    setValue('b6', b6); // B6
    setValue('c6', c6); // C6
    setValue('b7', b7); // B7
    setValue('c7', c7); // C7
    setValue('b8', b8); // B8
    setValue('c8', c8); // C8
    setValue('b9', b9); // B9
    setValue('c9', c9); // C9
}

// Назначаем функцию calculate на кнопку "Рассчитать"
document.getElementById('calculateButton').addEventListener('click', calculate);
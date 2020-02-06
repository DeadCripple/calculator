let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

// Тело программы, куда записывается основная информация
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

/* Цикл с вопросами о статьях расхода и 
последующей записью в основной объект программы */
for (let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце', '');
  let b = prompt('Во сколько обойдется?', '');
  
  if (typeof(a) === 'string' && typeof(a) != null && 
  typeof(b) != null && a != '' && b != '' && a.length < 50) {
    // Запись результатов вопросов в объект expenses объекта appData
    appData.expenses[a] = b;
    console.log('done');
  } else {
    // Повторяем итерацию, если будет ошибка в проверке
    i--;
    console.log('error');
  }
}

// Вычисление бюджета на день и добавление результата в объект appData
appData.moneyPerDay = appData.budget / 30;
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

// Определение уровня достатка
if (appData.moneyPerDay < 100) {
    console.log('У Вас минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('У Вас средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('У Вас высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
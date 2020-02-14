let money;
let time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == "" || money == null) {
    alert('Вы ввели некорректное значение бюджета. Пожалуйста, повторите ввод.', '');
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

// Тело программы, куда записывается основная информация
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

/* Функция с вопросами о статьях расхода и 
последующей записью в основной объект программы */
function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = prompt('Во сколько обойдется?', '');

    if (typeof (a) === 'string' && typeof (a) != null &&
      typeof (b) != null && a != '' && b != '' && a.length < 50) {
      // Запись результатов вопросов в объект expenses объекта appData
      appData.expenses[a] = b;
      console.log('done');
    } else {
      // Повторяем итерацию, если будет ошибка в проверке
      i--;
      console.log('error');
    }
  }
}
chooseExpenses();

// Вычисление бюджета на день и добавление результата в объект appData
function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();

  alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget()

// Определение уровня достатка
function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('У Вас минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('У Вас средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('У Вас высокий уровень достатка');
  } else {
    console.log('Произошла ошибка');
  }
}
detectLevel();


// Вычисление дохода по депозиту
function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?', '');
    let percent = +prompt('Под какой процент?', '');

    appData.monthIncome = (save / 100 / 12 * percent).toFixed();
    alert('Доход из вашего дипозита: ' + appData.monthIncome);
  }
}
checkSavings();

// Определение необязательных расходов и запись в объект appData
function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    let questionOptExpenses = prompt('Статья необязательных расходов?');
    appData.optionalExpenses[i] = questionOptExpenses;
    console.log(appData.optionalExpenses);
  }
}
chooseOptExpenses();
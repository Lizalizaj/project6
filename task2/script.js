const consoleLog = document.querySelector('#consoleLog');
const alert1 = document.querySelector('#alert');
const prompt1 = document.querySelector('#prompt');

consoleLog.addEventListener('click',() => {
    alert('Метод для вывода сообщения в веб консоль')
})


alert1.addEventListener('click',() => {
    alert('Метод для вывода диалогового окна с сообщением и кнопкой OK')
})

prompt1.addEventListener('click',() => {
    alert('Метод для вывода диалогового окна с запросом на ввод текста')
})
var btnAdd    = document.getElementById('add-task'); // Нашли кнопку добавить
 			list      = document.getElementsByClassName('task'),
 			inp       = document.querySelector('.go'),
 			ul        = document.getElementById('marker'),
 			btnClear  = document.getElementById('clear'),
 			li 						 = document.getElementsByTagName('li'), // Создали li
 			doit      = document.getElementById('doit'),
 			check     = document.querySelectorAll('.task-check'),
 			linkCount = document.getElementsByClassName('check-link'),
 			done 					= document.getElementById('done');





var arr = [
		'Помыть кота',
		'Чтение книги 30минут',
		'Отжаться 5раз',
		'Посмотреть видео Грега Плита',
		'Научиться верстать простенький сайт',
		'Научиться рисовать',
		'30 новых английских слов',
		'Облиться холодной водой',
		'Подкинуть монету',
		'Потянуться'
];

				function randomInteger(min, max) {
	    	var rand = min - 0.5 + Math.random() * (max - min + 1)
	    	rand = Math.round(rand);
	    	return rand;
	  	}

btnAdd.addEventListener('click', () => {

	if(inp.value != '') {
		var li = document.createElement('li'); // Создали li 
		li.classList.add('task'); // Присвоили класс
		li.textContent = inp.value
		ul.insertBefore(li, ul.firstChild); // выбрали куда добавить элемент
		inp.value = null; // Обнулили запись

		doit.textContent = 'Всего задач: ' + list.length;

		var linkCheck = document.createElement('a'); // создали ссыслку
		linkCheck.classList.toggle('link-task'); // Присвоили класс
		linkCheck.textContent = 'check'; // Добавили текста
		li.insertBefore(linkCheck, li.firstChild); //Вставили

		var linkDel = document.createElement('a'); // создали ссыслку
		linkDel.classList.add('link-task'); // Присвоили класс
		linkDel.textContent = 'del'; // Добавили текста
		li.insertBefore(linkDel, li.lastChild); //Вставили


		linkDel.addEventListener('click', function() {
				li.parentNode.removeChild(li);
				doit.textContent = 'Всего задач: ' + list.length;
		});

		linkCheck.addEventListener('click', function() {
				li.classList.toggle('task-check');
				linkCheck.classList.toggle('check-link'); // Присвоили класс
				done.textContent = 'Выполненно задач: ' + linkCount.length;
		});
	} else{
					var li = document.createElement('li'); // Создали li 
					var c = randomInteger(0, arr.length - 1);
					li.textContent = arr[c];
					li.classList.add('task');
					ul.insertBefore(li, ul.firstChild); // выбрали куда добавить элемент
					inp.value = null; // Обнулили запись

					doit.textContent = 'Всего задач: ' + list.length;

					var linkCheck = document.createElement('a'); // создали ссыслку
					linkCheck.classList.add('link-task'); // Присвоили класс
					linkCheck.textContent = 'check'; // Добавили текста
					li.insertBefore(linkCheck, li.firstChild); //Вставили

					var linkDel = document.createElement('a'); // создали ссыслку
					linkDel.classList.add('link-task'); // Присвоили класс
					linkDel.textContent = 'del'; // Добавили текста
					li.insertBefore(linkDel, li.lastChild); //Вставили

					linkDel.addEventListener('click', function() {
							li.parentNode.removeChild(li);
							doit.textContent = 'Всего задач: ' + list.length;
					});

					linkCheck.addEventListener('click', function() {
							li.classList.toggle('task-check');
							linkCheck.classList.toggle('check-link'); // Присвоили класс
							done.textContent = 'Выполненно задач: ' + linkCount.length;
					});
			}

});


clear.addEventListener('click', () => {
	 while(li[0]) {
	 	li[0].parentNode.removeChild(li[0]);
	 	doit.textContent = 'Всего задач: ' + list.length;
	 	done.textContent = 'Выполненно задач: ' + linkCount.length;
	 }
});











const hourEl = document.querySelector('.needle-hour');
const minEl = document.querySelector('.needle-minute');
const secEl = document.querySelector('.needle-second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleThemeBtn = document.querySelector('.toggle-theme');

const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];
const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

toggleThemeBtn.addEventListener('click', (e) => {
	const html = document.querySelector('html');
	html.classList.toggle('dark');
});

function setTime() {
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDate();
	const weekDay = time.getDay();
	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	hourEl.style.transform = `translate(-50%, -100%) rotate(${
		(360 / 12) * hours
	}deg)`;
	minEl.style.transform = `translate(-50%, -100%) rotate(${
		(360 / 60) * minutes
	}deg)`;
	secEl.style.transform = `translate(-50%, -100%) rotate(${
		(360 / 60) * seconds
	}deg)`;

	timeEl.innerText = `${hours < 10 ? '0' + hours : hours}:${
		minutes < 10 ? '0' + minutes : minutes
	}:${seconds < 10 ? '0' + seconds : seconds}`;
	dateEl.innerText = `${days[weekDay]}, ${months[month]}`;
	dateEl.innerHTML += `<span class="circle">${day}</span>`;
}
setTime();
setInterval(setTime, 1000);

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

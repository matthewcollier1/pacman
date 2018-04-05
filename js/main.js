let dummyText = document.querySelectorAll('h2');

dummyText.forEach((h2) => {
	h2.addEventListener('mouseover', (e) => {
		e.target.classList.add('active');
	});
	h2.addEventListener('mouseleave', (e) => {
		e.target.classList.remove('active');
	});
});

/* second attempt */

let id;
let music = document.getElementById('myAudio');
let center = document.querySelectorAll('div.text__block--center');

function dragStart(ev) {
	id = ev.target.id;
}

function allowDrop(ev) {
	ev.preventDefault();
}

function drop(ev) {
	ev.target.append(document.getElementById(id));
	music.play();
}
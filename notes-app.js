const notes = getSavedNotes();

const filters = {
	searchText: '',
	sortBy: ''
};

renderNotes(notes, filters);

//buttons
//search button
document.querySelector('#search-note').addEventListener('input', (e) => {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});
//create btn
document.querySelector('#create-note').addEventListener('click', () => {
	const id = uuidv4();
	const timeStamp = moment().valueOf();
	notes.push({
		id: id,
		title: '',
		body: '',
		createdAt: timeStamp,
		updatedAt: timeStamp
	});
	saveNotes(notes);
	location.assign(`/edit.html#${id}`);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
	filters.sortBy = e.target.value;
	renderNotes(notes, filters);
});

window.addEventListener('storage', (e) => {
	if (e.key === 'notes') {
		notes = JSON.parse(e.newValue);
		renderNotes(notes, filters);
	}
});

//time with moment
const now = moment();
console.log(now.toString());

// //dates
// const now = new Date();

// const timeStamp = now.getTime();

// //submit event
// document.querySelector('#name-form').addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	alert(e.target.elements.firstName.value);
// 	e.target.elements.firstName.value = '';
// });

// //remove all btn
// document.querySelector('#remove-all').addEventListener('click', function() {
// 	document.querySelectorAll('.note').forEach(function(note) {
// 		note.remove();
// 	});
// });

// // //query and remove
// // const p = document.querySelector('p');
// // p.remove();

// //query all and remove
// const ps = document.querySelectorAll('p');
// ps.forEach(function(p) {
// 	p.textContent = '******';
// 	//console.log(p.textContent);
// 	//p.remove();
// });

// //add a new element
// const newPar = document.createElement('p');
// newPar.textContent = 'this is a new Par from JS';
// document.querySelector('body').appendChild(newPar);

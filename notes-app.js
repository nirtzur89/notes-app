const notes = getSavedNotes();

const filters = {
	searchText: ''
};

renderNotes(notes, filters);

//buttons
//search button
document.querySelector('#search-note').addEventListener('input', function(e) {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});
//create btn
document.querySelector('#create-note').addEventListener('click', function() {
	const id = uuidv4();
	notes.push({
		id: id,
		title: '',
		body: ''
	});
	saveNotes(notes);
	location.assign(`/edit.html#${id}`);
});

document.querySelector('#filter-by').addEventListener('change', function(e) {
	console.log(e.target.value);
});

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

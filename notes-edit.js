const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function(note) {
	return note.id == noteId;
});

if (note === undefined) {
	location.assign(`/index.html`);
}

document.querySelector('#note-title').value = note.title;
document.querySelector('#note-body').value = note.body;

//edit note
document.querySelector('#edit-note').addEventListener('submit', function(e) {
	e.preventDefault();
	(note.title = e.target.elements.editTitle.value), (note.body = e.target.elements.editBody.value);
	saveNotes(notes);
	location.assign('/index.html');
	//renderNotes(notes, filters);
});

//remove note
document.querySelector('#remove-note').addEventListener('click', function() {
	removeNote(location.hash.substring(1));
	location.assign('/index.html');
});

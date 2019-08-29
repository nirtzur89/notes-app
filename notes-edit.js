const titleEl = document.querySelector('#note-title');
const bodyEl = document.querySelector('#note-body');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function(note) {
	return note.id == noteId;
});

if (note === undefined) {
	location.assign(`/index.html`);
}

titleEl.value = note.title;
bodyEl.value = note.body;

document.querySelector('#updated').textContent = `note was updated ${generateUpdated(note.updatedAt)}`;

//edit note
document.querySelector('#edit-note').addEventListener('submit', function(e) {
	e.preventDefault();
	(note.title = e.target.elements.editTitle.value),
		(note.body = e.target.elements.editBody.value),
		(note.updatedAt = moment().valueOf());
	saveNotes(notes);
	location.assign('/index.html');
	//renderNotes(notes, filters);
});

//remove note
document.querySelector('#remove-note').addEventListener('click', function() {
	removeNote(noteId);
	location.assign('/index.html');
});

//syncing accross pages
window.addEventListener('storage', function(e) {
	if (e.key === 'notes') {
		notes = JSON.parse(e.newValue);
		note = notes.find(function(note) {
			return note.id === noteId;
		});

		if (note === undefined) {
			location.assign('/index.html');
		}

		titleEl = note.title;
		bodyEl = note.body;
	}
});

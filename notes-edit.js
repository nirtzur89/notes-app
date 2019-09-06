const titleEl = document.querySelector('#note-title');
const bodyEl = document.querySelector('#note-body');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id == noteId);

if (!note) {
	location.assign(`/index.html`);
}

titleEl.value = note.title;
bodyEl.value = note.body;

document.querySelector('#updated').textContent = `note was updated ${generateUpdated(note.updatedAt)}`;

//edit note
document.querySelector('#edit-note').addEventListener('submit', (e) => {
	e.preventDefault();
	(note.title = e.target.elements.editTitle.value),
		(note.body = e.target.elements.editBody.value),
		(note.updatedAt = moment().valueOf());
	saveNotes(notes);
	location.assign('/index.html');
	//renderNotes(notes, filters);
});

//remove note
document.querySelector('#remove-note').addEventListener('click', () => {
	removeNote(noteId);
	location.assign('/index.html');
});

//syncing accross pages
window.addEventListener('storage', (e) => {
	if (e.key === 'notes') {
		notes = JSON.parse(e.newValue);
		note = notes.find((note) => note.id === noteId);

		if (!note) {
			location.assign('/index.html');
		}

		titleEl = note.title;
		bodyEl = note.body;
	}
});

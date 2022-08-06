const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Note added successfully',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Note could not be added',
  });
  response.code(400);
  return response;
};

const getAllNotesHandler = () => ({
  status: 'success',
  message: 'Notes retrieved successfully',
  data: {
    notes,
  },
});

const getNoteByIdHandler = (request, h) => {
  // Dapatkan nilai id dari request.params
  const { id } = request.params;

  // Dapatkan objek note dengan id dari objek array notes
  const note = notes.filter((n) => n.id === id)[0];

  // cek apakah objek note undefined atau tidak
  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Note not found',
  });
  response.code(404);
  return response;
};

const editNoteByIdHandler = (request, h) => {
  // Mengambil nilai id dari request.params
  const { id } = request.params;

  // Mengambil nilai title, tags, dan body dari request.payload
  const { title, tags, body } = request.payload;

  // Mengambil properti agar bisa diperbarui juga
  const updatedAt = new Date().toISOString();

  // Mendapatkan index array pada catatan sesuai id
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    // Mengupdate nilai title, tags, dan body pada catatan sesuai index
    notes[index].title = title;
    notes[index].tags = tags;
    notes[index].body = body;
    notes[index].updatedAt = updatedAt;
    return {
      status: 'success',
      message: 'Note updated successfully',
      data: {
        noteId: id,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'Note not found',
  });
  response.code(404);
  return response;
};

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
};

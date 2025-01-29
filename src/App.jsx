import React, { useState } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "boxicons/css/boxicons.min.css"; // Import Boxicons CSS

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Open Modal
  const handleShow = () => setShowModal(true);

  // Close Modal
  const handleClose = () => {
    setShowModal(false);
    setNewTitle(""); // Clear title
    setNewDescription(""); // Clear description
  };

  // Add Note
  const handleAddNote = () => {
    if (newTitle.trim() && newDescription.trim()) {
      const newNote = { title: newTitle, description: newDescription };
      setNotes([...notes, newNote]);
      handleClose();
    }
  };

  // Delete Note
  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <Container className="app-container py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="glow-text text-center">🔥 Note App 🔥</h1>

          {/* Add Note Button */}
          <div className="d-flex justify-content-between align-items-center my-4">
            <h4 className="glow-text">Your Notes</h4>
            <Button className="glow-button" onClick={handleShow}>
              <i className="bx bx-plus-circle me-2"></i>
              Add Note
            </Button>
          </div>

          {/* Notes List */}
          {notes.length > 0 ? (
            <ul className="list-group">
              {notes.map((note, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center note-item"
                  key={index}
                >
                  <div>
                    <strong>{note.title}</strong>
                    <p className="mb-0">{note.description}</p>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    className="delete-button"
                    onClick={() => handleDeleteNote(index)}
                  >
                    <i className="bx bx-trash"></i>
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="glow-text text-center">No notes available. Add your first note!</p>
          )}
        </Col>
      </Row>

      {/* Modal for Adding Note */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title className="glow-text">Add a Note</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="glow-text">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter note title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="glow-input"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="glow-text">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter note description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="glow-input"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer-custom">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="glow-button" onClick={handleAddNote}>
            <i className="bx bx-plus-circle me-2"></i>
            Add Note
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Custom CSS */}
      <style>{`
        /* Global Styling */
        body {
          background-color: black;
          overflow-y: auto;
        }

        ::selection {
          background-color: #ff0000;
          color: black;
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
         
        }

        .glow-text {
          color: #ff0000;
          text-shadow: 0 0 5px #ff0000, 0 0 20px #ff0000;
        }

        .glow-button {
          background-color: #ff0000;
          border: none;
          color: white;
          box-shadow: 0 0 10px #ff0000, 0 0 40px #ff0000;
          transition: 0.3s;
        }

        .glow-button:hover {
          box-shadow: 0 0 20px #b30000, 0 0 60px #b30000;
        }

        .note-item {
          background-color: #1a0000;
          color: #ffffff;
          border: none;
          margin-bottom: 10px;
          border-radius: 5px;
          box-shadow: 0 0 10px #ff0000;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .note-item:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px #ff0000;
        }

        .delete-button {
          background-color: #ff4d4d;
          border: none;
          transition: 0.3s;
        }

        .delete-button:hover {
          background-color: #cc0000;
          box-shadow: 0 0 10px #ff0000;
        }

        /* Modal Custom Styles */
        .modal-header-custom, .modal-footer-custom {
          background-color: black;
          border: none;
        }

        .modal-body-custom {
          background-color: black;
        }

        .modal-content {
          background-color: black;
          box-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000;
        }

        .glow-input {
          background-color: black;
          border: 1px solid #ff0000;
          color: white;
          box-shadow: 0 0 5px #ff0000;
          transition: box-shadow 0.3s ease, border 0.3s ease;
        }

        .glow-input:focus {
          border-color: #ff0000;
          color: red;
          box-shadow: 0 0 15px #ff0000;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .app-container {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .glow-text {
            font-size: 1.2rem;
          }

          .glow-button {
            font-size: 0.9rem;
            padding: 8px 12px;
          }

          .note-item {
            font-size: 0.9rem;
            padding: 10px;
          }

          .delete-button {
            padding: 5px;
          }
        }
      `}</style>
    </Container>
  );
};

export default App;

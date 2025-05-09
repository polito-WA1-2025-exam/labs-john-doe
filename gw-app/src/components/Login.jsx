import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Container, Button } from 'react-bootstrap';

function Login({ addAnswer, editAnswer, editing, emptyAnswer }) {
  // Determine mode from whether we're editing or adding
  const mode = editing ? 'edit' : 'add';

  // Form state
  const [username, setUsername] = useState(editing?.username || '');
  const [password, setPassword] = useState(editing?.password || '');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    // Simple validation
    if (!username.trim() || !password) {
      alert('Both fields are required');
      return;
    }

    if (mode === 'add') {
      const newAns = {
        id: undefined,
        username,
        password,
        date: new Date().toISOString().slice(0, 10),
        score: 0
      };
      addAnswer(newAns);
    } else {
      const updated = { ...editing, username, password };
      editAnswer(updated);
    }

    // Go back
    navigate(-1);
  };

  return (
    <Container fluid>
      <h1>Guess Who</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            maxLength={10}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            ({username.length} characters)
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          {mode === 'add' ? 'Sign Up' : 'Save Changes'}
        </Button>
      </Form>
    </Container>
  );
}

export default Login;

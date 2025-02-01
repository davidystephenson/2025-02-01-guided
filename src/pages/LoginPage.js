import { useState } from "react"
import { Container, Form, Button } from 'react-bootstrap'
import AlertMessage from "../components/AlertMessage"

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleUsernameChange (event) {
    setUsername(event.target.value)
  }

  function handlePasswordChange (event) {
    setPassword(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()

    const missing = username === '' || password === ''
    if (missing) {
      setMessage('Username or password missing')
      return
    }
  }

  const alert = message !== '' && <AlertMessage message={message} />

  return (
    <Container>
      {alert}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  )
}
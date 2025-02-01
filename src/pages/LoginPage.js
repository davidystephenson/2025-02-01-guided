import { useState } from "react"
import { Container, Form, Button } from 'react-bootstrap'
import AlertMessage from "../components/AlertMessage"
import { users } from "../users"

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
    const user = users.find(user => user.username === username)
    if (!user) {
      setMessage('Username not found')
      return
    }
    if (user.password !== password) {
      setMessage('Incorrect password')
      return
    }
    const userString = JSON.stringify(user)
    localStorage.setItem('user', userString)
    window.location.reload()
  }

  const hasMessage = message !== '' // true or false
  const alert = hasMessage && <AlertMessage message={message} />

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
import { Alert } from 'react-bootstrap'

export default function AlertMessage (props) {
  return (
    <Alert>{props.message}</Alert>
  )
}
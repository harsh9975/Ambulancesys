import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContexts'
import { Link } from 'react-router-dom'

function ForgotPass() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [ message , setMessage] = useState("")
    const [Loading, setLoading] = useState(false)
   




    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email for further instruction')
        } catch {
            setError("Failed to Reset");
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required ></Form.Control>
                        </Form.Group>
                        <Button disabled={Loading} type="submit" className="w-100">
                            Reset Password
                        </Button>
                    </Form>

                    <div className="w-100 text-center mt-2">
                       <Link to="/login"> Log In</Link>
                    </div>
                  

                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup"> Sign Up</Link>
                    </div>
                </Card.Body>
            </Card>


        </>
    )
}

export default ForgotPass

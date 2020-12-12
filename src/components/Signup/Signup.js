import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContexts'


export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [Loading, setLoading] = useState(false)
    const history = useHistory()
    
    


    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password Do not Match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account");
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Signup</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required ></Form.Control>
                        </Form.Group>
                       
                        <Button disabled={Loading} type="submit"  className="w-100">
                            Sign Up
                        </Button>
                    </Form>

                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Log In </Link>
                    </div>
                </Card.Body>
            </Card>


        </>
    )
}

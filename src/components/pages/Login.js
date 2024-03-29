import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import GoogleButton from 'react-google-button';
import { signInWithGoogle } from '../utils/firebase';
import { useNavigate, useLocation } from "react-router";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      if(location.state?.from){
        navigate(location.state.from)
      } else{
        navigate("/")
      }

    } catch {
      setError("The email and password do not match");
    }
    setLoading(false);
  }

  async function handleGoogleAuth(){
    try {
      await signInWithGoogle()

      if(location.state?.from){
        navigate(location.state.from)
      } else{
        navigate("/")
      }

    } catch{
      setError("Google account does not exist");
    }
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-3" type="submit">
                  Log In
                </Button>
                <GoogleButton
                  className="w-100 mt-3"
                  onClick={handleGoogleAuth}
                />
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;

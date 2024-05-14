import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrorMsg("");
  }, [user, pwd]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <section>
          <p>You are Logged In !</p>
          <a href="#">Go to Home</a>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errorMsg ? "errmsg" : "offscreen"}
            area-live="assertive"
          >
            {errorMsg}
          </p>
          <div className="d-flex flex-column justify-content-center align-items-center me-4 bg-light vh-100">
            <h1 className="formLabel">Sign In</h1>
            <div className="w-50 rounded bg-dark border shadow p-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label className="formLabel">Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label className="formLabel">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <button className="formButton" type="submit">
                    Sign In
                  </button>
                </Form.Group>

                <p className="formLabel">Need an Account?</p>
                <Link className="formLabel">Singn Up</Link>
              </Form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;

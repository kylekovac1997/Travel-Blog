import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

interface LoginCredentials {
  username: string;
  password: string;
}

function Login() {
  const user = "admin";
  const pass = "pass";
  const [authenticated, setAuthenticated] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);
const [isLoggedIn, setIsloggedIn] = useState(false);


  //   const loginMutation = useMutation(()=>{
  //     if()
  //   })

  const closeModel = () => {
    setShowModel(false);
    setAuthenticated({ username: "", password: "" });
  };
  const openModel = () => setShowModel(true);

  const HandleSubmit = (event: React.FormEvent) => {
    if (authenticated.password === pass && authenticated.username === user) {
      event.preventDefault();
      setLoading(true);
      setIsloggedIn(true);
      
      setTimeout(() => {
        setLoading(false);
        closeModel();
        navigate("/AdminHomePage");
      }, 2000);
    } else {
      alert("Invalid Credentials");
      setIsloggedIn(false);

    }
  };

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthenticated({ ...authenticated, [name]: value });
  };

  const HandleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      HandleSubmit(event);
    }
  };

  const Logout = () => {
    alert("logged out")
    setIsloggedIn(false);
    navigate("/")
    }
    
  return (
    <React.Fragment>
     {!isLoggedIn ? (  <Button
        style={{ backgroundColor: "#d8cbbe", border: "none", fontSize: "15px" }}
        onClick={openModel}
      >
        Login
      </Button>
) : (<Button
  onClick={Logout}
>
  LogOut
</Button>)}
      

      <Modal show={showModel}>
        <Modal.Header style={{ display: "flex", justifyContent: "center" }}>
          <Modal.Title>
            <strong style={{ fontSize: "36px" }}>LOGIN</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <form
            style={{
              margin: "35px",
            }}
          >
            <label htmlFor="username">UserName:</label>
            <br />
            <input
              type="text"
              name="username"
              onChange={HandleChange}
              value={authenticated.username}
              disabled={loading}
              style={{ borderBottom: " 1px solid grey", width: "400px" }}
              placeholder=" 👤 Type your username"
            />
            <br />
            <br />
            <label htmlFor="password">Passowrd:</label> <br />
            <input
              type="password"
              name="password"
              onChange={HandleChange}
              value={authenticated.password}
              disabled={loading}
              style={{ borderBottom: " 1px solid grey", width: "400px" }}
              placeholder="🔒Type your password"
              onKeyDown={HandleKeyDown}
            />
          </form>
          <button
            onClick={HandleSubmit}
            style={{
              width: "400px",
              borderRadius: "25px",
              fontSize: "20px",
              background: "linear-gradient(to right, #8cdceb, #cb45ec)",
              color: "white",
            }}
          >
            {loading ? <strong>Logging in...</strong> : <strong>LOGIN</strong>}
          </button>
        </Modal.Body>{" "}
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModel}>
            X
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Login;

"use client";

import React from "react";
import "./AuthPopup.css";
import logo from "../../app/assets/logo1.png";
import Image from "next/image";
import Input from "@mui/joy/Input";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";

interface AuthPopupProps {
  setShowpopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthPopup: React.FC<AuthPopupProps> = ({setShowpopup}) => {
  const [showSignup, setShowSignup] = React.useState<boolean>(false)

  const handleLogin = () => {
    console.log("Login clicked");
  };

  const handleSignup = () => {
    console.log("Signup clicked");
  };

  return (
    <div className="popup">
       <button className = 'close'
            onClick={() => {
                  setShowpopup(false);
                }}
              >
                <AiOutlineClose/>
          </button>
      {showSignup ? (
        //SIGNUP
        <div className="authform">
           
          <div className="left">
            <Image src={logo} alt="logo" />
          </div>

          <div className="right">
            <h1>Signup to become healthy</h1>

            <form>
              <Input
                color="warning"
                placeholder="Email"
                size="lg"
                variant="outlined"
              />

              <Input
                color="warning"
                placeholder="Password"
                size="lg"
                variant="outlined"
                type="password"
              />

              <div className = 'form_input_leftright'>
                <Input color="warning" size="lg" variant="outlined" type="number" placeholder="Age"/>
                <Input color="warning" size="lg" variant="outlined" type="number" placeholder="Weight"/>
              </div>

              <Select
                color="warning"
                placeholder="Gender"
                size="lg"
                variant="outlined"
              >
               <Option value="male">Male</Option>
               <Option value="female">Female</Option>
               <Option value="other">Other</Option>
              </Select>

              <label htmlFor="">Height</label>
              <div className='form_input_leftright'>
                {/*5ft 11inch*/}
                <Input color="warning" size="lg" variant="outlined" type="number" placeholder="ft"/>
                <Input color="warning" size="lg" variant="outlined" type="number" placeholder="in"/>
              </div>

              <button
                type="button"
                onClick={() => {
                  handleSignup();
                }}
              >
                Signup
              </button>
            </form>

            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setShowSignup(false)}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      ) : (
        //LOGIN
        <div className="authform">
          <div className="left">
            <Image src={logo} alt="logo" />
          </div>

          <div className="right">
            <h1>Login to become healthy</h1>

            <form>
              <Input
                color="warning"
                placeholder="Email"
                size="lg"
                variant="outlined"
              />

              <Input
                color="warning"
                placeholder="Password"
                size="lg"
                variant="outlined"
                type="password"
              />

              <button
                type="button"
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
              </button>
            </form>

            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setShowSignup(true)}
              >
                Signup
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPopup;


import React, { useState } from "react";
import * as Style from "./style";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { logUser } from "../Redux/actions/user";

function LoginForm() {
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(logUser({ emailValue, passwordValue }));
  };

  return (
    <Style.LoginFormContainer>
      <Style.FormCard>
        <Style.FormCardHeader
          title="User Login"
          subheader="Developed on: May 30, 2021"
        />
        <Style.FormCardContent>
          <Style.EmailFieldWrapper>
            <Style.EmailTextField
              id="outlined-multiline-flexible"
              label="Email"
              multiline
              error={emailError ? true : false}
              rowsMax={8}
              value={emailValue}
              onChange={handleEmailChange}
              variant="outlined"
              helperText={emailError}
            />
          </Style.EmailFieldWrapper>
          <Style.PasswordFieldWrapper>
            <Style.PasswordTextField
              id="outlined-multiline-flexible"
              label="Password"
              multiline
              error={PasswordError ? true : false}
              rowsMax={8}
              value={passwordValue}
              onChange={handlePasswordChange}
              variant="outlined"
              helperText={PasswordError}
            />
          </Style.PasswordFieldWrapper>
          <Style.SubmitButtonWrapper>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Style.SubmitButtonWrapper>
        </Style.FormCardContent>
      </Style.FormCard>
    </Style.LoginFormContainer>
  );
}

export default LoginForm;

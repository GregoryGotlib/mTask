import React, { useState } from "react";
import * as Style from "./style";
import { makeStyles } from "@material-ui/core/styles";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { regUser } from "./../Redux/actions/user";
import Button from "@material-ui/core/Button";

function RegistrationForm() {
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

  const validateEmailValue = () => {
    if (!validator.isEmail(emailValue)) {
      setEmailError("Email is not valid");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePasswordValue = () => {
    if (validator.isEmpty(passwordValue)) {
      setPasswordError("Please enter Password");
      return false;
    }
    if (!validator.isLength(passwordValue, { min: 6, max: 50 })) {
      setPasswordError(
        "Password has to be atleast 6 characters and maximum 50 characters!"
      );
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = () => {
    const isEmailValid = validateEmailValue();
    const isPasswordValid = validatePasswordValue();
    if (isEmailValid && isPasswordValid) {
      dispatch(regUser({ emailValue, passwordValue }));
    }
  };

  return (
    <Style.LoginFormContainer>
      <Style.FormCard>
        <Style.FormCardHeader
          title="User Registration"
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

export default RegistrationForm;

import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import AppBar from "@material-ui/core/AppBar";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 90px 0 20px;
`;
export const AppBarRoot = styled(AppBar)`
  img {
    margin-right: 20px;
    border-radius: 5px;
  }
  #logout {
  }
`;

export const AppHeaderNav = styled.div``;

export const EmailFieldWrapper = styled.div`
  margin: 10px 0;
`;
export const PasswordFieldWrapper = styled.div`
  margin: 10px 0;
`;

export const EmailTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: white;
  }
`;

export const PasswordTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: white;
  }
`;

export const LoginFormContainer = styled.div`
  margin-block-start: 100px;
  display: flex;
  justify-content: center;
`;

export const FormCard = styled(Card)`
  width: 260px;
  display: block;
`;

export const FormCardContent = styled(CardContent)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SubmitButtonWrapper = styled.div`
  margin: 10px 0;
  align-self: center;
`;

export const EmailWrapper = styled.div`
  font-weight: 600;
`;

export const TextWrapper = styled.div``;

export const TypographyContainer = styled(Typography)`
  padding: 4px;
`;

export const FormCardHeader = styled(CardHeader)``;

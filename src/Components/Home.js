import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Style from "./style";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  useEffect(() => {
    setUserData(auth.user);
  }, [auth.user]);

  return (
    <Style.LoginFormContainer>
      <Style.FormCard>
        <Style.FormCardHeader
          title="User Dashboard"
          subheader={`Welcome ${userData?.email}`}
        />
        <Style.FormCardContent></Style.FormCardContent>
      </Style.FormCard>
    </Style.LoginFormContainer>
  );
}

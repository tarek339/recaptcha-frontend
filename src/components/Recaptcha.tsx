import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Flex from "./Flex";

const Recaptcha = () => {
  const [token, setToken] = useState<string | null>(null);

  // this function is executed when the user successfully completes the captcha
  // the argument expects a token wich is stored in the token state
  const handleChange = (token: string | null) => {
    setToken(token);
  };

  // in the useEffect the user is redirected to the website if token is stored
  useEffect(() => {
    if (token) {
      setTimeout(() => {
        window.location.href = import.meta.env.VITE_APP_PROXY_URL;
      }, 1000);
    }
  }, [token]);

  // the ReCAPTCHA is provided by google
  // it has to be set up in the recpatcha google console
  // then it can be implemented in the react app
  // for more info visit: https://www.google.com/recaptcha
  return (
    <Flex direction={"row"} gap={0} justify="center">
      <ReCAPTCHA
        onChange={handleChange}
        // The site key is used to invoke the reCAPTCHA service in your application.
        sitekey={import.meta.env.VITE_APP_SITE_KEY}
        // The secret key authorizes communication between backend and the reCAPTCHA server
        // to verify the user's response.
        stoken={import.meta.env.VITE_APP_SECRET_KEY}
        type="image"
      />
    </Flex>
  );
};

export default Recaptcha;

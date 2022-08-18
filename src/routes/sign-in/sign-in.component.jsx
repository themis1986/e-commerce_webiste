// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(userDocRef);
  //     }
  //   },
  //   []
  // );

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div className="">
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignupForm />
    </div>
  );
};

export default SignIn;

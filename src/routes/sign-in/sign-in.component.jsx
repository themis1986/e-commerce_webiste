import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div className="">
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import "./authntication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignupForm />
    </div>
  );
};

export default Authentication;

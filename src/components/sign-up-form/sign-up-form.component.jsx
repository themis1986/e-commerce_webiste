import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);


  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="">
      <h1>Sign up with your email and password</h1>
      <form>
        <label htmlFor="">Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignupForm;

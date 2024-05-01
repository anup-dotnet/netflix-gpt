import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInNow] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/63472959?s=400&u=c14b02dbbcb20388716a7ffc675a065c274c0a11&v=4",
          })
            .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({ uid : uid, email : email, displayName : displayName, photoURL : photoURL }));
              navigate("/browse");
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setErrorMessage(null);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            ref={fullName}
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          ref={email}
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="password"
          ref={password}
          placeholder="Password"
        />
        <button
          onClick={handleSubmit}
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-600 text-lg">{errorMessage}</p>
        <p
          className="py-4 cursor-pointer"
          onClick={() => setIsSignInNow(!isSignInForm)}
        >
          {isSignInForm
            ? "New to netflix ? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

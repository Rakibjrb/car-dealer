import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import auth from "./auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateNameAndPhoto = (
    name = "user xXx",
    photo = "https://i.ibb.co/5x441PC/user.png"
  ) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const info = {
    user,
    createUser,
    updateNameAndPhoto,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    return () => unSubscribe();
  }, []);

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;

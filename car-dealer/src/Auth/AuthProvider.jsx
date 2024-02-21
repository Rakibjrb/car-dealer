import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./auth";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const alert = (icon, message) => {
    Swal.fire({
      position: "top-end",
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

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

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            alert("success", "Logout Success ...");
            setUser(null);
          })
          .catch(() => alert("warning", "Something went wrong !!!"));
      }
    });
  };

  const info = {
    user,
    createUser,
    updateNameAndPhoto,
    logOut,
    login,
    alert,
    loading,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setLoading(false);
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

// authService.js
import { auth, db } from './firebaseConfig.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const register = async (email, password, cp, dni, telefono, username) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Almacenar información del usuario en Firestore
    await setDoc(doc(db, "usuarios", user.uid), {
      email: user.email,
      createdAt: new Date(), // Fecha de creación
      cp: cp,
      dni: dni,
      telefono: telefono,
      username: username
    });

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log('Correo de restablecimiento de contraseña enviado.');
  } catch (error) {
    throw new Error('Error al enviar el correo de restablecimiento de contraseña: ' + error.message);
  }
};

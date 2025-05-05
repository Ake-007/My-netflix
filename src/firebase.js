import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDc6lU20A0jlsnL4hvaL4Ikc3-vIlVvj-4",
  authDomain: "netflix-clone-5897c.firebaseapp.com",
  projectId: "netflix-clone-5897c",
  storageBucket: "netflix-clone-5897c.appspot.com", 
  messagingSenderId: "402714963518",
  appId: "1:402714963518:web:380721fe246f055b822b6f",
  measurementId: "G-LQ5MHHNQ4H"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      password, 
    });
    toast.success("Ro'yxatdan o'tildi!");
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split('-').join(" "));
  }
};


const login = async (email, password) => { 
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    toast.success("Muvaffaqiyatli kirdingiz!");
    return user;
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split('-').join(" "));
  }
};


const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Chiqdingiz.");
  } catch (error) {
    console.error(error);
    toast.error("Chiqishda xatolik.");
  }
};

export { db, auth, signup, login, logout };

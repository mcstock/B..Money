import { arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { ref } from "firebase/storage";
import { auth,db, storage } from "./index";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";


async function fetchCurrentId() {
  const UserId = await getDoc(doc(db, "util_variables", "CurrentId"));
  const data = UserId.data()
  
  if (data) return data.CurrentId;
  
}

async function getData(user: any) {
  const d = await getDoc(doc(db, "user_details", user.uid));
  return d.data();
}
async function logOut(uid){
      signOut(auth)
      .then(() => {
          console.log("Sign Out Successful");
      }).catch((err) => {
          console.log(err.message);
      })
}
async function isAdmin(user: any){
  const d = await getDoc(doc(db, 'admin_details', user.uid))
  console.log(d.data().admin);
  
    return d.data().admin;
}

  
export {fetchCurrentId, getData, logOut,isAdmin}




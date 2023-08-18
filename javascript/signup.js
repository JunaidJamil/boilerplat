import {auth, db} from "./firebase.mjs"
import{createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import{doc, setDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"



let btn = document.getElementById('sign')
btn.addEventListener('click',()=>{
  let username = document.getElementById('username').value
  let email = document.getElementById('Email').value
  let password = document.getElementById('password').value
  
  createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential)  => {
    await setDoc(doc(db, "hack", userCredential.user.uid), {
      username:username,
      email:email,
      password:password,

    });
  window.location.href = "/pages/login.html"

  
  })

  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log('errorCode', errorCode)
  console.log('errorMessage', errorMessage)
  })
  
  })


 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getDatabase,ref,set} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
 
 const firebaseConfig = {
   apiKey: "AIzaSyBXbdjcsQRDldXt9BzbiwFAYQMmnFQIZKI",
   authDomain: "fir-data-75506.firebaseapp.com",
   projectId: "fir-data-75506",
   storageBucket: "fir-data-75506.firebasestorage.app",
   messagingSenderId: "545177193155",
   appId: "1:545177193155:web:7904e755030d14e17ef076",
   measurementId: "G-B9V1W0QKSJ"
 };


 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);
 document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault()
    set(ref(db,'student data/'+document.getElementById("category").value),{
       
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        

    })
    alert('Data saved sucessfuly');
 })
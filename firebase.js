
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
        import { getFirestore, collection, doc, setDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js'
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyD4nQj8QcqYFFo6TvaEp2ZgFijR1jhm7JA",
            authDomain: "poundr-survey.firebaseapp.com",
            projectId: "poundr-survey",
            storageBucket: "poundr-survey.appspot.com",
            messagingSenderId: "297143916219",
            appId: "1:297143916219:web:4bda8bef1d54dba3ac7b9e",
            measurementId: "G-P8EJX1M6KX"
          };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const db = getFirestore(app);
        const responses = collection(db, 'mamiSaba');
              
        // Check if a session ID already exists
        let sessionId = localStorage.getItem('sessionId');
        if(sessionId === null) {
            // Generate a random session ID
            let randomId = Math.random().toString(36).substring(2, 7);
            localStorage.setItem('sessionId', randomId);
            sessionId = localStorage.getItem('sessionId');
        }
        console.log("session id: " + sessionId);

        export function storeWord(word, guessed, day) {
          setDoc(doc(responses), {
              word: word,
              guessed, guessed,
              day: day,
              sessionId, sessionId
          });
        }
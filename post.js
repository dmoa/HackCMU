import {getdatabase, ref} from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAHRbCmE_ynGBxlW0x5J9u9H3XBOrFhedA",
    authDomain: "beyou-21d2f.firebaseapp.com",
    databaseURL: "https://beyou-21d2f-default-rtdb.firebaseio.com",
    projectId: "beyou-21d2f",
    storageBucket: "beyou-21d2f.appspot.com",
    messagingSenderId: "718679255077",
    appId: "1:718679255077:web:a5d19b54e474a1d968b7cc",
    measurementId: "G-FVD7M6CJ1Z"
  };
 
firebaseConfig.initializeApp(firebaseConfig);

var postDatabase = firebaseConfig.databaseURL().ref('addbeyou');

document.getElementbyID('addbeyou').addEventListener('submit', submit)

function submit(e)
{
    e.preventDefault();

    var date = new Date();
    var type = getElementbyID("typeText");
    var text = getElementById("message");
    var value = getElementbyID("valueControl");
    var location = "Tepper";
    var time  = date.getHours() + ":"+date.getMinutes();

    saveMessages(location, type, value, text, time);
}

const saveMessages = (location, type, value, text, time) => 
{
    var newPost = postDatabase.push();

    newPost.set({
        location: location,
        type:type,
        text:text,
        value:value,
        time: time,
    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
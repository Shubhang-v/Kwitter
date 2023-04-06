//YOUR FIREBASE LINKS

const firebaseConfig = {
      apiKey: "AIzaSyAYEh3nblPTKm9GfmSMc89bYjd9wVdZeC0",
      authDomain: "kwitter-b142c.firebaseapp.com",
      databaseURL: "https://kwitter-b142c-default-rtdb.firebaseio.com",
      projectId: "kwitter-b142c",
      storageBucket: "kwitter-b142c.appspot.com",
      messagingSenderId: "820050603136",
      appId: "1:820050603136:web:89abd294efa69f1d708a65"
    };
    
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("User Name");
      room_name = localStorage.getItem("Room Name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name =      message_data['name'];
      message =   message_data['message'];
      like =      message_data['like'];
      name_with_tag ="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
      span_with_tag ="<span class=glyphicon glyphicon-thumbs-up>Likes : "+like+"</span></button><hr><br>";
      row = name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML += row;

      //End code
      } });  }); }
getData();

function updatelike(message_id)
{
      console.log("Click on like button = "+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes)+1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:update_likes
      });
}

function logout()
{
      localStorage.removeItem("User Name");
      window.location = "index.html";
}

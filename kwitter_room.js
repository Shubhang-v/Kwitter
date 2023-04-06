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
      document.getElementById("user").innerHTML = "Welcome "+user_name+"!";

function AddRoom()
{
      room_name = document.getElementById("add_room").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("Room Name",room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name : "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
      });}
getData();

function redirectToRoomName(name)
{     
      console.log(name);
      localStorage.getItem("Room Name",name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("User Name");
      localStorage.removeItem("Room Name");
      window.location = "index.html";
}
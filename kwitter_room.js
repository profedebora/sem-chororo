const firebaseConfig = {
  apiKey: "AIzaSyBBVIPtdodnD-2WbiEF1xcM7jMHT8mzN7g",
  authDomain: "vamos-conversar-app-prof.firebaseapp.com",
  projectId: "vamos-conversar-app-prof",
  storageBucket: "vamos-conversar-app-prof.appspot.com",
  messagingSenderId: "572654271698",
  appId: "1:572654271698:web:8f7dea0c727f94cdda410b"
};

const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwiterPage(1).html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitterPage(1).html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index(22).html";
}
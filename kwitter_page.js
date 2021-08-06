//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_item");

function send() {
    msg = document.getElementById("msg").Value;
    firebase.database().ref(room_name).push({
        name: Luser_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").Value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();
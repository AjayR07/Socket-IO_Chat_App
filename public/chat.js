// Make Connection
var socket = io.connect("http://localhost:3000")

// Query DOM
var message = document.getElementById('message'),
    user = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output');

//Emit Events

btn.addEventListener("click",()=>{

    //THis socket will emit a chat event which server is listening for
    socket.emit("chat",
        {
            message : message.value,
            user : user.value
        }
    )
})

// Listen for Events

socket.on("chat",(data)=>{
    output.innerHTML += '<p><strong>' + data.user + ': </strong>' + data.message + '</p>';
})
// Make Connection
var socket = io.connect("http://localhost:3000")

// Query DOM
var message = document.getElementById('message'),
    user = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

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

message.addEventListener("keypress",()=>{
    socket.emit("typing", user.value)
})

// Listen for Events

socket.on("chat",(data)=>{
    feedback.innerHTML = ""
    output.innerHTML += '<p><strong>' + data.user + ': </strong>' + data.message + '</p>';
})

socket.on("typing",(user)=>{
    feedback.innerHTML = '<p><em>' + user + " is typing a message..." + '</em></p>'
})
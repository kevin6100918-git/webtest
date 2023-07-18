let loginbtn = document.getElementById('login');
let labelname = document.getElementById('uid');
let uid;

loginbtn.addEventListener('click', ()=>{
    let username = prompt('請輸入名稱');
    uid = username;
    console.log(uid);
    labelname.textContent = uid;
    loginbtn.setAttribute('disabled', false);
})




let btn = document.getElementById('submitbtn');
let textbox = document.getElementById('entertext')
let message;
function submit(){
    message = textbox.value;
    console.log(message);
    let chatlog = document.getElementsByClassName('chatlog')[0];
    let chat = document.createElement('div');
    chat.className = 'chatOdd';
    chatlog.appendChild(chat);
    let name = document.createElement('p');
    name.className = 'selfUser';
    name.textContent = uid;
    let arrow = document.createElement('div');
    arrow.className = 'arrowRight';
    let box = document.createElement('div');
    box.className = 'boxRight';
    box.textContent = message;
    chat.appendChild(arrow);
    chat.appendChild(box);
    chat.appendChild(name);
    console.log(box);
}

btn.addEventListener('click', submit);


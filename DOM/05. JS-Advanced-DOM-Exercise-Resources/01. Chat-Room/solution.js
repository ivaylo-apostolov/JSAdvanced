function solve() {
   const textArea = document.getElementById("chat_input");
   const sendMessageBtn = document.getElementById("send");

   sendMessageBtn.addEventListener('click', sendMess);

   function sendMess(){
      let message = textArea.value;
      let newMessage = document.createElement('div');
      newMessage.classList.add('message', 'my-message');
      newMessage.textContent = message;
      document.getElementById('chat_messages').appendChild(newMessage);

      textArea.value = '';
   }
}



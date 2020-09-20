window.addEventListener('load', function() {
  // checkUsername
  // showUsernameStatus

  let checkUsername = () => {}
  let showUsernameStatus = () => {}

  let usernameInputNode = document.querySelector('#username');
  let registerInputNode = document.querySelector('#register');

  let request = new XMLHttpRequest();

  usernameInputNode.addEventListener('blur', function() {
    request.open('GET', `checkName.php?username=${usernameInputNode.value}`);
    request.addEventListener('readystatechange', function() {
      usernameInputNode.disabled = true;
      usernameInputNode.classList.remove('inuse');
      usernameInputNode.classList.remove('okay'); 
      usernameInputNode.classList.toggle('inprocess', true);
      registerInputNode.disabled = true;

      if (request.readyState === 4 && request.status === 200) {
        if (request.response === 'okay') {
          usernameInputNode.classList.replace('inprocess', 'okay');
          registerInputNode.disabled = false;
        } else if (request.response === 'denied') {
          usernameInputNode.classList.replace('inprocess', 'inuse');
        }
        usernameInputNode.disabled = false;
      }
    })
    request.send();
  })

})
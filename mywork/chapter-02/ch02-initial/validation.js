window.addEventListener('load', function() {

  let usernameInputNode = document.querySelector('#username');
  let registerInputNode = document.querySelector('#register');

  let request = new XMLHttpRequest();

  usernameInputNode.addEventListener('blur', function() {
    request.open('GET', `checkName.php?username=${usernameInputNode.value}`);
    request.addEventListener('readystatechange', function() {
      usernameInputNode.disabled = true;
      usernameInputNode.classList.add('inprocess');
      usernameInputNode.classList.remove('inuse');
      usernameInputNode.classList.remove('okay'); 
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
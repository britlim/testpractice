document.addEventListener('DOMContentLoaded', async () => {

  const board = document.getElementById('board');
  const TestTest = document.createElement('h1');
  TestTest.innerText = 'Test Test'

  board.appendChild(TestTest);

  loginButton = document.getElementById('login');

  loginButton.addEventListener('click', () => {
    const body = {
      username: document.getElementById('uname').value,
      password: document.getElementById('psw').value
    }
    fetch('/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    // .then(res => res.json())
    .then(user => {
      const userBox = document.createElement('div');
      userBox.setAttribute('id', 'userbox');
      userBox.setAttribute('value', user.username)
      userBox.innerText = user.username;
      board.appendChild(userBox);
      document.getElementById('psw').value = '';
      document.getElementById('uname').value = '';
    })
  })




  deleteButton = document.getElementById('delete');

  deleteButton.addEventListener('click', () => {
    const body = {
      username: document.getElementById('userbox').innerText,
    }
    fetch('/user/delete', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    // .then(res => res.json())
    .then(user => {
      const userBox = document.getElementById('userbox');
      board.removeChild(userBox);
      alert(`user ${user.username} has been deleted`)
      
    })
  })

  createButton = document.getElementById('create');

  createButton.addEventListener('click', () => {
    const body = {
      username: document.getElementById('uname').value,
      password: document.getElementById('psw').value
    }
    fetch('/user/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    // .then(res => res.json())
    .then(user => {
      const userBox = document.createElement('div');
      userBox.setAttribute('id', 'userbox');
      userBox.setAttribute('value', user.username)
      userBox.innerText = user.username;
      board.appendChild(userBox);
      document.getElementById('psw').value = '';
      document.getElementById('uname').value = '';
    })
  })


  updateButton = document.getElementById('update');

  updateButton.addEventListener('click', () => {
    const body = {
      username: document.getElementById('uname').value,
      password: document.getElementById('psw').value

    }
    fetch('/user/update', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    // .then(res => res.json())
    .then(user => {
      const userBox = document.createElement('div');
      userBox.setAttribute('id', 'userbox');
      userBox.setAttribute('value', user.username)
      userBox.innerText = user.username;
      board.appendChild(userBox);
      document.getElementById('psw').value = '';
      document.getElementById('uname').value = '';
    })
  })
})
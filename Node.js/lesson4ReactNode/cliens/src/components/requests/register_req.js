export const register_req = user => {
    fetch('http://localhost:2000/auth/register', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }
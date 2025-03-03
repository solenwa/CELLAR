import { redirect } from 'react-router-dom';

export async function signinAction({ request }) {
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch('http://localhost:4000/api/users/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Error(
      { message: 'Could not authenticate user.' },
      { status: 500 }
    );
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
}

export async function signupAction({ request }) {
  const data = await request.formData();
  const authData = {
    name: data.get('name'),
    lastName: data.get('lastName'),
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch('http://localhost:4000/api/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Error(
      { message: 'Could not authenticate user.' },
      { status: 500 }
    );
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
}

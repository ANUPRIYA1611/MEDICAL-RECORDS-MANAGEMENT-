export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
});

export const setEmails = (email) => ({
  type: 'SET_EMAIL',
  payload: email,
});

export const setPassword = (password) => ({
    type: 'SET_PASSWORD',
    payload: password,
  });

  export const setLogged = (logged) => ({
    type: 'SET_LOG',
    payload: logged,
  });
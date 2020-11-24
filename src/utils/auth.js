import history from '../history';

export const signIn = (token) => {
	localStorage.setItem('token', token);
};
export const signOut = () => {
	localStorage.removeItem('token');
	history.push('/');
};

import history from '../history';

export const signIn = (user, token) => {
	localStorage.setItem('token', token);
	history.push('/buyer_profile');
};
export const signOut = () => {
	localStorage.removeItem('token');
	history.push('/');
};

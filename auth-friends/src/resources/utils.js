export const logout = windowHistory => {
    localStorage.removeItem('token');
    windowHistory.location.push('/');
}
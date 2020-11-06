const token = localStorage.getItem('token');
export const OPTIONS = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
    }
}

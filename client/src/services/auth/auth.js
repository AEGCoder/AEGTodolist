import Axios from '../axios';

export const LoginUser = (email,password) => {
    const url = '/auth/login';
    const data = {
        email : email,
        password : password
    }
    return Axios.post(url, data)
} 


export const RegisterUser = (username,email,password) => {
    const url = '/auth/register';
    const data = {
        username : username,
        email : email,
        password : password
    }
    return Axios.post(url, data)
}

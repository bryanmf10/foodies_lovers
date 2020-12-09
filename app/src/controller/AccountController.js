const api_url = 'https://heroku-foodies-lovers-app.herokuapp.com';

export default class TuperController{

    static loginUser = (userEmail, password) => {
        return new Promise((resolve, reject) => {
            fetch(api_url+"/login", {email: userEmail, password: password})
            .then(token => data.json())
            .then(token => resolve(token.token))
            .catch(error => reject(error))
        })
    }
    static registerUser = (emailUser, password, tel) => {
        return new Promise((resolve, reject) => {
            fetch(api_url+"/register", {email: emailUser, password: password, phone: tel})
            .then(data => data.json())
            .then(token => resolve(token.token))
            .catch(error => reject(error))
        })
    }

    static changePassword = () => {
        // In progress
        return null;
    }

}
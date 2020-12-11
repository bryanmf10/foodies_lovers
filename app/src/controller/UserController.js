const api_url = 'https://heroku-foodies-lovers-app.herokuapp.com/users';

export default class UserController{
    static logout = (token) => {
        let obj = {
            method: "DELETE",
            headers: new Headers(
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token,
                    'Host': 'Host'
                })
            };
        return new Promise((resolve, reject) => {
            fetch(api_url+"/logout", obj)
            .then(resp => resp.json())
            .then(resp => resolve(resp))
            .catch(error => reject(error))
        })
    }
}
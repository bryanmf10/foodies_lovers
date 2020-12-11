const api_url = 'https://heroku-foodies-lovers-app.herokuapp.com';

export default class TuperController {

    /*static getCookie = () => {
        return cookies.get('token');
    }*/

    static getAll = (token) => {
        let obj = {
            method: "GET",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': token,
                'Host': 'Host'
            }),
        };
        return new Promise(
            (resolve, reject) => {
                fetch(api_url + "/tupers", obj)
                    .then(data => data.json())
                    .then(datos => {
                        resolve(datos);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
    }

    static getOne = (idTuper, token) => {
        let obj = {
            method: "GET",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': token,
                'Host': 'Host'
            }),
        };
        return new Promise(
            (resolve, reject) => {
                fetch(api_url + "/tupers/" + idTuper, obj)
                    .then(data => data.json())
                    .then(datos => {
                        resolve(datos);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
    }
    static insertOne = (tuper, token) => {
        let obj = {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': token,
                'Host': 'Host'

            }),
            body: JSON.stringify(tuper)
        };
        return new Promise(
            (resolve, reject) => {
                fetch(api_url + "/tupers", obj)
                    .then(data => data.json())
                    .then(datos => {
                        resolve(datos);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
    }
}

const api_url = 'https://heroku-foodies-lovers-app.herokuapp.com';

export default class TuperController{
    static getCookie = () => {
        return cookies.get('token');
    }

    static getAll = () => {
        let obj = {
            method: "GET",
            headers: new Headers(
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': this.getCookie,
                    'Host': 'Host'
                }),
            };
        return new Promise(
            (resolve, reject) => {
               fetch(api_url+"/tupers", obj)
                   .then(data => data.json())
                   .then(datos => {
                        resolve(datos);
                   })
                   .catch(err => {
                       reject(err);
                   });
           });
    }

    static getOne = (idTuper) => {
        let obj = {
            method: "GET",
            headers: new Headers(
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': this.getCookie,
                    'Host': 'Host'
                }),
            };
        return new Promise(
            (resolve, reject) => {
               fetch(api_url+"/tupers/"+idTuper, obj)
                   .then(data => data.json())
                   .then(datos => {
                        resolve(datos);
                   })
                   .catch(err => {
                       reject(err);
                   });
           });
    }
    static insertOne = (tuper) =>{
        let obj= {
            method:"POST",
            headers: new Headers({ 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': this.getCookie,
            'Host': 'Host'

            }),
            body: JSON.stringify(tuper)
        };
        return new Promise(
            (resolve, reject) => {
               fetch(api_url+"/tupers", obj)
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
const api_url = 'https://heroku-foodies-lovers-app.herokuapp.com';

export default class TuperController{

    static getAll = () => {
        let obj = {
            method: "GET",
            headers: new Headers(
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVkQXQiOjE2MDc0NTUxNjMzNjYsImlkIjozNCwiaWF0IjoxNjA3NDUxNTYzfQ.2hwmYh8JhS-Kd1c_3WB_JXAE25S0Nx1oL12DnoLTupA",
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
                    'authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVkQXQiOjE2MDc0NTUxNjMzNjYsImlkIjozNCwiaWF0IjoxNjA3NDUxNTYzfQ.2hwmYh8JhS-Kd1c_3WB_JXAE25S0Nx1oL12DnoLTupA",
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

}
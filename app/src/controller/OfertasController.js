const api_url = 'https://heroku-foodies-lovers-app.herokuapp.com';

export default class OfertasController {

    static insertOne = (oferta,token) => {
        let obj = {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': token
            }),
            body: JSON.stringify(oferta)
        };
        return new Promise(
            (resolve, reject) => {
                fetch(api_url + "/ofertas", obj)
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
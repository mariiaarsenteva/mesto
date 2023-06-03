export default class Api{
  constructor(options ){
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }
_checkResponse(res) { return res.ok ? res.json() : Promise.reject}

  getInfo(){
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
    .then (this._checkResponse)
  }

  getCards(){
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
    .then(this._checkResponse)
  }

}

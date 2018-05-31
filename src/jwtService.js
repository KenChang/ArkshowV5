import decode from 'jwt-decode';
import comm_channel from "superagent"

export default class jwtService {
    constructor() {
        this.domain = 'http://api.airu.com.hk:8010/auth/api/A001'
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }

    login(username, password) {
        // Get a token
        if ((username == null) || (password == null)) {
          return;
        }
        return comm_channel
        .post(this.domain)
        .type('form')
        .send({ LId: username, Pwd: password, DeviceId: '1231231', Coordinates:'',manual:''})
        .then(res => {
           console.log(JSON.stringify(res.body.token));
           this.setToken(res.body.token)
           return Promise.resolve(res);
        })
        console.log('I was triggered during componentDidMount')        
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    getProfile() {
        return decode(this.getToken());
    }

}
import axios from 'axios';

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyByIQPbmDCrgp-aPKuj-Zi9QRGDLJd3W-s'
    }
});

export default authApi;
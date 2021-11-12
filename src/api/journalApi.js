import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://vue-demo-25404-default-rtdb.firebaseio.com'
});

export default journalApi;

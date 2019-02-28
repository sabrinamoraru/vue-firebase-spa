import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
});

// instance.defaults.headers.common['SOMETHING'] = 'something'

//AIzaSyDAZH_hv_8Oz6Q-A4Gpo_9UZ55oCLZ75Wc

export default instance;

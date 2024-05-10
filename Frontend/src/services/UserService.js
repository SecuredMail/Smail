import axios from "axios";

const API_URL = 'http://localhost:8081/users/register'; // Change to match our Spring Boot application's URL

class UserService{
    createuser(user){
        return axios.post(API_URL,user);
    }
}

export default new UserService();
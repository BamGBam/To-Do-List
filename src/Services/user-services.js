import apiClient from "./api-client";


interface User{
    id: Number;
    name: String;
}

class UserServices{
    getAllUsers(){
        const controller = new AbortController();
        apiClient
        .get<User[]>("/users", {
            signal: controller.signal,
        })

    }
}

export default new UserServices();
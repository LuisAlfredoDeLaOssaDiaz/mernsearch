import { ENV } from "../utils";

export class User {
    baseApi = ENV.BASE_API;

    async getMe(accessToken) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.USER_ME}`
            const params = {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
            const response = await fetch(url, params);
            const result_ = await response.json();
            const {msg: result} = result_;
            
            delete result.password;
            
            if (response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }

    async createUser( accessToken, data ) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key)=> {
                formData.append(key, data[key])
            })

            if(data.fileAvatar) {
                 formData.append("avatar", data.fileAvatar);
            }

            const url = `${this.baseApi}/${ENV.API_ROUTES.USER}`
        } catch (error) {
            throw error;
        }
    }
}
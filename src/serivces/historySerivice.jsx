import { axiosClient } from "./axiosClient"

export const historySerivice = {
    getDetail: async() => {
        return await axiosClient.get('/docs')
    }
}
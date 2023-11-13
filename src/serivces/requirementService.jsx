import { axiosClient } from "./axiosClient"

export const requirementService = {
    upload: async(listImage) => {
        const formData = new FormData()
        for (let i = 0; i < listImage.length; i++) {
            formData.append(`images`, listImage[i].originFileObj);   
        }
        return await axiosClient.post('/ocr', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
    }
}
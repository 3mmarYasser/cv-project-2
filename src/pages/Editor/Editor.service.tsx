import {axiosClient} from "../../api/config.api";

const getTemplate = async (id:string):Promise<any>=>{
    try {
        return (await (axiosClient.get(`templates/${id}`))).data
    }catch (err:any){
        return Promise.reject(err.response.data);
    }
}
export {
    getTemplate
}
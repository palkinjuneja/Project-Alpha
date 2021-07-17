import http from "../http-common"

class DataService{

    getProfile(){
        return http.get("/details")  // from Linkedin api
    }

    getData(){
        return http.get("/userData") // from mongoDB
    }
}

export default new DataService()
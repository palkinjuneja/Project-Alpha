import http from "../http-common"

class DataService{

    getProfile(){
        return http.get("/details")  // from Linkedin api
    }

    getData(){
        return http.get("/data") // from mongoDB
    }

    setProfile(){
        return http.post("/data")  // to mongoDB
    }
}

export default new DataService()
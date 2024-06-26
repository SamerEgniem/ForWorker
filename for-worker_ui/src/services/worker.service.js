import http from "../http-common";

class WorkerDataService {
    getAll() {
        return http.get("/workers");
    }

    get(id) {
        return http.get(`/workers/${id}`);
    }

    create(data) {
        return http.post("/workers", data);
    }

    update(id, data) {
        return http.put(`/workers/${id}`, data);
    }

    delete(id) {
        return http.delete(`/workers/${id}`);
    }

    deleteAll() {
        return http.delete(`/workers`);
    }

    findByFirstName(firstName) {
        return http.get(`/workers?firstName=${firstName}`);
    }
}

export default new WorkerDataService();
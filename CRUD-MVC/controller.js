const usersrepo = require('./repo.js')

class usersController {
    async getAll(request, response) {
        const usersRepo = new UsersRepo();
        let res = await todoRepo.getAllTasks();
        response.json({
            todo: res.rows
        });
    }

    async createTask(request, response) {
        const usersRepo = new UsersRepo();
        let res = await usersRepo.createTaskRepo(request.body.id,
            request.body.username, request.body.status);

        response.json({
            "status": "Task created"
            })
    }
}

module.exports = usersController;
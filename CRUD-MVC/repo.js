const pool = require('./dbConn')

class usersrepo {

    async getAllTasks() {
        return await pool.query('select * from public.CRUD');
    }

    async createTaskRepo(id, username, status) {
        return await pool.query(`INSERT INTO public.CRUD
        (id, username, status)
        VALUES($1, $2, $3)`,
        [req.body.id,req.body.username,req.body.status]);
    }
}

module.exports = usersrepo;
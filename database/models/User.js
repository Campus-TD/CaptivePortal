const {
    pool
} = require('./../connection');
const util = require('util');

const query = util.promisify(pool.query).bind(pool);

const result = (res) => {
    if(res.length > 0){
        return {
            status: 1,
            data: res
        }
    }else{
        return {
            status: 0,
            data: []
        }
    }
    return res;
}

const userQueries = {
    insert: async (data) => {
        try {
            const res = await query('INSERT INTO USERS_T (UUID_U, NAME_U, LASTNAME_F, LASTNAME_M, PASSWORD_U) VALUES (?,?,?,?,?)', [
                data.txtUser,
                data.txtName,
                data.txtLastName_F,
                data.txtLastName_M,
                data.txtPassword
            ]);
            if(res.affectedRows > 0){
                return {
                    status: 1,
                }
            }else{
                return {
                    status: 0,
                }
            }
        } catch (error) {
            console.log(error)
            return {
                status: 0,
            }
        }
    }
}

module.exports = userQueries;
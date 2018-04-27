class Sql {
    constructor() {
    }

    static Init () {
        
    }

    static Insert (tab, rowname, rowval)  {
        return `INSERT INTO ${tab}(${rowname}) VALUES(${rowval})`;
    }

    static Select (tab, rowname, rowval) {
        return `SELECT * FROM ${tab} WHERE ${rowname} = '${rowval}'`;
    }

    static ValidateUser (tab, querystring) {
        return `SELECT * FROM ${tab} WHERE ${querystring}`;
    }
    static Update () {

    }

    static Delete () {

    }
}

module.exports = Sql;
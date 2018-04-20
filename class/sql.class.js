class Sql {
    constructor() {
    }

    Init () {

    }

    Insert (tab, rowname, rowval)  {
        return `INSERT INTO ${tab}(${rowname}) VALUES(${rowval})`;
    }

    Update () {

    }

    Delete () {

    }
}

module.exports = Sql;
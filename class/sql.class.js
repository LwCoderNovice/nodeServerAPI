class Sql {
    constructor() {
    }

    static Init () {

    }

    static Insert (tab, rowname, rowval)  {
        return `INSERT INTO ${tab}(${rowname}) VALUES(${rowval})`;
    }

    static Update () {

    }

    static Delete () {

    }
}

module.exports = Sql;
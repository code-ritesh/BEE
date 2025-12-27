class Principal{

    principalInstance = new Map();

    _constructor(School){
        this.School = School
    }

    static getPrincipal(School){
        if(principalInstance.get(School) == null  ){
            let principal = new Principal(School)
            principalInstance.set(School , principal)
        }

        return principalInstance.get(School);   
    }

    resticateStudent(name){}
    suspend(name){}

    removeSuspension(name){}

    notify(message){
    }


}

module.exports = Principal;
// modules

        //first way
        export default class User{
            constructor(name,age){
                this.name=name;
                this.age=age;
            }
           print(){
            return `print name is ${this.name} and age is ${this.age} in the methode`
           }

        }
        
        export function printName(user) {
                return `My name is ` + user.name ;
            }
        export function printAge (user){
                return `And my age is `+user.age;
            }
        
                    //second way
        // export default User;
        // export {printName,printAge}

//======================================================

                //JSON


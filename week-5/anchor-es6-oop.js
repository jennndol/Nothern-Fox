class Student{
    constructor(name, age, dateOfBirth, gender, studentID, hobbies){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.studentID = studentID;
        this.hobbies = [];
        this.hobbies.push(hobbies);
    }
    setName(newName){
        this.name = newName;
    }

    setAge(newAge){
        this.age = newAge;
    }

    setDateOfBirth(newDateOfBirth){
        this.dateOfBirth = newDateOfBirth;
    }

    setGender(newGender){
        if(newGender === 'Male' || newGender === 'Female'){
            this.gender = newGender;
        }
    }

    addHobby(newHobby){
        this.hobbies.push(newHobby);
    }

    removeHobby(hobbytoDelete){
        var position = this.hobbies.indexOf(hobbytoDelete);
        if(position > -1){
            this.hobbies.splice(position,1);
        }
    }

    getData(){
        return this;
    }
}

var alex = new Student('Alex', 4,'13-03-2013', 'Male', '101010', 'Soccer' );

alex.setName('Alessa');
alex.setAge(5);
alex.setDateOfBirth(12-02-2012);
alex.setGender('Female');
alex.addHobby('Cooking');
alex.removeHobby('Soccer');
console.log(alex.getData());
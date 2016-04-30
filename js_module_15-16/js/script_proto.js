

$(document).ready(function () {

    function Human(name, age, sex, height, weight) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.height = height;
        this.weight = weight;
    }


    function Worker(company, salary) {
        this.workingPlace = company;
        this.salary = salary;
        this.Work = function () {
            console.log('work');
        }
    }

    function Student (studyPlace, grand) {
        this.studyPlace = studyPlace;
        this.grand = grand;
        this.Watching = function(){
            console.log('watch tv');
        };
    }


    Worker.prototype = new Human();
    Student.prototype = new Human();


    var person = new Human('Olga', 25, 'female', 150, 55);
    var worker = new Worker('Company' , 100);
    var student = new Student('Step', 0);

    console.log(person);
    console.log(worker);
    console.log(student);

});
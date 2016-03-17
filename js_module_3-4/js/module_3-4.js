

var data = {
    'title': 'Programming test',
    'questionsList': ['Question 1', 'Question 2', 'Question 3'],
    'answersList': ['Answer option 1', 'Answer option 2', 'Answer option 3']
};



var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    document.body.appendChild(wrapper);

    var titleH1 = document.createElement('h3');
    titleH1.innerHTML = data.title;
    wrapper.appendChild(titleH1);



var formBox = document.createElement('form');
        wrapper.appendChild(formBox);

    for (var i = 0; i < data.questionsList.length; i++) {
        var questionnaire = document.createElement('ul');
        questionnaire.innerHTML = data.questionsList[i];
        formBox.appendChild(questionnaire);


        for (var j = 0; j < data.answersList.length; j++) {
            var list = document.createElement('li');
            questionnaire.appendChild(list);

            var labelFor = document.createElement('label');
            labelFor.htmlFor = "checkboxid_" + i+  "_" +j;
            labelFor.innerHTML = data.answersList[j];

            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = "checkboxid_" + i+  "_" +j;
            list.appendChild(checkbox );
            list.appendChild(labelFor );
        }
    }

    var buttonSubmit = document.createElement('input');
        buttonSubmit.type = 'submit';
        buttonSubmit.value = 'check the results';
        buttonSubmit.className = 'btn btn-primary';
        formBox.appendChild(buttonSubmit);




console.log(data);
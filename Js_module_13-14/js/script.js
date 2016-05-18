

$(function() {
    //'use strict;'
    var form = $('#test').html();
    var data = {
        pageTitle: 'Programming test',
        test: [{
            questionsList: 'Question 1',
            answersList: [{answer: 'Answer 1', right: false},
                {answer: 'Answer 2', right: true},
                {answer: 'Answer 3', right: false}],
            idName: ['11', '12', '13']
        },
            {
                questionsList: 'Question 2',
                answersList: [{answer: 'Answer 1', right: false},
                    {answer: 'Answer 2', right: true},
                    {answer: 'Answer 3', right: false}],
                idName: ['21', '22', '23']
            },
            {
                questionsList: 'Question 3',
                answersList: [{answer: 'Answer 1', right: false},
                    {answer: 'Answer 2', right: true},
                    {answer: 'Answer 3', right: false}],
                idName: ['31', '32', '33']
            }]
    };

    var content = tmpl(form, {
        data: data
    });
    $('body').append(content);



    localStorage.setItem('test', JSON.stringify(data));
    console.log(JSON.stringify(data));
    var newObj = JSON.parse(localStorage.getItem('test'));
    console.log(newObj);


    var rightAnswers = [];
    var givenAnswers = [];
    var answered = 0;

    $('.page').each(function () {
        var $_this = $(this);
        $_this.find('input[type="checkbox"]');
    });

    var getRightAnswers = function () {
        rightAnswers = [];
        for (var i = 0; i < newObj.test.length; i++) {
            for (var j = 0; j < newObj.test[i].answersList.length; j++) {
                var currentAnswer = newObj.test[i].answersList[j].right;
                rightAnswers.push(currentAnswer);
            }
        }
        console.log(rightAnswers);
    };

    getRightAnswers();



    var getGivenAnswers = function () {
        givenAnswers = [];
        $('input[type="checkbox"]').each(function () {
            if ($(this).prop('checked')) {
                givenAnswers.push(true);
            } else {
                givenAnswers.push(false);
            }
        });
        console.log(givenAnswers);
    };



    var check = function () {
        answered = 0;
        var allRights = '';


        //var k = 0;// for running over the givenAnswers array
        //for (var i = 0; i < newObj.test.length; i++) {
        //    for (var j = 0; j < newObj.test[i].answersList.length; j++) {
        //        var currentAnswer = newObj.test[i].answersList[j].right;
        //        if (rightAnswers[k]===true && rightAnswers[k] == givenAnswers[k]) {
        //            answered++;
        //            allRights += newObj.test[i].questionsList + ' correct answer is ' + (j + 1) + '<br>';
        //        }
        //        console.log(rightAnswers[k]);
        //        k++;// for running over the givenAnswers array
        //    }
        //}


        var k = 0;// for running over the givenAnswers array
        for (var i = 0; i < newObj.test.length; i++) {
            for (var j = 0; j < newObj.test[i].answersList.length; j++) {
                var currentAnswer = newObj.test[i].answersList[j].right;
                if (rightAnswers[k]===true && rightAnswers[k] == givenAnswers[k]) {
                    answered++;
                    allRights =  'вы  прошли тест' ;
                }else {
                    allRights =  'вы не прошли тест! Попробуйте еще ';
                }

                console.log(rightAnswers[k]);
                k++;// for running over the givenAnswers array
            }
        }






        $('.modal-dialog').fadeIn();
        $('.modal-body').html(allRights);
    };



    $('.submit').on('click', function () {
        getGivenAnswers();
        check();
        $('.modal').modal('show');
        $('input[type="checkbox"]').removeAttr("checked");
    });

});



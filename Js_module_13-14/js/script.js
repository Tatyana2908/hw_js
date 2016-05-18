
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




    //$('input[type="checkbox"]').each(function() {
    //    $(this).removeAttr("checked");
    //});





});

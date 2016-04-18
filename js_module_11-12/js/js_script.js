$(function() {

    var html = $('#page').html();
    var articles = [
        {
            name: 'Prokhorenko Tatyana',
            img: 'img/photo.png',
            work: 'Student GoForIT course',
            title: 'About me:',
            description:  [ 'I like to study and learn new things',
                             'I like outdoor activities',
                            'I like to make new friends'],
            contact: 'My phone namber:',
            phone:   '+38050123456',
            text:   'You can find me:',
            network: 'https://vk.com/id159863189',
            feedback: 'My feedback',
            content: 'On this course I hope to get new skills and make new friends '


        }

];

    var content = tmpl(html, {
        data: articles
    });

    $('body').append(content);



});


function GoogleCallback(jqueryObj, data) {

    var resultObj = data.results;
    $('.js-result').find('li').remove();

    for(var i = 0; i < resultObj.length; i++) {
        var item = '<li>'+
            '<a href="'+resultObj[i].url+'" target="_blank">'+resultObj[i].title+'</a>'+
            '<p class="contentBox">'+resultObj[i].content+'</p>'+
            '</li>';

        $('.js-result').append(item);
    }
}

$(function(){
    function search() {
        var inputTxt = $('.js-input').val();

        $.ajax({
            url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+inputTxt+'&callback=GoogleCallback&context=?',
            dataType : "jsonp",
            success: function (data) {
            }
        });
    }

    $('body').on('click', '.js-btn', function(){
        search();
    });
    $(document).keypress(function(e) {
        if(e.which == 13) {
            e.preventDefault();
            search();
        }
    });


});
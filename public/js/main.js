String.prototype.htmlEscape = function(){
    var span = document.createElement('span');
    var txt =  document.createTextNode('');
    span.appendChild(txt);
    txt.data = this;
    return span.innerHTML;
};

$(function(){
    $('input#start_btn').click(jquery_submit_start);
});

var jquery_submit_start = function(){
    $.getJSON(sinatra_api_get_array_sample, function(res){
        var li = $('<li>').append(res.result.htmlEscape() + ' - ' + res.time.htmlEscape());
        $('ul#results').prepend(li);
    });
};
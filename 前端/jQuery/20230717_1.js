$(function(){
    $("input").on("click",function(){
        var linum = $('li').lenth;
        var randint = Math.floor(Math.random()*linum);
        debugger
        $('h1').text($('li').eq(randint).text());
    });
});
let currentQuiz = null;

$("#startButton").on("click", function(){
    console.log("click");
    if (currentQuiz==null){
        currentQuiz = 0;
        $("#question").text(questions[currentQuiz].question);
        $("#options").empty();
        questions[currentQuiz].answers.forEach(function(element, index, array){
            $("#options").append(`
            <input name="options" type="radio" value="${index}">
            <label>${element[0]}</label><br><br>`);
        });
        $("#startButton").attr('value', '繼續作答');
    }
    else{
        $.each($(":radio"), function(index, value){
            console.log(`index:${index}, value:${value.checked}`);
            if (value.checked){
                if (isNaN(questions[currentQuiz].answers[index][1])){
                    currentQuiz = questions[currentQuiz].answers[index][1];
                    $("#question").text(finalAnswers[currentQuiz][0]);
                    $("#options").empty();
                    $("#options").append(`<label>${finalAnswers[currentQuiz][1]}</label><br>
                    <img src=${finalAnswers[currentQuiz][2]} style="width: 500px; heigh: 500px">`);
                    $("#startButton").attr('value', '結束');
                    $("#startButton").attr('disabled', 'true');
                }
                else{
                    currentQuiz = questions[currentQuiz].answers[index][1]-1;
                    $("#question").text(questions[currentQuiz].question);
                    $("#options").empty();
                    questions[currentQuiz].answers.forEach(function(element, index, array){
                        $("#options").append(`
                        <input name="options" type="radio" value="${index}">
                        <label>${element[0]}</label><br><br>`);
                    });
                    $("#startButton").attr('value', '繼續作答');
                }
            }
        });
    };
})
$(document).ready(function () {
    $("#enter").click(function () {
        var matches = "";
        var first = document.querySelector('#first').value;
        var second = document.querySelector('#second').value;
        $.each(pokemon, function (index, info) {
            if((info[1]==first && info[2]==second) || (info[2]==first && info[1]==second)){
                if(matches == ""){
                    matches += "" + info[0];
                }
                else{
                    matches += ",  " + info[0] + "";
                }
                
            }
        });
        $("#result").html(matches);
    });
});
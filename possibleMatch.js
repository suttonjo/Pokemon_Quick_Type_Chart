$(document).ready(function () {
    $("#enter").click(function () {
        var table = "";
        var matches = [];
        var names = [];
        var first = document.querySelector('#first').value;
        var second = document.querySelector('#second').value;
        $.each(pokemon, function (index, info) {
            if ((info[1] == first && info[2] == second) || (info[2] == first && info[1] == second)) {
                let name = info[0]
                names.push(name);
                let nameImg = name.toLowerCase() + ".png";
                matches.push(nameImg);
            }
        });
        for (let i = 0; i < matches.length; i += 5) {
            table += "<tr>";
            for(let j = i;j<i+5 && j <matches.length;j++){
                table += "<td class='outTable'> <img src='sprites/" + matches[j] + "' alt='" + names[j] + "'> <p class='desc'> "+ names[j] + "</p></td>";
            }
            table += "</tr>";

        }
        $("#result").html(table);
    });
});
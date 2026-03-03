$(document).ready(function () {
    $("#enter").click(function () {
        var container = "";
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
        
        if (matches.length === 0) {
            container = "<tr><td class='no-results'>No Pokemon found with this type combination</td></tr>";
        } else {
            for (let i = 0; i < matches.length; i++) {
                container += "<tr><td class='pokemon-cell'>";
                container += "<div class='pokemon-item'>";
                container += "<img src='sprites/" + matches[i] + "' alt='" + names[i] + "'>";
                container += "<p class='pokemon-name'>" + names[i] + "</p>";
                container += "</div>";
                container += "</td></tr>";
            }
        }
        
        $("#result").html(container);
    });
});
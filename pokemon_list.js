let pokemon = [
    ["Bulbasaur", 3, 7],
    ["Ivysaur", 3, 7],
    ["Venusaur", 3, 7],
    ["Charmander", 1, 18],
    ["Charmeleon", 1, 18],
    ["Charizard", 1, 9],
    ["Squirtle", 2, 18],
    ["Wartortle", 2, 18],
    ["Blastoise", 2, 18],
    ["Caterpie", 11, 18],
    ["Metapod", 11, 18],
    ["Butterfree", 11, 9],
    ["Weedle", 11, 7],
    ["Kakuna", 11, 7],
    ["Beedrill", 11, 7],
    ["Pidgey", 0, 9],
    ["Pidgeotto", 0, 9],
    ["Pidgeot", 0, 9],
    ["Rattata", 0, 18],
    ["Raticate", 0, 18],
    ["Spearow", 0, 9],
    ["Fearow", 0, 9],
    ["Ekans", 7, 18],
    ["Arbok", 7, 18],
    ["Pikachu", 4, 18],
    ["Raichu", 4, 18],
    ["Sandshrew", 8, 18],
    ["Sandslash", 8, 18],
    ["Nidoran♀", 7, 18],
    ["Nidorina", 7, 18],
    ["Nidoqueen", 7, 8],
    ["Nidoran♂", 7, 18],
    ["Nidorino", 7, 18],
    ["Nidoking", 7, 8],
    ["Clefairy", 17, 18],
    ["Clefable", 17, 18],
    ["Vulpix", 1, 18],
    ["Ninetales", 1, 18],
    ["Jigglypuff", 0, 17],
    ["Wigglytuff", 0, 17],
    ["Zubat", 7, 9],
    ["Golbat", 7, 9],
    ["Oddish", 3, 7],
    ["Gloom", 3, 7],
    ["Vileplume", 3, 7],
    ["Paras", 11, 3],
    ["Parasect", 11, 3],
    ["Venonat", 11, 7],
    ["Venomoth", 11, 7],
    ["Diglett", 8, 18],
    ["Dugtrio", 8, 18],
    ["Meowth", 0, 18],
    ["Persian", 0, 18],
    ["Psyduck", 2, 18],
    ["Golduck", 2, 18],
    ["Mankey", 6, 18],
    ["Primeape", 6, 18],
    ["Growlithe", 1, 18],
    ["Arcanine", 1, 18],
    ["Poliwag", 2, 18],
    ["Poliwhirl", 2, 18],
    ["Poliwrath", 2, 6],
    ["Abra", 10, 18],
    ["Kadabra", 10, 18],
    ["Alakazam", 10, 18],
    ["Machop", 6, 18],
    ["Machoke", 6, 18],
    ["Machamp", 6, 18],
    ["Bellsprout", 3, 7],
    ["Weepinbell", 3, 7],
    ["Victreebel", 3, 7],
    ["Tentacool", 2, 7],
    ["Tentacruel", 2, 7],
    ["Geodude", 12, 8],
    ["Graveler", 12, 8],
    ["Golem", 12, 8],
    ["Ponyta", 1, 18],
    ["Rapidash", 1, 18],
    ["Slowpoke", 2, 10],
    ["Slowbro", 2, 10],
    ["Magnemite", 4, 16],
    ["Magneton", 4, 16],
    ["Farfetch'd", 0, 9],
    ["Doduo", 0, 9],
    ["Dodrio", 0, 9],
    ["Seel", 2, 18],
    ["Dewgong", 2, 5],
    ["Grimer", 7, 18],
    ["Muk", 7, 18],
    ["Shellder", 2, 18],
    ["Cloyster", 2, 5],
    ["Gastly", 13, 7],
    ["Haunter", 13, 7],
    ["Gengar", 13, 7],
    ["Onix", 12, 8],
    ["Drowzee", 10, 18],
    ["Hypno", 10, 18],
    ["Krabby", 2, 18],
    ["Kingler", 2, 18],
    ["Voltorb", 4, 18],
    ["Electrode", 4, 18],
    ["Exeggcute", 3, 10],
    ["Exeggutor", 3, 10],
    ["Cubone", 8, 18],
    ["Marowak", 8, 18],
    ["Hitmonlee", 6, 18],
    ["Hitmonchan", 6, 18],
    ["Lickitung", 0, 18],
    ["Koffing", 7, 18],
    ["Weezing", 7, 18],
    ["Rhyhorn", 8, 12],
    ["Rhydon", 8, 12],
    ["Chansey", 0, 18],
    ["Tangela", 3, 18],
    ["Kangaskhan", 0, 18],
    ["Horsea", 2, 18],
    ["Seadra", 2, 18],
    ["Goldeen", 2, 18],
    ["Seaking", 2, 18],
    ["Staryu", 2, 18],
    ["Starmie", 2, 10],
    ["Mr. Mime", 10, 17],
    ["Scyther", 11, 9],
    ["Jynx", 5, 10],
    ["Electabuzz", 4, 18],
    ["Magmar", 1, 18],
    ["Pinsir", 11, 18],
    ["Tauros", 0, 18],
    ["Magikarp", 2, 18],
    ["Gyarados", 2, 9],
    ["Lapras", 2, 5],
    ["Ditto", 0, 18],
    ["Eevee", 0, 18],
    ["Vaporeon", 2, 18],
    ["Jolteon", 4, 18],
    ["Flareon", 1, 18],
    ["Porygon", 0, 18],
    ["Omanyte", 12, 2],
    ["Omastar", 12, 2],
    ["Kabuto", 12, 2],
    ["Kabutops", 12, 2],
    ["Aerodactyl", 12, 9],
    ["Snorlax", 0, 18],
    ["Articuno", 5, 9],
    ["Zapdos", 4, 9],
    ["Moltres", 1, 9],
    ["Dratini", 14, 18],
    ["Dragonair", 14, 18],
    ["Dragonite", 14, 9],
    ["Mewtwo", 10, 18],
    ["Mew", 10, 18],
    ["Chikorita", 3, 18],
    ["Bayleef", 3, 18],
    ["Meganium", 3, 18],
    ["Cyndaquil", 1, 18],
    ["Quilava", 1, 18],
    ["Typhlosion", 1, 18],
    ["Totodile", 2, 18],
    ["Croconaw", 2, 18],
    ["Feraligatr", 2, 18],
    ["Sentret", 0, 18],
    ["Furret", 0, 18],
    ["Hoothoot", 0, 9],
    ["Noctowl", 0, 9],
    ["Ledyba", 11, 9],
    ["Ledian", 11, 9],
    ["Spinarak", 11, 7],
    ["Ariados", 11, 7],
    ["Crobat", 7, 9],
    ["Chinchou", 2, 4],
    ["Lanturn", 2, 4],
    ["Pichu", 4, 18],
    ["Cleffa", 17, 18],
    ["Igglybuff", 0, 17],
    ["Togepi", 17, 18],
    ["Togetic", 17, 9],
    ["Natu", 10, 9],
    ["Xatu", 10, 9],
    ["Mareep", 4, 18],
    ["Flaaffy", 4, 18],
    ["Ampharos", 4, 18],
    ["Bellossom", 3, 18],
    ["Marill", 2, 17],
    ["Azumarill", 2, 17],
    ["Sudowoodo", 12, 18],
    ["Politoed", 2, 18],
    ["Hoppip", 3, 9],
    ["Skiploom", 3, 9],
    ["Jumpluff", 3, 9],
    ["Aipom", 0, 18],
    ["Sunkern", 3, 18],
    ["Sunflora", 3, 18],
    ["Yanma", 11, 9],
    ["Wooper", 2, 8],
    ["Quagsire", 2, 8],
    ["Espeon", 10, 18],
    ["Umbreon", 15, 18],
    ["Murkrow", 15, 9],
    ["Slowking", 2, 10],
    ["Misdreavus", 13, 18],
    ["Unown", 10, 18],
    ["Wobbuffet", 10, 18],
    ["Girafarig", 0, 10],
    ["Pineco", 11, 18],
    ["Forretress", 11, 16],
    ["Dunsparce", 0, 18],
    ["Gligar", 8, 9],
    ["Steelix", 16, 8],
    ["Snubbull", 17, 18],
    ["Granbull", 17, 18],
    ["Qwilfish", 2, 7],
    ["Scizor", 11, 16],
    ["Shuckle", 11, 12],
    ["Heracross", 11, 6],
    ["Sneasel", 15, 5],
    ["Teddiursa", 0, 18],
    ["Ursaring", 0, 18],
    ["Slugma", 1, 18],
    ["Magcargo", 1, 12],
    ["Swinub", 5, 8],
    ["Piloswine", 5, 8],
    ["Corsola", 2, 12],
    ["Remoraid", 2, 18],
    ["Octillery", 2, 18],
    ["Delibird", 5, 9],
    ["Mantine", 2, 9],
    ["Skarmory", 16, 9],
    ["Houndour", 15, 1],
    ["Houndoom", 15, 1],
    ["Kingdra", 2, 14],
    ["Phanpy", 8, 18],
    ["Donphan", 8, 18],
    ["Porygon2", 0, 18],
    ["Stantler", 0, 18],
    ["Smeargle", 0, 18],
    ["Tyrogue", 6, 18],
    ["Hitmontop", 6, 18],
    ["Smoochum", 5, 10],
    ["Elekid", 4, 18],
    ["Magby", 1, 18],
    ["Miltank", 0, 18],
    ["Blissey", 0, 18],
    ["Raikou", 4, 18],
    ["Entei", 1, 18],
    ["Suicune", 2, 18],
    ["Larvitar", 12, 8],
    ["Pupitar", 12, 8],
    ["Tyranitar", 12, 15],
    ["Lugia", 10, 9],
    ["Ho-oh", 1, 9],
    ["Celebi", 10, 3],
    ["Treecko", 3, 18],
    ["Grovyle", 3, 18],
    ["Sceptile", 3, 18],
    ["Torchic", 1, 18],
    ["Combusken", 1, 6],
    ["Blaziken", 1, 6],
    ["Mudkip", 2, 18],
    ["Marshtomp", 2, 8],
    ["Swampert", 2, 8],
    ["Poochyena", 15, 18],
    ["Mightyena", 15, 18],
    ["Zigzagoon", 0, 18],
    ["Linoone", 0, 18],
    ["Wurmple", 11, 18],
    ["Silcoon", 11, 18],
    ["Beautifly", 11, 9],
    ["Cascoon", 11, 18],
    ["Dustox", 11, 7],
    ["Lotad", 2, 3],
    ["Lombre", 2, 3],
    ["Ludicolo", 2, 3],
    ["Seedot", 3, 18],
    ["Nuzleaf", 3, 15],
    ["Shiftry", 3, 15],
    ["Taillow", 0, 9],
    ["Swellow", 0, 9],
    ["Wingull", 2, 9],
    ["Pelipper", 2, 9],
    ["Ralts", 10, 17],
    ["Kirlia", 10, 17],
    ["Gardevoir", 10, 17],
    ["Surskit", 11, 2],
    ["Masquerain", 11, 9],
    ["Shroomish", 3, 18],
    ["Breloom", 3, 6],
    ["Slakoth", 0, 18],
    ["Vigoroth", 0, 18],
    ["Slaking", 0, 18],
    ["Nincada", 11, 8],
    ["Ninjask", 11, 9],
    ["Shedinja", 11, 13],
    ["Whismur", 0, 18],
    ["Loudred", 0, 18],
    ["Exploud", 0, 18],
    ["Makuhita", 6, 18],
    ["Hariyama", 6, 18],
    ["Azurill", 0, 17],
    ["Nosepass", 12, 18],
    ["Skitty", 0, 18],
    ["Delcatty", 0, 18],
    ["Sableye", 15, 13],
    ["Mawile", 16, 17],
    ["Aron", 16, 12],
    ["Lairon", 16, 12],
    ["Aggron", 16, 12],
    ["Meditite", 6, 10],
    ["Medicham", 6, 10],
    ["Electrike", 4, 18],
    ["Manectric", 4, 18],
    ["Plusle", 4, 18],
    ["Minun", 4, 18],
    ["Volbeat", 11, 18],
    ["Illumise", 11, 18],
    ["Roselia", 3, 7],
    ["Gulpin", 7, 18],
    ["Swalot", 7, 18],
    ["Carvanha", 2, 15],
    ["Sharpedo", 2, 15],
    ["Wailmer", 2, 18],
    ["Wailord", 2, 18],
    ["Numel", 1, 8],
    ["Camerupt", 1, 8],
    ["Torkoal", 1, 18],
    ["Spoink", 10, 18],
    ["Grumpig", 10, 18],
    ["Spinda", 0, 18],
    ["Trapinch", 8, 18],
    ["Vibrava", 8, 14],
    ["Flygon", 8, 14],
    ["Cacnea", 3, 18],
    ["Cacturne", 3, 15],
    ["Swablu", 0, 9],
    ["Altaria", 14, 9],
    ["Zangoose", 0, 18],
    ["Seviper", 7, 18],
    ["Lunatone", 12, 10],
    ["Solrock", 12, 10],
    ["Barboach", 2, 8],
    ["Whiscash", 2, 8],
    ["Corphish", 2, 18],
    ["Crawdaunt", 2, 15],
    ["Baltoy", 8, 10],
    ["Claydol", 8, 10],
    ["Lileep", 12, 3],
    ["Cradily", 12, 3],
    ["Anorith", 12, 11],
    ["Armaldo", 12, 11],
    ["Feebas", 2, 18],
    ["Milotic", 2, 18],
    ["Castform", 0, 18],
    ["Kecleon", 0, 18],
    ["Shuppet", 13, 18],
    ["Banette", 13, 18],
    ["Duskull", 13, 18],
    ["Dusclops", 13, 18],
    ["Tropius", 3, 9],
    ["Chimecho", 10, 18],
    ["Absol", 15, 18],
    ["Wynaut", 10, 18],
    ["Snorunt", 5, 18],
    ["Glalie", 5, 18],
    ["Spheal", 5, 2],
    ["Sealeo", 5, 2],
    ["Walrein", 5, 2],
    ["Clamperl", 2, 18],
    ["Huntail", 2, 18],
    ["Gorebyss", 2, 18],
    ["Relicanth", 2, 12],
    ["Luvdisc", 2, 18],
    ["Bagon", 14, 18],
    ["Shelgon", 14, 18],
    ["Salamence", 14, 9],
    ["Beldum", 16, 10],
    ["Metang", 16, 10],
    ["Metagross", 16, 10],
    ["Regirock", 12, 18],
    ["Regice", 5, 18],
    ["Registeel", 16, 18],
    ["Latias", 14, 10],
    ["Latios", 14, 10],
    ["Kyogre", 2, 18],
    ["Groudon", 8, 18],
    ["Rayquaza", 14, 9],
    ["Jirachi", 16, 10],
    ["Deoxys", 10, 18],
    ["Turtwig", 3, 18],
    ["Grotle", 3, 18],
    ["Torterra", 3, 8],
    ["Chimchar", 1, 18],
    ["Monferno", 1, 6],
    ["Infernape", 1, 6],
    ["Piplup", 2, 18],
    ["Prinplup", 2, 18],
    ["Empoleon", 2, 16],
    ["Starly", 0, 9],
    ["Staravia", 0, 9],
    ["Staraptor", 0, 9],
    ["Bidoof", 0, 18],
    ["Bibarel", 0, 2],
    ["Kricketot", 11, 18],
    ["Kricketune", 11, 18],
    ["Shinx", 4, 18],
    ["Luxio", 4, 18],
    ["Luxray", 4, 18],
    ["Budew", 3, 7],
    ["Roserade", 3, 7],
    ["Cranidos", 12, 18],
    ["Rampardos", 12, 18],
    ["Shieldon", 12, 16],
    ["Bastiodon", 12, 16],
    ["Burmy", 11, 18],
    ["Wormadam", 11, 3],
    ["Mothim", 11, 9],
    ["Combee", 11, 9],
    ["Vespiquen", 11, 9],
    ["Pachirisu", 4, 18],
    ["Buizel", 2, 18],
    ["Floatzel", 2, 18],
    ["Cherubi", 3, 18],
    ["Cherrim", 3, 18],
    ["Shellos", 2, 18],
    ["Gastrodon", 2, 8],
    ["Ambipom", 0, 18],
    ["Drifloon", 13, 9],
    ["Drifblim", 13, 9],
    ["Buneary", 0, 18],
    ["Lopunny", 0, 18],
    ["Mismagius", 13, 18],
    ["Honchkrow", 15, 9],
    ["Glameow", 0, 18],
    ["Purugly", 0, 18],
    ["Chingling", 10, 18],
    ["Stunky", 7, 15],
    ["Skuntank", 7, 15],
    ["Bronzor", 16, 10],
    ["Bronzong", 16, 10],
    ["Bonsly", 12, 18],
    ["Mime Jr.", 10, 17],
    ["Happiny", 0, 18],
    ["Chatot", 0, 9],
    ["Spiritomb", 13, 15],
    ["Gible", 14, 8],
    ["Gabite", 14, 8],
    ["Garchomp", 14, 8],
    ["Munchlax", 0, 18],
    ["Riolu", 6, 18],
    ["Lucario", 6, 16],
    ["Hippopotas", 8, 18],
    ["Hippowdon", 8, 18],
    ["Skorupi", 7, 11],
    ["Drapion", 7, 15],
    ["Croagunk", 7, 6],
    ["Toxicroak", 7, 6],
    ["Carnivine", 3, 18],
    ["Finneon", 2, 18],
    ["Lumineon", 2, 18],
    ["Mantyke", 2, 9],
    ["Snover", 3, 5],
    ["Abomasnow", 3, 5],
    ["Weavile", 15, 5],
    ["Magnezone", 4, 16],
    ["Lickilicky", 0, 18],
    ["Rhyperior", 8, 12],
    ["Tangrowth", 3, 18],
    ["Electivire", 4, 18],
    ["Magmortar", 1, 18],
    ["Togekiss", 17, 9],
    ["Yanmega", 11, 9],
    ["Leafeon", 3, 18],
    ["Glaceon", 5, 18],
    ["Gliscor", 8, 9],
    ["Mamoswine", 5, 8],
    ["Porygon-Z", 0, 18],
    ["Gallade", 10, 6],
    ["Probopass", 12, 16],
    ["Dusknoir", 13, 18],
    ["Froslass", 5, 13],
    ["Rotom", 4, 13],
    ["Uxie", 10, 18],
    ["Mesprit", 10, 18],
    ["Azelf", 10, 18],
    ["Dialga", 16, 14],
    ["Palkia", 2, 14],
    ["Heatran", 1, 16],
    ["Regigigas", 0, 18],
    ["Giratina", 13, 14],
    ["Cresselia", 10, 18],
    ["Phione", 2, 18],
    ["Manaphy", 2, 18],
    ["Darkrai", 15, 18],
    ["Shaymin", 3, 18],
    ["Arceus", 0, 18],
    ["Victini", 10, 1],
    ["Snivy", 3, 18],
    ["Servine", 3, 18],
    ["Serperior", 3, 18],
    ["Tepig", 1, 18],
    ["Pignite", 1, 6],
    ["Emboar", 1, 6],
    ["Oshawott", 2, 18],
    ["Dewott", 2, 18],
    ["Samurott", 2, 18],
    ["Patrat", 0, 18],
    ["Watchog", 0, 18],
    ["Lillipup", 0, 18],
    ["Herdier", 0, 18],
    ["Stoutland", 0, 18],
    ["Purrloin", 15, 18],
    ["Liepard", 15, 18],
    ["Pansage", 3, 18],
    ["Simisage", 3, 18],
    ["Pansear", 1, 18],
    ["Simisear", 1, 18],
    ["Panpour", 2, 18],
    ["Simipour", 2, 18],
    ["Munna", 10, 18],
    ["Musharna", 10, 18],
    ["Pidove", 0, 9],
    ["Tranquill", 0, 9],
    ["Unfezant", 0, 9],
    ["Blitzle", 4, 18],
    ["Zebstrika", 4, 18],
    ["Roggenrola", 12, 18],
    ["Boldore", 12, 18],
    ["Gigalith", 12, 18],
    ["Woobat", 10, 9],
    ["Swoobat", 10, 9],
    ["Drilbur", 8, 18],
    ["Excadrill", 8, 16],
    ["Audino", 0, 18],
    ["Timburr", 6, 18],
    ["Gurdurr", 6, 18],
    ["Conkeldurr", 6, 18],
    ["Tympole", 2, 18],
    ["Palpitoad", 2, 8],
    ["Seismitoad", 2, 8],
    ["Throh", 6, 18],
    ["Sawk", 6, 18],
    ["Sewaddle", 11, 3],
    ["Swadloon", 11, 3],
    ["Leavanny", 11, 3],
    ["Venipede", 11, 7],
    ["Whirlipede", 11, 7],
    ["Scolipede", 11, 7],
    ["Cottonee", 3, 17],
    ["Whimsicott", 3, 17],
    ["Petilil", 3, 18],
    ["Lilligant", 3, 18],
    ["Basculin", 2, 18],
    ["Sandile", 8, 15],
    ["Krokorok", 8, 15],
    ["Krookodile", 8, 15],
    ["Darumaka", 1, 18],
    ["Darmanitan", 1, 18],
    ["Maractus", 3, 18],
    ["Dwebble", 11, 12],
    ["Crustle", 11, 12],
    ["Scraggy", 15, 6],
    ["Scrafty", 15, 6],
    ["Sigilyph", 10, 9],
    ["Yamask", 13, 18],
    ["Cofagrigus", 13, 18],
    ["Tirtouga", 2, 12],
    ["Carracosta", 2, 12],
    ["Archen", 12, 9],
    ["Archeops", 12, 9],
    ["Trubbish", 7, 18],
    ["Garbodor", 7, 18],
    ["Zorua", 15, 18],
    ["Zoroark", 15, 18],
    ["Minccino", 0, 18],
    ["Cinccino", 0, 18],
    ["Gothita", 10, 18],
    ["Gothorita", 10, 18],
    ["Gothitelle", 10, 18],
    ["Solosis", 10, 18],
    ["Duosion", 10, 18],
    ["Reuniclus", 10, 18],
    ["Ducklett", 2, 9],
    ["Swanna", 2, 9],
    ["Vanillite", 5, 18],
    ["Vanillish", 5, 18],
    ["Vanilluxe", 5, 18],
    ["Deerling", 0, 3],
    ["Sawsbuck", 0, 3],
    ["Emolga", 4, 9],
    ["Karrablast", 11, 18],
    ["Escavalier", 11, 16],
    ["Foongus", 3, 7],
    ["Amoonguss", 3, 7],
    ["Frillish", 2, 13],
    ["Jellicent", 2, 13],
    ["Alomomola", 2, 18],
    ["Joltik", 11, 4],
    ["Galvantula", 11, 4],
    ["Ferroseed", 3, 16],
    ["Ferrothorn", 3, 16],
    ["Klink", 16, 18],
    ["Klang", 16, 18],
    ["Klinklang", 16, 18],
    ["Tynamo", 4, 18],
    ["Eelektrik", 4, 18],
    ["Eelektross", 4, 18],
    ["Elgyem", 10, 18],
    ["Beheeyem", 10, 18],
    ["Litwick", 13, 1],
    ["Lampent", 13, 1],
    ["Chandelure", 13, 1],
    ["Axew", 14, 18],
    ["Fraxure", 14, 18],
    ["Haxorus", 14, 18],
    ["Cubchoo", 5, 18],
    ["Beartic", 5, 18],
    ["Cryogonal", 5, 18],
    ["Shelmet", 11, 18],
    ["Accelgor", 11, 18],
    ["Stunfisk", 8, 4],
    ["Mienfoo", 6, 18],
    ["Mienshao", 6, 18],
    ["Druddigon", 14, 18],
    ["Golett", 8, 13],
    ["Golurk", 8, 13],
    ["Pawniard", 15, 16],
    ["Bisharp", 15, 16],
    ["Bouffalant", 0, 18],
    ["Rufflet", 0, 9],
    ["Braviary", 0, 9],
    ["Vullaby", 15, 9],
    ["Mandibuzz", 15, 9],
    ["Heatmor", 1, 18],
    ["Durant", 11, 16],
    ["Deino", 15, 14],
    ["Zweilous", 15, 14],
    ["Hydreigon", 15, 14],
    ["Larvesta", 11, 1],
    ["Volcarona", 11, 1],
    ["Cobalion", 16, 6],
    ["Terrakion", 12, 6],
    ["Virizion", 3, 6],
    ["Tornadus", 9, 18],
    ["Thundurus", 4, 9],
    ["Reshiram", 14, 1],
    ["Zekrom", 14, 4],
    ["Landorus", 8, 9],
    ["Kyurem", 14, 5],
    ["Keldeo", 2, 6],
    ["Meloetta", 0, 10],
    ["Genesect", 11, 16],
    ["Chespin", 3, 18],
    ["Quilladin", 3, 18],
    ["Chesnaught", 3, 6],
    ["Fennekin", 1, 18],
    ["Braixen", 1, 18],
    ["Delphox", 1, 10],
    ["Froakie", 2, 18],
    ["Frogadier", 2, 18],
    ["Greninja", 2, 15],
    ["Bunnelby", 0, 18],
    ["Diggersby", 0, 8],
    ["Fletchling", 0, 9],
    ["Fletchinder", 1, 9],
    ["Talonflame", 1, 9],
    ["Scatterbug", 11, 18],
    ["Spewpa", 11, 18],
    ["Vivillon", 11, 9],
    ["Litleo", 1, 0],
    ["Pyroar", 1, 0],
    ["Flabébé", 17, 18],
    ["Floette", 17, 18],
    ["Florges", 17, 18],
    ["Skiddo", 3, 18],
    ["Gogoat", 3, 18],
    ["Pancham", 6, 18],
    ["Pangoro", 6, 15],
    ["Furfrou", 0, 18],
    ["Espurr", 10, 18],
    ["Meowstic", 10, 18],
    ["Honedge", 16, 13],
    ["Doublade", 16, 13],
    ["Aegislash", 16, 13],
    ["Spritzee", 17, 18],
    ["Aromatisse", 17, 18],
    ["Swirlix", 17, 18],
    ["Slurpuff", 17, 18],
    ["Inkay", 15, 10],
    ["Malamar", 15, 10],
    ["Binacle", 12, 2],
    ["Barbaracle", 12, 2],
    ["Skrelp", 7, 2],
    ["Dragalge", 7, 14],
    ["Clauncher", 2, 18],
    ["Clawitzer", 2, 18],
    ["Helioptile", 4, 0],
    ["Heliolisk", 4, 0],
    ["Tyrunt", 12, 14],
    ["Tyrantrum", 12, 14],
    ["Amaura", 12, 5],
    ["Aurorus", 12, 5],
    ["Sylveon", 17, 18],
    ["Hawlucha", 6, 9],
    ["Dedenne", 4, 17],
    ["Carbink", 12, 17],
    ["Goomy", 14, 18],
    ["Sliggoo", 14, 18],
    ["Goodra", 14, 18],
    ["Klefki", 16, 17],
    ["Phantump", 13, 3],
    ["Trevenant", 13, 3],
    ["Pumpkaboo", 13, 3],
    ["Gourgeist", 13, 3],
    ["Bergmite", 5, 18],
    ["Avalugg", 5, 18],
    ["Noibat", 9, 14],
    ["Noivern", 9, 14],
    ["Xerneas", 17, 18],
    ["Yveltal", 15, 9],
    ["Zygarde", 14, 8],
    ["Diancie", 12, 17],
    ["Hoopa", 10, 13],
    ["Volcanion", 1, 2],
    ["Rowlet", 3, 9],
    ["Dartrix", 3, 9],
    ["Decidueye", 3, 13],
    ["Litten", 1, 18],
    ["Torracat", 1, 18],
    ["Incineroar", 1, 15],
    ["Popplio", 2, 18],
    ["Brionne", 2, 18],
    ["Primarina", 2, 17],
    ["Pikipek", 0, 9],
    ["Trumbeak", 0, 9],
    ["Toucannon", 0, 9],
    ["Yungoos", 0, 18],
    ["Gumshoos", 0, 18],
    ["Grubbin", 11, 18],
    ["Charjabug", 11, 4],
    ["Vikavolt", 11, 4],
    ["Crabrawler", 6, 18],
    ["Crabominable", 6, 5],
    ["Oricorio", 1, 9],
    ["Cutiefly", 11, 17],
    ["Ribombee", 11, 17],
    ["Rockruff", 12, 18],
    ["Lycanroc", 12, 18],
    ["Wishiwashi", 2, 18],
    ["Mareanie", 7, 2],
    ["Toxapex", 7, 2],
    ["Mudbray", 8, 18],
    ["Mudsdale", 8, 18],
    ["Dewpider", 2, 11],
    ["Araquanid", 2, 11],
    ["Fomantis", 3, 18],
    ["Lurantis", 3, 18],
    ["Morelull", 3, 17],
    ["Shiinotic", 3, 17],
    ["Salandit", 7, 1],
    ["Salazzle", 7, 1],
    ["Stufful", 0, 6],
    ["Bewear", 0, 6],
    ["Bounsweet", 3, 18],
    ["Steenee", 3, 18],
    ["Tsareena", 3, 18],
    ["Comfey", 17, 18],
    ["Oranguru", 0, 10],
    ["Passimian", 6, 18],
    ["Wimpod", 11, 2],
    ["Golisopod", 11, 2],
    ["Sandygast", 13, 8],
    ["Palossand", 13, 8],
    ["Pyukumuku", 2, 18],
    ["Type: Null", 0, 18],
    ["Silvally", 0, 18],
    ["Minior", 12, 9],
    ["Komala", 0, 18],
    ["Turtonator", 1, 14],
    ["Togedemaru", 4, 16],
    ["Mimikyu", 13, 17],
    ["Bruxish", 2, 10],
    ["Drampa", 0, 14],
    ["Dhelmise", 13, 3],
    ["Jangmo-o", 14, 18],
    ["Hakamo-o", 14, 6],
    ["Kommo-o", 14, 6],
    ["Tapu Koko", 4, 17],
    ["Tapu Lele", 10, 17],
    ["Tapu Bulu", 3, 17],
    ["Tapu Fini", 2, 17],
    ["Cosmog", 10, 18],
    ["Cosmoem", 10, 18],
    ["Solgaleo", 10, 16],
    ["Lunala", 10, 13],
    ["Nihilego", 12, 7],
    ["Buzzwole", 11, 6],
    ["Pheromosa", 11, 6],
    ["Xurkitree", 4, 18],
    ["Celesteela", 16, 9],
    ["Kartana", 3, 16],
    ["Guzzlord", 15, 14],
    ["Necrozma", 10, 18],
    ["Magearna", 16, 17],
    ["Marshadow", 6, 13],
    ["Poipole", 7, 18],
    ["Naganadel", 7, 14],
    ["Stakataka", 12, 16],
    ["Blacephalon", 1, 13],
    ["Zeraora", 4, 18],
    ["Meltan", 16, 18],
    ["Melmetal", 16, 18],
    ["Grookey", 3, 18],
    ["Thwackey", 3, 18],
    ["Rillaboom", 3, 18],
    ["Scorbunny", 1, 18],
    ["Raboot", 1, 18],
    ["Cinderace", 1, 18],
    ["Sobble", 2, 18],
    ["Drizzile", 2, 18],
    ["Inteleon", 2, 18],
    ["Skwovet", 0, 18],
    ["Greedent", 0, 18],
    ["Rookidee", 9, 18],
    ["Corvisquire", 9, 18],
    ["Corviknight", 9, 16],
    ["Blipbug", 11, 18],
    ["Dottler", 11, 10],
    ["Orbeetle", 11, 10],
    ["Nickit", 15, 18],
    ["Thievul", 15, 18],
    ["Gossifleur", 3, 18],
    ["Eldegoss", 3, 18],
    ["Wooloo", 0, 18],
    ["Dubwool", 0, 18],
    ["Chewtle", 2, 18],
    ["Drednaw", 2, 12],
    ["Yamper", 4, 18],
    ["Boltund", 4, 18],
    ["Rolycoly", 12, 18],
    ["Carkol", 12, 1],
    ["Coalossal", 12, 1],
    ["Applin", 3, 14],
    ["Flapple", 3, 14],
    ["Appletun", 3, 14],
    ["Silicobra", 8, 18],
    ["Sandaconda", 8, 18],
    ["Cramorant", 9, 2],
    ["Arrokuda", 2, 18],
    ["Barraskewda", 2, 18],
    ["Toxel", 4, 7],
    ["Toxtricity", 4, 7],
    ["Sizzlipede", 1, 11],
    ["Centiskorch", 1, 11],
    ["Clobbopus", 6, 18],
    ["Grapploct", 6, 18],
    ["Sinistea", 13, 18],
    ["Polteageist", 13, 18],
    ["Hatenna", 10, 18],
    ["Hattrem", 10, 18],
    ["Hatterene", 10, 17],
    ["Impidimp", 15, 17],
    ["Morgrem", 15, 17],
    ["Grimmsnarl", 15, 17],
    ["Obstagoon", 15, 0],
    ["Perrserker", 16, 18],
    ["Cursola", 13, 18],
    ["Sirfetch'd", 6, 18],
    ["Mr.Rime", 5, 10],
    ["Runerigus", 8, 13],
    ["Milcery", 17, 18],
    ["Alcremie", 17, 18],
    ["Falinks", 6, 18],
    ["Pincurchin", 4, 18],
    ["Snom", 5, 11],
    ["Frosmoth", 5, 11],
    ["Stonjourner", 12, 18],
    ["Eiscue", 5, 18],
    ["Indeedee", 10, 0],
    ["Morpeko", 4, 15],
    ["Cufant", 16, 18],
    ["Copperajah", 16, 18],
    ["Dracozolt", 4, 14],
    ["Arctozolt", 4, 5],
    ["Dracovish", 2, 14],
    ["Arctovish", 2, 5],
    ["Duraludon", 16, 14],
    ["Dreepy", 14, 13],
    ["Drakloak", 14, 13],
    ["Dragapult", 14, 13],
    ["Zacian", 17, 18],
    ["Zamazenta", 6, 18],
    ["Eternatus", 7, 14],
    ["Kubfu", 6, 18],
    ["Urshifu", 6, 15],
    ["Zarude", 15, 3],
    ["Regieleki", 4, 18],
    ["Regidrago", 14, 18],
    ["Glastrier", 5, 18],
    ["Spectrier", 13, 18],
    ["Calyrex", 10, 3],
    ["Wyrdeer", 0, 10],
    ["Kleavor", 11, 12],
    ["Ursaluna", 8, 0],
    ["Basculegion", 2, 13],
    ["Sneasler", 6, 7],
    ["Overqwil", 15, 7],
    ["Enamorus", 17, 9],
    ["Sprigatito", 3, 18],
    ["Floragato", 3, 18],
    ["Meowscarada", 3, 15],
    ["Fuecoco", 1, 18],
    ["Crocalor", 1, 18],
    ["Skeledirge", 1, 13],
    ["Quaxly", 2, 18],
    ["Quaxwell", 2, 18],
    ["Quaquaval", 2, 6],
    ["Lechonk", 0, 18],
    ["Oinkologne", 0, 18],
    ["Tarountula", 11, 18],
    ["Spidops", 11, 18],
    ["Nymble", 11, 18],
    ["Lokix", 11, 15],
    ["Pawmi", 4, 18],
    ["Pawmo", 4, 6],
    ["Pawmot", 4, 6],
    ["Tandemaus", 0, 18],
    ["Maushold", 0, 18],
    ["Fidough", 17, 18],
    ["Dachsbun", 17, 18],
    ["Smoliv", 3, 0],
    ["Dolliv", 3, 0],
    ["Arboliva", 3, 0],
    ["Squawkabilly", 0, 9],
    ["Nacli", 12, 18],
    ["Naclstack", 12, 18],
    ["Garganacl", 12, 18],
    ["Charcadet", 1, 18],
    ["Armarouge", 1, 10],
    ["Ceruledge", 1, 13],
    ["Tadbulb", 4, 18],
    ["Bellibolt", 4, 18],
    ["Wattrel", 4, 9],
    ["Kilowattrel", 4, 9],
    ["Maschiff", 15, 18],
    ["Mabosstiff", 15, 18],
    ["Shroodle", 7, 0],
    ["Grafaiai", 7, 0],
    ["Bramblin", 3, 13],
    ["Brambleghast", 3, 13],
    ["Toedscool", 8, 3],
    ["Toedscruel", 8, 3],
    ["Klawf", 12, 18],
    ["Capsakid", 3, 18],
    ["Scovillain", 3, 1],
    ["Rellor", 11, 18],
    ["Rabsca", 11, 10],
    ["Flittle", 10, 18],
    ["Espathra", 10, 18],
    ["Tinkatink", 17, 16],
    ["Tinkatuff", 17, 16],
    ["Tinkaton", 17, 16],
    ["Wiglett", 2, 18],
    ["Wugtrio", 2, 18],
    ["Bombirdier", 9, 15],
    ["Finizen", 2, 18],
    ["Palafin", 2, 18],
    ["Varoom", 16, 7],
    ["Revavroom", 16, 7],
    ["Cyclizar", 14, 0],
    ["Orthworm", 16, 18],
    ["Glimmet", 12, 7],
    ["Glimmora", 12, 7],
    ["Greavard", 13, 18],
    ["Houndstone", 13, 18],
    ["Flamigo", 9, 6],
    ["Cetoddle", 5, 18],
    ["Cetitan", 5, 18],
    ["Veluza", 2, 10],
    ["Dondozo", 2, 18],
    ["Tatsugiri", 14, 2],
    ["Annihilape", 6, 13],
    ["Clodsire", 7, 8],
    ["Farigiraf", 0, 10],
    ["Dudunsparce", 0, 18],
    ["Kingambit", 15, 16],
    ["Great Tusk", 8, 6],
    ["Scream Tail", 17, 10],
    ["Brute Bonnet", 3, 15],
    ["Flutter Mane", 13, 17],
    ["Slither Wing", 11, 6],
    ["Sandy Shocks", 4, 8],
    ["Iron Treads", 8, 16],
    ["Iron Bundle", 5, 2],
    ["Iron Hands", 6, 4],
    ["Iron Jugulis", 15, 9],
    ["Iron Moth", 1, 7],
    ["Iron Thorns", 12, 4],
    ["Frigibax", 14, 5],
    ["Arctibax", 14, 5],
    ["Baxcalibur", 14, 5],
    ["Gimmighoul", 13, 18],
    ["Gholdengo", 16, 13],
    ["Wo - Chien", 15, 3],
    ["Chien - Pao", 15, 5],
    ["Ting - Lu", 15, 8],
    ["Chi - Yu", 15, 1],
    ["Roaring Moon", 14, 15],
    ["Iron Valiant", 17, 6],
    ["Koraidon", 6, 14],
    ["Miraidon", 4, 14],
    ["Walking Wake", 2, 14],
    ["Iron Leaves", 3, 10],
    ["Dipplin", 3, 14],
    ["Poltchageist", 3, 13],
    ["Sinistcha", 3, 13],
    ["Okidogi", 7, 6],
    ["Munkidori", 7, 10],
    ["Fezandipiti", 7, 17],
    ["Ogerpon", 3, 18],
    ["Archaludon", 16, 14],
    ["Hydrapple", 3, 14],
    ["Gouging Fire", 1, 14],
    ["Raging Bolt", 4, 14],
    ["Iron Boulder", 12, 10],
    ["Iron Crown", 16, 10],
    ["Terapagos", 0, 18],
    ["Alolan Rattata",15,0],
    ["Alolan Raticate",15,0],
    ["Alolan Raichu",4,10],
    ["Alolan Sandshrew",5,16],
    ["Alolan Sandslash",5,16],
    ["Alolan Vulpix",5,18],
    ["Alolan Ninetails",5,17],
    ["Alolan Diglett",8,16],
    ["Alolan Dugtrio",8,16],
    ["Alolan Meowth",15,18],
    ["Alolan Persian",15,18],
    ["Alolan Geodude",12,4],
    ["Alolan Graveler",12,4],
    ["Alolan Golem",12,4],
    ["Alolan Grimer",7,15],
    ["Alolan Muk",7,15],
    ["Alolan Exeggutor",3,14],
    ["Alolan Marowak",1,13],
    ["Galarian Meowth",16,18],
    ["Galarian Ponyta",10,18],
    ["Galarian Rapidash",10,17],
    ["Galarian Farfetch'd",6,18],
    ["Galarian Weezing",7,17],
    ["Galarian Mr. Mime",5,10],
    ["Galarian Corsola",13,18],
    ["Galarian Zigzagoon",15,0],
    ["Galarian Linoone",15,0],
    ["Galarian Darumaka",5,18],
    ["Galarian Darmanitan",5,18],
    ["Galarian Yamask",8,13],
    ["Galarian Runerigus",8,13],
    ["Galarian Stunfisk",8,16],
    ["Galarian Slowpoke",10,18],
    ["Galarian Slowbro",7,10],
    ["Galarian Articuno",10,9],
    ["Galarian Zapdos",6,9],
    ["Galarian Moltres",15,9],
    ["Galarian Slowking",7,10],
    ["Galarian Zen Darmanitan",5,1],
    ["Hisuian Growlithe",1,12],
    ["Hisuian Arcanine",1,12],
    ["Hisuian Voltorb",4,3],
    ["Hisuian Electrode",4,3],
    ["Hisuian Typhlosion",1,13],
    ["Hisuian Qwilfish",15,7],
    ["Hisuian Sneasel",6,7],
    ["Hisuian Samurott",2,15],
    ["Hisuian Lilligant",3,6],
    ["Hisuian Basculin",2,18],
    ["Hisuian Zorua",0,13],
    ["Hisuian Zoroark",0,13],
    ["Hisuian Braviary",10,9],
    ["Hisuian Sliggoo",16,14],
    ["Hisuian Goodra",16,14],
    ["Hisuian Avalugg",5,12],
    ["Hisuian Decidueye",3,6],
    ["Paldean Combat Tauros",3,6],
    ["Paldean Blaze Tauros",3,6],
    ["Paldean Aqua Tauros",3,6],
    ["Paldean Wooper",3,6]
]
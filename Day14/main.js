//Day 14
//Q40
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
//Q41
var magicians = ["ali", "uzair", "rafay"];
function show_Magician1(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_Magician1(magicians);
//Q42
var magicianNames2 = ["rafay", "uzair", "ali"];
function show_Magician2(magicianNames2) {
    magicianNames2.forEach(function (magicianName) {
        console.log(magicianName);
    });
}
function make_Great(names) {
    for (var i = 0; i < magicianNames2.length; i++) {
        magicianNames2[i] = magicianNames2[i] + " the great ";
    }
}
make_Great(magicianNames2); // modifies the origin
show_Magician2(magicianNames2); // shows modified names

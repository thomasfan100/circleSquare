
var sites = ["https://www.chess.com/learn-how-to-play-chess", "https://www.delicious.com.au/recipes/collections/gallery/60-healthy-dinners-you-can-cook-in-30-minutes/1vo4q819", "https://www.wordstream.com/blog/ws/2019/12/31/basic-website",
"https://musescore.com/",
"https://www.pagat.com/"]

//document.getElementById("dicePic").addEventListener("click", newSkillSite);

function newSkillSite() {
    
    var randomNumber = Math.floor(Math.random()* (sites.length));
    document.getElementById('siteDisplay').innerHTML = sites[randomNumber];
    location.href = sites[randomNumber]
}

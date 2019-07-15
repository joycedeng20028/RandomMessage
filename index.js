var randomVines = ["Ooooooo, he needs some milk.", "Hi, welcome to Chili's.", "Escalera oooooooaaaa!", "Country boy, I love you ahhhwweelhwh...", "Fre-sha-vocado.", "Staaaahp! I coulda dropped my croissant!", "That's my OPINION.", "Road work ahead? Yeah, I sure hope it does.", "Um, I'm never been to oovoo javer.", "lEbROn jAmEs", "Two bros, chilling in a hot tub, 5 feet apart cause they're not gay.", "Iridocyclitis.", "Merry Chrysler.", "Wait a minute, who ARE you?", "Look at all those chickens!", "Chipotle is my life.",  "Hurricane Katrina? More like Hurricane Tortilla.", 'I spilled lipstick in your Valentino bag." "You spilled — whaghwhha — lipstick in my Valentino White bag?', 'WHAT ARE THOSEEEEE?", "THEY are my crocs!', "Oh hi, thanks for checking in I'm still a piece of garrbaagge.", '"...And they were roommates" "Mah God they were roommates!"', "I'm your freestyle dance instructor.","I can't believe you've done this!","Even tho i look like a BURNT chicken nugget, i still love myself"];

var vineGifs = ["https://media1.tenor.com/images/b05c0a62267ca7c3dc701881f494c650/tenor.gif?itemid=9637606", "https://media.tenor.com/images/7bb72b2fa5993760641163fb82183e90/tenor.gif", "https://media.giphy.com/media/wwO72Y5nts2je/giphy.gif"]

var button = $('button');
var vine = $('#vine');
var gif = $('#gif');


function generateVine(){
  var index = Math.floor(Math.random()*vineGifs.length);
  console.log(randomVines[index]);
  vine.text(randomVines[index]);
  gif.append(`<img src= "${vineGifs[index]}">`);
  console.log("yeehaw")
}

button.on("click", generateVine);

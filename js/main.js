$("#hi-lo").on("click",function () {
        window.location.href = "https://taiga-422.github.io/drinking_party_2/hi-low.html";
});

$("#flash-w").on("click",function () {
        window.location.href = "https://taiga-422.github.io/drinking_party_2/flash-w.html";
});

$("#janken").on("click",function () {
        window.location.href = "https://taiga-422.github.io/drinking_party_2/janken.html";
});

const music = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/%22Ethiopia_Rag%22_%281909%29%2C_by_Joseph_F._Lamb.mp3',
    autoplay: true,
    volume: 0.2,
    loop: true,
});
music.play();
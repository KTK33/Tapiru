
enchant();

window.onload = function(){
    var game = new Game(400, 300);
    game.preload("space0.png");

    game.onload = function(){
        var char1 = new Sprite(100, 100);
        char1.image = game.assets["space0.png"];
        char1.x = 100;
        char1.y = 100;
        game.rootScene.backgroundColor = "#ffaaaa";
        game.rootScene.addChild(char1);
    };

    game.start();
};

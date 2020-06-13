/*

*/Design a Snake game that is played on a device with screen size = width x height. Play the game online if you are not familiar with the game.

The snake is initially positioned at the top left corner (0,0) with length = 1 unit.

You are given a list of food's positions in row-column order. When a snake eats the food, its length and the game's score both increase by 1.

Each food appears one by one on the screen. For example, the second food will not appear until the first food was eaten by the snake.

When a food does appear on the screen, it is guaranteed that it will not appear on a block occupied by the snake.

Example:

Given width = 3, height = 2, and food = [[1,2],[0,1]].

Snake snake = new Snake(width, height, food);

Initially the snake appears at position (0,0) and the food at (1,2).

|S| | |
| | |F|

snake.move("R"); -> Returns 0

| |S| |
| | |F|

snake.move("D"); -> Returns 0

| | | |
| |S|F|

snake.move("R"); -> Returns 1 (Snake eats the first food and right after that, the second food appears at (0,1) )

| |F| |
| |S|S|

snake.move("U"); -> Returns 1

| |F|S|
| | |S|

snake.move("L"); -> Returns 2 (Snake eats the second food)

| |S|S|
| | |S|

snake.move("U"); -> Returns -1 (Game over because snake collides with border)
var SnakeGame = function(width, height, food) {
    this.bodySet = new Set();
    this.bodySet.add(0);
    this.bodyQ = new Array;
    this.bodyQ.push(0);
    this.width = width;
    this.height = height;
    this.food = food;   
    this.toNum = function(pos) {
        return (pos[0]*width + pos[1]); //downsize the 2D position to 1D
    }
};

SnakeGame.prototype.move = function(direction) {
    var tail = this.bodyQ.shift();
    this.bodySet.delete(tail);
    if(this.bodyQ.length === 0) {
        var newHead = tail;
    } else {
        var newHead = this.bodyQ[this.bodyQ.length -1];
    }
    var col = Math.trunc(newHead/this.width);
    var row = newHead%this.width;
    switch(direction) {
        case 'R':
            row++;
            break;
        case 'L':
            row--;
            break;
        case 'U':
            col--;
            break;
        case 'D':
            col++;
            break;
    } 
    
    newHead = this.toNum([col, row]);
    if(col<0 || col>this.height -1 || row<0 || row>this.width -1 || this.bodySet.has(newHead)) {
        return -1;
    }
    this.bodySet.add(newHead);
    this.bodyQ.push(newHead);
    if(this.food && this.food[0] && this.toNum(this.food[0]) === newHead) {      
        this.bodySet.add(tail);
        this.bodyQ.unshift(tail);
        this.food.shift();      
    }
    return (this.bodyQ.length -1);
};
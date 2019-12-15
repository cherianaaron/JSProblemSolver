/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function PuzzleState(tiles) {

    
    this.tiles = tiles;
    
    var topBot = "+---+---+---+\n";

    this.toString = function() {
	// You provide

        var s = "";
        s+= topBot;
            for(var row = 0; row<3 ;row++){
              s+= "| ";  
                for(var column = 0; column< 3; column ++){
                    if(tiles[row][column] === 0)
                    {
                       s += "  | ";
                    }
                    else{
                       s += tiles[row][column] + " | ";
                        
                    }
                    
                }
                s += "\n";
                s+= topBot;
            }
            return s;
        
    };

    this.equals = function(other) {
	// You provide
        if (typeof other === typeof this) {
            return other.toString() === this.toString();
        }
        return false;
    };
    
    this.getLocation = function(tile) {
        for (var r = 0; r < 3; r++) {
            for (var c = 0; c < 3; c++) {
                if (this.tiles[r][c] === tile) {
                    return {row: r, column: c};
                }
            }
        }
        //throw new RuntimeException("Tile " +tile+ " not found in\n" +toString());
    };
    
    this.swap = function(loc1, loc2) {
      var tile1= this.tiles[loc1.row][loc1.column];
      var tile2 = this.tiles[loc2.row][loc2.column];
      var tile = [[0,0,0],[0,0,0],[0,0,0]]; //temp
        for(var r = 0; r<3;r++)
        {
           for(var c = 0; c<3;c++)
           {
             tile[r][c] = this.tiles[r][c];//deep copy  
           }
        }
      var puzzleState = new PuzzleState(tile);
      puzzleState.tiles[loc1.row][loc1.column] = tile2;
      puzzleState.tiles[loc2.row][loc2.column] = tile1;
      return puzzleState;
};
    

    // Other properties and methods here

    this.makeCanvas = function() {
	return this.makeDefaultCanvas(this);
    };
}

PuzzleState.prototype = STATE_PROTO;

// Helper functions here



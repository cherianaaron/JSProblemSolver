/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const SLIDE_1 = "Slide 1";
const SLIDE_2 = "Slide 2";
const SLIDE_3 = "Slide 3";
const SLIDE_4 = "Slide 4";
const SLIDE_5 = "Slide 5";
const SLIDE_6 = "Slide 6";
const SLIDE_7 = "Slide 7";
const SLIDE_8 = "Slide 8";

var puzzleMover = new Mover();

puzzleMover.addMove(SLIDE_1, (s) => tryMove(s, 1)); // You provide move functions
puzzleMover.addMove(SLIDE_2, (s) => tryMove(s, 2) );
puzzleMover.addMove(SLIDE_3, (s) => tryMove(s, 3) );
puzzleMover.addMove(SLIDE_4, (s) => tryMove(s, 4) );
puzzleMover.addMove(SLIDE_5, (s) => tryMove(s, 5) );
puzzleMover.addMove(SLIDE_6, (s) => tryMove(s, 6) );
puzzleMover.addMove(SLIDE_7, (s) => tryMove(s, 7) );
puzzleMover.addMove(SLIDE_8, (s) => tryMove(s, 8) );

function PuzzleMover() { }

PuzzleMover.prototype = puzzleMover;

// Helper functions here
function tryMove(state, tile) {
    
/* For Reference from PuzzleMover.java */    
//    var state = state;
//    var tileLocation = state.getLocation(tile);
//    var blankLocation = state.getLocation(0);
//    
//    var tileRow = tileLocation.row;
//    var tileColumn = tileLocation.column;
//    var blankRow = blankLocation.row;
//    var blankColumn = blankLocation.column;
//
//    
//    if (tileRow !== blankRow && tileColumn !== blankColumn) {
//      return null;
//    }
//    
//    if (tileRow !== blankRow + 1 && 
//        tileRow !== blankRow - 1 && 
//        tileColumn !== blankColumn + 1 && 
//        tileColumn !== blankColumn - 1)
//    {
//      return null;
//    }
//    return new PuzzleState(state, tileLocation, blankLocation);

    var new_location = state.getLocation(tile); 
    var emptySlide = state.getLocation(0);
    if(new_location.row === emptySlide.row)
    {
        if(new_location.column-emptySlide.column ===1 || new_location.column-emptySlide.column === -1)
            {
                return state.swap(new_location,emptySlide);
            }
    }
    else if(new_location.column === emptySlide.column)
    {
      if(new_location.row-emptySlide.row === 1 || new_location.row - emptySlide.row === -1)
      {
         return state.swap(new_location,emptySlide);
      }
    }
    return null;
  
}




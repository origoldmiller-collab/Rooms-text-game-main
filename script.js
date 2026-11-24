let arrOfRooms = [];
let curentRoom;

document.getElementById("tester").addEventListener("click", reset);

function test(){

}

function reset(){
    console.clear()
    arrOfRooms.push(new Room())
    curentRoom = arrOfRooms[0];
    console.log(curentRoom.description)
}

class Room{
    constructor(){
        this.arrOfActions = [this.lookAround,]
        this.objIn = []
        this.furnIn = []
        this.northDorTru = true;
        this.eastDorTru = true;
        this.southDorTru = true;
        this.westDorTru = true;
        this.extraOpeans1 = false
        this.extraOpeans2 = false
        this.extraOpeans3 = false
        this.extraOpeans4 = false
        this.northDor = null;
        this.eastDor = null;
        this.southDor = null;
        this.westDor = null;
        this.description = "You enter an empty room stave the wood facade wallpaper and linolium flooring a single light bulb hangs fromt the ceiling. Four doors lead to exits from this room on for each of the cardenail directions." 
    }
    lookAround(){
        console.log("there seams to be nothin of importaince in here");
    }
}
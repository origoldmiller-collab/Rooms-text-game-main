let arrOfRooms = [];
let curentRoom;
//let arrOfBaseActions = [new Word("look around", curentRoom.lookAround()), new Word("investiagte", curentRoom.lookAround())];

document.getElementById("tester").addEventListener("click", reset);
document.getElementById("response").addEventListener("change", InterpResponse)

function InterpResponse(){
    //Get data from the page and format it
    let response = document.getElementById("response").value.toLowerCase()
    console.log(response)

    actionGoTo = curentRoom.arrOfActions.filter( (element) => {
        return response.contains(element.tag)
    })
    console.log(actionGoTo);
    
}


function reset(){
    console.clear()
    arrOfRooms.push(new Room())
    curentRoom = arrOfRooms[0];
    console.log(curentRoom.description)
}

class Word{
    constructor(tag, funct){
        this.tag = tag
        this.functionGoTo = funct
    }
}

class Room{
    constructor(){
        this.arrOfActions = [new Word("inspect", this.lookAround())]
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
        console.log("there seems to be nothing of importaince in here");
    }
}
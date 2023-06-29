const gameBoard = (() => {
    let board = new Array(9);

    const getBoard = () => {

        for (let i = 0;i < 9; i++){
            document.getElementById("board").childNodes[2*i +1].textContent = "0"
        }
        return board;
    }

    const placeMark = (pos, player) => {
        board[pos] = 'X';
        console.log(board)
    }

    return {
        getBoard, placeMark,
    };
}
)();

const gameController = (() => {
    const board = gameBoard;
    board.getBoard();

    const switchPlayerTurn = () => {
    }

    const playRound = () => {
        let pos = prompt("choose spot");
        if(pos == "stop"){      // TEMPORARY should check for win/lose/draw
            return
        }
        board.placeMark(pos);
    }

    playRound()
})();

const player = (name, marker) => {
    const test = () => {
        console.log (name + " is my name");
    };
    return{name, marker, test};
};

gameController


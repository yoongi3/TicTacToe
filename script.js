const gameBoard = (() => {
    let board = new Array(9);

    const getBoard = () => {

        for (let i = 0;i < 9; i++){
            document.getElementById("board").childNodes[2*i+1].textContent = " "
        }
        return board;
    }

    const placeMark = (pos, player) => {
        board[pos] = 'X'
        document.getElementById("board").childNodes[2*pos+1].textContent = 'X';
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

    const makeMove = (pos) => {
        board.placeMark(pos)
    }

    return{
        makeMove
    };
})();

const displayController = (() => {
    const board = gameBoard;

    const htmlBoard = Array.from(document.querySelectorAll('button.field'));
    
    for(let i=0;i<htmlBoard.length;i++){
        const button = htmlBoard[i]
        button.addEventListener('click', gameController.makeMove.bind(button, i))
    }
})();

const player = (name, marker) => {
    const test = () => {
        console.log (name + " is my name");
    };
    return{name, marker, test};
};

gameController


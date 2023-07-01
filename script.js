const gameBoard = (() => {
    let board = new Array(9);

    const resetBoard = () => {
        for (let i = 0;i < 9; i++){
            document.getElementById("board").childNodes[2*i+1].textContent = " ";
            board[i] = undefined;
        }
    }

    const placeMark = (pos, marker) => {
        board[pos] = marker
        document.getElementById("board").childNodes[2*pos+1].textContent = marker;
        console.log(board)
    }

    return { 
        board, resetBoard, placeMark,
    };
}
)();

const player = (name, marker) => {
    return{name, marker};
};

const gameController = (() => {
    const board = gameBoard;
    let player1 = player('p1', 'X')
    let player2 = player('p2', 'O')

    let activePlayer = player1;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === player1 ? player2 : player1
    }

    const makeMove = (pos) => {
        if (board.board[pos] === undefined)
            {board.placeMark(pos, activePlayer.marker)
            switchPlayerTurn()
            return
        }
        console.log("spot taken")
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





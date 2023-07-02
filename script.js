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
            if(checkForWin()){
                console.log("winner")
            }
            return
        }
        console.log("spot taken")
    }
    
    const checkForWin = () => {
        if (checkForRow() || checkForColumn() || checkForDiagonal()){
            return true;
        }
        return false;
    }
    const checkForRow = () =>{
        for (let i=0; i<3; i++){
            let row = []
            for (let j=3*i; j<3*i+3; j++){
                row.push(board.board[j])
            }
            if (row.every(field => field === "X") || row.every(field => field === "O")){
                console.log('row')
                return true
            }
        }  
        return false;
    }
    const checkForColumn = () =>{
        for (let i=0; i<3; i++){
            let col = []
            for (let j=0; j<3; j++){
                col.push(board.board[i+3*j])
            }
            if (col.every(field => field === "X") || col.every(field => field === "O")){
                console.log('col')
                return true
            }
        }  
        return false;
    }
    const checkForDiagonal = () => {
        let cond1 = [board.board[0],board.board[4],board.board[8]]
        let cond2 = [board.board[2],board.board[4],board.board[6]]
        if (cond1.every(field => field === "X") || cond1.every(field => field === "O")){
            return true
        }
        if (cond2.every(field => field === "X") || cond2.every(field => field === "O")){
            return true
        }
        return false;
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





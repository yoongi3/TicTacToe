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

    const startingPlayer = ()=> {
        activePlayer = player1
    }
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === player1 ? player2 : player1
    }

    const makeMove = (pos) => {
        if (board.board[pos] === undefined){

            board.placeMark(pos, activePlayer.marker)

            if(checkForWin()){
                console.log(activePlayer.marker+' wins');
                activePlayer = player1;
                board.resetBoard();
                return;
            }
            else if(checkForDraw()){
                console.log('draw')
                activePlayer = player1
                board.resetBoard();
                return;
            }

            switchPlayerTurn()
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
    const checkForDraw = () => {
        for (let i=0; i<9; i++){
            if (board.board[i] == undefined){
                return false
            }
        }
        return true;
    }
    const checkForRow = () =>{
        for (let i=0; i<3; i++){
            let row = []
            for (let j=3*i; j<3*i+3; j++){
                row.push(board.board[j])
            }
            if (row.every(field => field === "X") || row.every(field => field === "O")){
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
        makeMove, startingPlayer
    };
})();

const displayController = (() => {
    const board = gameBoard;

    const changeName1 = document.getElementById('player1');
    const changeName2 = document.getElementById('player2');
    const resetBtn = document.getElementById('reset');

    const result = document.getElementById('result');

    const htmlBoard = Array.from(document.querySelectorAll('button.field'));
    
    for(let i=0;i<htmlBoard.length;i++){
        const button = htmlBoard[i]
        button.addEventListener('click', gameController.makeMove.bind(button, i))
    }

    changeName1.addEventListener('click', function() {console.log('hi')})
    changeName2.addEventListener('click', function() {console.log('hi')})
    

    const reset = () =>{
        board.resetBoard();
        gameController.startingPlayer();
        result.textContent = " ";
    }
    resetBtn.addEventListener('click', reset)

})();





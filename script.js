const gameBoard = (() => {
    let board = [['1','2','3'],['4','5','6'],['7','8','9']]
    const getBoard = () => {
        console.log(board)
        return board;
    }
    return {
        getBoard,
    };
}
)();

const gameController = (() => {
    // checkForWin()
})();

const player = (name, marker) => {
    const test = () => {
        console.log (name + " is my name");
    };
    return{name, marker, test};
};

const player1 = player('p1','x')

gameBoard.getBoard();
player1.test();

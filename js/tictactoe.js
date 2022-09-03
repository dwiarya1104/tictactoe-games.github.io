let columns = document.querySelectorAll('.column')
console.log('columns')

let check = 'X';
const checkWin = () => {
    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    let winner = ''
    winConditions.forEach(condition => {
        let columnOne = columns[condition[0]].innerHTML
        let columnTwo = columns[condition[1]].innerHTML
        let columnThree = columns[condition[2]].innerHTML

        if (columnOne == '' || columnTwo == '' || columnThree == '') return
        else if (columnOne == columnTwo && columnTwo == columnThree) {
            winner = columnOne
            alert('WINNER : ' + winner)
            return true
        }
    })
}
const clickColumn = (columnNumber) => {
    // proses algoritma tic tac toe
    let clickedColumn = columns[columnNumber]

    // one click 
    if (clickedColumn.classList.contains('already-clicked')) {
        return
    } else {
        clickedColumn.classList.add('already-clicked')
    }

    clickedColumn.innerHTML = check
    if (check == 'X') check = 'O'
    else if (check == 'O') check = 'X'

    // win or lose
    checkWin()
}

columns.forEach((column, index) => {
    // setiap div disimpen di dalam variable 'column'
    column.addEventListener('click', () => {
        console.log(`Column ${index + 1} clicked`)
        clickColumn(index)
    })
})
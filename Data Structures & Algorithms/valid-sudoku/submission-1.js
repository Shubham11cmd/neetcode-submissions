class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let m1 = new Map()
        let m2 = new Map()
        let m3 = new Map()
        let m = new Map()
        for( let i = 0 ; i<board.length ; i++){
            for(let j = 0 ; j< board.length ; j++){
                if(board[i][j] != "."){
                    if(m.has(board[i][j])){
                        return false
                    }
                    if(j<=2){
                        if(m1.has(board[i][j])){
                            return false
                        }
                        else{
                            m1.set(board[i][j],0)
                        }
                    }
                    else if(j>=3 && j<=5){
                        if(m2.has(board[i][j])){
                            return false
                        }
                        else{
                            m2.set(board[i][j],0)
                        }
                    }
                    else{
                        if(m3.has(board[i][j])){
                            return false
                        }
                        else{
                            m3.set(board[i][j],0)
                        }
                    }
                    m.set(board[i][j],0)           
                }       
            }
            m.clear()
            console.log(m1)
            console.log(m2)
            console.log(m3)
            if(i==2 || i==5 || i==8){
                m1.clear()
                m2.clear()
                m3.clear()
            }
        }
        m.clear()

        for( let i = 0 ; i<board.length ; i++){
            for(let j = 0 ; j< board.length ; j++){
                if(board[j][i] != "."){
                    if(m.has(board[j][i])){
                        return false
                    }
                    
                        m.set(board[j][i],0)
                }       
            }
            m.clear()
        }
        return true
    }
}


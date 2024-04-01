import React, { useState } from 'react'

export const Tic = () => {
    const [board,setBoard] = useState(Array(9).fill(''))
    const [Move , setMove] = useState('X')

    const handleXandy = (n) =>{
        console.log("hah",n);
        let square = [...board]
        if(board[n]!==""){
            return
        }
        square[n] = Move;
        setBoard(square)
        if(Move === "X")
        {
            setMove('O')
        }
        else{
            setMove('X')
        }
     if (checkWin(square)){
alert(`winner is ${Move}`)
square.fill('')
     }
     if(draw(square)){
        alert('match draw')
        square.fill('')

     }
    }
const draw = (board) =>{
    let count= 0
    board.forEach(ele=>{
        if(ele !==""){
            count++
        }
    })
    if(count>=9)
    {
        return true
    }
    else{
        return false
    }
}

    const checkWin = (board) =>{
        const conditions =[
    [0,1,2] ,
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

        ]
        let flag = false
        conditions.forEach(ele=>{
            if(board[ele[0]]!=="" && board[ele[1]]!=="" && board[ele[2]]!=="")
            if(board[ele[0]]===board[ele[1]] && board[ele[1]]===board[ele[2]] )
            {
             flag = true
            }
        })
return flag    }



  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <td onClick={()=>handleXandy(0)}>{board[0]}</td>
                    <td onClick={()=>handleXandy(1)}>{board[1]}</td>
                    <td onClick={()=>handleXandy(2)}>{board[2]}</td>
                </tr>
                <tr>
                    <td onClick={()=>handleXandy(3)}>{board[3]}</td>
                    <td onClick={()=>handleXandy(4)}>{board[4]}</td>
                    <td onClick={()=>handleXandy(5)}>{board[5]}</td>
                </tr>
                <tr>
                    <td onClick={()=>handleXandy(6)}>{board[6]}</td>
                    <td onClick={()=>handleXandy(7)}>{board[7]}</td>
                    <td onClick={()=>handleXandy(8)}>{board[8]}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

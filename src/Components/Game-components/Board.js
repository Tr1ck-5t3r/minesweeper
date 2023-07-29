import React,{useState,useEffect} from 'react';
import CreateBoard from '../Utils/CreateBoard';
import { revealed } from "../Utils/Reveal";
import Cell from './Cell';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Board() {
    const[nonminesClicked,updateNonMinesClicked]=useState(0);
    const[no_mines,updateMines]=useState(20); 
    const [grid,setGrid]=useState([]);
    const [nonMinecount,setNonMinecount]=useState(0);
    const [mineLocation,setmineLocation]=useState([]);
    const style={
        display : 'flex',
        flexDirection : 'row',
    }
    useEffect(()=>{
        freshBoard();
    },[]);
    const counternonmines = () =>
    {
        let c=0;
        for (let i=0;i<10;i++)
        {
            for (let j = 0; j < 10; j++) 
            {
                if (grid[i][j].value!=="X" && grid[i][j].revealed===true)
                {
                    c++;
                }
            }
        }
        return c;
    }
    const updateNumberOfMines = event => {
        updateMines(event.target.value)
        const newBoard=CreateBoard(10,10,no_mines);
        setNonMinecount(10*10-no_mines);
        setmineLocation(newBoard.mineLocation);
        setGrid(newBoard.board);
        updateNonMinesClicked(counternonmines());
    }  
    // Making freshboard atstart
    const freshBoard = () => {
        const newBoard=CreateBoard(10,10,no_mines);
        setNonMinecount(10*10-20);
        setmineLocation(newBoard.mineLocation);
        setGrid(newBoard.board);
    }

    const updateFlag=(e,x,y)=>{
        e.preventDefault();
        // deep copy of the object
        let newGrid=JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged=true;
        console.log(newGrid[x][y]);
        setGrid(newGrid);
        updateNonMinesClicked(counternonmines());
    }
    const newfresh=()=>{
        freshBoard();
        updateNonMinesClicked(counternonmines());
    }
    const revealcell=(x,y)=>{
        let newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="X"){
            toast.dark(' Clicked on Mine ,Try Again', { position: "top-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            for(let i=0;i<mineLocation.length;i++){
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed=true;
            }
            setGrid(newGrid);
            setTimeout(newfresh,500);
        }
        if((10*10 - nonminesClicked-no_mines)===0){
            toast.success('Wohoo!!,You won',{ position: "top-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            setTimeout(newfresh,1500);
        }
        else{
            let revealedboard=revealed(newGrid,x,y,nonMinecount);
            setGrid(revealedboard.arr);
            setNonMinecount(revealedboard.newNonMines);
            updateNonMinesClicked(counternonmines());
        }
        
    }
    
    return (
      <div>
        <div className="parent" style={{minwidth:'700px',padding:'20px',border: '1px solid rgba(98, 130, 158, 0.557)',borderRadius:'15px'}}>
            <div className='game-window' style={{display:'flex',}}>
              <div className='game'>
                  {/* <h3 style={{color:'white',textAlign:'center',fontSize:'30px',margin:'0px'}}>Non-Mines - {nonMinecount}</h3> */}
                  <ToastContainer></ToastContainer>
                  {grid.map((singlerow,index1)=>{
                      return (
                          <div style={style} key={index1}>
                              {singlerow.map((singlecol,index2)=>{
                              return  <Cell details={singlecol} key={index2} updateFlag={updateFlag} revealcell={revealcell}/>
                              })}
                              
                          </div>
                      )
                  })}
                </div>
                <div style={{display:'flex',flexDirection:"column",justifyContent:'center',alignContent:'center',minWidth:'400px',color:'white',padding:"30px"}}>
                    <div>
                        <h1 style={{fontSize:'40px'}}>Minesweeper</h1>
                        <h2 style={{fontSize:'20px',marginTop:'30px'}}>Total size: 10 X 10</h2>
                        <h2 style={{fontSize:'20px',marginTop:'30px'}}>Number of mines: {no_mines}</h2>
                        <h2 style={{fontSize:'20px',marginTop:'30px'}}>Number of non mines: {10*10 - no_mines}</h2>
                        <h2 style={{fontSize:'20px',marginTop:'30px'}}>Number of non mines left : {10*10 - nonminesClicked-no_mines}</h2>
                    </div>

                    <div>
                        <h2  style={{fontSize:'20px',marginTop:'30px'}}>Set no of mines: </h2>
                        <div style={{display:'flex',justifyContent:'space-evenly'}}>
                            <input id='no-mines' default="10" name="mines-value" onChange={updateNumberOfMines} value={no_mines} type='number' max={"100"} min={"2"} style={{height:'30px',width:'100px',alignItems:'center'}}/>
                        </div>                        
                    </div> 
                </div>
            </div>
          
        </div>
      </div>
    ) 
}
export default Board;
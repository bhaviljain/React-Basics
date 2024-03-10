const Pagination = ({products, page, total,setPage}) =>{

    const HandlePagination =(selectedPage) =>{
        if(selectedPage >=1 && selectedPage <=total/10)
        {
            setPage (selectedPage)
            console.log(selectedPage);
            console.log(setPage);
        }
      
    }
    return(
  <>
  <div>
 <span onClick={()=>HandlePagination(page - 1)}
  className = {page <=1 ? "left-disable" : ""}

 >⬅️ </span>
  
    {[...Array(total/10)].map((img,index)=>(
        <span onClick={()=>HandlePagination(index + 1)}
        className={page === index + 1 ?"page-selected" : ""}
        >{index + 1} </span>
    ))}
 <span onClick={()=>HandlePagination(page + 1)}
  className = {page >=total/10 ? "right-disable" : ""}
 >
 ➡️
 </span>
 </div>
</>
    )

}

export default Pagination
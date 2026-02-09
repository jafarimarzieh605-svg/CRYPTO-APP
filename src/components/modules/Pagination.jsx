
function Pagination({ page, setPage}) {

     const previousHandler = () => {
        if (page <= 1) return;
       setPage(() => page - 1 );

     } 

     const nextHandler = () => {
        if ( page >= 10 ) return;
       setPage(() => page + 1 );

     }




  return (
    <div>
     <button onClick={previousHandler}>previous</button>
     <p style={{ color: page === 1 ? "blue" : "inherit"}}>1</p>
     <p style={{ color: page === 2 ? "blue" : "inherit"}}>2</p>

     {
        page > 2 && page < 9  && (
            <>
            <span>...</span>
            <p>{page}</p>
            </>
        )     }
     <span>...</span>
     <p>9</p>
     <p>10</p>
     <button onClick={nextHandler}>next</button>
    </div>
  )
}

export default Pagination
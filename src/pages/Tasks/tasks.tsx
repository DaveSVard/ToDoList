import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, doToDo, selectToDo } from "../../features/toDo/toDoSlice";
import ReactPaginate from 'react-paginate';
import "./tasks.scss"



let itemsLength = Math.ceil(JSON.parse(localStorage.base).length)
let items = Array.from({length: itemsLength}, (elm, index) => index + 1);


//------------------------

export const Tasks:React.FC = React.memo(():JSX.Element => {

    const data = useSelector(selectToDo)
    const dispatch = useDispatch()
    console.log(data);

    const [pageNumber, setPageNumber] = useState<number>(0)

    const itemsPerPage = 4
    const pagesVisited = pageNumber * itemsPerPage
    
    const pageCount = Math.ceil(items.length / itemsPerPage)
    const changePage = ({selected}:any) => {
        setPageNumber(selected)
    }

    return(
        <div className="main">
            <div className="container">
                <div className="main__wrapper">
                    <h3 className="main__title"><span className="purpule">To</span><span className="cyan">Do</span></h3>
                    <div className="tasks">
                        {data.slice(pagesVisited, pagesVisited + itemsPerPage).map(elm => {
                            return(
                                <div className="tasks__item" key={elm.id}>
                                    <div className="tasks__item-info">
                                        {elm.done ? <i className="fa-regular fa-circle-check success"></i> : <i className="fa-regular fa-clock waiting"></i>}
                                        <div style={elm.done ? {textDecoration: "line-through"} : {}} className="info__text">
                                            <p onClick={() => dispatch(doToDo(elm.id))}><span>Title:</span> {elm.name}</p>
                                            <p><span>Desc:</span> {elm.description}</p>
                                        </div>
                                    </div>
                                    <div className="icons">
                                        <i onClick={() => dispatch(deleteToDo(elm.id))} className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            )   
                        })}
                    </div>
                    {itemsLength > itemsPerPage + 1 && (
                        <div className="pagination"> 
                            <ReactPaginate 
                                previousLabel={"<"}
                                nextLabel={">"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginationContainer"}
                                previousLinkClassName={"prevBtn"}
                                nextLinkClassName={"nextBtn"}
                                activeClassName={"activePagination"}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
})
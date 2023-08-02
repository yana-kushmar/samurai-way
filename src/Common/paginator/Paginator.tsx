import React, {memo, useState} from 'react';
import s from "../paginator/paginator.module.css";


type PaginatorPropsType = {
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    portionSize: number

}

const Paginator = memo(function (props: PaginatorPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionNumber = portionNumber * props.portionSize

    return <div className={s.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
            .map(p => {
                return <span
                    key={p}
                    className={props.currentPage === p ? s.selectedPage : ""}
                    onClick={(e) => props.onPageChanged(p)}
                >{p}</span>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
    </div>

})
export default Paginator;
import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
function Accordion({ items }){

    const [expandedIndex, setExpandedIndex] = useState()

    const handleClick = (nextIndex) => {
        if(expandedIndex === nextIndex){
            setExpandedIndex(-1)
        }else{
            setExpandedIndex(nextIndex)
        }
    }

    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex

        const content = isExpanded && <div>{item.content}</div>

        const icon = <span className='text-xl'>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>
        return (
            <div className='ml-3 pt-5'>
                <div key={item.id}></div>
                <div onClick={() => handleClick(index)} className="flex cursor-pointer justify-between mb-5">
                    {item.label}
                    {icon}
                </div>
                {content}
            </div>
        )
    })
    return <div>{renderedItems}</div>
}

export default Accordion
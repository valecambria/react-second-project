import { useState, useEffect, useRef } from "react"
import { GoChevronDown } from "react-icons/go";
function Dropdown({ options, value, onChange }){

    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current){
                return
            }

            if(!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    })


    return (
        <div ref={divEl} className="pl-5 pt-5 w-48 relative">
            <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full text-black" onClick={handleClick}>{value?.label || 'Select...'}<GoChevronDown className="text-lg"/></div>
            {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full text-black">{renderedOptions}</div>}
        </div>
    )
}
export default Dropdown
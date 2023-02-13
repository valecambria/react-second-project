
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SorteableTable(props){

    const {config, data} = props
    const {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    } = useSort(data, config)
    
    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column
        }
        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                <div className="flex items-center">
                {getIcons(column.label, sortBy, sortOrder)}
                {column.label}
                </div>
                </th>
        }
    })


    return ( 
        <Table {...props} data={sortedData} config={updatedConfig}></Table>
    )
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return <div><GoArrowSmallUp></GoArrowSmallUp><GoArrowSmallDown></GoArrowSmallDown></div>
    }
    if(sortOrder === null){
        return <div><GoArrowSmallUp></GoArrowSmallUp><GoArrowSmallDown></GoArrowSmallDown></div>
    }else if(sortOrder === 'asc'){
        return <div><GoArrowSmallUp></GoArrowSmallUp></div>
    }else if(sortOrder === 'desc'){
        return <div><GoArrowSmallDown></GoArrowSmallDown></div>
    }
}
export default SorteableTable
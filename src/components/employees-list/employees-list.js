import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    //// If there is no unique indexer
    // const elements = data.map((item, i) => {
    //     return (
    //         <EmployeesListItem key={i} {...item}/>
    //     )
    // })

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // name = {item.name} salary={item.salary} ===  {...item}
            <EmployeesListItem key={id} {...itemProps}
                               onDelete={() => onDelete(id)}
                               onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
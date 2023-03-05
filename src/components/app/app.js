import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Jahn C.', salary: 800, increase: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: true, id: 3}
            ],
            idMax: 4
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(el => el.id !== id)}
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            id: this.state.idMax
        }

        this.setState(({data, idMax}) => {
            const newArray = [...data, newItem];
            return {
                data: newArray,
                idMax: this.state.idMax + 1
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={this.state.data} onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;
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
                {name: 'Jahn C.', salary: 800, increase: true, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: true, rise: false, id: 3}
            ],
            term: '',
            filter: 'all',
            idMax: 4
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(el => el.id !== id)}
        })
    }

    addItem = (name, salary) => {
        if (name.trim() && name.length >= 2 && salary.trim()) {
            const newItem = {
                name: name,
                salary: salary,
                increase: false,
                rise: false,
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
    }

    // onToggleIncrease = (id) => {
    //     // this.setState(({data}) => {
    //     //     const index = data.findIndex(elem => elem.id === id);
    //     //     const old = data[index];
    //     //     const newItem = {...old, increase: !old.increase};
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //     //     return {data: newArr};
    //     // })
    //
    //     this.setState(({data}) => ({
    //         data: data.map(el => {
    //             if (el.id === id) {
    //                 return {...el, increase: !el.increase}
    //             }
    //             return el;
    //         })
    //     }))
    // }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(el => {
    //             if (el.id === id) {
    //                 return {...el, rise: !el.rise}
    //             }
    //             return el;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(el => {
                if (el.id === id) {
                    return {...el, [prop]: !el[prop]}
                }
                return el;
            })
        }))
    }

    getEmployeesCount = () => {
        return this.state.data.length;
    }

    getEmployeesAwardCount = () => {
        const newArray = this.state.data.filter(el => el.increase)
        return newArray.length;
    }

    searchEmp = (item, term) => {
        if (!term) {
            return item;
        }

        return item.filter(el => el.name.indexOf(term) > -1);
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(el => el.rise);
            case 'moreThen1000':
                return items.filter(el => el.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={this.getEmployeesCount()} employeesAward={this.getEmployeesAwardCount()}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList data={visibleData}
                               onDelete={this.deleteItem}
                               onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;
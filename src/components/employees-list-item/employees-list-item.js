import './employees-list-item.css';
import {Component} from "react";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            rise: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onRise = () => {
        this.setState(( ({rise}) => ({
            rise: !rise
        })))
    }

    render() {
        const {name, salary} = this.props;
        let {increase, rise} = this.state;

        let className = "list-group-item d-flex justify-content-between";
        if (increase) {
            className += ' increase';
        }
        if (rise) {
            className += ' like';
        }

        return (
            <li className={className}>
                <span className="list-group-item-label" onClick={this.onRise}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button" className="btn-cookie btn-sm " onClick={this.onIncrease}>
                        <i className="fas fa-cookie"/>
                    </button>
                    <button type="button" className="btn-trash btn-sm ">
                        <i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;
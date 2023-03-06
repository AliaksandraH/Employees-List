import './app-info.css'

const AppInfo = (props) => {
    const {employees, employeesAward} = props;
    return (
        <div className="app-info">
            <h1>Accounting of employees in the company</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>The award will be received: {employeesAward}</h2>
        </div>
    )
}

export default AppInfo;
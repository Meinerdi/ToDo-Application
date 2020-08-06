import React, {Component} from 'react'
import style from '../styles.module.scss'

export class AddTaskField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            valueOfTaskNameField: "",
            valueOfDateField: ""
        }
    }

    componentDidMount() {
        this.setState({...this.state,
            valueOfTaskNameField: localStorage.getItem("valueOfAddTaskName"),
            valueOfDateField: localStorage.getItem("valueOfAddTaskDate")
        })
    }

    handleTaskNameChange = e => {
        this.setState({
            valueOfTaskNameField: e.target.value
        })
        localStorage.setItem("valueOfAddTaskName", e.target.value)
    }

    handleDateChange = e => {
        this.setState({
            valueOfDateField: e.target.value
        })
        localStorage.setItem("valueOfAddTaskDate", e.target.value )
    }

    handleSubmitTask = e => {
        e.preventDefault()
        this.props.onAddTask(
            this.state.valueOfTaskNameField,
            this.state.valueOfDateField
        )
    }

    render() {
        let {valueOfTaskNameField, valueOfDateField} = this.state
        let {emptyFields} = this.props

        return (
            <form>
                <input 
                    type="text" 
                    value={valueOfTaskNameField} 
                    onChange={this.handleTaskNameChange}
                    className={emptyFields.taskName ? style.error : ""}
                    placeholder="Write task name..."
                />
                <input 
                    type="date" 
                    value={valueOfDateField} 
                    onChange={this.handleDateChange}
                    className={emptyFields.taskDate ? style.error : ""}
                />
                <input type="submit" value={"Add task"} onClick={this.handleSubmitTask}/>
            </form>
        )
    }  
}
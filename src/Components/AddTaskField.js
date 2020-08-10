import React, {Component} from 'react'
import s from '../styles.module.scss'

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

        if(this.state.valueOfTaskNameField && this.state.valueOfDateField) {
            this.setState({
                valueOfTaskNameField: "",
                valueOfDateField: ""
            })

            localStorage.setItem("valueOfAddTaskName", "")
            localStorage.setItem("valueOfAddTaskDate", "" )
        }
    }

    render() {
        let {valueOfTaskNameField, valueOfDateField} = this.state
        let {emptyFields} = this.props

        return (
            <form className={s.addTaskForm}>
                <input 
                    type="text" 
                    value={valueOfTaskNameField} 
                    onChange={this.handleTaskNameChange}
                    className={emptyFields.taskName ? s.error : ""}
                    placeholder="Write task name..."
                />
                <input 
                    type="date" 
                    value={valueOfDateField} 
                    onChange={this.handleDateChange}
                    className={emptyFields.taskDate ? s.error : ""}
                />
                <input type="submit" value={"Add task"} onClick={this.handleSubmitTask}/>
            </form>
        )
    }  
}
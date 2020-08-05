import React, {Component} from 'react'

export class TasksContainer extends Component {
    handleDelete = e => {
        this.props.onDeleteTask(e.target.value)
    }

    handleComplete = e => {
        this.props.onCompleteTask(e.target.value)
    }

    render() {
        let {tasks, searchActivated, searchedTasks} = this.props
        let data = searchActivated ? searchedTasks : tasks
        
        return (
            <ol>
                {data.map(i => (
                    <li key={i.id}>
                        <input 
                            type="checkbox" 
                            checked={i.done} 
                            onChange={this.handleComplete} 
                            value={i.id}
                        />
                        {i.name} {i.date}
                        <button value={i.id} onClick={this.handleDelete}>Delete</button>
                    </li>
                ))}
            </ol>
        )
    }
}
import React, {Component} from 'react'
import s from './../styles.module.scss'

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
            <ol className={s.tasksContainer}>
                {data.map(i => (
                    <li key={i.id} className={s.taskHolder}>
                        <div className={s.taskNameHolder}>
                            <input 
                                type="checkbox" 
                                checked={i.done} 
                                onChange={this.handleComplete} 
                                value={i.id}
                                className={s.checkbox}
                            />
                            <span>{i.name}</span>
                            
                        </div>
                        <span className={s.date}>{i.date}</span>
                        <button value={i.id} onClick={this.handleDelete}>Delete</button>
                    </li>
                ))}
            </ol>
        )
    }
}
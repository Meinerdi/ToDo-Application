import React, {Component} from 'react'
import s from './../styles.module.scss'
import empty from './../assets/empty.png'

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
        console.log(data)
        return (
            <ol className={s.tasksContainer}>
                {data.map(i => (
                    <li key={i.id} className={`${s.taskHolder} ${i.done ? s.completed : ""}`}>
                        <input 
                            type="checkbox" 
                            checked={i.done} 
                            onChange={this.handleComplete} 
                            value={i.id}
                            className={s.checkbox}
                        />
                        <span className={s.taskName}>
                            {i.name}
                        </span>
                        <div className={s.rightHolder}>
                            <span className={s.date}>{i.date}</span>
                            <button value={i.id} onClick={this.handleDelete} className={s.delete_button}>Delete</button>
                        </div>
                    </li>
                ))}

                {!data.length && <img src={empty} alt="No Tasks" className={s.emptyImage}/> }
            </ol>
        )
    }
}
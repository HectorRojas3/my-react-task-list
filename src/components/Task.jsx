/* task y onToggle se reciben como props
se usan para cambiar el estado de la tarea */
export default function Task ({task, onToggle}) {
    return (
        <div classname="task">
            <label>
                {/* checkbox para mostrar el estado de la tarea */}
                <input type="checkbox" 
                /* atributo cuyo valor depende de la propiedad done */
                checked={task.done}
                onChange={() => onToggle(task.id)}
                />
                {/* apartado para mostrar el nombre de la tarea */}
                <span className={task.done ? 'done' : ''}>
                    {task.name}
                </span>
            </label>
        </div>
    )
}
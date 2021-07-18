import { useState } from "react";

const NewTodoForm = ({onSubmit}) => {
    const [form, setForm] = useState({});
    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <form>
            <div className="form-group">
                <label htmlFor="task">Task:</label>
                <input onChange={onChange} name="task" type="textarea" className="form-control" id="task" placeholder="task" value={form.task || ""} />
            </div>
            <input type="submit"  data-testid="task-submit" onClick={e => {
                e.preventDefault();
                onSubmit(form);
                setForm({});
            }} />
        </form>
    );
}

export default NewTodoForm;
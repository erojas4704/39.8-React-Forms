import { useState } from "react";

const NewBoxForm = ({ onSubmit }) => {
    const [form, setForm] = useState({});
    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <form onChange={onChange}>
            <div className="form-group">
                <label htmlFor="width">Width</label>
                <input onChange={onChange} name="width" type="number" className="form-control" id="width" placeholder="Width" value={form.width || ""} />
            </div>
            <div className="form-group">
                <label htmlFor="height">Height</label>
                <input onChange={onChange} name="height" type="number" className="form-control" id="height" placeholder="height"  value={form.height || ""}/>
            </div>
            <div className="form-group">
                <label htmlFor="color">Color</label>
                <input onChange={onChange} name="color" type="text" id="color" value={form.color || ""}/>
            </div>
            <input data-testid="box-submit" type="submit" onClick={e => {
                e.preventDefault();
                onSubmit(form);
                setForm({});
            }} />
        </form>
    );
}

export default NewBoxForm;
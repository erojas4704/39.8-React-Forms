import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';
import "./BoxList.css"

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const addBox = form => {
        setBoxes([
            ...boxes,
            {
                width: form.width,
                height: form.height,
                color: form.color,
                key: uuid()
            }
        ]);
    }

    const deleteBox = key => {
        setBoxes(boxes.filter(b => b.key !== key));
    }

    return (
        <>
            <NewBoxForm onSubmit={form => addBox(form)} />
            <div className="box-container">
                {boxes.map(box =>
                    <Box
                        color={box.color}
                        width={box.width}
                        height={box.height}
                        key={box.key}
                        deleteHandler={() => deleteBox(box.key)}
                    />
                )}
            </div>
        </>
    );
}

export default BoxList;
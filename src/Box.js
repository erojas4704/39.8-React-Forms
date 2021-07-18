import "./Box.css"

const Box = ({ color, width, height, deleteHandler}) => {

    return (
        <>
            <div
                className="box"
                style={{
                    width: `${width}px`,
                    backgroundColor: color,
                    height: `${height}px`
                }}
                data-testid="box"
            >
            </div>
            <button className="delete" onClick={deleteHandler}>X</button>
        </>
    );
}

export default Box;
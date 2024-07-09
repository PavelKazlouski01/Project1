import './Mainpageee.css';

const Mainpageee = () => {
    return (
        <div className="Main">
            <button
                className="Text1"
                onClick={() =>
                    alert("xxxx")
                }

            >Text1</button>
            <button
                className="Text2"
                onClick={() =>
                    console.log("1")
                }
            >Text2</button>

        </div>

    )
}
export default Mainpageee;
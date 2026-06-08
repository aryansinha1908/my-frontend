import { useState, useEffect} from "react";


function Card(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [width, height]);

    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        </>
    );
}

export default Card;

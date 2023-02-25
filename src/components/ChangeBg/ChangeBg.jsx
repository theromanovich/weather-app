import { useState, useEffect } from "react"
const ChangeBg = () => {
    const [bg, setBg] = useState('blue-bg')

    useEffect(() => {
        document.documentElement.className = bg
    }, [bg])
    const setBlueBg = () => {
        setBg('blue-bg');
    }
    const setOrangeBg = () => {
        setBg('orange-bg');
    }
    const setGreenBg = () => {
        setBg('green-bg');
    }
    const setPinkBg = () => {
        setBg('pink-bg');
    }

    return (
        <div className="bg-buttons">
            <button onClick={setBlueBg}>Blue background</button>
            <button onClick={setOrangeBg}>Orange background</button>
            <button onClick={setGreenBg}>Turquoise background</button>
            <button onClick={setPinkBg}>Pink background</button>
        </div>
    )
}
export default ChangeBg
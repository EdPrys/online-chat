import React, { use, useEffect, useState } from "react";

type Props = {
    children: React.ReactNode
}

const Demo: React.FC<Props> = ({children}) => {
    const [count, setCount] = useState(0)
    const [log, setLog] = useState<number[]>([])

    const hendleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
        setCount(prevState => prevState + 1)
    }
    return <div>{children}
    <button onClick={hendleClick}>Upadete count</button>
    <p>Current count {count}</p>

    {log.map((currentLog, index) =>{
        return <p key={currentLog}>
            <>
            index {index +1} - {currentLog}
            </>
        </p>
    })}
    </div>
}

export default Demo;
import classNames from "classnames";
import React from "react";


type Props = {
    className?: string;
    children?: React.ReactNode;
}

const Heading: React.FC<Props> = ({className, children}) => {
    return (
        <h1 
            className={classNames(
                "mb-12 text-4xl font-medium text-center", 
                className
            )}
        >
            {children}
        </h1>
    )
}

export default Heading
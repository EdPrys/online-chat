import classNames from "classnames";
import React from "react"

type Props = {
    children: React.ReactNode;
    className?: string;
}

const Layout: React.FC<Props> = ({ className, children }) => {
    return <main className={classNames("main", className)}>{children}</main>
}

export default Layout
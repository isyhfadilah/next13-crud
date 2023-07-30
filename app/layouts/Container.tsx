import { ReactNode } from 'react'

interface ContainerProps {
    className?: string,
    children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({className, children}) => {
    return (
        <div className={`container ${className} sm:w-10/12 mx-auto px-4`}>
            {children}
        </div>
    )
}

export default Container
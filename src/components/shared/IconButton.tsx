const IconButton:React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-lg font-bold text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed ">
            {children}
        </div>
    )
}

export default IconButton;
const Shrink = () => {
    return (
        <div className="flex ...">
            <div className="flex-none w-14 h-14 border-2 border-cyan-700">
                01
            </div>
            <div className="shrink w-64 h-14 border-2 border-cyan-700">
                02
            </div>
            <div className="flex-none w-14 h-14 border-2 border-cyan-700">
                03
            </div>
        </div>
    )
}

export default Shrink
//.jsx = js xml ou js html que é um js que retorna html

export function Card({ title, onClick }){
    function handleClick() {
        if (onClick) onClick()
    }

    return (
        <div className="p-4 w-auto h-32 flex justify-center items-center text-center border-2 border-lime-300 cursor-pointer font-bold hover:bg-lime-300 hover:text-stone-900 rounded-3xl shadow-lg duration-700 text-lime-300"
        onClick={handleClick}>
            <h2 className="card-title">{title}</h2>
        </div>
    )
}
export function Loading(){
    return(
        <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto grid place-items-center h-screen">
            <div className="animate-pulse flex space-x-4 w-96">
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-stone-600 w-44 m-auto"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4"></div>
                        <div className="grid grid-cols-3 gap-4"></div>
                        <div className="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-stone-600 col-span-1"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4"></div>
                        <div className="h-2 bg-stone-600"></div>
                        <div className="h-2 bg-stone-600"></div>
                        <div className="h-2 bg-stone-600"></div>
                        <div className="h-2 bg-stone-600"></div>
                        <div className="h-2 bg-stone-600"></div>
                        <div className="grid grid-cols-3 gap-4"></div>
                        <div className="grid grid-cols-3 gap-4"></div>
                        <div className="grid grid-cols-3 gap-4"></div>
                        <div className="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-stone-600 col-span-1"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4"></div>
                        <div className="h-2 bg-stone-600"></div>
                        <div className="h-2 bg-stone-600"></div>
                        <div className="h-2 bg-stone-600"></div>
                        <div className="h-2 bg-stone-600"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
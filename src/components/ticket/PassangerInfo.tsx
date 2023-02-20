
type PassangerInfoProps = {
    name: string,
    seat: string,
}

export function PassangerInfo(props: PassangerInfoProps) {
    return (
        <div className="px-8 py-6 bg-white border-y border-dashed border-black border-opacity-30 rounded-2xl">
            <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center items-start">
                    <span className="text-sm opacity-60 -tracking-wider">
                        Passageiro
                    </span>
                    <span className="font-bold -tracking-wide">
                        {props.name}
                    </span>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <span className="text-sm opacity-60 -tracking-wider">
                        Assento
                    </span>
                    <span className="font-bold -tracking-wide">
                        {props.seat}
                    </span>
                </div>
            </div>
        </div>
    )
}
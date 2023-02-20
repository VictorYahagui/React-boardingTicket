import { AirplaneTakeoff } from "phosphor-react";
import { useState } from "react";

type FlightInfoProps = {
    flightValue: string,
    date: string,
    destinationCity: string,
    destinationCountry: string,
    boardingTimeInSeconds: number,
    boardingCity: string,
    boardingCountry: string,
    landingTimeInSeconds: number,
}

export function FlightInfo(props: FlightInfoProps) {

    const boardingTimeCalc = () => {
        const secondsOfCloseGate = props.boardingTimeInSeconds;
        const hour = (Math.floor(secondsOfCloseGate / 3600)).toString();
        let minutes = (Math.floor((secondsOfCloseGate % 3600) / 60)).toString();
        if (minutes === '0') {
            minutes = '00'
        }
        return (hour + ':' + minutes);
    }
    const [boardingTime, setboardingTime] = useState(boardingTimeCalc());
    const landingTimeCalc = () => {
        const secondsOfCloseGate = props.landingTimeInSeconds;
        const hour = (Math.floor(secondsOfCloseGate / 3600)).toString();
        let minutes = (Math.floor((secondsOfCloseGate % 3600) / 60)).toString();
        if (minutes === '0') {
            minutes = '00'
        }
        return (hour + ':' + minutes);
    }
    const [landingTime, setlandingTime] = useState(landingTimeCalc());
    return (
        <div className="bg-white rounded-2xl -tracking-wider">
            <div className="px-8 py-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col justify-center items-start">
                        <span className="text-sm opacity-60">
                            Voo
                        </span>
                        <span>
                            R${props.flightValue}
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-end">
                        <span className="text-sm opacity-60">
                            Data
                        </span>
                        <span>
                            {props.date}
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="flex flex-col justify-center items-start">
                        <span className="text-sm opacity-60 w-28">
                            {props.boardingCity}, {props.boardingCountry}
                        </span>
                        <strong className="text-4xl uppercasee ">
                            GRU
                        </strong>
                        <span>
                            {boardingTime}
                        </span>
                    </div>
                    <div className="flex justify-center items-center">
                        <AirplaneTakeoff size={26} />
                    </div>
                    <div className="flex flex-col justify-center items-end">
                        <span className="text-sm opacity-60 w-28">
                            {props.destinationCity}, {props.destinationCountry}
                        </span>
                        <strong className="text-4xl uppercasee">
                            SFO
                        </strong>
                        <span>
                            {landingTime}²
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { useState } from 'react'
import QR from '../../assets/qrGithub.png'

type BordingInfoProps = {
    boardingTimeInSeconds: number,
    terminal: number,
    gate: number,
    boardingGroup: number,

}

export function BordingInfo(props: BordingInfoProps) {

    const closeGate = () => {
        const secondsOfCloseGate = props.boardingTimeInSeconds + 1800;
        const hour = (Math.floor(secondsOfCloseGate / 3600)).toString();
        let minutes = (Math.floor((secondsOfCloseGate % 3600) / 60)).toString();
        if (minutes === '0') {
            minutes = '00'
        }
        return (hour + ':' + minutes);
    }
    const [convertedCloseGate, setConvertedCloseGate] = useState(closeGate());
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
    return (
        <div className="bg-white rounded-2xl -tracking-wider px-8 py-6">
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col justify-center items-start'>
                        <span className="text-sm opacity-60 -tracking-wider">
                            Embarque
                        </span>
                        <div className='bg-violet-700 rounded-lg px-2 py-1 flex justify-center items-center'>
                            <span className='text-white font-bold'>
                                {boardingTime}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <span className="text-sm opacity-60 -tracking-wider">
                            Terminal
                        </span>
                        <span className='font-bold'>
                            2
                        </span>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <span className='text-sm opacity-60 -tracking-wider'>
                            Portão
                        </span>
                        <span className='font-bold'>
                            15
                        </span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-40 h-40'>
                            <img className='max-w-full h-auto' src={QR} alt="QR" />
                        </div>
                        <span className='text-sm opacity-60'>
                            Grupo de embarque: 3
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-6'>
                <p><strong>Atenção: </strong>o portão fecha {convertedCloseGate}</p>
            </div>

        </div>
    )
}
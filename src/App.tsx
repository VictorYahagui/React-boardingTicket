import { BordingInfo } from './components/ticket/BordingInfo';
import { FlightInfo } from './components/ticket/FlightInfo';
import { PassangerInfo } from './components/ticket/PassangerInfo';
import './style/global.css';

export function App() {

  return (
    <div className="bg-linear-gradient bg-no-repeat w-screen h-screen flex flex-col justify-center items-center text-black -tracking-widers">
      <h1 className="text-xl uppercase text-white">Cartão de embarque</h1>
      <div className='w-80 my-5'>
        <FlightInfo flightValue={'995'} date={'23/05/2023'} destinationCity={'São Francisco'} destinationCountry={'EUA'} boardingCity={'São Paulo'} boardingCountry={'Brasil'} boardingTimeInSeconds={58651} landingTimeInSeconds={64845} />
        <PassangerInfo name={'Victor'} seat={'30A'} />
        <BordingInfo boardingTimeInSeconds={58651} gate={15} terminal={2} boardingGroup={3} />
      </div>
      <p className='w-64 text-center text-sm text-white opacity-60'>
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </p>
    </div>
  )
}

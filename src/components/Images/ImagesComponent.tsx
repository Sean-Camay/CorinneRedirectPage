import CorinneHay from '../../assets/corinne-hay.png'
import CorinneCamay from '../../assets/corinne-camay.png'

export const ImagesComponent = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-center'>
        <img src={CorinneHay} alt='corinne-hay' className='h-36 w-64' />

        <h2 className='text-black'>to</h2>

        <img src={CorinneCamay} alt='corinne-camay' className='h-36 w-64' />
      </div>
    </>
  )
}

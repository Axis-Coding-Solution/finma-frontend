import arrowImgPath from '@/assets/images/arrow-pic-2.png'
import { Button } from '@/components/ui/button';
import { MainHeading } from '@/pages/components/common';
import { Link } from 'react-router-dom';

function StartOnboardingPage() {
  return <div className="bg-background py-5 rounded-lg h-full flex justify-center items-center">
    <div className='w-[60%] flex justify-center items-center'><img src={arrowImgPath} alt="" className='self-start block h-80 w-[300px]' />
      <div className='-ml-20 mt-32'>
        <MainHeading
          heading='Welcome to the startup idea evaluation model!' paragraph='This tool will help you evaluate your startup idea based on key validation points. Follow the guidelines provided to input detailed information for each validation point. This will allow the model to assess the risk and potential of your idea. Let`s get started!' />
        <Link title="Start Onboarding" to="/onboarding/idea-clarity/problem">
          <Button variant="default" className='mt-5'>Get started</Button>
        </Link>
      </div></div>
  </div >;
}

export default StartOnboardingPage;

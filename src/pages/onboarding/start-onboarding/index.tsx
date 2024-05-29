import arrowImgPath from '@/assets/images/arrow-pic-2.png'
import { Button } from '@/components/ui/button';
import { MainHeading } from '@/pages/components/common';
import { Link } from 'react-router-dom';

function StartOnboardingPage() {
  return <div className="bg-background   rounded-lg  flex justify-center items-center">
    <div className='w-[60%] relative py-20'>
      <img src={arrowImgPath} alt="" className='absolute top-0 left-0 w-60' />
      <div className=''>
        <MainHeading
          heading='Welcome to the startup idea evaluation model!' paragraph='This tool will help you evaluate your startup idea based on key validation points. Follow the guidelines provided to input detailed information for each validation point. This will allow the model to assess the risk and potential of your idea. Let`s get started!' />
        <Link title="Start Onboarding" to="/onboarding/idea-clarity/problem">
          <Button variant="default" className='mt-5'>Get started</Button>
        </Link>
      </div>
    </div>
  </div >;
}

export default StartOnboardingPage;

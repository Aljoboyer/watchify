
import ImgL from '../../assets/auth_banner.jpg'
import { Buttons } from '../Shared/Buttons/Buttons';
import WText from '../Shared/WText/WText';

export default function EchoesOfTime() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>

          <WText
            text='Echoes of Time'
            type="title_xl"
            otherStyle="font-bold tracking-wide mb-4 uppercase text-black"
          />

          <WText
            text=' Choosing a watch is not just a matter of aesthetics
            but also related to lifestyle, usage needs and budget. 
            Each type of…'
            otherStyle='leading-relaxed mb-6 text-grey500'

          />
          <Buttons
          bgColor='black'
          textColor='white'
          title='Shop Now'
          other_style={{width: '150px', }}
          />
        </div>

        {/* Right Image with Background Effect */}
        <div className="relative flex justify-center md:justify-end">
          {/* Beige Background Box */}
          <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#EDE3D8] -z-10"></div>
          {/* Image */}
          <img
            src={ImgL}
            alt="Watch"
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

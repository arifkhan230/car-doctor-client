import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute top-1/2 right-20 border-8 border-white rounded-lg" />
                </div>
                <div className='lg:w-1/2 space-y-6 p-4'>
                    <h3 className='text-3xl font-bold text-orange-500 mb-5'>About Us</h3>
                    <h1 className="text-5xl font-bold mb-6">We are qualified <br /> & of experience <br /> in this field </h1>
                    <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                    <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
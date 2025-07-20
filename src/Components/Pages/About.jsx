import React from 'react'
import About_Image from '../../Assets/bg-about.png'
const About = () => {
  return (
    <div className='bg-orange-50'>
      <img src={About_Image} alt="" />
      <div className='px-6 py-12'>
        <h2 className='font-bold text-2xl capitalize'>don't squeeze in a sedan when you could relax in a van</h2>
        <p className='font-medium text-base my-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ullam quidem earum quis, iusto totam nulla mollitia. Quam itaque dolore molestiae et nihil exercitationem ipsam accusamus, labore cum omnis saepe impedit at. Voluptatem exercitationem aliquid officiis magnam dolor, neque cum, pariatur id quo fuga mollitia animi laboriosam consectetur. Tenetur, temporibus.</p>
        <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi ea consectetur, ad rerum suscipit!</p>

        <div className='p-8 rounded-md bg-orange-300'>
          <p className='font-bold text-xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className='p-4 bg-slate-950 rounded-md text-orange-50 capitalize'>Explore our vans</button>
        </div>
      </div>
    </div>
  )
}

export default About
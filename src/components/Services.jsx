import React from 'react'

const Services = () => {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>

        {/* company logo */}
        <div className='flex flex-wrap items-center justify-between my-12 gap-8'>
            <img src="companies/company1.png" alt="Company 1" />
            <img src="companies/company2.png" alt="Company 2" />
            <img src="companies/company3.png" alt="Company 3" />
            <img src="companies/company4.png" alt="Company 4" />
            <img src="companies/company5.png" alt="Company 5" />
            <img src="companies/company6.png" alt="Company 6" />
            <img src="companies/company7.png" alt="Company 7" />
        </div>

      </div>
    </div>
  )
}

export default Services

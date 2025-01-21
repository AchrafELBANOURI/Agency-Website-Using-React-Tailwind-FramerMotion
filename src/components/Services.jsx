import React from 'react'

const Services = () => {
  const services = [
    {id:1, title : "Membership Organisations" , description : "Our emebership management software provides full automation of membership renewals and payments" , image : "services/service1.png"},
    {id:2, title : "National Associations" , description : "Our membership management software provides full automation of membership renewals and payments" , image : "services/service2.png"},
    {id:3, title : "Clubs And Groups" , description : "Our emebership management software provides full automation of membership renewals and payments" , image : "services/service3.png"}
  ];
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>

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
      {/* Services Card */}
      <div className='mt-20 m:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Manage your entire community in a single system</h2>
        <p className='text-neutralGrey'>Who is Nexcent suitable for ?</p>
      </div>

      {/* Cards */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {
          services.map(({id, title , description , image}) => (
            <div key={id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center'>
              <div>
                <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                  <img src={image} alt={`service ${id}`} className='-ml-5'/>
                </div>
                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{title}</h4>
                <p className='text-sm text-neutralGrey'>{description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services

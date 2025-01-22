import React from 'react'

const About = () => {
    const stats = [
        {id : 1 , text : "Members" , stat : "2,245,341" , image : "stats/stats1.png"},
        {id : 2 , text : "Clubs" , stat : "46,328" , image : "stats/stats2.png"},
        {id : 3 , text : "Event Bookings" , stat : "828,867" , image : "stats/stats3.png"},
        {id : 4 , text : "Payments" , stat : "1,926,436" , image : "stats/stats4.png"}
    ]
  return (
    <div>
      {/* About text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div>
            <img src="About.png" alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of sending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary"> Learn More </button>
          </div>
        </div>
      </div>

      {/* Company stats */}
      <div className='px-4 lg:px-14 mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className="md:w-1/2">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
                Helping a local <br/> <span className='text-brandPrimary'>business reinvent itself</span>
                </h2>
                <p className="md:w-3/4 text-sm text-neutralGrey mb-8 ">
                    We reached here with our hard work and dedication
                </p>
                <button className="btn-primary"> Learn More </button>
            </div>

                {/* stats */}
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>           
                <div className="space-y-8">
                    <div className='flex items-center gap-4'>
                        <img src='stats/stats1.png' alt='stat 1' />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src='stats/stats2.png' alt='stat 2' />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>Clubs</h4>
                            <p>46,328</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className='flex items-center gap-4'>
                        <img src='stats/stats3.png' alt='stat 3' />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>Event Bookings</h4>
                            <p>828,867</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src='stats/stats4.png' alt='stat 4' />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>Payments</h4>
                            <p>1,926,436</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      </div>
    </div>
  );
}

export default About

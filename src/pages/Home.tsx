import PathCard from '../components/ui/PathCard'

const Home = () => {
  return (
    <div className='bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'>
      
      {/* Hero Section */}
      <section className='min-h-[70vh] flex flex-col justify-center items-center px-4 py-16'>
        
        {/* Main Title */}
        <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-amber-900 font-bold mb-6 text-center drop-shadow-lg'>
          ऋग्कथा
        </h1>
        
        {/* Subtitle */}
        <p className='text-xl sm:text-2xl md:text-3xl text-amber-800 mb-4 text-center font-serif'>
          Ancient Wisdom Through Comics
        </p>
        
        {/* Description */}
        <p className='text-base sm:text-lg text-amber-700 max-w-2xl text-center mb-8 leading-relaxed'>
          Discover the timeless teachings of the Rig Veda through beautiful visual storytelling. 
          Made for curious minds of all ages.
        </p>

        {/* Scroll Indicator */}
        <div className='animate-bounce mt-8'>
          <svg className='w-6 h-6 text-amber-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
          </svg>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        
        {/* Section Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4'>
            📖 Choose Your Learning Path
          </h2>
          <p className='text-lg text-amber-700 max-w-2xl mx-auto'>
            Three unique ways to explore the Rig Veda. Pick the one that resonates with you.
          </p>
        </div>

        {/* Path Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          
          {/* Card 1: By Deity */}
          <PathCard 
            icon='🎭'
            title='By Deity'
            description='Meet the gods, heroes, and nature spirits. Learn through engaging character-driven stories.'
            bestFor='Ages 8-12 • Beginners'
            linkTo='/browse/deity'
            gradientFrom='from-orange-100'
            gradientTo='to-amber-100'
          />

          {/* Card 2: By Theme */}
          <PathCard 
            icon='🎯'
            title='By Theme'
            description='Explore life lessons on courage, wisdom, truth, and more. Values that matter today.'
            bestFor='Ages 13-18 • Values Learning'
            linkTo='/browse/theme'
            gradientFrom='from-amber-100'
            gradientTo='to-yellow-100'
          />

          {/* Card 3: By Mandala */}
          <PathCard 
            icon='📚'
            title='By Mandala'
            description='Study the Rig Veda chapter by chapter, the traditional way. Comprehensive and structured.'
            bestFor='Scholars • Traditional Study'
            linkTo='/browse/mandala'
            gradientFrom='from-yellow-100'
            gradientTo='to-orange-100'
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section className='bg-gradient-to-r from-amber-200 to-orange-200 py-8'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto'>
            
            <div className='flex flex-col items-center'>
              <div className='text-4xl md:text-5xl font-bold text-amber-900'>1,028</div>
              <div className='text-base text-amber-800 mt-2'>Hymns to Explore</div>
            </div>

            <div className='flex flex-col items-center'>
              <div className='text-4xl md:text-5xl font-bold text-amber-900'>10</div>
              <div className='text-base text-amber-800 mt-2'>Sacred Mandalas</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
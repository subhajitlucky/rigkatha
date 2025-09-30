import MandalaCard from '../components/ui/MandalaCard'
import mandalasData from '../data/mandalas.json'

const BrowseByMandala = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'>
      
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-amber-100 to-orange-100 border-b-2 border-amber-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          
          {/* Icon */}
          <div className='text-center mb-6'>
            <div className='text-6xl mb-4'>📜</div>
          </div>

          {/* Title */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 text-center mb-6'>
            The Ten Mandalas
          </h1>
          
          {/* Subtitle in Devanagari */}
          <p className='text-2xl sm:text-3xl text-amber-800 text-center mb-6 font-serif'>
            दश मण्डलानि
          </p>

          {/* Description */}
          <div className='max-w-3xl mx-auto text-center space-y-4'>
            <p className='text-lg text-amber-800 leading-relaxed'>
              The Rig Veda is organized into <span className='font-bold'>10 sacred books called Mandalas</span>, 
              meaning "circles" or "cycles" in Sanskrit. Each mandala is a collection of hymns 
              composed by different families of ancient seers (Rishis).
            </p>
            <p className='text-base text-amber-700 leading-relaxed'>
              Together, these 10 mandalas contain <span className='font-semibold'>1,028 hymns</span> and 
              over <span className='font-semibold'>10,000 verses</span> — the oldest sacred texts of humanity, 
              composed over 3,000 years ago.
            </p>
            <p className='text-base text-amber-700 leading-relaxed italic'>
              "Choose any mandala below to begin your journey through ancient wisdom."
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className='bg-amber-200 py-6'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
            <div>
              <div className='text-3xl font-bold text-amber-900'>10</div>
              <div className='text-sm text-amber-800'>Sacred Mandalas</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-amber-900'>1,028</div>
              <div className='text-sm text-amber-800'>Total Hymns</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-amber-900'>10,552</div>
              <div className='text-sm text-amber-800'>Total Verses</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-amber-900'>3000+</div>
              <div className='text-sm text-amber-800'>Years Old</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandalas Grid */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        
        {/* Section Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-amber-900 mb-4'>
            Explore Each Mandala
          </h2>
          <p className='text-lg text-amber-700 max-w-2xl mx-auto'>
            Each circle tells a unique story. From Agni's first flame to the deepest questions of existence.
          </p>
        </div>

        {/* Mandalas Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {mandalasData.map((mandala) => (
            <MandalaCard
              key={mandala.number}
              number={mandala.number}
              name={mandala.name}
              nameEnglish={mandala.nameEnglish}
              hymnCount={mandala.hymnCount}
              verseCount={mandala.verseCount}
              primaryDeities={mandala.primaryDeities}
              composers={mandala.composers}
              character={mandala.character}
              description={mandala.description}
              specialFeatures={mandala.specialFeatures}
              ageGroup={mandala.ageGroup}
              color={mandala.color}
            />
          ))}
        </div>
      </section>

      {/* Educational Note */}
      <section className='bg-gradient-to-r from-amber-100 to-orange-100 border-t-2 border-amber-200 py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-amber-200'>
            <h3 className='text-2xl font-bold text-amber-900 mb-4 text-center'>
              📖 How to Read the Rig Veda
            </h3>
            <div className='space-y-3 text-amber-800'>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>1.</span>
                <span><span className='font-semibold'>Mandala</span> = Book number (1-10)</span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>2.</span>
                <span><span className='font-semibold'>Sukta</span> = Hymn number within the mandala</span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>3.</span>
                <span><span className='font-semibold'>Rik</span> = Individual verse within the hymn</span>
              </p>
              <p className='mt-4 text-center italic text-amber-700'>
                Example: <span className='font-semibold'>Rig Veda 1.1.1</span> = Mandala 1, Hymn 1, Verse 1 
                <br/>
                (The very first verse: "Agni Meele Purohitam")
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default BrowseByMandala

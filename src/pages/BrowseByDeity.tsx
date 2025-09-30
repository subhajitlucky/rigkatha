import DeityCard from '../components/ui/DeityCard'
import deitiesData from '../data/deities.json'

const BrowseByDeity = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'>
      
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-orange-100 to-amber-100 border-b-2 border-amber-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          
          {/* Icon */}
          <div className='text-center mb-6'>
            <div className='text-6xl mb-4'>ॐ</div>
          </div>

          {/* Title */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 text-center mb-6'>
            Meet the Divine Beings
          </h1>
          
          {/* Subtitle in Devanagari */}
          <p className='text-2xl sm:text-3xl text-amber-800 text-center mb-6 font-serif'>
            देवताः • Divine Deities
          </p>

          {/* Description */}
          <div className='max-w-3xl mx-auto text-center space-y-4'>
            <p className='text-lg text-amber-800 leading-relaxed'>
              The Rig Veda brings to life a vibrant pantheon of <span className='font-bold'>divine beings</span> - 
              gods and goddesses who represent the forces of nature, cosmic principles, and spiritual truths. 
              Each deity has unique characteristics, stories, and teachings.
            </p>
            <p className='text-base text-amber-700 leading-relaxed'>
              From <span className='font-semibold'>Agni</span>, the sacred fire who appears in the very first verse, 
              to <span className='font-semibold'>Indra</span>, the mighty warrior-king of gods, 
              to <span className='font-semibold'>Ushas</span>, the beautiful dawn maiden - 
              discover their wisdom through hymns composed over 3,000 years ago.
            </p>
            <p className='text-base text-amber-700 leading-relaxed italic'>
              "Choose a deity below to explore their hymns, stories, and timeless teachings."
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
              <div className='text-sm text-amber-800'>Major Deities</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-amber-900'>750+</div>
              <div className='text-sm text-amber-800'>Hymns Featured</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-amber-900'>50+</div>
              <div className='text-sm text-amber-800'>Sacred Verses</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-amber-900'>∞</div>
              <div className='text-sm text-amber-800'>Timeless Wisdom</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deities Grid */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        
        {/* Section Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-amber-900 mb-4'>
            The Divine Pantheon
          </h2>
          <p className='text-lg text-amber-700 max-w-2xl mx-auto'>
            Each deity represents different aspects of the divine and offers unique wisdom for life's journey.
          </p>
        </div>

        {/* Deities Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {deitiesData.map((deity) => (
            <DeityCard
              key={deity.id}
              id={deity.id}
              name={deity.name}
              nameEnglish={deity.nameEnglish}
              title={deity.title}
              emoji={deity.emoji}
              description={deity.description}
              symbolism={deity.symbolism}
              character={deity.character}
              hymnCount={deity.hymnCount}
              ageGroup={deity.ageGroup}
              color={deity.color}
              stories={deity.stories}
            />
          ))}
        </div>
      </section>

      {/* Educational Note */}
      <section className='bg-gradient-to-r from-amber-100 to-orange-100 border-t-2 border-amber-200 py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-amber-200'>
            <h3 className='text-2xl font-bold text-amber-900 mb-4 text-center'>
              🌟 Understanding Vedic Deities
            </h3>
            <div className='space-y-3 text-amber-800'>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>•</span>
                <span><span className='font-semibold'>Not Polytheism:</span> The Rig Veda teaches "Ekam Sat Vipra Bahudha Vadanti" - Truth is one, sages call it by many names. All deities are expressions of one ultimate reality.</span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>•</span>
                <span><span className='font-semibold'>Nature & Beyond:</span> While associated with natural phenomena (fire, thunder, dawn), these deities represent deeper spiritual and psychological principles.</span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>•</span>
                <span><span className='font-semibold'>Personal Relationships:</span> The hymns show intimate, personal relationships between humans and the divine - prayers, conversations, even arguments!</span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>•</span>
                <span><span className='font-semibold'>Timeless Archetypes:</span> These divine characters represent eternal human experiences - courage (Indra), wisdom (Agni), hope (Ushas), truth (Varuna).</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='bg-gradient-to-r from-yellow-100 to-amber-100 rounded-2xl p-8 border-2 border-amber-300'>
          <h3 className='text-xl font-bold text-amber-900 mb-4 text-center flex items-center justify-center'>
            <span className='mr-2'>💡</span>
            Did You Know?
          </h3>
          <div className='space-y-2 text-amber-800 text-sm'>
            <p className='text-center'>
              <span className='font-bold'>Indra</span> has more hymns dedicated to him (250+) than any other deity - 
              making him the most celebrated god in the Rig Veda!
            </p>
            <p className='text-center'>
              The <span className='font-bold'>entire 9th Mandala</span> (114 hymns) is dedicated solely to <span className='font-bold'>Soma</span> - 
              unique in Vedic literature.
            </p>
            <p className='text-center'>
              <span className='font-bold'>Ushas</span> (Dawn) is described with some of the most beautiful, 
              poetic language in all of Vedic literature.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default BrowseByDeity

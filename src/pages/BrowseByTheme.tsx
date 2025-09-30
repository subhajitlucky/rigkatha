import ThemeCard from '../components/ui/ThemeCard'
import themesData from '../data/themes.json'

const BrowseByTheme = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'>
      
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-amber-100 to-yellow-100 border-b-2 border-amber-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          
          {/* Icon */}
          <div className='text-center mb-6'>
            <div className='text-6xl mb-4'>🪷</div>
          </div>

          {/* Title */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 text-center mb-6'>
            Life Lessons & Values
          </h1>
          
          {/* Subtitle in Devanagari */}
          <p className='text-2xl sm:text-3xl text-amber-800 text-center mb-6 font-serif'>
            जीवन सिद्धान्त • Timeless Wisdom
          </p>

          {/* Description */}
          <div className='max-w-3xl mx-auto text-center space-y-4'>
            <p className='text-lg text-amber-800 leading-relaxed'>
              Beyond ancient stories and rituals, the Rig Veda offers <span className='font-bold'>timeless wisdom</span> for 
              living a meaningful, ethical, and fulfilling life. These themes speak across millennia to address 
              universal human experiences and values.
            </p>
            <p className='text-base text-amber-700 leading-relaxed'>
              Explore teachings on <span className='font-semibold'>courage</span>, <span className='font-semibold'>truth</span>, 
              <span className='font-semibold'> wisdom</span>, <span className='font-semibold'>gratitude</span>, and more. 
              Each theme includes practical guidance for applying ancient wisdom in modern life.
            </p>
            <p className='text-base text-amber-700 leading-relaxed italic'>
              "Choose a theme below to discover what the Rig Veda teaches about life's most important values."
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className='bg-amber-200 py-6'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
            <div>
              <div className='text-3xl font-bold text-amber-900'>11</div>
              <div className='text-sm text-amber-800'>Core Themes</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-amber-900'>50+</div>
              <div className='text-sm text-amber-800'>Key Teachings</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-amber-900'>∞</div>
              <div className='text-sm text-amber-800'>Life Applications</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-amber-900'>3000+</div>
              <div className='text-sm text-amber-800'>Years of Wisdom</div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Grid */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        
        {/* Section Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-amber-900 mb-4'>
            Universal Values for Life
          </h2>
          <p className='text-lg text-amber-700 max-w-2xl mx-auto'>
            Ancient wisdom addressing eternal questions and challenges that remain relevant today.
          </p>
        </div>

        {/* Themes Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {themesData.map((theme) => (
            <ThemeCard
              key={theme.id}
              id={theme.id}
              name={theme.name}
              nameEnglish={theme.nameEnglish}
              emoji={theme.emoji}
              description={theme.description}
              coreMessage={theme.coreMessage}
              practicalApplication={theme.practicalApplication}
              relatedDeities={theme.relatedDeities}
              ageGroup={theme.ageGroup}
              color={theme.color}
              keyVersesCount={theme.keyVerses.length}
            />
          ))}
        </div>
      </section>

      {/* How to Use This Section */}
      <section className='bg-gradient-to-r from-amber-100 to-yellow-100 border-t-2 border-amber-200 py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-amber-200'>
            <h3 className='text-2xl font-bold text-amber-900 mb-4 text-center'>
              📖 How to Use These Teachings
            </h3>
            <div className='space-y-3 text-amber-800'>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>1.</span>
                <span><span className='font-semibold'>Choose What Speaks to You:</span> Pick a theme that resonates with your current life situation or questions.</span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>2.</span>
                <span><span className='font-semibold'>Read the Verses:</span> Explore the original Sanskrit shlokas with translations. Understand the context and deeper meaning.</span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>3.</span>
                <span><span className='font-semibold'>Reflect on the Lesson:</span> Think about how this ancient wisdom applies to your modern life and challenges.</span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>4.</span>
                <span><span className='font-semibold'>Apply It Daily:</span> Use the practical application suggestions to integrate this wisdom into your everyday actions.</span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-600 mr-2 font-bold'>5.</span>
                <span><span className='font-semibold'>Share the Wisdom:</span> Discuss these teachings with friends, family, or study groups. Wisdom grows when shared.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Categories Info */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          
          {/* Personal Growth */}
          <div className='bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-200'>
            <div className='text-3xl mb-3'>🌱</div>
            <h4 className='text-lg font-bold text-purple-900 mb-2'>Personal Growth</h4>
            <p className='text-sm text-purple-800'>
              Courage, Wisdom, Perseverance, Renewal - themes for developing your inner strength and character.
            </p>
          </div>

          {/* Relationships */}
          <div className='bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-6 border-2 border-green-200'>
            <div className='text-3xl mb-3'>🤝</div>
            <h4 className='text-lg font-bold text-green-900 mb-2'>Relationships & Society</h4>
            <p className='text-sm text-green-800'>
              Truth, Unity, Dharma - wisdom for living harmoniously with others and contributing to society.
            </p>
          </div>

          {/* Spiritual */}
          <div className='bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 border-2 border-blue-200'>
            <div className='text-3xl mb-3'>🙏</div>
            <h4 className='text-lg font-bold text-blue-900 mb-2'>Spiritual Life</h4>
            <p className='text-sm text-blue-800'>
              Gratitude, Devotion, Protection - teachings for developing your spiritual practice and divine connection.
            </p>
          </div>
        </div>
      </section>

      {/* Inspiration Quote */}
      <section className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 border-2 border-orange-300 text-center'>
          <div className='text-4xl mb-4'>✨</div>
          <p className='text-2xl font-bold text-amber-900 mb-2 font-serif'>
            एकं सद्विप्रा बहुधा वदन्ति
          </p>
          <p className='text-lg text-amber-800 mb-4 italic'>
            "Truth is one, the wise call it by many names"
          </p>
          <p className='text-sm text-amber-700'>
            - Rig Veda 1.164.46
          </p>
          <p className='text-sm text-amber-700 mt-4'>
            All these themes ultimately point to the same universal truth expressed in different ways.
          </p>
        </div>
      </section>

    </div>
  )
}

export default BrowseByTheme

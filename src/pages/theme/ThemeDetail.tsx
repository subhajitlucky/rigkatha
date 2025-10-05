import { useParams, Link } from 'react-router';
import themesData from '../../data/themes.json';
import StoryCard from '../../components/ui/StoryCard';
import type { StoryPreview } from '../../types/story';

// Import all story data
import agniWiseFish from '../../data/stories/agni/wise-fish.json';
import indraBattleVritra from '../../data/stories/indra/battle-vritra.json';
import varunaPatientCrocodile from '../../data/stories/varuna/patient-crocodile.json';
import somaGoldenStream from '../../data/stories/soma/golden-stream.json';
import ushasEarlyBird from '../../data/stories/ushas/early-bird.json';
import suryaSevenHorses from '../../data/stories/surya/seven-horses.json';
import marutsStormBrothers from '../../data/stories/maruts/storm-brothers.json';
import ashvinsTwinHealers from '../../data/stories/ashvins/twin-healers.json';
import rudraStormMercy from '../../data/stories/rudra/storm-mercy.json';
import sarasvatiRiverKnowledge from '../../data/stories/sarasvati/river-knowledge.json';

// Map story data by ID
const storyDataMap: Record<string, any> = {
  'agni-wise-fish': agniWiseFish,
  'indra-battle-vritra': indraBattleVritra,
  'varuna-patient-crocodile': varunaPatientCrocodile,
  'soma-golden-stream': somaGoldenStream,
  'ushas-early-bird': ushasEarlyBird,
  'surya-seven-horses': suryaSevenHorses,
  'maruts-storm-brothers': marutsStormBrothers,
  'ashvins-twin-healers': ashvinsTwinHealers,
  'rudra-storm-mercy': rudraStormMercy,
  'sarasvati-river-knowledge': sarasvatiRiverKnowledge,
};

export default function ThemeDetail() {
  const { themeId } = useParams<{ themeId: string }>();
  
  // Find the theme
  const theme = themesData.find((t) => t.id === themeId);

  if (!theme) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Theme Not Found</h1>
          <Link to="/browse/theme" className="text-amber-600 hover:text-amber-700 font-semibold">
            ← Back to Browse Themes
          </Link>
        </div>
      </div>
    );
  }

  // Convert theme stories to StoryPreview format by looking up the story data
  const storyPreviews: StoryPreview[] = theme.stories
    .map((storyTitle: string) => {
      // Find the story data that matches this title
      const storyEntry = Object.entries(storyDataMap).find(([_, storyData]) => 
        storyData.title === storyTitle
      );

      if (!storyEntry) return null;

      const [storyId, storyData] = storyEntry;

      return {
        id: storyId,
        deity: storyData.deity,
        title: storyData.title,
        subtitle: storyData.subtitle,
        theme: storyData.theme,
        panelCount: storyData.panels.length,
        readingTime: storyData.readingTime,
        thumbnailUrl: storyData.thumbnail,
        shlokaReference: `RV ${storyData.shloka.mandalaSuktaRik.mandala}.${storyData.shloka.mandalaSuktaRik.sukta}.${storyData.shloka.mandalaSuktaRik.rik}`,
      };
    })
    .filter((story): story is StoryPreview => story !== null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-6">
        <Link
          to="/browse/theme"
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-semibold transition-colors"
        >
          ← Back to All Themes
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Theme Icon */}
          <div className="text-8xl mb-6 animate-bounce">{theme.emoji}</div>

          {/* Theme Name */}
          <h1 className="text-5xl font-bold text-amber-900 mb-4">
            {theme.nameEnglish}
          </h1>
          <h2 className="text-2xl text-amber-700 mb-6">{theme.name}</h2>

          {/* Description */}
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            {theme.description}
          </p>

          {/* Quick Info Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white rounded-xl px-6 py-3 shadow-md border-2 border-amber-200">
              <div className="text-sm text-gray-600 mb-1">Verses</div>
              <div className="font-semibold text-amber-900">{theme.keyVerses.length} verses</div>
            </div>
            <div className="bg-white rounded-xl px-6 py-3 shadow-md border-2 border-amber-200">
              <div className="text-sm text-gray-600 mb-1">Deities</div>
              <div className="font-semibold text-amber-900">{theme.relatedDeities.length} deities</div>
            </div>
            <div className="bg-white rounded-xl px-6 py-3 shadow-md border-2 border-amber-200">
              <div className="text-sm text-gray-600 mb-1">Stories</div>
              <div className="font-semibold text-amber-900">{storyPreviews.length} stories</div>
            </div>
            <div className="bg-white rounded-xl px-6 py-3 shadow-md border-2 border-amber-200">
              <div className="text-sm text-gray-600 mb-1">Age Group</div>
              <div className="font-semibold text-amber-900">{theme.ageGroup}</div>
            </div>
          </div>

          {/* Core Message */}
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-300">
            <h3 className="font-semibold text-amber-900 mb-3">Core Teaching:</h3>
            <p className="text-gray-800 text-lg font-medium">"{theme.coreMessage}"</p>
          </div>
        </div>

        {/* Sacred Verses Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              📜 {theme.nameEnglish} in the Rig Veda
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The Rig Veda's teachings on {theme.nameEnglish.toLowerCase()}, bravery, and heroic action
            </p>
          </div>

          {/* Verses Grid */}
          <div className="space-y-8">
            {theme.keyVerses.map((verse, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-amber-200 shadow-lg"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    Rig Veda {verse.reference} - {verse.deity}
                  </h3>
                </div>

                {/* Sanskrit Text */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Sanskrit:</h4>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-600">
                    <p className="text-xl font-serif text-gray-900 leading-relaxed">
                      {verse.sanskrit}
                    </p>
                  </div>
                </div>

                {/* Translation */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Translation:</h4>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600">
                    <p className="text-lg text-gray-800 leading-relaxed italic">
                      "{verse.translation}"
                    </p>
                  </div>
                </div>

                {/* Lesson */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Lesson:</h4>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-600">
                    <p className="text-lg text-gray-800 leading-relaxed">
                      {verse.lesson}
                    </p>
                  </div>
                </div>

                {/* Audio Button */}
                <div className="text-center">
                  <button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-all shadow-md">
                    ▶️ Listen in Sanskrit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Deities Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              ⚡ Deities of {theme.nameEnglish}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These divine beings embody different aspects of {theme.nameEnglish.toLowerCase()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {theme.relatedDeities.map((deity) => (
              <Link
                key={deity}
                to={`/browse/deity/${deity.toLowerCase()}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {deity === 'Indra' && '⚡'}
                    {deity === 'Maruts' && '🌪️'}
                    {deity === 'Agni' && '🔥'}
                    {deity === 'Rudra' && '⛈️'}
                    {deity === 'Varuna' && '🌊'}
                    {deity === 'Soma' && '🌿'}
                    {deity === 'Ushas' && '🌅'}
                    {deity === 'Surya' && '☀️'}
                    {deity === 'Ashvins' && '🐎'}
                    {deity === 'Sarasvati' && '🌊'}
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{deity}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {deity === 'Indra' && 'Slayer of Dragons'}
                    {deity === 'Maruts' && 'Storm Warriors'}
                    {deity === 'Agni' && 'Messenger of Truth'}
                    {deity === 'Rudra' && 'Fierce Protector'}
                    {deity === 'Varuna' && 'Guardian of Truth'}
                    {deity === 'Soma' && 'Purifying Stream'}
                    {deity === 'Ushas' && 'Dawn Maiden'}
                    {deity === 'Surya' && 'All-Seeing Eye'}
                    {deity === 'Ashvins' && 'Divine Healers'}
                    {deity === 'Sarasvati' && 'Flowing Wisdom'}
                  </p>
                  <div className="text-amber-600 font-semibold group-hover:text-amber-800">
                    Meet {deity} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stories Section */}
        {storyPreviews.length > 0 && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-amber-900 mb-4">
                🦸‍♂️ Stories Teaching {theme.nameEnglish}
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Experience {theme.nameEnglish.toLowerCase()} through engaging visual tales
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {storyPreviews.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>
        )}

        {/* Practical Application Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border-2 border-amber-300">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
              💪 What the Rig Veda Says About {theme.nameEnglish}
            </h2>
            <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
              <p>{theme.practicalApplication}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border-2 border-amber-300">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">
              🔗 Explore More Themes
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/browse/theme"
                className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-all"
              >
                ← All Themes
              </Link>
              <Link
                to="/browse/deity"
                className="px-6 py-3 bg-white text-amber-900 rounded-xl font-semibold border-2 border-amber-600 hover:bg-amber-50 transition-all"
              >
                Explore Deities →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

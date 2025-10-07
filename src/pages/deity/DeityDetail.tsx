import { useParams, Link } from 'react-router';
import deitiesData from '../../data/deities.json';
import StoryCard from '../../components/ui/StoryCard';
import type { StoryPreview } from '../../types/story';

// Import all story data
import agniWiseFish from '../../data/stories/agni/wise-fish/story.json';
import indraBattleVritra from '../../data/stories/indra/battle-vritra/story.json';
import varunaPatientCrocodile from '../../data/stories/varuna/patient-crocodile/story.json';
import somaGoldenStream from '../../data/stories/soma/golden-stream/story.json';
import ushasEarlyBird from '../../data/stories/ushas/early-bird/story.json';
import suryaSevenHorses from '../../data/stories/surya/seven-horses/story.json';
import marutsStormBrothers from '../../data/stories/maruts/storm-brothers/story.json';
import ashvinsTwinHealers from '../../data/stories/ashvins/twin-healers/story.json';
import rudraStormMercy from '../../data/stories/rudra/storm-mercy/story.json';
import sarasvatiRiverKnowledge from '../../data/stories/sarasvati/river-knowledge/story.json';

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

export default function DeityDetail() {
  const { deityId } = useParams<{ deityId: string }>();
  
  // Find the deity
  const deity = deitiesData.find((d) => d.id === deityId);

  if (!deity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Deity Not Found</h1>
          <Link to="/browse/deity" className="text-amber-600 hover:text-amber-700 font-semibold">
            ← Back to Browse Deities
          </Link>
        </div>
      </div>
    );
  }

  // Convert deity stories to StoryPreview format by looking up the story data
  const storyPreviews: StoryPreview[] = deity.stories
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
          to="/browse/deity"
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-semibold transition-colors"
        >
          ← Back to All Deities
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Deity Icon */}
          <div className="text-8xl mb-6 animate-bounce">{deity.emoji}</div>

          {/* Deity Name */}
          <h1 className="text-5xl font-bold text-amber-900 mb-4">
            {deity.nameEnglish}
          </h1>
          <h2 className="text-2xl text-amber-700 mb-6">{deity.name}</h2>

          {/* Description */}
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            {deity.description}
          </p>

          {/* Quick Info Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white rounded-xl px-6 py-3 shadow-md border-2 border-amber-200">
              <div className="text-sm text-gray-600 mb-1">Title</div>
              <div className="font-semibold text-amber-900">{deity.title}</div>
            </div>
            <div className="bg-white rounded-xl px-6 py-3 shadow-md border-2 border-amber-200">
              <div className="text-sm text-gray-600 mb-1">Character</div>
              <div className="font-semibold text-amber-900">{deity.character}</div>
            </div>
            <div className="bg-white rounded-xl px-6 py-3 shadow-md border-2 border-amber-200">
              <div className="text-sm text-gray-600 mb-1">Hymns</div>
              <div className="font-semibold text-amber-900">{deity.hymnCount}+ verses</div>
            </div>
          </div>

          {/* Symbolism */}
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-300">
            <h3 className="font-semibold text-amber-900 mb-3">Symbolism:</h3>
            <p className="text-gray-800">{deity.symbolism}</p>
          </div>
        </div>

        {/* Stories Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              ✨ Stories from the Vedas
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Experience ancient wisdom through visual tales. Each story is based on sacred hymns 
              from the Rig Veda, bringing timeless teachings to life through engaging narratives.
            </p>
          </div>

          {/* Story Grid */}
          {storyPreviews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {storyPreviews.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border-2 border-amber-200">
              <p className="text-gray-600 text-lg">
                Stories coming soon! We're crafting beautiful tales about {deity.name}.
              </p>
            </div>
          )}
        </div>

        {/* Famous Hymns Section (Optional - Collapsible) */}
        <div className="max-w-4xl mx-auto mt-16">
          <details className="bg-white rounded-2xl p-8 border-2 border-amber-200 shadow-lg">
            <summary className="cursor-pointer text-2xl font-bold text-amber-900 mb-4 hover:text-amber-700 transition-colors">
              📖 Famous Hymns to {deity.name}
            </summary>
            <div className="space-y-6 mt-6">
              {deity.famousHymns.slice(0, 3).map((hymn, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-600"
                >
                  <div className="text-lg font-serif text-amber-900 mb-2">
                    {hymn.sanskrit}
                  </div>
                  <div className="text-gray-700 mb-2">
                    "{hymn.translation}"
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{hymn.reference}</span>
                    <span className="text-amber-700 font-medium">{hymn.theme}</span>
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

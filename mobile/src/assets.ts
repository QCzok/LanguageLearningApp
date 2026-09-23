/**
 * Gebündelte Bilddateien an einer Stelle.
 *
 * Grund für das eigene Modul: die Bilder sollen beim Start vorgeladen werden,
 * solange der Splash-Screen noch steht (siehe `App.tsx`). Im Entwicklungsmodus
 * holt Metro sie sonst erst dann über das Netz, wenn der Bildschirm sie zum
 * ersten Mal rendert – auf einem echten Gerät im WLAN sieht man die Kachel
 * dann spürbar nachladen.
 */
import vocabularyCover from '../assets/covers/vocabulary.png';
import notebookCover from '../assets/covers/notebook.png';
import libraryShelfCover from '../assets/covers/library-shelf.png';
import videoCover from '../assets/covers/video.png';
import aiCover from '../assets/covers/ai.png';
import beginnerBookCover from '../assets/covers/book-beginner.png';
import intermediateBookCover from '../assets/covers/book-intermediate.png';
import advancedBookCover from '../assets/covers/book-advanced.png';
import grammarBookCover from '../assets/covers/book-grammar.png';
import marketLibraryCover from '../assets/covers/library-market.png';
import lighthouseLibraryCover from '../assets/covers/library-lighthouse.png';
import cityLibraryCover from '../assets/covers/library-city.png';
import villageLibraryCover from '../assets/covers/library-village.png';
import kitchenLibraryCover from '../assets/covers/library-kitchen.png';
import phoneLibraryCover from '../assets/covers/library-phone.png';
import genericLibraryCover from '../assets/covers/library-book.png';
import sceneGreetingOffice from '../assets/covers/scene-greeting-office.png';
import sceneIntroduction from '../assets/covers/scene-introduction.png';
import sceneWorldMap from '../assets/covers/scene-world-map.png';
import sceneAlphabetNumbers from '../assets/covers/scene-alphabet-numbers.png';
import sceneFamilyTree from '../assets/covers/scene-family-tree.png';
import sceneBelongings from '../assets/covers/scene-belongings.png';
import scenePortraits from '../assets/covers/scene-portraits.png';
import sceneBirthday from '../assets/covers/scene-birthday.png';
import sceneCityStreet from '../assets/covers/scene-city-street.png';
import sceneCityMap from '../assets/covers/scene-city-map.png';
import sceneSignpost from '../assets/covers/scene-signpost.png';
import sceneClockDay from '../assets/covers/scene-clock-day.png';
import sceneMarketStall from '../assets/covers/scene-market-stall.png';
import sceneShoppingBags from '../assets/covers/scene-shopping-bags.png';
import sceneRestaurantTable from '../assets/covers/scene-restaurant-table.png';
import sceneCalendarWeekend from '../assets/covers/scene-calendar-weekend.png';
import sceneChildhoodToys from '../assets/covers/scene-childhood-toys.png';
import sceneDoctorVisit from '../assets/covers/scene-doctor-visit.png';
import sceneTrainPlatform from '../assets/covers/scene-train-platform.png';
import sceneLivingRoom from '../assets/covers/scene-living-room.png';
import sceneFiestaLights from '../assets/covers/scene-fiesta-lights.png';
import sceneGenericBook from '../assets/covers/scene-generic-book.png';

export {
  vocabularyCover,
  notebookCover,
  libraryShelfCover,
  videoCover,
  aiCover,
  beginnerBookCover,
  intermediateBookCover,
  advancedBookCover,
  grammarBookCover,
  marketLibraryCover,
  lighthouseLibraryCover,
  cityLibraryCover,
  villageLibraryCover,
  kitchenLibraryCover,
  phoneLibraryCover,
  genericLibraryCover,
  sceneGreetingOffice,
  sceneIntroduction,
  sceneWorldMap,
  sceneAlphabetNumbers,
  sceneFamilyTree,
  sceneBelongings,
  scenePortraits,
  sceneBirthday,
  sceneCityStreet,
  sceneCityMap,
  sceneSignpost,
  sceneClockDay,
  sceneMarketStall,
  sceneShoppingBags,
  sceneRestaurantTable,
  sceneCalendarWeekend,
  sceneChildhoodToys,
  sceneDoctorVisit,
  sceneTrainPlatform,
  sceneLivingRoom,
  sceneFiestaLights,
  sceneGenericBook,
};

/**
 * Alles, was `Asset.loadAsync` beim Start in den Cache legen soll.
 *
 * Die zwölf Lehrwerk-Szenen fehlen hier bewusst: sie erscheinen erst, wenn
 * eine Lerneinheit geöffnet wird, nicht auf dem ersten Bildschirm. Sie beim
 * Start mitzuladen würde die App-Öffnung verzögern, um Bilder vorzuhalten,
 * die diese Sitzung vielleicht nie zeigt.
 */
export const preloadImages = [
  vocabularyCover,
  notebookCover,
  libraryShelfCover,
  videoCover,
  aiCover,
  beginnerBookCover,
  intermediateBookCover,
  advancedBookCover,
  grammarBookCover,
  marketLibraryCover,
  lighthouseLibraryCover,
  cityLibraryCover,
  villageLibraryCover,
  kitchenLibraryCover,
  phoneLibraryCover,
  genericLibraryCover,
];

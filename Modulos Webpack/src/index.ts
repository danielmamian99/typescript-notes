import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype as any).customName = 'Pikachu'

// charmander.savePokemonToDB(50);
// charmander.savePokemonToDB(10);
//!charmander.publicApi = 'https://github.com/danielmamian99?tab=repositories';
console.log(charmander.publicApi);

interface userLearning {
  name: string;
  course: string;
  topics: TopicsTypescript;
  learning: (topics: TopicsTypescript) => Promise<TopicsTypescript>;
  showTopicsStatus: (topics: TopicsTypescript) => void;
}
interface TopicsTypescript {
  types: boolean;
  functions: boolean;
  objects: boolean;
  clases: boolean;
  interfaces: boolean;
  generics: boolean;
  decorators: boolean;
}
const learningTypescript = async (
  topics: TopicsTypescript
): Promise<TopicsTypescript> => {
  for (const topic in topics) {
    topics[topic as keyof TopicsTypescript] = true;
  }
  return topics;
};
const showTypescriptTopicsStatus = (topics: TopicsTypescript): void => {
  for (const topic in topics) {
    console.log(`${topic}: ${topics[topic as keyof TopicsTypescript]}`);
  }
};
const TopicsTypescript: TopicsTypescript = {
  types: false,
  functions: false,
  objects: false,
  clases: false,
  interfaces: false,
  generics: false,
  decorators: false,
};
const userDaniel: userLearning = {
  name: "Jeferson Daniel",
  course: "Typescript",
  topics: TopicsTypescript,
  learning: learningTypescript,
  showTopicsStatus: showTypescriptTopicsStatus,
};
userDaniel.learning(userDaniel.topics).then((value) => {
  console.log(`${userDaniel.name}, complete ${userDaniel.course} course
  topics: `);
  userDaniel.showTopicsStatus(value);
});

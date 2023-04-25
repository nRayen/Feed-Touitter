import { TweetForm } from "./Components/TweetForm.jsx";
import { TweetList } from "./Components/TweetList.jsx";

let DEFAULT_TWEETS = [
  {
    id: 1,
    name: "John",
    content: "Salut ca va ?",
    like: 12,
  },
  {
    id: 2,
    name: "Jena",
    content: "Bonjour les gens",
    like: 1140,
  },
  {
    id: 3,
    name: "Bob",
    content: "Ca bricole !",
    like: 1,
  },
  {
    id: 4,
    name: "Tommy",
    content: "Let's have fun !",
    like: 126,
  },
  {
    id: 5,
    name: "Marie",
    content: "Je suis claquée...",
    like: 754,
  },
  {
    id: 6,
    name: "John",
    content: "Salut ca va ?",
    like: 12,
  },
  {
    id: 7,
    name: "Jena",
    content: "Bonjour les gens",
    like: 1140,
  },
  {
    id: 8,
    name: "Bob",
    content: "Ca bricole !",
    like: 1,
  },
  {
    id: 9,
    name: "Tommy",
    content: "Let's have fun !",
    like: 126,
  },
  {
    id: 10,
    name: "Marie",
    content: "Je suis claquée...",
    like: 754,
  },
];

export function App() {
  return (
    <>
      <TweetList importedTweets={DEFAULT_TWEETS} />
    </>
  );
}

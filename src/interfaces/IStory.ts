export default interface IStory {
  id: string;
  title: string;
  author: string;
  description: string;
  storyText?: string;
  genres?: string[];
  bannerImage: string;
}

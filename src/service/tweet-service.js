import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    const contant = data.contant;
    const tags = contant.match(/#[a-zA-Z0-9_]+/g); //this regex extracts hashtags
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);

    let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
    let titleOfpresentTags = alreadyPresentTags.map((tags) => tags.title);
    let newTags = tags.filter((tag) => !titleOfpresentTags.includes(tag));
    newTags = newTags.map((tag) => {
      return { title: tag, tweet: [tweet.id] };
    });
    await this.hashtagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweet.push(tweet.id);
      tag.save();
    });

    return tweet;
  }
}

export default TweetService;

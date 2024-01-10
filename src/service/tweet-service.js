import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    console.log("Service", data);
    const content = data.content;
    const tags = content
      .match(/#[a-zA-Z0-9_]+/g)
      .map((tag) => tag.substring(1).toLowerCase());
    //this regex extracts hashtags
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);

    let alreadyPresentTags = await this.hashtagRepository.findByTitle(tags);
    let titleOfpresentTags = alreadyPresentTags.map((tags) => tags.title);
    let newTags = tags.filter((tag) => !titleOfpresentTags.includes(tag));
    newTags = newTags.map((tag) => {
      return { title: tag, tweets: [tweet.id] };
    });
    await this.hashtagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      console.log("forEach", tag, tweet.id);
      tag.tweets.push(tweet.id);
      tag.save(); //document.save()
    });

    return tweet;
  }
}

export default TweetService;

import CrudRepository from "./crud-repository.js";
import Tweet from "../models/tweet.js";

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async getWithComments(id) {
    try {
      console.log("Repo..", id);
      const tweet = await Tweet.findById(id)
        .populate({
          path: "comments",
          populate: {
            path: "comments",
          },
        })
        .lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async find(id) {
    try {
      const tweet = await Tweet.findById(id).populate({ path: "likes" });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;

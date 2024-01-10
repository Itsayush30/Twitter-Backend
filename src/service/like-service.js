import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelType, modelId, userId) {
    if (modelType == "Tweet") {
      const tweetDocument = await this.tweetRepository.find(modelId);
    } else if (modelType == "Comment") {
      //TODO
    } else {
      throw new Error("Unknown modle type");
    }

    console.log("toggleLike", modelType, modelId, userId);
    const likeAlreadyExists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });
    if (likeAlreadyExists) {
      tweetDocument.likes.pull(likeAlreadyExists.id);
      tweetDocument.save();
      likeAlreadyExists.remove();
      var isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      tweetDocument.likes.push(newLike.id);
      tweetDocument.save();
      var isAdded = true;
    }
  }
}

export default LikeService;

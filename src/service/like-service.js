import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelType, modelId, userId) {
    if (modelType == "Tweet") {
      var tweetDocument = await this.tweetRepository.find(modelId);
      console.log(tweetDocument, "here");
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
      console.log("likeObj", likeAlreadyExists);
      tweetDocument.likes.pull(likeAlreadyExists.id);
      await tweetDocument.save();
      await likeAlreadyExists.deleteOne();
      return "Disliked";
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      tweetDocument.likes.push(newLike.id);
      tweetDocument.save();
      return "liked";
    }
  }
}

export default LikeService;

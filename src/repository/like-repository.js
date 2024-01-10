import CrudRepository from "./crud-repository.js";
import Like from "../models/like.js";

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }
  async findByUserAndLikeable(data) {
    try {
      const like = await Like.findOne(data);
      return like;
    } catch (error) {
      throw error;
    }
  }
}

export default LikeRepository;

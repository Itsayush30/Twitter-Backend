import CrudRepository from "./crud-repository.js";
import Hashtag from "../models/hashtag.js";

class HashtagRepository extends CrudRepository {
  constructor() {
    super(Hashtag);
  }

  async findByTitle(titleList) {
    try {
      const tags = await Hashtag.find({
        title: titleList,
      });
      return tags;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HashtagRepository;

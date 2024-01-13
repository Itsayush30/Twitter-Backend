import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRespository extends CrudRepository {
  constructor() {
    super(User);
  }

  async findBy(data) {
    try {
      console.log("here")
      const response = await User.findOne(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRespository;

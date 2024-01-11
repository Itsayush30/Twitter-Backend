import { UserRespository } from "../repository/index.js";
class UserService {
  constructor() {
    this.userRepository = new UserRespository();
  }

  async signup(data) {
    try {
      console.log(data);
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;

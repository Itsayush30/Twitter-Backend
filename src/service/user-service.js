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
  async getUserByEmail(email) {
    try {
      console.log("here", email);
      const user = await this.userRepository.findBy({ email });
      return user;
    } catch (error) {
      console.log("user");

      throw error;
    }
  }

  async signin(data) {
    try {
      console.log(data.email);
      const user = await this.getUserByEmail(data.email);
      console.log(user);
      if (!user) {
        throw {
          message: "no user found",
        };
      }
      if (!user.comparePassword(data.password)) {
        throw {
          message: "incorrect password",
        };
      }
      const token = user.genJWT();
      return token;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;

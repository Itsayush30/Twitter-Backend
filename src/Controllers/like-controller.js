import LikeService from "../service/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelType,
      req.query.modelId,
      req.body.userId
    );
    console.log("likeControllerr", response);
    return res.status(201).json({
      success: true,
      message: "Successfully toggled like",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      data: {},
      err: error,
    });
  }
};

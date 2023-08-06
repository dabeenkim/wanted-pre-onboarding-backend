const PostService = require("../services/post.service");

class PostController {
  postService = new PostService();

  /**
   * 게시글 전체조회
   */
  getPost = async (req, res, next) => {
    const { offset, limit } = req.query;
    const getPosts = await this.postService.findPosts(offset, limit);
    res.status(200).json({ posts: getPosts });
  };

  /**
   * 게시글 작성
   */
  createPost = async (req, res, next) => {
    const { email } = res.locals.user;
    const { title, desc } = req.body;
    const writePost = await this.postService.makePost(email, title, desc);
    res.status(200).json({ message: "게시글이 작성되었습니다." });
  };

  /**
   * 게시글 상세조회
   */
  getDetailPost = async (req, res, next) => {
    const { postId } = req.params;
    console.log(postId);
    const getOnePost = await this.postService.findPost(postId);
    res.status(200).json({ getOnePost });
  };

  /**
   * 게시글 수정
   */
  modifyPost = async (req, res, next) => {
    const { email } = res.locals.user;
    const { postId } = req.params;
    const { title, desc } = req.body;
    const modifyPost = await this.postService.modifyPosts(
      email,
      postId,
      title,
      desc
    );
    res.status(200).json({ message: "게시글이 수정되었습니다." });
  };

  /**
   * 게시글 삭제
   */
  removePost = async (req, res, next) => {
    const { email } = res.locals.user;
    const { postId } = req.params;
    const deltetePost = await this.postService.removePost(email, postId);
    res.status(200).json({ message: "게시글이 삭제되었습니다." });
  };
}

module.exports = PostController;

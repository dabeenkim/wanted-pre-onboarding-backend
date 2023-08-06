const PostRepository = require("../repositories/post.repository");

class PostService {
  postRepository = new PostRepository();

  /**
   * 게시글 전체조회
   */
  findPosts = async (offset, limit) => {
    const posts = await this.postRepository.getPosts(
      Number(offset),
      Number(limit)
    );
    return posts;
  };

  /**
   * 게시글 작성
   */
  makePost = async (email, title, desc) => {
    const createPost = await this.postRepository.writePost(email, title, desc);
    return;
  };

  /**
   * 게시글 상세조회
   */
  findPost = async (postId) => {
    const findOnesPost = await this.postRepository.getOnesPost(postId);
    return findOnesPost;
  };

  /**
   * 게시글 수정
   */
  modifyPosts = async (email, title, desc) => {
    const modifyThePost = await this.postRepository.modifyPost(
      email,
      postId,
      title,
      desc
    );
    return;
  };

  /**
   * 게시글 삭제
   */
  removePost = async (email, postId) => {
    const deletePost = await this.postRepository.removePost(email, postId);
    return;
  };
}

module.exports = PostService;

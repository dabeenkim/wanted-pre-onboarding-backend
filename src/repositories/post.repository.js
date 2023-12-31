const { Users, Posts } = require("../../models");
const { Op } = require("sequelize");

class PostRepository {
  constructor() {}
  /**
   * 게시글 전체조회
   */
  getPosts = async (offset, limit) => {
    const findPosts = await Posts.findAll({
      attributes: [
        "postId",
        "email",
        "title",
        "desc",
        "createdAt",
        "updatedAt",
      ],
      offset: offset,
      limit: limit,
      order: [["createdAt", "DESC"]],
    });

    const postCnt = await Posts.count();
    const hasNextPage = offset + limit < postCnt;

    return {
      data: findPosts,
      limit,
      offset,
      postCnt,
      hasNextPage,
    };
  };

  /**
   * 게시글 작성
   */
  writePost = async (email, title, desc) => {
    const createPost = await Posts.create({
      email,
      title,
      desc,
    });
    return createPost;
  };

  /**
   * 게시글 상세조회
   */
  getOnesPost = async (postId) => {
    const getPost = await Posts.findOne({
      where: { postId },
    });
    return getPost;
  };

  /**
   * 게시글 수정
   */
  modifyPost = async (email, postId, title, desc) => {
    const modify = await Posts.update(
      {
        title,
        desc,
      },
      {
        where: {
          [Op.and]: [{ postId }, { email }],
        },
      }
    );
    return modify;
  };

  /**
   * 게시글 삭제
   */
  removePost = async (email, postId) => {
    const deletePost = await Posts.destroy({
      where: {
        [Op.and]: [{ postId }, { email }],
      },
    });
    return deletePost;
  };
}

module.exports = PostRepository;

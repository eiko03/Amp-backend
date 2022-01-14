/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      profilePhoto
      userStatus
      biography
      isCreator
      createdAt
      creator_id
      updatedAt
      posts {
        items {
          id
          title
          body
          likes
          file
          fileName
          fileType
          createdAt
          authorId
          updatedAt
        }
        nextToken
      }
      custompages {
        items {
          id
          header
          profile
          headingText
          subheadingText
          testimonials
          whyJoin
          demoContent
          joinBtnColor
          whyJoinBg
          endImg
          authorId
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          body
          likes
          createdAt
          authorId
          postId
          name
          updatedAt
        }
        nextToken
      }
      donationsIn {
        items {
          id
          amount
          currency
          body
          transactionId
          createdAt
          authorId
          creatorId
          updatedAt
        }
        nextToken
      }
      donationsOut {
        items {
          id
          amount
          currency
          body
          transactionId
          createdAt
          authorId
          creatorId
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        profilePhoto
        userStatus
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
        posts {
          nextToken
        }
        custompages {
          nextToken
        }
        comments {
          nextToken
        }
        donationsIn {
          nextToken
        }
        donationsOut {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      body
      likes
      file
      fileName
      fileType
      createdAt
      authorId
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        userStatus
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
        posts {
          nextToken
        }
        custompages {
          nextToken
        }
        comments {
          nextToken
        }
        donationsIn {
          nextToken
        }
        donationsOut {
          nextToken
        }
      }
      comments {
        items {
          id
          body
          likes
          createdAt
          authorId
          postId
          name
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        body
        likes
        file
        fileName
        fileType
        createdAt
        authorId
        updatedAt
        author {
          id
          email
          name
          profilePhoto
          userStatus
          biography
          isCreator
          createdAt
          creator_id
          updatedAt
        }
        comments {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCustomPage = /* GraphQL */ `
  query GetCustomPage($id: ID!) {
    getCustomPage(id: $id) {
      id
      header
      profile
      headingText
      subheadingText
      testimonials
      whyJoin
      demoContent
      joinBtnColor
      whyJoinBg
      endImg
      authorId
      createdAt
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        userStatus
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
        posts {
          nextToken
        }
        custompages {
          nextToken
        }
        comments {
          nextToken
        }
        donationsIn {
          nextToken
        }
        donationsOut {
          nextToken
        }
      }
    }
  }
`;
export const listCustomPages = /* GraphQL */ `
  query ListCustomPages(
    $filter: ModelCustomPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        header
        profile
        headingText
        subheadingText
        testimonials
        whyJoin
        demoContent
        joinBtnColor
        whyJoinBg
        endImg
        authorId
        createdAt
        updatedAt
        author {
          id
          email
          name
          profilePhoto
          userStatus
          biography
          isCreator
          createdAt
          creator_id
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      body
      likes
      createdAt
      authorId
      postId
      name
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        userStatus
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
        posts {
          nextToken
        }
        custompages {
          nextToken
        }
        comments {
          nextToken
        }
        donationsIn {
          nextToken
        }
        donationsOut {
          nextToken
        }
      }
      post {
        id
        title
        body
        likes
        file
        fileName
        fileType
        createdAt
        authorId
        updatedAt
        author {
          id
          email
          name
          profilePhoto
          userStatus
          biography
          isCreator
          createdAt
          creator_id
          updatedAt
        }
        comments {
          nextToken
        }
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        body
        likes
        createdAt
        authorId
        postId
        name
        updatedAt
        author {
          id
          email
          name
          profilePhoto
          userStatus
          biography
          isCreator
          createdAt
          creator_id
          updatedAt
        }
        post {
          id
          title
          body
          likes
          file
          fileName
          fileType
          createdAt
          authorId
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getDonation = /* GraphQL */ `
  query GetDonation($id: ID!) {
    getDonation(id: $id) {
      id
      amount
      currency
      body
      transactionId
      createdAt
      authorId
      creatorId
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        userStatus
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
        posts {
          nextToken
        }
        custompages {
          nextToken
        }
        comments {
          nextToken
        }
        donationsIn {
          nextToken
        }
        donationsOut {
          nextToken
        }
      }
      creator {
        id
        email
        name
        profilePhoto
        userStatus
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
        posts {
          nextToken
        }
        custompages {
          nextToken
        }
        comments {
          nextToken
        }
        donationsIn {
          nextToken
        }
        donationsOut {
          nextToken
        }
      }
    }
  }
`;
export const listDonations = /* GraphQL */ `
  query ListDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        currency
        body
        transactionId
        createdAt
        authorId
        creatorId
        updatedAt
        author {
          id
          email
          name
          profilePhoto
          userStatus
          biography
          isCreator
          createdAt
          creator_id
          updatedAt
        }
        creator {
          id
          email
          name
          profilePhoto
          userStatus
          biography
          isCreator
          createdAt
          creator_id
          updatedAt
        }
      }
      nextToken
    }
  }
`;

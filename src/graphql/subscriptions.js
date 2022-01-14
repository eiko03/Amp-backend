/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateCustomPage = /* GraphQL */ `
  subscription OnCreateCustomPage {
    onCreateCustomPage {
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
export const onUpdateCustomPage = /* GraphQL */ `
  subscription OnUpdateCustomPage {
    onUpdateCustomPage {
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
export const onDeleteCustomPage = /* GraphQL */ `
  subscription OnDeleteCustomPage {
    onDeleteCustomPage {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation {
    onCreateDonation {
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
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation {
    onUpdateDonation {
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
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation {
    onDeleteDonation {
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createCustomPage = /* GraphQL */ `
  mutation CreateCustomPage(
    $input: CreateCustomPageInput!
    $condition: ModelCustomPageConditionInput
  ) {
    createCustomPage(input: $input, condition: $condition) {
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
export const updateCustomPage = /* GraphQL */ `
  mutation UpdateCustomPage(
    $input: UpdateCustomPageInput!
    $condition: ModelCustomPageConditionInput
  ) {
    updateCustomPage(input: $input, condition: $condition) {
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
export const deleteCustomPage = /* GraphQL */ `
  mutation DeleteCustomPage(
    $input: DeleteCustomPageInput!
    $condition: ModelCustomPageConditionInput
  ) {
    deleteCustomPage(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createDonation = /* GraphQL */ `
  mutation CreateDonation(
    $input: CreateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    createDonation(input: $input, condition: $condition) {
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
export const updateDonation = /* GraphQL */ `
  mutation UpdateDonation(
    $input: UpdateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    updateDonation(input: $input, condition: $condition) {
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
export const deleteDonation = /* GraphQL */ `
  mutation DeleteDonation(
    $input: DeleteDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    deleteDonation(input: $input, condition: $condition) {
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

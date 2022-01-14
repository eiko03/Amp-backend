import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly name?: string;
  readonly biography?: string;
  readonly createdAt: string;
  readonly creator_id?: string;
  readonly posts?: (Post | null)[];
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly createdAt: string;
  readonly authorId: string;
  readonly author: User;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}
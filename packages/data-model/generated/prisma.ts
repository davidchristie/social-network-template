import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    accounts: <T = Account[]>(args: { where?: AccountWhereInput, orderBy?: AccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    profiles: <T = Profile[]>(args: { where?: ProfileWhereInput, orderBy?: ProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    account: <T = Account | null>(args: { where: AccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    profile: <T = Profile | null>(args: { where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accountsConnection: <T = AccountConnection>(args: { where?: AccountWhereInput, orderBy?: AccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    profilesConnection: <T = ProfileConnection>(args: { where?: ProfileWhereInput, orderBy?: ProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createAccount: <T = Account>(args: { data: AccountCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProfile: <T = Profile>(args: { data: ProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAccount: <T = Account | null>(args: { data: AccountUpdateInput, where: AccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProfile: <T = Profile | null>(args: { data: ProfileUpdateInput, where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAccount: <T = Account | null>(args: { where: AccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProfile: <T = Profile | null>(args: { where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAccount: <T = Account>(args: { where: AccountWhereUniqueInput, create: AccountCreateInput, update: AccountUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProfile: <T = Profile>(args: { where: ProfileWhereUniqueInput, create: ProfileCreateInput, update: ProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAccounts: <T = BatchPayload>(args: { data: AccountUpdateInput, where?: AccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProfiles: <T = BatchPayload>(args: { data: ProfileUpdateInput, where?: ProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAccounts: <T = BatchPayload>(args: { where?: AccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProfiles: <T = BatchPayload>(args: { where?: ProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    account: <T = AccountSubscriptionPayload | null>(args: { where?: AccountSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    profile: <T = ProfileSubscriptionPayload | null>(args: { where?: ProfileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Account: (where?: AccountWhereInput) => Promise<boolean>
  Post: (where?: PostWhereInput) => Promise<boolean>
  Profile: (where?: ProfileWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type Account implements Node {
  email: String!
  id: ID!
  name: String!
  password: String!
  profile(where: ProfileWhereInput): Profile!
}

"""A connection to a list of items."""
type AccountConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AccountEdge]!
  aggregate: AggregateAccount!
}

input AccountCreateInput {
  email: String!
  name: String!
  password: String!
  profile: ProfileCreateOneWithoutAccountInput!
}

input AccountCreateOneWithoutProfileInput {
  create: AccountCreateWithoutProfileInput
  connect: AccountWhereUniqueInput
}

input AccountCreateWithoutProfileInput {
  email: String!
  name: String!
  password: String!
}

"""An edge in a connection."""
type AccountEdge {
  """The item at the end of the edge."""
  node: Account!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AccountOrderByInput {
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AccountPreviousValues {
  email: String!
  id: ID!
  name: String!
  password: String!
}

type AccountSubscriptionPayload {
  mutation: MutationType!
  node: Account
  updatedFields: [String!]
  previousValues: AccountPreviousValues
}

input AccountSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AccountSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AccountSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AccountSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AccountWhereInput
}

input AccountUpdateInput {
  email: String
  name: String
  password: String
  profile: ProfileUpdateOneWithoutAccountInput
}

input AccountUpdateOneWithoutProfileInput {
  create: AccountCreateWithoutProfileInput
  connect: AccountWhereUniqueInput
  delete: Boolean
  update: AccountUpdateWithoutProfileDataInput
  upsert: AccountUpsertWithoutProfileInput
}

input AccountUpdateWithoutProfileDataInput {
  email: String
  name: String
  password: String
}

input AccountUpsertWithoutProfileInput {
  update: AccountUpdateWithoutProfileDataInput!
  create: AccountCreateWithoutProfileInput!
}

input AccountWhereInput {
  """Logical AND on all given filters."""
  AND: [AccountWhereInput!]

  """Logical OR on all given filters."""
  OR: [AccountWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AccountWhereInput!]
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  profile: ProfileWhereInput
}

input AccountWhereUniqueInput {
  email: String
  id: ID
}

type AggregateAccount {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createAccount(data: AccountCreateInput!): Account!
  createPost(data: PostCreateInput!): Post!
  createProfile(data: ProfileCreateInput!): Profile!
  updateAccount(data: AccountUpdateInput!, where: AccountWhereUniqueInput!): Account
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  deleteAccount(where: AccountWhereUniqueInput!): Account
  deletePost(where: PostWhereUniqueInput!): Post
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  upsertAccount(where: AccountWhereUniqueInput!, create: AccountCreateInput!, update: AccountUpdateInput!): Account!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  updateManyAccounts(data: AccountUpdateInput!, where: AccountWhereInput): BatchPayload!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyProfiles(data: ProfileUpdateInput!, where: ProfileWhereInput): BatchPayload!
  deleteManyAccounts(where: AccountWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  createdBy(where: ProfileWhereInput): Profile!
  id: ID!
  text: String!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  text: String!
  createdBy: ProfileCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutCreatedByInput {
  create: [PostCreateWithoutCreatedByInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutCreatedByInput {
  text: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  text: String
  createdBy: ProfileUpdateOneWithoutPostsInput
}

input PostUpdateManyWithoutCreatedByInput {
  create: [PostCreateWithoutCreatedByInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutCreatedByInput!]
}

input PostUpdateWithoutCreatedByDataInput {
  text: String
}

input PostUpdateWithWhereUniqueWithoutCreatedByInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutCreatedByDataInput!
}

input PostUpsertWithWhereUniqueWithoutCreatedByInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutCreatedByDataInput!
  create: PostCreateWithoutCreatedByInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  createdBy: ProfileWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Profile implements Node {
  account(where: AccountWhereInput): Account!
  id: ID!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

"""A connection to a list of items."""
type ProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  name: String!
  account: AccountCreateOneWithoutProfileInput!
  posts: PostCreateManyWithoutCreatedByInput
}

input ProfileCreateOneWithoutAccountInput {
  create: ProfileCreateWithoutAccountInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateOneWithoutPostsInput {
  create: ProfileCreateWithoutPostsInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateWithoutAccountInput {
  name: String!
  posts: PostCreateManyWithoutCreatedByInput
}

input ProfileCreateWithoutPostsInput {
  name: String!
  account: AccountCreateOneWithoutProfileInput!
}

"""An edge in a connection."""
type ProfileEdge {
  """The item at the end of the edge."""
  node: Profile!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProfilePreviousValues {
  id: ID!
  name: String!
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProfileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
}

input ProfileUpdateInput {
  name: String
  account: AccountUpdateOneWithoutProfileInput
  posts: PostUpdateManyWithoutCreatedByInput
}

input ProfileUpdateOneWithoutAccountInput {
  create: ProfileCreateWithoutAccountInput
  connect: ProfileWhereUniqueInput
  delete: Boolean
  update: ProfileUpdateWithoutAccountDataInput
  upsert: ProfileUpsertWithoutAccountInput
}

input ProfileUpdateOneWithoutPostsInput {
  create: ProfileCreateWithoutPostsInput
  connect: ProfileWhereUniqueInput
  delete: Boolean
  update: ProfileUpdateWithoutPostsDataInput
  upsert: ProfileUpsertWithoutPostsInput
}

input ProfileUpdateWithoutAccountDataInput {
  name: String
  posts: PostUpdateManyWithoutCreatedByInput
}

input ProfileUpdateWithoutPostsDataInput {
  name: String
  account: AccountUpdateOneWithoutProfileInput
}

input ProfileUpsertWithoutAccountInput {
  update: ProfileUpdateWithoutAccountDataInput!
  create: ProfileCreateWithoutAccountInput!
}

input ProfileUpsertWithoutPostsInput {
  update: ProfileUpdateWithoutPostsDataInput!
  create: ProfileCreateWithoutPostsInput!
}

input ProfileWhereInput {
  """Logical AND on all given filters."""
  AND: [ProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  account: AccountWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  accounts(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account]!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  account(where: AccountWhereUniqueInput!): Account
  post(where: PostWhereUniqueInput!): Post
  profile(where: ProfileWhereUniqueInput!): Profile
  accountsConnection(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccountConnection!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  account(where: AccountSubscriptionWhereInput): AccountSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type AccountOrderByInput =   'email_ASC' |
  'email_DESC' |
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProfileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface ProfileCreateOneWithoutPostsInput {
  create?: ProfileCreateWithoutPostsInput
  connect?: ProfileWhereUniqueInput
}

export interface AccountWhereInput {
  AND?: AccountWhereInput[] | AccountWhereInput
  OR?: AccountWhereInput[] | AccountWhereInput
  NOT?: AccountWhereInput[] | AccountWhereInput
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  profile?: ProfileWhereInput
}

export interface PostUpdateInput {
  text?: String
  createdBy?: ProfileUpdateOneWithoutPostsInput
}

export interface PostUpdateManyWithoutCreatedByInput {
  create?: PostCreateWithoutCreatedByInput[] | PostCreateWithoutCreatedByInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutCreatedByInput[] | PostUpdateWithWhereUniqueWithoutCreatedByInput
  upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput[] | PostUpsertWithWhereUniqueWithoutCreatedByInput
}

export interface ProfileUpsertWithoutAccountInput {
  update: ProfileUpdateWithoutAccountDataInput
  create: ProfileCreateWithoutAccountInput
}

export interface AccountCreateWithoutProfileInput {
  email: String
  name: String
  password: String
}

export interface PostUpsertWithWhereUniqueWithoutCreatedByInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutCreatedByDataInput
  create: PostCreateWithoutCreatedByInput
}

export interface ProfileSubscriptionWhereInput {
  AND?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput
  OR?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput
  NOT?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProfileWhereInput
}

export interface AccountCreateInput {
  email: String
  name: String
  password: String
  profile: ProfileCreateOneWithoutAccountInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface ProfileCreateOneWithoutAccountInput {
  create?: ProfileCreateWithoutAccountInput
  connect?: ProfileWhereUniqueInput
}

export interface AccountWhereUniqueInput {
  email?: String
  id?: ID_Input
}

export interface ProfileCreateWithoutAccountInput {
  name: String
  posts?: PostCreateManyWithoutCreatedByInput
}

export interface ProfileWhereUniqueInput {
  id?: ID_Input
}

export interface PostCreateManyWithoutCreatedByInput {
  create?: PostCreateWithoutCreatedByInput[] | PostCreateWithoutCreatedByInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface ProfileUpdateInput {
  name?: String
  account?: AccountUpdateOneWithoutProfileInput
  posts?: PostUpdateManyWithoutCreatedByInput
}

export interface PostCreateWithoutCreatedByInput {
  text: String
}

export interface AccountUpsertWithoutProfileInput {
  update: AccountUpdateWithoutProfileDataInput
  create: AccountCreateWithoutProfileInput
}

export interface PostCreateInput {
  text: String
  createdBy: ProfileCreateOneWithoutPostsInput
}

export interface AccountUpdateOneWithoutProfileInput {
  create?: AccountCreateWithoutProfileInput
  connect?: AccountWhereUniqueInput
  delete?: Boolean
  update?: AccountUpdateWithoutProfileDataInput
  upsert?: AccountUpsertWithoutProfileInput
}

export interface PostUpdateWithoutCreatedByDataInput {
  text?: String
}

export interface ProfileUpdateOneWithoutPostsInput {
  create?: ProfileCreateWithoutPostsInput
  connect?: ProfileWhereUniqueInput
  delete?: Boolean
  update?: ProfileUpdateWithoutPostsDataInput
  upsert?: ProfileUpsertWithoutPostsInput
}

export interface ProfileCreateWithoutPostsInput {
  name: String
  account: AccountCreateOneWithoutProfileInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  createdBy?: ProfileWhereInput
}

export interface AccountCreateOneWithoutProfileInput {
  create?: AccountCreateWithoutProfileInput
  connect?: AccountWhereUniqueInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface PostUpdateWithWhereUniqueWithoutCreatedByInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutCreatedByDataInput
}

export interface ProfileUpsertWithoutPostsInput {
  update: ProfileUpdateWithoutPostsDataInput
  create: ProfileCreateWithoutPostsInput
}

export interface ProfileUpdateWithoutPostsDataInput {
  name?: String
  account?: AccountUpdateOneWithoutProfileInput
}

export interface ProfileUpdateWithoutAccountDataInput {
  name?: String
  posts?: PostUpdateManyWithoutCreatedByInput
}

export interface ProfileUpdateOneWithoutAccountInput {
  create?: ProfileCreateWithoutAccountInput
  connect?: ProfileWhereUniqueInput
  delete?: Boolean
  update?: ProfileUpdateWithoutAccountDataInput
  upsert?: ProfileUpsertWithoutAccountInput
}

export interface AccountUpdateInput {
  email?: String
  name?: String
  password?: String
  profile?: ProfileUpdateOneWithoutAccountInput
}

export interface ProfileCreateInput {
  name: String
  account: AccountCreateOneWithoutProfileInput
  posts?: PostCreateManyWithoutCreatedByInput
}

export interface AccountUpdateWithoutProfileDataInput {
  email?: String
  name?: String
  password?: String
}

export interface AccountSubscriptionWhereInput {
  AND?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput
  OR?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput
  NOT?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AccountWhereInput
}

export interface ProfileWhereInput {
  AND?: ProfileWhereInput[] | ProfileWhereInput
  OR?: ProfileWhereInput[] | ProfileWhereInput
  NOT?: ProfileWhereInput[] | ProfileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  account?: AccountWhereInput
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ProfilePreviousValues {
  id: ID_Output
  name: String
}

export interface BatchPayload {
  count: Long
}

export interface Account extends Node {
  email: String
  id: ID_Output
  name: String
  password: String
  profile: Profile
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface Profile extends Node {
  account: Account
  id: ID_Output
  name: String
  posts?: Post[]
}

export interface AggregateProfile {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ProfileEdge {
  node: Profile
  cursor: String
}

export interface AggregatePost {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface AccountConnection {
  pageInfo: PageInfo
  edges: AccountEdge[]
  aggregate: AggregateAccount
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

/*
 * An edge in a connection.

 */
export interface AccountEdge {
  node: Account
  cursor: String
}

export interface Post extends Node {
  createdBy: Profile
  id: ID_Output
  text: String
}

export interface AccountPreviousValues {
  email: String
  id: ID_Output
  name: String
  password: String
}

export interface AccountSubscriptionPayload {
  mutation: MutationType
  node?: Account
  updatedFields?: String[]
  previousValues?: AccountPreviousValues
}

export interface PostPreviousValues {
  id: ID_Output
  text: String
}

export interface ProfileSubscriptionPayload {
  mutation: MutationType
  node?: Profile
  updatedFields?: String[]
  previousValues?: ProfilePreviousValues
}

export interface AggregateAccount {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ProfileConnection {
  pageInfo: PageInfo
  edges: ProfileEdge[]
  aggregate: AggregateProfile
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string
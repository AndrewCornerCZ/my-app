
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Hashtag
 * 
 */
export type Hashtag = $Result.DefaultSelection<Prisma.$HashtagPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model PostComment
 * 
 */
export type PostComment = $Result.DefaultSelection<Prisma.$PostCommentPayload>
/**
 * Model PostHashtag
 * 
 */
export type PostHashtag = $Result.DefaultSelection<Prisma.$PostHashtagPayload>
/**
 * Model UserLike
 * 
 */
export type UserLike = $Result.DefaultSelection<Prisma.$UserLikePayload>
/**
 * Model UserFollow
 * 
 */
export type UserFollow = $Result.DefaultSelection<Prisma.$UserFollowPayload>
/**
 * Model UserSport
 * 
 */
export type UserSport = $Result.DefaultSelection<Prisma.$UserSportPayload>
/**
 * Model Sport
 * 
 */
export type Sport = $Result.DefaultSelection<Prisma.$SportPayload>
/**
 * Model SportRanks
 * 
 */
export type SportRanks = $Result.DefaultSelection<Prisma.$SportRanksPayload>
/**
 * Model SportActivity
 * 
 */
export type SportActivity = $Result.DefaultSelection<Prisma.$SportActivityPayload>
/**
 * Model SportActivityParticipant
 * 
 */
export type SportActivityParticipant = $Result.DefaultSelection<Prisma.$SportActivityParticipantPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hashtag`: Exposes CRUD operations for the **Hashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hashtags
    * const hashtags = await prisma.hashtag.findMany()
    * ```
    */
  get hashtag(): Prisma.HashtagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postComment`: Exposes CRUD operations for the **PostComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostComments
    * const postComments = await prisma.postComment.findMany()
    * ```
    */
  get postComment(): Prisma.PostCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postHashtag`: Exposes CRUD operations for the **PostHashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostHashtags
    * const postHashtags = await prisma.postHashtag.findMany()
    * ```
    */
  get postHashtag(): Prisma.PostHashtagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLike`: Exposes CRUD operations for the **UserLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLikes
    * const userLikes = await prisma.userLike.findMany()
    * ```
    */
  get userLike(): Prisma.UserLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFollow`: Exposes CRUD operations for the **UserFollow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFollows
    * const userFollows = await prisma.userFollow.findMany()
    * ```
    */
  get userFollow(): Prisma.UserFollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSport`: Exposes CRUD operations for the **UserSport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSports
    * const userSports = await prisma.userSport.findMany()
    * ```
    */
  get userSport(): Prisma.UserSportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sport`: Exposes CRUD operations for the **Sport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sports
    * const sports = await prisma.sport.findMany()
    * ```
    */
  get sport(): Prisma.SportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sportRanks`: Exposes CRUD operations for the **SportRanks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SportRanks
    * const sportRanks = await prisma.sportRanks.findMany()
    * ```
    */
  get sportRanks(): Prisma.SportRanksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sportActivity`: Exposes CRUD operations for the **SportActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SportActivities
    * const sportActivities = await prisma.sportActivity.findMany()
    * ```
    */
  get sportActivity(): Prisma.SportActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sportActivityParticipant`: Exposes CRUD operations for the **SportActivityParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SportActivityParticipants
    * const sportActivityParticipants = await prisma.sportActivityParticipant.findMany()
    * ```
    */
  get sportActivityParticipant(): Prisma.SportActivityParticipantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    Hashtag: 'Hashtag',
    Comment: 'Comment',
    PostComment: 'PostComment',
    PostHashtag: 'PostHashtag',
    UserLike: 'UserLike',
    UserFollow: 'UserFollow',
    UserSport: 'UserSport',
    Sport: 'Sport',
    SportRanks: 'SportRanks',
    SportActivity: 'SportActivity',
    SportActivityParticipant: 'SportActivityParticipant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "post" | "hashtag" | "comment" | "postComment" | "postHashtag" | "userLike" | "userFollow" | "userSport" | "sport" | "sportRanks" | "sportActivity" | "sportActivityParticipant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Hashtag: {
        payload: Prisma.$HashtagPayload<ExtArgs>
        fields: Prisma.HashtagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HashtagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HashtagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findFirst: {
            args: Prisma.HashtagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HashtagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findMany: {
            args: Prisma.HashtagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          create: {
            args: Prisma.HashtagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          createMany: {
            args: Prisma.HashtagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HashtagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          delete: {
            args: Prisma.HashtagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          update: {
            args: Prisma.HashtagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          deleteMany: {
            args: Prisma.HashtagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HashtagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HashtagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          upsert: {
            args: Prisma.HashtagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          aggregate: {
            args: Prisma.HashtagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHashtag>
          }
          groupBy: {
            args: Prisma.HashtagGroupByArgs<ExtArgs>
            result: $Utils.Optional<HashtagGroupByOutputType>[]
          }
          count: {
            args: Prisma.HashtagCountArgs<ExtArgs>
            result: $Utils.Optional<HashtagCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      PostComment: {
        payload: Prisma.$PostCommentPayload<ExtArgs>
        fields: Prisma.PostCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          findFirst: {
            args: Prisma.PostCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          findMany: {
            args: Prisma.PostCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>[]
          }
          create: {
            args: Prisma.PostCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          createMany: {
            args: Prisma.PostCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>[]
          }
          delete: {
            args: Prisma.PostCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          update: {
            args: Prisma.PostCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          deleteMany: {
            args: Prisma.PostCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>[]
          }
          upsert: {
            args: Prisma.PostCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          aggregate: {
            args: Prisma.PostCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostComment>
          }
          groupBy: {
            args: Prisma.PostCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCommentCountArgs<ExtArgs>
            result: $Utils.Optional<PostCommentCountAggregateOutputType> | number
          }
        }
      }
      PostHashtag: {
        payload: Prisma.$PostHashtagPayload<ExtArgs>
        fields: Prisma.PostHashtagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostHashtagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostHashtagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          findFirst: {
            args: Prisma.PostHashtagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostHashtagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          findMany: {
            args: Prisma.PostHashtagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>[]
          }
          create: {
            args: Prisma.PostHashtagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          createMany: {
            args: Prisma.PostHashtagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostHashtagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>[]
          }
          delete: {
            args: Prisma.PostHashtagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          update: {
            args: Prisma.PostHashtagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          deleteMany: {
            args: Prisma.PostHashtagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostHashtagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostHashtagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>[]
          }
          upsert: {
            args: Prisma.PostHashtagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          aggregate: {
            args: Prisma.PostHashtagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostHashtag>
          }
          groupBy: {
            args: Prisma.PostHashtagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostHashtagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostHashtagCountArgs<ExtArgs>
            result: $Utils.Optional<PostHashtagCountAggregateOutputType> | number
          }
        }
      }
      UserLike: {
        payload: Prisma.$UserLikePayload<ExtArgs>
        fields: Prisma.UserLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikePayload>
          }
          findFirst: {
            args: Prisma.UserLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikePayload>
          }
          findMany: {
            args: Prisma.UserLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikePayload>[]
          }
          create: {
            args: Prisma.UserLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikePayload>
          }
          createMany: {
            args: Prisma.UserLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikePayload>[]
          }
          delete: {
            args: Prisma.UserLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikePayload>
          }
          update: {
            args: Prisma.UserLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikePayload>
          }
          deleteMany: {
            args: Prisma.UserLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikePayload>[]
          }
          upsert: {
            args: Prisma.UserLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikePayload>
          }
          aggregate: {
            args: Prisma.UserLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLike>
          }
          groupBy: {
            args: Prisma.UserLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLikeCountArgs<ExtArgs>
            result: $Utils.Optional<UserLikeCountAggregateOutputType> | number
          }
        }
      }
      UserFollow: {
        payload: Prisma.$UserFollowPayload<ExtArgs>
        fields: Prisma.UserFollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          findFirst: {
            args: Prisma.UserFollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          findMany: {
            args: Prisma.UserFollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>[]
          }
          create: {
            args: Prisma.UserFollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          createMany: {
            args: Prisma.UserFollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFollowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>[]
          }
          delete: {
            args: Prisma.UserFollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          update: {
            args: Prisma.UserFollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          deleteMany: {
            args: Prisma.UserFollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFollowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>[]
          }
          upsert: {
            args: Prisma.UserFollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          aggregate: {
            args: Prisma.UserFollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFollow>
          }
          groupBy: {
            args: Prisma.UserFollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFollowCountArgs<ExtArgs>
            result: $Utils.Optional<UserFollowCountAggregateOutputType> | number
          }
        }
      }
      UserSport: {
        payload: Prisma.$UserSportPayload<ExtArgs>
        fields: Prisma.UserSportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          findFirst: {
            args: Prisma.UserSportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          findMany: {
            args: Prisma.UserSportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>[]
          }
          create: {
            args: Prisma.UserSportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          createMany: {
            args: Prisma.UserSportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>[]
          }
          delete: {
            args: Prisma.UserSportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          update: {
            args: Prisma.UserSportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          deleteMany: {
            args: Prisma.UserSportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>[]
          }
          upsert: {
            args: Prisma.UserSportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          aggregate: {
            args: Prisma.UserSportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSport>
          }
          groupBy: {
            args: Prisma.UserSportGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSportGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSportCountArgs<ExtArgs>
            result: $Utils.Optional<UserSportCountAggregateOutputType> | number
          }
        }
      }
      Sport: {
        payload: Prisma.$SportPayload<ExtArgs>
        fields: Prisma.SportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findFirst: {
            args: Prisma.SportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findMany: {
            args: Prisma.SportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          create: {
            args: Prisma.SportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          createMany: {
            args: Prisma.SportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          delete: {
            args: Prisma.SportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          update: {
            args: Prisma.SportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          deleteMany: {
            args: Prisma.SportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          upsert: {
            args: Prisma.SportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          aggregate: {
            args: Prisma.SportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSport>
          }
          groupBy: {
            args: Prisma.SportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportCountArgs<ExtArgs>
            result: $Utils.Optional<SportCountAggregateOutputType> | number
          }
        }
      }
      SportRanks: {
        payload: Prisma.$SportRanksPayload<ExtArgs>
        fields: Prisma.SportRanksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportRanksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportRanksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportRanksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportRanksPayload>
          }
          findFirst: {
            args: Prisma.SportRanksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportRanksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportRanksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportRanksPayload>
          }
          findMany: {
            args: Prisma.SportRanksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportRanksPayload>[]
          }
          create: {
            args: Prisma.SportRanksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportRanksPayload>
          }
          createMany: {
            args: Prisma.SportRanksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportRanksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportRanksPayload>[]
          }
          delete: {
            args: Prisma.SportRanksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportRanksPayload>
          }
          update: {
            args: Prisma.SportRanksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportRanksPayload>
          }
          deleteMany: {
            args: Prisma.SportRanksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportRanksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportRanksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportRanksPayload>[]
          }
          upsert: {
            args: Prisma.SportRanksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportRanksPayload>
          }
          aggregate: {
            args: Prisma.SportRanksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSportRanks>
          }
          groupBy: {
            args: Prisma.SportRanksGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportRanksGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportRanksCountArgs<ExtArgs>
            result: $Utils.Optional<SportRanksCountAggregateOutputType> | number
          }
        }
      }
      SportActivity: {
        payload: Prisma.$SportActivityPayload<ExtArgs>
        fields: Prisma.SportActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityPayload>
          }
          findFirst: {
            args: Prisma.SportActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityPayload>
          }
          findMany: {
            args: Prisma.SportActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityPayload>[]
          }
          create: {
            args: Prisma.SportActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityPayload>
          }
          createMany: {
            args: Prisma.SportActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityPayload>[]
          }
          delete: {
            args: Prisma.SportActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityPayload>
          }
          update: {
            args: Prisma.SportActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityPayload>
          }
          deleteMany: {
            args: Prisma.SportActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityPayload>[]
          }
          upsert: {
            args: Prisma.SportActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityPayload>
          }
          aggregate: {
            args: Prisma.SportActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSportActivity>
          }
          groupBy: {
            args: Prisma.SportActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportActivityCountArgs<ExtArgs>
            result: $Utils.Optional<SportActivityCountAggregateOutputType> | number
          }
        }
      }
      SportActivityParticipant: {
        payload: Prisma.$SportActivityParticipantPayload<ExtArgs>
        fields: Prisma.SportActivityParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportActivityParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportActivityParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityParticipantPayload>
          }
          findFirst: {
            args: Prisma.SportActivityParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportActivityParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityParticipantPayload>
          }
          findMany: {
            args: Prisma.SportActivityParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityParticipantPayload>[]
          }
          create: {
            args: Prisma.SportActivityParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityParticipantPayload>
          }
          createMany: {
            args: Prisma.SportActivityParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportActivityParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityParticipantPayload>[]
          }
          delete: {
            args: Prisma.SportActivityParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityParticipantPayload>
          }
          update: {
            args: Prisma.SportActivityParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityParticipantPayload>
          }
          deleteMany: {
            args: Prisma.SportActivityParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportActivityParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportActivityParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityParticipantPayload>[]
          }
          upsert: {
            args: Prisma.SportActivityParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportActivityParticipantPayload>
          }
          aggregate: {
            args: Prisma.SportActivityParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSportActivityParticipant>
          }
          groupBy: {
            args: Prisma.SportActivityParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportActivityParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportActivityParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<SportActivityParticipantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    post?: PostOmit
    hashtag?: HashtagOmit
    comment?: CommentOmit
    postComment?: PostCommentOmit
    postHashtag?: PostHashtagOmit
    userLike?: UserLikeOmit
    userFollow?: UserFollowOmit
    userSport?: UserSportOmit
    sport?: SportOmit
    sportRanks?: SportRanksOmit
    sportActivity?: SportActivityOmit
    sportActivityParticipant?: SportActivityParticipantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userLikes: number
    followers: number
    following: number
    sports: number
    activities: number
    activityParticipations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLikes?: boolean | UserCountOutputTypeCountUserLikesArgs
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    sports?: boolean | UserCountOutputTypeCountSportsArgs
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
    activityParticipations?: boolean | UserCountOutputTypeCountActivityParticipationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportActivityParticipantWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    postHashtags: number
    userLikes: number
    PostComment: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postHashtags?: boolean | PostCountOutputTypeCountPostHashtagsArgs
    userLikes?: boolean | PostCountOutputTypeCountUserLikesArgs
    PostComment?: boolean | PostCountOutputTypeCountPostCommentArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHashtagWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountUserLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikeWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentWhereInput
  }


  /**
   * Count Type HashtagCountOutputType
   */

  export type HashtagCountOutputType = {
    postHashtags: number
  }

  export type HashtagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postHashtags?: boolean | HashtagCountOutputTypeCountPostHashtagsArgs
  }

  // Custom InputTypes
  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HashtagCountOutputType
     */
    select?: HashtagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeCountPostHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHashtagWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    PostComment: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PostComment?: boolean | CommentCountOutputTypeCountPostCommentArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountPostCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentWhereInput
  }


  /**
   * Count Type SportCountOutputType
   */

  export type SportCountOutputType = {
    users: number
    activities: number
  }

  export type SportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SportCountOutputTypeCountUsersArgs
    activities?: boolean | SportCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportCountOutputType
     */
    select?: SportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportWhereInput
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportActivityWhereInput
  }


  /**
   * Count Type SportRanksCountOutputType
   */

  export type SportRanksCountOutputType = {
    users: number
  }

  export type SportRanksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SportRanksCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SportRanksCountOutputType without action
   */
  export type SportRanksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanksCountOutputType
     */
    select?: SportRanksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SportRanksCountOutputType without action
   */
  export type SportRanksCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportWhereInput
  }


  /**
   * Count Type SportActivityCountOutputType
   */

  export type SportActivityCountOutputType = {
    participants: number
  }

  export type SportActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | SportActivityCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * SportActivityCountOutputType without action
   */
  export type SportActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityCountOutputType
     */
    select?: SportActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SportActivityCountOutputType without action
   */
  export type SportActivityCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportActivityParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    followersCount: number | null
    followingCount: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    followersCount: number | null
    followingCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    bio: string | null
    image: string | null
    followersCount: number | null
    followingCount: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    bio: string | null
    image: string | null
    followersCount: number | null
    followingCount: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    bio: number
    image: number
    followersCount: number
    followingCount: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    followersCount?: true
    followingCount?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    followersCount?: true
    followingCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    bio?: true
    image?: true
    followersCount?: true
    followingCount?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    bio?: true
    image?: true
    followersCount?: true
    followingCount?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    bio?: true
    image?: true
    followersCount?: true
    followingCount?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    bio: string
    image: string
    followersCount: number
    followingCount: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    bio?: boolean
    image?: boolean
    followersCount?: boolean
    followingCount?: boolean
    userLikes?: boolean | User$userLikesArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    sports?: boolean | User$sportsArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    activityParticipations?: boolean | User$activityParticipationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    bio?: boolean
    image?: boolean
    followersCount?: boolean
    followingCount?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    bio?: boolean
    image?: boolean
    followersCount?: boolean
    followingCount?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    bio?: boolean
    image?: boolean
    followersCount?: boolean
    followingCount?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "bio" | "image" | "followersCount" | "followingCount", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLikes?: boolean | User$userLikesArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    sports?: boolean | User$sportsArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    activityParticipations?: boolean | User$activityParticipationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userLikes: Prisma.$UserLikePayload<ExtArgs>[]
      followers: Prisma.$UserFollowPayload<ExtArgs>[]
      following: Prisma.$UserFollowPayload<ExtArgs>[]
      sports: Prisma.$UserSportPayload<ExtArgs>[]
      activities: Prisma.$SportActivityPayload<ExtArgs>[]
      activityParticipations: Prisma.$SportActivityParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      bio: string
      image: string
      followersCount: number
      followingCount: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userLikes<T extends User$userLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$userLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends User$followersArgs<ExtArgs> = {}>(args?: Subset<T, User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sports<T extends User$sportsArgs<ExtArgs> = {}>(args?: Subset<T, User$sportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityParticipations<T extends User$activityParticipationsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityParticipationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly followersCount: FieldRef<"User", 'Int'>
    readonly followingCount: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userLikes
   */
  export type User$userLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
    where?: UserLikeWhereInput
    orderBy?: UserLikeOrderByWithRelationInput | UserLikeOrderByWithRelationInput[]
    cursor?: UserLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLikeScalarFieldEnum | UserLikeScalarFieldEnum[]
  }

  /**
   * User.followers
   */
  export type User$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    where?: UserFollowWhereInput
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    cursor?: UserFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFollowScalarFieldEnum | UserFollowScalarFieldEnum[]
  }

  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    where?: UserFollowWhereInput
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    cursor?: UserFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFollowScalarFieldEnum | UserFollowScalarFieldEnum[]
  }

  /**
   * User.sports
   */
  export type User$sportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    where?: UserSportWhereInput
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    cursor?: UserSportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
    where?: SportActivityWhereInput
    orderBy?: SportActivityOrderByWithRelationInput | SportActivityOrderByWithRelationInput[]
    cursor?: SportActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SportActivityScalarFieldEnum | SportActivityScalarFieldEnum[]
  }

  /**
   * User.activityParticipations
   */
  export type User$activityParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
    where?: SportActivityParticipantWhereInput
    orderBy?: SportActivityParticipantOrderByWithRelationInput | SportActivityParticipantOrderByWithRelationInput[]
    cursor?: SportActivityParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SportActivityParticipantScalarFieldEnum | SportActivityParticipantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    likes: number | null
    postId: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    likes: number | null
    postId: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    text: string | null
    likes: number | null
    postId: number | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    text: string | null
    likes: number | null
    postId: number | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    created_at: number
    text: number
    likes: number
    postId: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    likes?: true
    postId?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    likes?: true
    postId?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    likes?: true
    postId?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    likes?: true
    postId?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    likes?: true
    postId?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    created_at: Date
    text: string
    likes: number
    postId: number | null
    authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
    likes?: boolean
    postId?: boolean
    authorId?: boolean
    postHashtags?: boolean | Post$postHashtagsArgs<ExtArgs>
    userLikes?: boolean | Post$userLikesArgs<ExtArgs>
    PostComment?: boolean | Post$PostCommentArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
    likes?: boolean
    postId?: boolean
    authorId?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
    likes?: boolean
    postId?: boolean
    authorId?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    created_at?: boolean
    text?: boolean
    likes?: boolean
    postId?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "text" | "likes" | "postId" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postHashtags?: boolean | Post$postHashtagsArgs<ExtArgs>
    userLikes?: boolean | Post$userLikesArgs<ExtArgs>
    PostComment?: boolean | Post$PostCommentArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      postHashtags: Prisma.$PostHashtagPayload<ExtArgs>[]
      userLikes: Prisma.$UserLikePayload<ExtArgs>[]
      PostComment: Prisma.$PostCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      text: string
      likes: number
      postId: number | null
      authorId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postHashtags<T extends Post$postHashtagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$postHashtagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userLikes<T extends Post$userLikesArgs<ExtArgs> = {}>(args?: Subset<T, Post$userLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PostComment<T extends Post$PostCommentArgs<ExtArgs> = {}>(args?: Subset<T, Post$PostCommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly created_at: FieldRef<"Post", 'DateTime'>
    readonly text: FieldRef<"Post", 'String'>
    readonly likes: FieldRef<"Post", 'Int'>
    readonly postId: FieldRef<"Post", 'Int'>
    readonly authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.postHashtags
   */
  export type Post$postHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    where?: PostHashtagWhereInput
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    cursor?: PostHashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHashtagScalarFieldEnum | PostHashtagScalarFieldEnum[]
  }

  /**
   * Post.userLikes
   */
  export type Post$userLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
    where?: UserLikeWhereInput
    orderBy?: UserLikeOrderByWithRelationInput | UserLikeOrderByWithRelationInput[]
    cursor?: UserLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLikeScalarFieldEnum | UserLikeScalarFieldEnum[]
  }

  /**
   * Post.PostComment
   */
  export type Post$PostCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    where?: PostCommentWhereInput
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    cursor?: PostCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Hashtag
   */

  export type AggregateHashtag = {
    _count: HashtagCountAggregateOutputType | null
    _avg: HashtagAvgAggregateOutputType | null
    _sum: HashtagSumAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  export type HashtagAvgAggregateOutputType = {
    id: number | null
  }

  export type HashtagSumAggregateOutputType = {
    id: number | null
  }

  export type HashtagMinAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type HashtagMaxAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type HashtagCountAggregateOutputType = {
    id: number
    text: number
    _all: number
  }


  export type HashtagAvgAggregateInputType = {
    id?: true
  }

  export type HashtagSumAggregateInputType = {
    id?: true
  }

  export type HashtagMinAggregateInputType = {
    id?: true
    text?: true
  }

  export type HashtagMaxAggregateInputType = {
    id?: true
    text?: true
  }

  export type HashtagCountAggregateInputType = {
    id?: true
    text?: true
    _all?: true
  }

  export type HashtagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtag to aggregate.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hashtags
    **/
    _count?: true | HashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HashtagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HashtagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashtagMaxAggregateInputType
  }

  export type GetHashtagAggregateType<T extends HashtagAggregateArgs> = {
        [P in keyof T & keyof AggregateHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashtag[P]>
      : GetScalarType<T[P], AggregateHashtag[P]>
  }




  export type HashtagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HashtagWhereInput
    orderBy?: HashtagOrderByWithAggregationInput | HashtagOrderByWithAggregationInput[]
    by: HashtagScalarFieldEnum[] | HashtagScalarFieldEnum
    having?: HashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashtagCountAggregateInputType | true
    _avg?: HashtagAvgAggregateInputType
    _sum?: HashtagSumAggregateInputType
    _min?: HashtagMinAggregateInputType
    _max?: HashtagMaxAggregateInputType
  }

  export type HashtagGroupByOutputType = {
    id: number
    text: string
    _count: HashtagCountAggregateOutputType | null
    _avg: HashtagAvgAggregateOutputType | null
    _sum: HashtagSumAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  type GetHashtagGroupByPayload<T extends HashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashtagGroupByOutputType[P]>
            : GetScalarType<T[P], HashtagGroupByOutputType[P]>
        }
      >
    >


  export type HashtagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    postHashtags?: boolean | Hashtag$postHashtagsArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hashtag"]>

  export type HashtagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["hashtag"]>

  export type HashtagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["hashtag"]>

  export type HashtagSelectScalar = {
    id?: boolean
    text?: boolean
  }

  export type HashtagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text", ExtArgs["result"]["hashtag"]>
  export type HashtagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postHashtags?: boolean | Hashtag$postHashtagsArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HashtagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HashtagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HashtagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hashtag"
    objects: {
      postHashtags: Prisma.$PostHashtagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
    }, ExtArgs["result"]["hashtag"]>
    composites: {}
  }

  type HashtagGetPayload<S extends boolean | null | undefined | HashtagDefaultArgs> = $Result.GetResult<Prisma.$HashtagPayload, S>

  type HashtagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HashtagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HashtagCountAggregateInputType | true
    }

  export interface HashtagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hashtag'], meta: { name: 'Hashtag' } }
    /**
     * Find zero or one Hashtag that matches the filter.
     * @param {HashtagFindUniqueArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HashtagFindUniqueArgs>(args: SelectSubset<T, HashtagFindUniqueArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hashtag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HashtagFindUniqueOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HashtagFindUniqueOrThrowArgs>(args: SelectSubset<T, HashtagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HashtagFindFirstArgs>(args?: SelectSubset<T, HashtagFindFirstArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hashtag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HashtagFindFirstOrThrowArgs>(args?: SelectSubset<T, HashtagFindFirstOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hashtags
     * const hashtags = await prisma.hashtag.findMany()
     * 
     * // Get first 10 Hashtags
     * const hashtags = await prisma.hashtag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HashtagFindManyArgs>(args?: SelectSubset<T, HashtagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hashtag.
     * @param {HashtagCreateArgs} args - Arguments to create a Hashtag.
     * @example
     * // Create one Hashtag
     * const Hashtag = await prisma.hashtag.create({
     *   data: {
     *     // ... data to create a Hashtag
     *   }
     * })
     * 
     */
    create<T extends HashtagCreateArgs>(args: SelectSubset<T, HashtagCreateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hashtags.
     * @param {HashtagCreateManyArgs} args - Arguments to create many Hashtags.
     * @example
     * // Create many Hashtags
     * const hashtag = await prisma.hashtag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HashtagCreateManyArgs>(args?: SelectSubset<T, HashtagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hashtags and returns the data saved in the database.
     * @param {HashtagCreateManyAndReturnArgs} args - Arguments to create many Hashtags.
     * @example
     * // Create many Hashtags
     * const hashtag = await prisma.hashtag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hashtags and only return the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HashtagCreateManyAndReturnArgs>(args?: SelectSubset<T, HashtagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hashtag.
     * @param {HashtagDeleteArgs} args - Arguments to delete one Hashtag.
     * @example
     * // Delete one Hashtag
     * const Hashtag = await prisma.hashtag.delete({
     *   where: {
     *     // ... filter to delete one Hashtag
     *   }
     * })
     * 
     */
    delete<T extends HashtagDeleteArgs>(args: SelectSubset<T, HashtagDeleteArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hashtag.
     * @param {HashtagUpdateArgs} args - Arguments to update one Hashtag.
     * @example
     * // Update one Hashtag
     * const hashtag = await prisma.hashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HashtagUpdateArgs>(args: SelectSubset<T, HashtagUpdateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hashtags.
     * @param {HashtagDeleteManyArgs} args - Arguments to filter Hashtags to delete.
     * @example
     * // Delete a few Hashtags
     * const { count } = await prisma.hashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HashtagDeleteManyArgs>(args?: SelectSubset<T, HashtagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hashtags
     * const hashtag = await prisma.hashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HashtagUpdateManyArgs>(args: SelectSubset<T, HashtagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hashtags and returns the data updated in the database.
     * @param {HashtagUpdateManyAndReturnArgs} args - Arguments to update many Hashtags.
     * @example
     * // Update many Hashtags
     * const hashtag = await prisma.hashtag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hashtags and only return the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HashtagUpdateManyAndReturnArgs>(args: SelectSubset<T, HashtagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hashtag.
     * @param {HashtagUpsertArgs} args - Arguments to update or create a Hashtag.
     * @example
     * // Update or create a Hashtag
     * const hashtag = await prisma.hashtag.upsert({
     *   create: {
     *     // ... data to create a Hashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hashtag we want to update
     *   }
     * })
     */
    upsert<T extends HashtagUpsertArgs>(args: SelectSubset<T, HashtagUpsertArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagCountArgs} args - Arguments to filter Hashtags to count.
     * @example
     * // Count the number of Hashtags
     * const count = await prisma.hashtag.count({
     *   where: {
     *     // ... the filter for the Hashtags we want to count
     *   }
     * })
    **/
    count<T extends HashtagCountArgs>(
      args?: Subset<T, HashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HashtagAggregateArgs>(args: Subset<T, HashtagAggregateArgs>): Prisma.PrismaPromise<GetHashtagAggregateType<T>>

    /**
     * Group by Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashtagGroupByArgs['orderBy'] }
        : { orderBy?: HashtagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hashtag model
   */
  readonly fields: HashtagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HashtagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postHashtags<T extends Hashtag$postHashtagsArgs<ExtArgs> = {}>(args?: Subset<T, Hashtag$postHashtagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hashtag model
   */
  interface HashtagFieldRefs {
    readonly id: FieldRef<"Hashtag", 'Int'>
    readonly text: FieldRef<"Hashtag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hashtag findUnique
   */
  export type HashtagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findUniqueOrThrow
   */
  export type HashtagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findFirst
   */
  export type HashtagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findFirstOrThrow
   */
  export type HashtagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findMany
   */
  export type HashtagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtags to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag create
   */
  export type HashtagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to create a Hashtag.
     */
    data: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
  }

  /**
   * Hashtag createMany
   */
  export type HashtagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hashtags.
     */
    data: HashtagCreateManyInput | HashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hashtag createManyAndReturn
   */
  export type HashtagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * The data used to create many Hashtags.
     */
    data: HashtagCreateManyInput | HashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hashtag update
   */
  export type HashtagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to update a Hashtag.
     */
    data: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
    /**
     * Choose, which Hashtag to update.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag updateMany
   */
  export type HashtagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hashtags.
     */
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyInput>
    /**
     * Filter which Hashtags to update
     */
    where?: HashtagWhereInput
    /**
     * Limit how many Hashtags to update.
     */
    limit?: number
  }

  /**
   * Hashtag updateManyAndReturn
   */
  export type HashtagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * The data used to update Hashtags.
     */
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyInput>
    /**
     * Filter which Hashtags to update
     */
    where?: HashtagWhereInput
    /**
     * Limit how many Hashtags to update.
     */
    limit?: number
  }

  /**
   * Hashtag upsert
   */
  export type HashtagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The filter to search for the Hashtag to update in case it exists.
     */
    where: HashtagWhereUniqueInput
    /**
     * In case the Hashtag found by the `where` argument doesn't exist, create a new Hashtag with this data.
     */
    create: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
    /**
     * In case the Hashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
  }

  /**
   * Hashtag delete
   */
  export type HashtagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter which Hashtag to delete.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag deleteMany
   */
  export type HashtagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtags to delete
     */
    where?: HashtagWhereInput
    /**
     * Limit how many Hashtags to delete.
     */
    limit?: number
  }

  /**
   * Hashtag.postHashtags
   */
  export type Hashtag$postHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    where?: PostHashtagWhereInput
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    cursor?: PostHashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHashtagScalarFieldEnum | PostHashtagScalarFieldEnum[]
  }

  /**
   * Hashtag without action
   */
  export type HashtagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    text: string | null
    authorId: number | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    text: string | null
    authorId: number | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    text: number
    authorId: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    text?: true
    authorId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    text?: true
    authorId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    text?: true
    authorId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    text: string
    authorId: number
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    authorId?: boolean
    createdAt?: boolean
    PostComment?: boolean | Comment$PostCommentArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    authorId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    authorId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    text?: boolean
    authorId?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "authorId" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PostComment?: boolean | Comment$PostCommentArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      PostComment: Prisma.$PostCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      authorId: number
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PostComment<T extends Comment$PostCommentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$PostCommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'Int'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.PostComment
   */
  export type Comment$PostCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    where?: PostCommentWhereInput
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    cursor?: PostCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model PostComment
   */

  export type AggregatePostComment = {
    _count: PostCommentCountAggregateOutputType | null
    _avg: PostCommentAvgAggregateOutputType | null
    _sum: PostCommentSumAggregateOutputType | null
    _min: PostCommentMinAggregateOutputType | null
    _max: PostCommentMaxAggregateOutputType | null
  }

  export type PostCommentAvgAggregateOutputType = {
    postId: number | null
    commentId: number | null
  }

  export type PostCommentSumAggregateOutputType = {
    postId: number | null
    commentId: number | null
  }

  export type PostCommentMinAggregateOutputType = {
    postId: number | null
    commentId: number | null
  }

  export type PostCommentMaxAggregateOutputType = {
    postId: number | null
    commentId: number | null
  }

  export type PostCommentCountAggregateOutputType = {
    postId: number
    commentId: number
    _all: number
  }


  export type PostCommentAvgAggregateInputType = {
    postId?: true
    commentId?: true
  }

  export type PostCommentSumAggregateInputType = {
    postId?: true
    commentId?: true
  }

  export type PostCommentMinAggregateInputType = {
    postId?: true
    commentId?: true
  }

  export type PostCommentMaxAggregateInputType = {
    postId?: true
    commentId?: true
  }

  export type PostCommentCountAggregateInputType = {
    postId?: true
    commentId?: true
    _all?: true
  }

  export type PostCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComment to aggregate.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostComments
    **/
    _count?: true | PostCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCommentMaxAggregateInputType
  }

  export type GetPostCommentAggregateType<T extends PostCommentAggregateArgs> = {
        [P in keyof T & keyof AggregatePostComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostComment[P]>
      : GetScalarType<T[P], AggregatePostComment[P]>
  }




  export type PostCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentWhereInput
    orderBy?: PostCommentOrderByWithAggregationInput | PostCommentOrderByWithAggregationInput[]
    by: PostCommentScalarFieldEnum[] | PostCommentScalarFieldEnum
    having?: PostCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCommentCountAggregateInputType | true
    _avg?: PostCommentAvgAggregateInputType
    _sum?: PostCommentSumAggregateInputType
    _min?: PostCommentMinAggregateInputType
    _max?: PostCommentMaxAggregateInputType
  }

  export type PostCommentGroupByOutputType = {
    postId: number
    commentId: number
    _count: PostCommentCountAggregateOutputType | null
    _avg: PostCommentAvgAggregateOutputType | null
    _sum: PostCommentSumAggregateOutputType | null
    _min: PostCommentMinAggregateOutputType | null
    _max: PostCommentMaxAggregateOutputType | null
  }

  type GetPostCommentGroupByPayload<T extends PostCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCommentGroupByOutputType[P]>
            : GetScalarType<T[P], PostCommentGroupByOutputType[P]>
        }
      >
    >


  export type PostCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    commentId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComment"]>

  export type PostCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    commentId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComment"]>

  export type PostCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    commentId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComment"]>

  export type PostCommentSelectScalar = {
    postId?: boolean
    commentId?: boolean
  }

  export type PostCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "commentId", ExtArgs["result"]["postComment"]>
  export type PostCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type PostCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type PostCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }

  export type $PostCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostComment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: number
      commentId: number
    }, ExtArgs["result"]["postComment"]>
    composites: {}
  }

  type PostCommentGetPayload<S extends boolean | null | undefined | PostCommentDefaultArgs> = $Result.GetResult<Prisma.$PostCommentPayload, S>

  type PostCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCommentCountAggregateInputType | true
    }

  export interface PostCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostComment'], meta: { name: 'PostComment' } }
    /**
     * Find zero or one PostComment that matches the filter.
     * @param {PostCommentFindUniqueArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostCommentFindUniqueArgs>(args: SelectSubset<T, PostCommentFindUniqueArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostCommentFindUniqueOrThrowArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, PostCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentFindFirstArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostCommentFindFirstArgs>(args?: SelectSubset<T, PostCommentFindFirstArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentFindFirstOrThrowArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, PostCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostComments
     * const postComments = await prisma.postComment.findMany()
     * 
     * // Get first 10 PostComments
     * const postComments = await prisma.postComment.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postCommentWithPostIdOnly = await prisma.postComment.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends PostCommentFindManyArgs>(args?: SelectSubset<T, PostCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostComment.
     * @param {PostCommentCreateArgs} args - Arguments to create a PostComment.
     * @example
     * // Create one PostComment
     * const PostComment = await prisma.postComment.create({
     *   data: {
     *     // ... data to create a PostComment
     *   }
     * })
     * 
     */
    create<T extends PostCommentCreateArgs>(args: SelectSubset<T, PostCommentCreateArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostComments.
     * @param {PostCommentCreateManyArgs} args - Arguments to create many PostComments.
     * @example
     * // Create many PostComments
     * const postComment = await prisma.postComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCommentCreateManyArgs>(args?: SelectSubset<T, PostCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostComments and returns the data saved in the database.
     * @param {PostCommentCreateManyAndReturnArgs} args - Arguments to create many PostComments.
     * @example
     * // Create many PostComments
     * const postComment = await prisma.postComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostComments and only return the `postId`
     * const postCommentWithPostIdOnly = await prisma.postComment.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostComment.
     * @param {PostCommentDeleteArgs} args - Arguments to delete one PostComment.
     * @example
     * // Delete one PostComment
     * const PostComment = await prisma.postComment.delete({
     *   where: {
     *     // ... filter to delete one PostComment
     *   }
     * })
     * 
     */
    delete<T extends PostCommentDeleteArgs>(args: SelectSubset<T, PostCommentDeleteArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostComment.
     * @param {PostCommentUpdateArgs} args - Arguments to update one PostComment.
     * @example
     * // Update one PostComment
     * const postComment = await prisma.postComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostCommentUpdateArgs>(args: SelectSubset<T, PostCommentUpdateArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostComments.
     * @param {PostCommentDeleteManyArgs} args - Arguments to filter PostComments to delete.
     * @example
     * // Delete a few PostComments
     * const { count } = await prisma.postComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostCommentDeleteManyArgs>(args?: SelectSubset<T, PostCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostComments
     * const postComment = await prisma.postComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostCommentUpdateManyArgs>(args: SelectSubset<T, PostCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostComments and returns the data updated in the database.
     * @param {PostCommentUpdateManyAndReturnArgs} args - Arguments to update many PostComments.
     * @example
     * // Update many PostComments
     * const postComment = await prisma.postComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostComments and only return the `postId`
     * const postCommentWithPostIdOnly = await prisma.postComment.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, PostCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostComment.
     * @param {PostCommentUpsertArgs} args - Arguments to update or create a PostComment.
     * @example
     * // Update or create a PostComment
     * const postComment = await prisma.postComment.upsert({
     *   create: {
     *     // ... data to create a PostComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostComment we want to update
     *   }
     * })
     */
    upsert<T extends PostCommentUpsertArgs>(args: SelectSubset<T, PostCommentUpsertArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentCountArgs} args - Arguments to filter PostComments to count.
     * @example
     * // Count the number of PostComments
     * const count = await prisma.postComment.count({
     *   where: {
     *     // ... the filter for the PostComments we want to count
     *   }
     * })
    **/
    count<T extends PostCommentCountArgs>(
      args?: Subset<T, PostCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostCommentAggregateArgs>(args: Subset<T, PostCommentAggregateArgs>): Prisma.PrismaPromise<GetPostCommentAggregateType<T>>

    /**
     * Group by PostComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCommentGroupByArgs['orderBy'] }
        : { orderBy?: PostCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostComment model
   */
  readonly fields: PostCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostComment model
   */
  interface PostCommentFieldRefs {
    readonly postId: FieldRef<"PostComment", 'Int'>
    readonly commentId: FieldRef<"PostComment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostComment findUnique
   */
  export type PostCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where: PostCommentWhereUniqueInput
  }

  /**
   * PostComment findUniqueOrThrow
   */
  export type PostCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where: PostCommentWhereUniqueInput
  }

  /**
   * PostComment findFirst
   */
  export type PostCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }

  /**
   * PostComment findFirstOrThrow
   */
  export type PostCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }

  /**
   * PostComment findMany
   */
  export type PostCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostComments.
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }

  /**
   * PostComment create
   */
  export type PostCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a PostComment.
     */
    data: XOR<PostCommentCreateInput, PostCommentUncheckedCreateInput>
  }

  /**
   * PostComment createMany
   */
  export type PostCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostComments.
     */
    data: PostCommentCreateManyInput | PostCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostComment createManyAndReturn
   */
  export type PostCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * The data used to create many PostComments.
     */
    data: PostCommentCreateManyInput | PostCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostComment update
   */
  export type PostCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a PostComment.
     */
    data: XOR<PostCommentUpdateInput, PostCommentUncheckedUpdateInput>
    /**
     * Choose, which PostComment to update.
     */
    where: PostCommentWhereUniqueInput
  }

  /**
   * PostComment updateMany
   */
  export type PostCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostComments.
     */
    data: XOR<PostCommentUpdateManyMutationInput, PostCommentUncheckedUpdateManyInput>
    /**
     * Filter which PostComments to update
     */
    where?: PostCommentWhereInput
    /**
     * Limit how many PostComments to update.
     */
    limit?: number
  }

  /**
   * PostComment updateManyAndReturn
   */
  export type PostCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * The data used to update PostComments.
     */
    data: XOR<PostCommentUpdateManyMutationInput, PostCommentUncheckedUpdateManyInput>
    /**
     * Filter which PostComments to update
     */
    where?: PostCommentWhereInput
    /**
     * Limit how many PostComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostComment upsert
   */
  export type PostCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the PostComment to update in case it exists.
     */
    where: PostCommentWhereUniqueInput
    /**
     * In case the PostComment found by the `where` argument doesn't exist, create a new PostComment with this data.
     */
    create: XOR<PostCommentCreateInput, PostCommentUncheckedCreateInput>
    /**
     * In case the PostComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCommentUpdateInput, PostCommentUncheckedUpdateInput>
  }

  /**
   * PostComment delete
   */
  export type PostCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter which PostComment to delete.
     */
    where: PostCommentWhereUniqueInput
  }

  /**
   * PostComment deleteMany
   */
  export type PostCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComments to delete
     */
    where?: PostCommentWhereInput
    /**
     * Limit how many PostComments to delete.
     */
    limit?: number
  }

  /**
   * PostComment without action
   */
  export type PostCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComment
     */
    omit?: PostCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentInclude<ExtArgs> | null
  }


  /**
   * Model PostHashtag
   */

  export type AggregatePostHashtag = {
    _count: PostHashtagCountAggregateOutputType | null
    _avg: PostHashtagAvgAggregateOutputType | null
    _sum: PostHashtagSumAggregateOutputType | null
    _min: PostHashtagMinAggregateOutputType | null
    _max: PostHashtagMaxAggregateOutputType | null
  }

  export type PostHashtagAvgAggregateOutputType = {
    postId: number | null
    hashtagId: number | null
  }

  export type PostHashtagSumAggregateOutputType = {
    postId: number | null
    hashtagId: number | null
  }

  export type PostHashtagMinAggregateOutputType = {
    postId: number | null
    hashtagId: number | null
  }

  export type PostHashtagMaxAggregateOutputType = {
    postId: number | null
    hashtagId: number | null
  }

  export type PostHashtagCountAggregateOutputType = {
    postId: number
    hashtagId: number
    _all: number
  }


  export type PostHashtagAvgAggregateInputType = {
    postId?: true
    hashtagId?: true
  }

  export type PostHashtagSumAggregateInputType = {
    postId?: true
    hashtagId?: true
  }

  export type PostHashtagMinAggregateInputType = {
    postId?: true
    hashtagId?: true
  }

  export type PostHashtagMaxAggregateInputType = {
    postId?: true
    hashtagId?: true
  }

  export type PostHashtagCountAggregateInputType = {
    postId?: true
    hashtagId?: true
    _all?: true
  }

  export type PostHashtagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHashtag to aggregate.
     */
    where?: PostHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostHashtags
    **/
    _count?: true | PostHashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostHashtagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostHashtagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostHashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostHashtagMaxAggregateInputType
  }

  export type GetPostHashtagAggregateType<T extends PostHashtagAggregateArgs> = {
        [P in keyof T & keyof AggregatePostHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostHashtag[P]>
      : GetScalarType<T[P], AggregatePostHashtag[P]>
  }




  export type PostHashtagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHashtagWhereInput
    orderBy?: PostHashtagOrderByWithAggregationInput | PostHashtagOrderByWithAggregationInput[]
    by: PostHashtagScalarFieldEnum[] | PostHashtagScalarFieldEnum
    having?: PostHashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostHashtagCountAggregateInputType | true
    _avg?: PostHashtagAvgAggregateInputType
    _sum?: PostHashtagSumAggregateInputType
    _min?: PostHashtagMinAggregateInputType
    _max?: PostHashtagMaxAggregateInputType
  }

  export type PostHashtagGroupByOutputType = {
    postId: number
    hashtagId: number
    _count: PostHashtagCountAggregateOutputType | null
    _avg: PostHashtagAvgAggregateOutputType | null
    _sum: PostHashtagSumAggregateOutputType | null
    _min: PostHashtagMinAggregateOutputType | null
    _max: PostHashtagMaxAggregateOutputType | null
  }

  type GetPostHashtagGroupByPayload<T extends PostHashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostHashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostHashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostHashtagGroupByOutputType[P]>
            : GetScalarType<T[P], PostHashtagGroupByOutputType[P]>
        }
      >
    >


  export type PostHashtagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    hashtagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHashtag"]>

  export type PostHashtagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    hashtagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHashtag"]>

  export type PostHashtagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    hashtagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHashtag"]>

  export type PostHashtagSelectScalar = {
    postId?: boolean
    hashtagId?: boolean
  }

  export type PostHashtagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "hashtagId", ExtArgs["result"]["postHashtag"]>
  export type PostHashtagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }
  export type PostHashtagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }
  export type PostHashtagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }

  export type $PostHashtagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostHashtag"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      hashtag: Prisma.$HashtagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: number
      hashtagId: number
    }, ExtArgs["result"]["postHashtag"]>
    composites: {}
  }

  type PostHashtagGetPayload<S extends boolean | null | undefined | PostHashtagDefaultArgs> = $Result.GetResult<Prisma.$PostHashtagPayload, S>

  type PostHashtagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostHashtagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostHashtagCountAggregateInputType | true
    }

  export interface PostHashtagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostHashtag'], meta: { name: 'PostHashtag' } }
    /**
     * Find zero or one PostHashtag that matches the filter.
     * @param {PostHashtagFindUniqueArgs} args - Arguments to find a PostHashtag
     * @example
     * // Get one PostHashtag
     * const postHashtag = await prisma.postHashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostHashtagFindUniqueArgs>(args: SelectSubset<T, PostHashtagFindUniqueArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostHashtag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostHashtagFindUniqueOrThrowArgs} args - Arguments to find a PostHashtag
     * @example
     * // Get one PostHashtag
     * const postHashtag = await prisma.postHashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostHashtagFindUniqueOrThrowArgs>(args: SelectSubset<T, PostHashtagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostHashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagFindFirstArgs} args - Arguments to find a PostHashtag
     * @example
     * // Get one PostHashtag
     * const postHashtag = await prisma.postHashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostHashtagFindFirstArgs>(args?: SelectSubset<T, PostHashtagFindFirstArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostHashtag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagFindFirstOrThrowArgs} args - Arguments to find a PostHashtag
     * @example
     * // Get one PostHashtag
     * const postHashtag = await prisma.postHashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostHashtagFindFirstOrThrowArgs>(args?: SelectSubset<T, PostHashtagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostHashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostHashtags
     * const postHashtags = await prisma.postHashtag.findMany()
     * 
     * // Get first 10 PostHashtags
     * const postHashtags = await prisma.postHashtag.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postHashtagWithPostIdOnly = await prisma.postHashtag.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends PostHashtagFindManyArgs>(args?: SelectSubset<T, PostHashtagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostHashtag.
     * @param {PostHashtagCreateArgs} args - Arguments to create a PostHashtag.
     * @example
     * // Create one PostHashtag
     * const PostHashtag = await prisma.postHashtag.create({
     *   data: {
     *     // ... data to create a PostHashtag
     *   }
     * })
     * 
     */
    create<T extends PostHashtagCreateArgs>(args: SelectSubset<T, PostHashtagCreateArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostHashtags.
     * @param {PostHashtagCreateManyArgs} args - Arguments to create many PostHashtags.
     * @example
     * // Create many PostHashtags
     * const postHashtag = await prisma.postHashtag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostHashtagCreateManyArgs>(args?: SelectSubset<T, PostHashtagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostHashtags and returns the data saved in the database.
     * @param {PostHashtagCreateManyAndReturnArgs} args - Arguments to create many PostHashtags.
     * @example
     * // Create many PostHashtags
     * const postHashtag = await prisma.postHashtag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostHashtags and only return the `postId`
     * const postHashtagWithPostIdOnly = await prisma.postHashtag.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostHashtagCreateManyAndReturnArgs>(args?: SelectSubset<T, PostHashtagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostHashtag.
     * @param {PostHashtagDeleteArgs} args - Arguments to delete one PostHashtag.
     * @example
     * // Delete one PostHashtag
     * const PostHashtag = await prisma.postHashtag.delete({
     *   where: {
     *     // ... filter to delete one PostHashtag
     *   }
     * })
     * 
     */
    delete<T extends PostHashtagDeleteArgs>(args: SelectSubset<T, PostHashtagDeleteArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostHashtag.
     * @param {PostHashtagUpdateArgs} args - Arguments to update one PostHashtag.
     * @example
     * // Update one PostHashtag
     * const postHashtag = await prisma.postHashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostHashtagUpdateArgs>(args: SelectSubset<T, PostHashtagUpdateArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostHashtags.
     * @param {PostHashtagDeleteManyArgs} args - Arguments to filter PostHashtags to delete.
     * @example
     * // Delete a few PostHashtags
     * const { count } = await prisma.postHashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostHashtagDeleteManyArgs>(args?: SelectSubset<T, PostHashtagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostHashtags
     * const postHashtag = await prisma.postHashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostHashtagUpdateManyArgs>(args: SelectSubset<T, PostHashtagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostHashtags and returns the data updated in the database.
     * @param {PostHashtagUpdateManyAndReturnArgs} args - Arguments to update many PostHashtags.
     * @example
     * // Update many PostHashtags
     * const postHashtag = await prisma.postHashtag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostHashtags and only return the `postId`
     * const postHashtagWithPostIdOnly = await prisma.postHashtag.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostHashtagUpdateManyAndReturnArgs>(args: SelectSubset<T, PostHashtagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostHashtag.
     * @param {PostHashtagUpsertArgs} args - Arguments to update or create a PostHashtag.
     * @example
     * // Update or create a PostHashtag
     * const postHashtag = await prisma.postHashtag.upsert({
     *   create: {
     *     // ... data to create a PostHashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostHashtag we want to update
     *   }
     * })
     */
    upsert<T extends PostHashtagUpsertArgs>(args: SelectSubset<T, PostHashtagUpsertArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagCountArgs} args - Arguments to filter PostHashtags to count.
     * @example
     * // Count the number of PostHashtags
     * const count = await prisma.postHashtag.count({
     *   where: {
     *     // ... the filter for the PostHashtags we want to count
     *   }
     * })
    **/
    count<T extends PostHashtagCountArgs>(
      args?: Subset<T, PostHashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostHashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostHashtagAggregateArgs>(args: Subset<T, PostHashtagAggregateArgs>): Prisma.PrismaPromise<GetPostHashtagAggregateType<T>>

    /**
     * Group by PostHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostHashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostHashtagGroupByArgs['orderBy'] }
        : { orderBy?: PostHashtagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostHashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostHashtag model
   */
  readonly fields: PostHashtagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostHashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostHashtagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hashtag<T extends HashtagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HashtagDefaultArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostHashtag model
   */
  interface PostHashtagFieldRefs {
    readonly postId: FieldRef<"PostHashtag", 'Int'>
    readonly hashtagId: FieldRef<"PostHashtag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostHashtag findUnique
   */
  export type PostHashtagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtag to fetch.
     */
    where: PostHashtagWhereUniqueInput
  }

  /**
   * PostHashtag findUniqueOrThrow
   */
  export type PostHashtagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtag to fetch.
     */
    where: PostHashtagWhereUniqueInput
  }

  /**
   * PostHashtag findFirst
   */
  export type PostHashtagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtag to fetch.
     */
    where?: PostHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHashtags.
     */
    cursor?: PostHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHashtags.
     */
    distinct?: PostHashtagScalarFieldEnum | PostHashtagScalarFieldEnum[]
  }

  /**
   * PostHashtag findFirstOrThrow
   */
  export type PostHashtagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtag to fetch.
     */
    where?: PostHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHashtags.
     */
    cursor?: PostHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHashtags.
     */
    distinct?: PostHashtagScalarFieldEnum | PostHashtagScalarFieldEnum[]
  }

  /**
   * PostHashtag findMany
   */
  export type PostHashtagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtags to fetch.
     */
    where?: PostHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostHashtags.
     */
    cursor?: PostHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    distinct?: PostHashtagScalarFieldEnum | PostHashtagScalarFieldEnum[]
  }

  /**
   * PostHashtag create
   */
  export type PostHashtagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * The data needed to create a PostHashtag.
     */
    data: XOR<PostHashtagCreateInput, PostHashtagUncheckedCreateInput>
  }

  /**
   * PostHashtag createMany
   */
  export type PostHashtagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostHashtags.
     */
    data: PostHashtagCreateManyInput | PostHashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostHashtag createManyAndReturn
   */
  export type PostHashtagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * The data used to create many PostHashtags.
     */
    data: PostHashtagCreateManyInput | PostHashtagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostHashtag update
   */
  export type PostHashtagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * The data needed to update a PostHashtag.
     */
    data: XOR<PostHashtagUpdateInput, PostHashtagUncheckedUpdateInput>
    /**
     * Choose, which PostHashtag to update.
     */
    where: PostHashtagWhereUniqueInput
  }

  /**
   * PostHashtag updateMany
   */
  export type PostHashtagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostHashtags.
     */
    data: XOR<PostHashtagUpdateManyMutationInput, PostHashtagUncheckedUpdateManyInput>
    /**
     * Filter which PostHashtags to update
     */
    where?: PostHashtagWhereInput
    /**
     * Limit how many PostHashtags to update.
     */
    limit?: number
  }

  /**
   * PostHashtag updateManyAndReturn
   */
  export type PostHashtagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * The data used to update PostHashtags.
     */
    data: XOR<PostHashtagUpdateManyMutationInput, PostHashtagUncheckedUpdateManyInput>
    /**
     * Filter which PostHashtags to update
     */
    where?: PostHashtagWhereInput
    /**
     * Limit how many PostHashtags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostHashtag upsert
   */
  export type PostHashtagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * The filter to search for the PostHashtag to update in case it exists.
     */
    where: PostHashtagWhereUniqueInput
    /**
     * In case the PostHashtag found by the `where` argument doesn't exist, create a new PostHashtag with this data.
     */
    create: XOR<PostHashtagCreateInput, PostHashtagUncheckedCreateInput>
    /**
     * In case the PostHashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostHashtagUpdateInput, PostHashtagUncheckedUpdateInput>
  }

  /**
   * PostHashtag delete
   */
  export type PostHashtagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter which PostHashtag to delete.
     */
    where: PostHashtagWhereUniqueInput
  }

  /**
   * PostHashtag deleteMany
   */
  export type PostHashtagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHashtags to delete
     */
    where?: PostHashtagWhereInput
    /**
     * Limit how many PostHashtags to delete.
     */
    limit?: number
  }

  /**
   * PostHashtag without action
   */
  export type PostHashtagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtag
     */
    omit?: PostHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
  }


  /**
   * Model UserLike
   */

  export type AggregateUserLike = {
    _count: UserLikeCountAggregateOutputType | null
    _avg: UserLikeAvgAggregateOutputType | null
    _sum: UserLikeSumAggregateOutputType | null
    _min: UserLikeMinAggregateOutputType | null
    _max: UserLikeMaxAggregateOutputType | null
  }

  export type UserLikeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type UserLikeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type UserLikeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    createdAt: Date | null
  }

  export type UserLikeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    createdAt: Date | null
  }

  export type UserLikeCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    createdAt: number
    _all: number
  }


  export type UserLikeAvgAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type UserLikeSumAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type UserLikeMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
  }

  export type UserLikeMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
  }

  export type UserLikeCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    _all?: true
  }

  export type UserLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLike to aggregate.
     */
    where?: UserLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikes to fetch.
     */
    orderBy?: UserLikeOrderByWithRelationInput | UserLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLikes
    **/
    _count?: true | UserLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLikeMaxAggregateInputType
  }

  export type GetUserLikeAggregateType<T extends UserLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLike[P]>
      : GetScalarType<T[P], AggregateUserLike[P]>
  }




  export type UserLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikeWhereInput
    orderBy?: UserLikeOrderByWithAggregationInput | UserLikeOrderByWithAggregationInput[]
    by: UserLikeScalarFieldEnum[] | UserLikeScalarFieldEnum
    having?: UserLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLikeCountAggregateInputType | true
    _avg?: UserLikeAvgAggregateInputType
    _sum?: UserLikeSumAggregateInputType
    _min?: UserLikeMinAggregateInputType
    _max?: UserLikeMaxAggregateInputType
  }

  export type UserLikeGroupByOutputType = {
    id: number
    userId: number
    postId: number
    createdAt: Date
    _count: UserLikeCountAggregateOutputType | null
    _avg: UserLikeAvgAggregateOutputType | null
    _sum: UserLikeSumAggregateOutputType | null
    _min: UserLikeMinAggregateOutputType | null
    _max: UserLikeMaxAggregateOutputType | null
  }

  type GetUserLikeGroupByPayload<T extends UserLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLikeGroupByOutputType[P]>
            : GetScalarType<T[P], UserLikeGroupByOutputType[P]>
        }
      >
    >


  export type UserLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLike"]>

  export type UserLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLike"]>

  export type UserLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLike"]>

  export type UserLikeSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
  }

  export type UserLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "createdAt", ExtArgs["result"]["userLike"]>
  export type UserLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type UserLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type UserLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $UserLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      postId: number
      createdAt: Date
    }, ExtArgs["result"]["userLike"]>
    composites: {}
  }

  type UserLikeGetPayload<S extends boolean | null | undefined | UserLikeDefaultArgs> = $Result.GetResult<Prisma.$UserLikePayload, S>

  type UserLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLikeCountAggregateInputType | true
    }

  export interface UserLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLike'], meta: { name: 'UserLike' } }
    /**
     * Find zero or one UserLike that matches the filter.
     * @param {UserLikeFindUniqueArgs} args - Arguments to find a UserLike
     * @example
     * // Get one UserLike
     * const userLike = await prisma.userLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLikeFindUniqueArgs>(args: SelectSubset<T, UserLikeFindUniqueArgs<ExtArgs>>): Prisma__UserLikeClient<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLikeFindUniqueOrThrowArgs} args - Arguments to find a UserLike
     * @example
     * // Get one UserLike
     * const userLike = await prisma.userLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLikeClient<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikeFindFirstArgs} args - Arguments to find a UserLike
     * @example
     * // Get one UserLike
     * const userLike = await prisma.userLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLikeFindFirstArgs>(args?: SelectSubset<T, UserLikeFindFirstArgs<ExtArgs>>): Prisma__UserLikeClient<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikeFindFirstOrThrowArgs} args - Arguments to find a UserLike
     * @example
     * // Get one UserLike
     * const userLike = await prisma.userLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLikeClient<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLikes
     * const userLikes = await prisma.userLike.findMany()
     * 
     * // Get first 10 UserLikes
     * const userLikes = await prisma.userLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLikeWithIdOnly = await prisma.userLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLikeFindManyArgs>(args?: SelectSubset<T, UserLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLike.
     * @param {UserLikeCreateArgs} args - Arguments to create a UserLike.
     * @example
     * // Create one UserLike
     * const UserLike = await prisma.userLike.create({
     *   data: {
     *     // ... data to create a UserLike
     *   }
     * })
     * 
     */
    create<T extends UserLikeCreateArgs>(args: SelectSubset<T, UserLikeCreateArgs<ExtArgs>>): Prisma__UserLikeClient<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLikes.
     * @param {UserLikeCreateManyArgs} args - Arguments to create many UserLikes.
     * @example
     * // Create many UserLikes
     * const userLike = await prisma.userLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLikeCreateManyArgs>(args?: SelectSubset<T, UserLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLikes and returns the data saved in the database.
     * @param {UserLikeCreateManyAndReturnArgs} args - Arguments to create many UserLikes.
     * @example
     * // Create many UserLikes
     * const userLike = await prisma.userLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLikes and only return the `id`
     * const userLikeWithIdOnly = await prisma.userLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLike.
     * @param {UserLikeDeleteArgs} args - Arguments to delete one UserLike.
     * @example
     * // Delete one UserLike
     * const UserLike = await prisma.userLike.delete({
     *   where: {
     *     // ... filter to delete one UserLike
     *   }
     * })
     * 
     */
    delete<T extends UserLikeDeleteArgs>(args: SelectSubset<T, UserLikeDeleteArgs<ExtArgs>>): Prisma__UserLikeClient<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLike.
     * @param {UserLikeUpdateArgs} args - Arguments to update one UserLike.
     * @example
     * // Update one UserLike
     * const userLike = await prisma.userLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLikeUpdateArgs>(args: SelectSubset<T, UserLikeUpdateArgs<ExtArgs>>): Prisma__UserLikeClient<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLikes.
     * @param {UserLikeDeleteManyArgs} args - Arguments to filter UserLikes to delete.
     * @example
     * // Delete a few UserLikes
     * const { count } = await prisma.userLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLikeDeleteManyArgs>(args?: SelectSubset<T, UserLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLikes
     * const userLike = await prisma.userLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLikeUpdateManyArgs>(args: SelectSubset<T, UserLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLikes and returns the data updated in the database.
     * @param {UserLikeUpdateManyAndReturnArgs} args - Arguments to update many UserLikes.
     * @example
     * // Update many UserLikes
     * const userLike = await prisma.userLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLikes and only return the `id`
     * const userLikeWithIdOnly = await prisma.userLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLike.
     * @param {UserLikeUpsertArgs} args - Arguments to update or create a UserLike.
     * @example
     * // Update or create a UserLike
     * const userLike = await prisma.userLike.upsert({
     *   create: {
     *     // ... data to create a UserLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLike we want to update
     *   }
     * })
     */
    upsert<T extends UserLikeUpsertArgs>(args: SelectSubset<T, UserLikeUpsertArgs<ExtArgs>>): Prisma__UserLikeClient<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikeCountArgs} args - Arguments to filter UserLikes to count.
     * @example
     * // Count the number of UserLikes
     * const count = await prisma.userLike.count({
     *   where: {
     *     // ... the filter for the UserLikes we want to count
     *   }
     * })
    **/
    count<T extends UserLikeCountArgs>(
      args?: Subset<T, UserLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLikeAggregateArgs>(args: Subset<T, UserLikeAggregateArgs>): Prisma.PrismaPromise<GetUserLikeAggregateType<T>>

    /**
     * Group by UserLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLikeGroupByArgs['orderBy'] }
        : { orderBy?: UserLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLike model
   */
  readonly fields: UserLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserLike model
   */
  interface UserLikeFieldRefs {
    readonly id: FieldRef<"UserLike", 'Int'>
    readonly userId: FieldRef<"UserLike", 'Int'>
    readonly postId: FieldRef<"UserLike", 'Int'>
    readonly createdAt: FieldRef<"UserLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLike findUnique
   */
  export type UserLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
    /**
     * Filter, which UserLike to fetch.
     */
    where: UserLikeWhereUniqueInput
  }

  /**
   * UserLike findUniqueOrThrow
   */
  export type UserLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
    /**
     * Filter, which UserLike to fetch.
     */
    where: UserLikeWhereUniqueInput
  }

  /**
   * UserLike findFirst
   */
  export type UserLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
    /**
     * Filter, which UserLike to fetch.
     */
    where?: UserLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikes to fetch.
     */
    orderBy?: UserLikeOrderByWithRelationInput | UserLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLikes.
     */
    cursor?: UserLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLikes.
     */
    distinct?: UserLikeScalarFieldEnum | UserLikeScalarFieldEnum[]
  }

  /**
   * UserLike findFirstOrThrow
   */
  export type UserLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
    /**
     * Filter, which UserLike to fetch.
     */
    where?: UserLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikes to fetch.
     */
    orderBy?: UserLikeOrderByWithRelationInput | UserLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLikes.
     */
    cursor?: UserLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLikes.
     */
    distinct?: UserLikeScalarFieldEnum | UserLikeScalarFieldEnum[]
  }

  /**
   * UserLike findMany
   */
  export type UserLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
    /**
     * Filter, which UserLikes to fetch.
     */
    where?: UserLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikes to fetch.
     */
    orderBy?: UserLikeOrderByWithRelationInput | UserLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLikes.
     */
    cursor?: UserLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikes.
     */
    skip?: number
    distinct?: UserLikeScalarFieldEnum | UserLikeScalarFieldEnum[]
  }

  /**
   * UserLike create
   */
  export type UserLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLike.
     */
    data: XOR<UserLikeCreateInput, UserLikeUncheckedCreateInput>
  }

  /**
   * UserLike createMany
   */
  export type UserLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLikes.
     */
    data: UserLikeCreateManyInput | UserLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLike createManyAndReturn
   */
  export type UserLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * The data used to create many UserLikes.
     */
    data: UserLikeCreateManyInput | UserLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLike update
   */
  export type UserLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLike.
     */
    data: XOR<UserLikeUpdateInput, UserLikeUncheckedUpdateInput>
    /**
     * Choose, which UserLike to update.
     */
    where: UserLikeWhereUniqueInput
  }

  /**
   * UserLike updateMany
   */
  export type UserLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLikes.
     */
    data: XOR<UserLikeUpdateManyMutationInput, UserLikeUncheckedUpdateManyInput>
    /**
     * Filter which UserLikes to update
     */
    where?: UserLikeWhereInput
    /**
     * Limit how many UserLikes to update.
     */
    limit?: number
  }

  /**
   * UserLike updateManyAndReturn
   */
  export type UserLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * The data used to update UserLikes.
     */
    data: XOR<UserLikeUpdateManyMutationInput, UserLikeUncheckedUpdateManyInput>
    /**
     * Filter which UserLikes to update
     */
    where?: UserLikeWhereInput
    /**
     * Limit how many UserLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLike upsert
   */
  export type UserLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLike to update in case it exists.
     */
    where: UserLikeWhereUniqueInput
    /**
     * In case the UserLike found by the `where` argument doesn't exist, create a new UserLike with this data.
     */
    create: XOR<UserLikeCreateInput, UserLikeUncheckedCreateInput>
    /**
     * In case the UserLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLikeUpdateInput, UserLikeUncheckedUpdateInput>
  }

  /**
   * UserLike delete
   */
  export type UserLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
    /**
     * Filter which UserLike to delete.
     */
    where: UserLikeWhereUniqueInput
  }

  /**
   * UserLike deleteMany
   */
  export type UserLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLikes to delete
     */
    where?: UserLikeWhereInput
    /**
     * Limit how many UserLikes to delete.
     */
    limit?: number
  }

  /**
   * UserLike without action
   */
  export type UserLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLike
     */
    select?: UserLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLike
     */
    omit?: UserLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikeInclude<ExtArgs> | null
  }


  /**
   * Model UserFollow
   */

  export type AggregateUserFollow = {
    _count: UserFollowCountAggregateOutputType | null
    _avg: UserFollowAvgAggregateOutputType | null
    _sum: UserFollowSumAggregateOutputType | null
    _min: UserFollowMinAggregateOutputType | null
    _max: UserFollowMaxAggregateOutputType | null
  }

  export type UserFollowAvgAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
  }

  export type UserFollowSumAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
  }

  export type UserFollowMinAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
    createdAt: Date | null
  }

  export type UserFollowMaxAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
    createdAt: Date | null
  }

  export type UserFollowCountAggregateOutputType = {
    id: number
    followerId: number
    followingId: number
    createdAt: number
    _all: number
  }


  export type UserFollowAvgAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
  }

  export type UserFollowSumAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
  }

  export type UserFollowMinAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type UserFollowMaxAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type UserFollowCountAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
    _all?: true
  }

  export type UserFollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFollow to aggregate.
     */
    where?: UserFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollows to fetch.
     */
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFollows
    **/
    _count?: true | UserFollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFollowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFollowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFollowMaxAggregateInputType
  }

  export type GetUserFollowAggregateType<T extends UserFollowAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFollow[P]>
      : GetScalarType<T[P], AggregateUserFollow[P]>
  }




  export type UserFollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowWhereInput
    orderBy?: UserFollowOrderByWithAggregationInput | UserFollowOrderByWithAggregationInput[]
    by: UserFollowScalarFieldEnum[] | UserFollowScalarFieldEnum
    having?: UserFollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFollowCountAggregateInputType | true
    _avg?: UserFollowAvgAggregateInputType
    _sum?: UserFollowSumAggregateInputType
    _min?: UserFollowMinAggregateInputType
    _max?: UserFollowMaxAggregateInputType
  }

  export type UserFollowGroupByOutputType = {
    id: number
    followerId: number
    followingId: number
    createdAt: Date
    _count: UserFollowCountAggregateOutputType | null
    _avg: UserFollowAvgAggregateOutputType | null
    _sum: UserFollowSumAggregateOutputType | null
    _min: UserFollowMinAggregateOutputType | null
    _max: UserFollowMaxAggregateOutputType | null
  }

  type GetUserFollowGroupByPayload<T extends UserFollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFollowGroupByOutputType[P]>
            : GetScalarType<T[P], UserFollowGroupByOutputType[P]>
        }
      >
    >


  export type UserFollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFollow"]>

  export type UserFollowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFollow"]>

  export type UserFollowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFollow"]>

  export type UserFollowSelectScalar = {
    id?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
  }

  export type UserFollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "followerId" | "followingId" | "createdAt", ExtArgs["result"]["userFollow"]>
  export type UserFollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFollowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFollowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserFollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFollow"
    objects: {
      follower: Prisma.$UserPayload<ExtArgs>
      following: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      followerId: number
      followingId: number
      createdAt: Date
    }, ExtArgs["result"]["userFollow"]>
    composites: {}
  }

  type UserFollowGetPayload<S extends boolean | null | undefined | UserFollowDefaultArgs> = $Result.GetResult<Prisma.$UserFollowPayload, S>

  type UserFollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFollowCountAggregateInputType | true
    }

  export interface UserFollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFollow'], meta: { name: 'UserFollow' } }
    /**
     * Find zero or one UserFollow that matches the filter.
     * @param {UserFollowFindUniqueArgs} args - Arguments to find a UserFollow
     * @example
     * // Get one UserFollow
     * const userFollow = await prisma.userFollow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFollowFindUniqueArgs>(args: SelectSubset<T, UserFollowFindUniqueArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFollow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFollowFindUniqueOrThrowArgs} args - Arguments to find a UserFollow
     * @example
     * // Get one UserFollow
     * const userFollow = await prisma.userFollow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFollowFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFollow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowFindFirstArgs} args - Arguments to find a UserFollow
     * @example
     * // Get one UserFollow
     * const userFollow = await prisma.userFollow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFollowFindFirstArgs>(args?: SelectSubset<T, UserFollowFindFirstArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFollow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowFindFirstOrThrowArgs} args - Arguments to find a UserFollow
     * @example
     * // Get one UserFollow
     * const userFollow = await prisma.userFollow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFollowFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFollows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFollows
     * const userFollows = await prisma.userFollow.findMany()
     * 
     * // Get first 10 UserFollows
     * const userFollows = await prisma.userFollow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFollowWithIdOnly = await prisma.userFollow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFollowFindManyArgs>(args?: SelectSubset<T, UserFollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFollow.
     * @param {UserFollowCreateArgs} args - Arguments to create a UserFollow.
     * @example
     * // Create one UserFollow
     * const UserFollow = await prisma.userFollow.create({
     *   data: {
     *     // ... data to create a UserFollow
     *   }
     * })
     * 
     */
    create<T extends UserFollowCreateArgs>(args: SelectSubset<T, UserFollowCreateArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFollows.
     * @param {UserFollowCreateManyArgs} args - Arguments to create many UserFollows.
     * @example
     * // Create many UserFollows
     * const userFollow = await prisma.userFollow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFollowCreateManyArgs>(args?: SelectSubset<T, UserFollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFollows and returns the data saved in the database.
     * @param {UserFollowCreateManyAndReturnArgs} args - Arguments to create many UserFollows.
     * @example
     * // Create many UserFollows
     * const userFollow = await prisma.userFollow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFollows and only return the `id`
     * const userFollowWithIdOnly = await prisma.userFollow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFollowCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFollowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFollow.
     * @param {UserFollowDeleteArgs} args - Arguments to delete one UserFollow.
     * @example
     * // Delete one UserFollow
     * const UserFollow = await prisma.userFollow.delete({
     *   where: {
     *     // ... filter to delete one UserFollow
     *   }
     * })
     * 
     */
    delete<T extends UserFollowDeleteArgs>(args: SelectSubset<T, UserFollowDeleteArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFollow.
     * @param {UserFollowUpdateArgs} args - Arguments to update one UserFollow.
     * @example
     * // Update one UserFollow
     * const userFollow = await prisma.userFollow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFollowUpdateArgs>(args: SelectSubset<T, UserFollowUpdateArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFollows.
     * @param {UserFollowDeleteManyArgs} args - Arguments to filter UserFollows to delete.
     * @example
     * // Delete a few UserFollows
     * const { count } = await prisma.userFollow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFollowDeleteManyArgs>(args?: SelectSubset<T, UserFollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFollows
     * const userFollow = await prisma.userFollow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFollowUpdateManyArgs>(args: SelectSubset<T, UserFollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFollows and returns the data updated in the database.
     * @param {UserFollowUpdateManyAndReturnArgs} args - Arguments to update many UserFollows.
     * @example
     * // Update many UserFollows
     * const userFollow = await prisma.userFollow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFollows and only return the `id`
     * const userFollowWithIdOnly = await prisma.userFollow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserFollowUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFollowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFollow.
     * @param {UserFollowUpsertArgs} args - Arguments to update or create a UserFollow.
     * @example
     * // Update or create a UserFollow
     * const userFollow = await prisma.userFollow.upsert({
     *   create: {
     *     // ... data to create a UserFollow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFollow we want to update
     *   }
     * })
     */
    upsert<T extends UserFollowUpsertArgs>(args: SelectSubset<T, UserFollowUpsertArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowCountArgs} args - Arguments to filter UserFollows to count.
     * @example
     * // Count the number of UserFollows
     * const count = await prisma.userFollow.count({
     *   where: {
     *     // ... the filter for the UserFollows we want to count
     *   }
     * })
    **/
    count<T extends UserFollowCountArgs>(
      args?: Subset<T, UserFollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFollowAggregateArgs>(args: Subset<T, UserFollowAggregateArgs>): Prisma.PrismaPromise<GetUserFollowAggregateType<T>>

    /**
     * Group by UserFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFollowGroupByArgs['orderBy'] }
        : { orderBy?: UserFollowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFollow model
   */
  readonly fields: UserFollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFollow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    follower<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    following<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFollow model
   */
  interface UserFollowFieldRefs {
    readonly id: FieldRef<"UserFollow", 'Int'>
    readonly followerId: FieldRef<"UserFollow", 'Int'>
    readonly followingId: FieldRef<"UserFollow", 'Int'>
    readonly createdAt: FieldRef<"UserFollow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFollow findUnique
   */
  export type UserFollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter, which UserFollow to fetch.
     */
    where: UserFollowWhereUniqueInput
  }

  /**
   * UserFollow findUniqueOrThrow
   */
  export type UserFollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter, which UserFollow to fetch.
     */
    where: UserFollowWhereUniqueInput
  }

  /**
   * UserFollow findFirst
   */
  export type UserFollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter, which UserFollow to fetch.
     */
    where?: UserFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollows to fetch.
     */
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFollows.
     */
    cursor?: UserFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFollows.
     */
    distinct?: UserFollowScalarFieldEnum | UserFollowScalarFieldEnum[]
  }

  /**
   * UserFollow findFirstOrThrow
   */
  export type UserFollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter, which UserFollow to fetch.
     */
    where?: UserFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollows to fetch.
     */
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFollows.
     */
    cursor?: UserFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFollows.
     */
    distinct?: UserFollowScalarFieldEnum | UserFollowScalarFieldEnum[]
  }

  /**
   * UserFollow findMany
   */
  export type UserFollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter, which UserFollows to fetch.
     */
    where?: UserFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollows to fetch.
     */
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFollows.
     */
    cursor?: UserFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollows.
     */
    skip?: number
    distinct?: UserFollowScalarFieldEnum | UserFollowScalarFieldEnum[]
  }

  /**
   * UserFollow create
   */
  export type UserFollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFollow.
     */
    data: XOR<UserFollowCreateInput, UserFollowUncheckedCreateInput>
  }

  /**
   * UserFollow createMany
   */
  export type UserFollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFollows.
     */
    data: UserFollowCreateManyInput | UserFollowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFollow createManyAndReturn
   */
  export type UserFollowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * The data used to create many UserFollows.
     */
    data: UserFollowCreateManyInput | UserFollowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFollow update
   */
  export type UserFollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFollow.
     */
    data: XOR<UserFollowUpdateInput, UserFollowUncheckedUpdateInput>
    /**
     * Choose, which UserFollow to update.
     */
    where: UserFollowWhereUniqueInput
  }

  /**
   * UserFollow updateMany
   */
  export type UserFollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFollows.
     */
    data: XOR<UserFollowUpdateManyMutationInput, UserFollowUncheckedUpdateManyInput>
    /**
     * Filter which UserFollows to update
     */
    where?: UserFollowWhereInput
    /**
     * Limit how many UserFollows to update.
     */
    limit?: number
  }

  /**
   * UserFollow updateManyAndReturn
   */
  export type UserFollowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * The data used to update UserFollows.
     */
    data: XOR<UserFollowUpdateManyMutationInput, UserFollowUncheckedUpdateManyInput>
    /**
     * Filter which UserFollows to update
     */
    where?: UserFollowWhereInput
    /**
     * Limit how many UserFollows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFollow upsert
   */
  export type UserFollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFollow to update in case it exists.
     */
    where: UserFollowWhereUniqueInput
    /**
     * In case the UserFollow found by the `where` argument doesn't exist, create a new UserFollow with this data.
     */
    create: XOR<UserFollowCreateInput, UserFollowUncheckedCreateInput>
    /**
     * In case the UserFollow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFollowUpdateInput, UserFollowUncheckedUpdateInput>
  }

  /**
   * UserFollow delete
   */
  export type UserFollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter which UserFollow to delete.
     */
    where: UserFollowWhereUniqueInput
  }

  /**
   * UserFollow deleteMany
   */
  export type UserFollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFollows to delete
     */
    where?: UserFollowWhereInput
    /**
     * Limit how many UserFollows to delete.
     */
    limit?: number
  }

  /**
   * UserFollow without action
   */
  export type UserFollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
  }


  /**
   * Model UserSport
   */

  export type AggregateUserSport = {
    _count: UserSportCountAggregateOutputType | null
    _avg: UserSportAvgAggregateOutputType | null
    _sum: UserSportSumAggregateOutputType | null
    _min: UserSportMinAggregateOutputType | null
    _max: UserSportMaxAggregateOutputType | null
  }

  export type UserSportAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
    sportRankId: number | null
  }

  export type UserSportSumAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
    sportRankId: number | null
  }

  export type UserSportMinAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
    sportRankId: number | null
    startedAt: Date | null
    color: string | null
  }

  export type UserSportMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
    sportRankId: number | null
    startedAt: Date | null
    color: string | null
  }

  export type UserSportCountAggregateOutputType = {
    id: number
    userId: number
    sportId: number
    sportRankId: number
    startedAt: number
    color: number
    _all: number
  }


  export type UserSportAvgAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    sportRankId?: true
  }

  export type UserSportSumAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    sportRankId?: true
  }

  export type UserSportMinAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    sportRankId?: true
    startedAt?: true
    color?: true
  }

  export type UserSportMaxAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    sportRankId?: true
    startedAt?: true
    color?: true
  }

  export type UserSportCountAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    sportRankId?: true
    startedAt?: true
    color?: true
    _all?: true
  }

  export type UserSportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSport to aggregate.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSports
    **/
    _count?: true | UserSportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSportMaxAggregateInputType
  }

  export type GetUserSportAggregateType<T extends UserSportAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSport[P]>
      : GetScalarType<T[P], AggregateUserSport[P]>
  }




  export type UserSportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportWhereInput
    orderBy?: UserSportOrderByWithAggregationInput | UserSportOrderByWithAggregationInput[]
    by: UserSportScalarFieldEnum[] | UserSportScalarFieldEnum
    having?: UserSportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSportCountAggregateInputType | true
    _avg?: UserSportAvgAggregateInputType
    _sum?: UserSportSumAggregateInputType
    _min?: UserSportMinAggregateInputType
    _max?: UserSportMaxAggregateInputType
  }

  export type UserSportGroupByOutputType = {
    id: number
    userId: number
    sportId: number
    sportRankId: number
    startedAt: Date
    color: string | null
    _count: UserSportCountAggregateOutputType | null
    _avg: UserSportAvgAggregateOutputType | null
    _sum: UserSportSumAggregateOutputType | null
    _min: UserSportMinAggregateOutputType | null
    _max: UserSportMaxAggregateOutputType | null
  }

  type GetUserSportGroupByPayload<T extends UserSportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSportGroupByOutputType[P]>
            : GetScalarType<T[P], UserSportGroupByOutputType[P]>
        }
      >
    >


  export type UserSportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sportId?: boolean
    sportRankId?: boolean
    startedAt?: boolean
    color?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
    sportrank?: boolean | SportRanksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSport"]>

  export type UserSportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sportId?: boolean
    sportRankId?: boolean
    startedAt?: boolean
    color?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
    sportrank?: boolean | SportRanksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSport"]>

  export type UserSportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sportId?: boolean
    sportRankId?: boolean
    startedAt?: boolean
    color?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
    sportrank?: boolean | SportRanksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSport"]>

  export type UserSportSelectScalar = {
    id?: boolean
    userId?: boolean
    sportId?: boolean
    sportRankId?: boolean
    startedAt?: boolean
    color?: boolean
  }

  export type UserSportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sportId" | "sportRankId" | "startedAt" | "color", ExtArgs["result"]["userSport"]>
  export type UserSportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
    sportrank?: boolean | SportRanksDefaultArgs<ExtArgs>
  }
  export type UserSportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
    sportrank?: boolean | SportRanksDefaultArgs<ExtArgs>
  }
  export type UserSportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
    sportrank?: boolean | SportRanksDefaultArgs<ExtArgs>
  }

  export type $UserSportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sport: Prisma.$SportPayload<ExtArgs>
      sportrank: Prisma.$SportRanksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      sportId: number
      sportRankId: number
      startedAt: Date
      color: string | null
    }, ExtArgs["result"]["userSport"]>
    composites: {}
  }

  type UserSportGetPayload<S extends boolean | null | undefined | UserSportDefaultArgs> = $Result.GetResult<Prisma.$UserSportPayload, S>

  type UserSportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSportCountAggregateInputType | true
    }

  export interface UserSportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSport'], meta: { name: 'UserSport' } }
    /**
     * Find zero or one UserSport that matches the filter.
     * @param {UserSportFindUniqueArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSportFindUniqueArgs>(args: SelectSubset<T, UserSportFindUniqueArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSportFindUniqueOrThrowArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSportFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportFindFirstArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSportFindFirstArgs>(args?: SelectSubset<T, UserSportFindFirstArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportFindFirstOrThrowArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSportFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSportFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSports
     * const userSports = await prisma.userSport.findMany()
     * 
     * // Get first 10 UserSports
     * const userSports = await prisma.userSport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSportWithIdOnly = await prisma.userSport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSportFindManyArgs>(args?: SelectSubset<T, UserSportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSport.
     * @param {UserSportCreateArgs} args - Arguments to create a UserSport.
     * @example
     * // Create one UserSport
     * const UserSport = await prisma.userSport.create({
     *   data: {
     *     // ... data to create a UserSport
     *   }
     * })
     * 
     */
    create<T extends UserSportCreateArgs>(args: SelectSubset<T, UserSportCreateArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSports.
     * @param {UserSportCreateManyArgs} args - Arguments to create many UserSports.
     * @example
     * // Create many UserSports
     * const userSport = await prisma.userSport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSportCreateManyArgs>(args?: SelectSubset<T, UserSportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSports and returns the data saved in the database.
     * @param {UserSportCreateManyAndReturnArgs} args - Arguments to create many UserSports.
     * @example
     * // Create many UserSports
     * const userSport = await prisma.userSport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSports and only return the `id`
     * const userSportWithIdOnly = await prisma.userSport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSportCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSport.
     * @param {UserSportDeleteArgs} args - Arguments to delete one UserSport.
     * @example
     * // Delete one UserSport
     * const UserSport = await prisma.userSport.delete({
     *   where: {
     *     // ... filter to delete one UserSport
     *   }
     * })
     * 
     */
    delete<T extends UserSportDeleteArgs>(args: SelectSubset<T, UserSportDeleteArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSport.
     * @param {UserSportUpdateArgs} args - Arguments to update one UserSport.
     * @example
     * // Update one UserSport
     * const userSport = await prisma.userSport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSportUpdateArgs>(args: SelectSubset<T, UserSportUpdateArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSports.
     * @param {UserSportDeleteManyArgs} args - Arguments to filter UserSports to delete.
     * @example
     * // Delete a few UserSports
     * const { count } = await prisma.userSport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSportDeleteManyArgs>(args?: SelectSubset<T, UserSportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSports
     * const userSport = await prisma.userSport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSportUpdateManyArgs>(args: SelectSubset<T, UserSportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSports and returns the data updated in the database.
     * @param {UserSportUpdateManyAndReturnArgs} args - Arguments to update many UserSports.
     * @example
     * // Update many UserSports
     * const userSport = await prisma.userSport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSports and only return the `id`
     * const userSportWithIdOnly = await prisma.userSport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSportUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSport.
     * @param {UserSportUpsertArgs} args - Arguments to update or create a UserSport.
     * @example
     * // Update or create a UserSport
     * const userSport = await prisma.userSport.upsert({
     *   create: {
     *     // ... data to create a UserSport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSport we want to update
     *   }
     * })
     */
    upsert<T extends UserSportUpsertArgs>(args: SelectSubset<T, UserSportUpsertArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportCountArgs} args - Arguments to filter UserSports to count.
     * @example
     * // Count the number of UserSports
     * const count = await prisma.userSport.count({
     *   where: {
     *     // ... the filter for the UserSports we want to count
     *   }
     * })
    **/
    count<T extends UserSportCountArgs>(
      args?: Subset<T, UserSportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSportAggregateArgs>(args: Subset<T, UserSportAggregateArgs>): Prisma.PrismaPromise<GetUserSportAggregateType<T>>

    /**
     * Group by UserSport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSportGroupByArgs['orderBy'] }
        : { orderBy?: UserSportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSport model
   */
  readonly fields: UserSportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sportrank<T extends SportRanksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportRanksDefaultArgs<ExtArgs>>): Prisma__SportRanksClient<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSport model
   */
  interface UserSportFieldRefs {
    readonly id: FieldRef<"UserSport", 'Int'>
    readonly userId: FieldRef<"UserSport", 'Int'>
    readonly sportId: FieldRef<"UserSport", 'Int'>
    readonly sportRankId: FieldRef<"UserSport", 'Int'>
    readonly startedAt: FieldRef<"UserSport", 'DateTime'>
    readonly color: FieldRef<"UserSport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserSport findUnique
   */
  export type UserSportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport findUniqueOrThrow
   */
  export type UserSportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport findFirst
   */
  export type UserSportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSports.
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSports.
     */
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * UserSport findFirstOrThrow
   */
  export type UserSportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSports.
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSports.
     */
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * UserSport findMany
   */
  export type UserSportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSports to fetch.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSports.
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * UserSport create
   */
  export type UserSportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSport.
     */
    data: XOR<UserSportCreateInput, UserSportUncheckedCreateInput>
  }

  /**
   * UserSport createMany
   */
  export type UserSportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSports.
     */
    data: UserSportCreateManyInput | UserSportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSport createManyAndReturn
   */
  export type UserSportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * The data used to create many UserSports.
     */
    data: UserSportCreateManyInput | UserSportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSport update
   */
  export type UserSportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSport.
     */
    data: XOR<UserSportUpdateInput, UserSportUncheckedUpdateInput>
    /**
     * Choose, which UserSport to update.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport updateMany
   */
  export type UserSportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSports.
     */
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyInput>
    /**
     * Filter which UserSports to update
     */
    where?: UserSportWhereInput
    /**
     * Limit how many UserSports to update.
     */
    limit?: number
  }

  /**
   * UserSport updateManyAndReturn
   */
  export type UserSportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * The data used to update UserSports.
     */
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyInput>
    /**
     * Filter which UserSports to update
     */
    where?: UserSportWhereInput
    /**
     * Limit how many UserSports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSport upsert
   */
  export type UserSportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSport to update in case it exists.
     */
    where: UserSportWhereUniqueInput
    /**
     * In case the UserSport found by the `where` argument doesn't exist, create a new UserSport with this data.
     */
    create: XOR<UserSportCreateInput, UserSportUncheckedCreateInput>
    /**
     * In case the UserSport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSportUpdateInput, UserSportUncheckedUpdateInput>
  }

  /**
   * UserSport delete
   */
  export type UserSportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter which UserSport to delete.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport deleteMany
   */
  export type UserSportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSports to delete
     */
    where?: UserSportWhereInput
    /**
     * Limit how many UserSports to delete.
     */
    limit?: number
  }

  /**
   * UserSport without action
   */
  export type UserSportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
  }


  /**
   * Model Sport
   */

  export type AggregateSport = {
    _count: SportCountAggregateOutputType | null
    _avg: SportAvgAggregateOutputType | null
    _sum: SportSumAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  export type SportAvgAggregateOutputType = {
    id: number | null
  }

  export type SportSumAggregateOutputType = {
    id: number | null
  }

  export type SportMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SportMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SportCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SportAvgAggregateInputType = {
    id?: true
  }

  export type SportSumAggregateInputType = {
    id?: true
  }

  export type SportMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SportMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SportCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sport to aggregate.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sports
    **/
    _count?: true | SportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportMaxAggregateInputType
  }

  export type GetSportAggregateType<T extends SportAggregateArgs> = {
        [P in keyof T & keyof AggregateSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSport[P]>
      : GetScalarType<T[P], AggregateSport[P]>
  }




  export type SportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportWhereInput
    orderBy?: SportOrderByWithAggregationInput | SportOrderByWithAggregationInput[]
    by: SportScalarFieldEnum[] | SportScalarFieldEnum
    having?: SportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportCountAggregateInputType | true
    _avg?: SportAvgAggregateInputType
    _sum?: SportSumAggregateInputType
    _min?: SportMinAggregateInputType
    _max?: SportMaxAggregateInputType
  }

  export type SportGroupByOutputType = {
    id: number
    name: string
    _count: SportCountAggregateOutputType | null
    _avg: SportAvgAggregateOutputType | null
    _sum: SportSumAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  type GetSportGroupByPayload<T extends SportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportGroupByOutputType[P]>
            : GetScalarType<T[P], SportGroupByOutputType[P]>
        }
      >
    >


  export type SportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Sport$usersArgs<ExtArgs>
    activities?: boolean | Sport$activitiesArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sport"]>

  export type SportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["sport"]>
  export type SportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Sport$usersArgs<ExtArgs>
    activities?: boolean | Sport$activitiesArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sport"
    objects: {
      users: Prisma.$UserSportPayload<ExtArgs>[]
      activities: Prisma.$SportActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["sport"]>
    composites: {}
  }

  type SportGetPayload<S extends boolean | null | undefined | SportDefaultArgs> = $Result.GetResult<Prisma.$SportPayload, S>

  type SportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportCountAggregateInputType | true
    }

  export interface SportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sport'], meta: { name: 'Sport' } }
    /**
     * Find zero or one Sport that matches the filter.
     * @param {SportFindUniqueArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportFindUniqueArgs>(args: SelectSubset<T, SportFindUniqueArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportFindUniqueOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportFindUniqueOrThrowArgs>(args: SelectSubset<T, SportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportFindFirstArgs>(args?: SelectSubset<T, SportFindFirstArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportFindFirstOrThrowArgs>(args?: SelectSubset<T, SportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sports
     * const sports = await prisma.sport.findMany()
     * 
     * // Get first 10 Sports
     * const sports = await prisma.sport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportWithIdOnly = await prisma.sport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportFindManyArgs>(args?: SelectSubset<T, SportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sport.
     * @param {SportCreateArgs} args - Arguments to create a Sport.
     * @example
     * // Create one Sport
     * const Sport = await prisma.sport.create({
     *   data: {
     *     // ... data to create a Sport
     *   }
     * })
     * 
     */
    create<T extends SportCreateArgs>(args: SelectSubset<T, SportCreateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sports.
     * @param {SportCreateManyArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportCreateManyArgs>(args?: SelectSubset<T, SportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sports and returns the data saved in the database.
     * @param {SportCreateManyAndReturnArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sports and only return the `id`
     * const sportWithIdOnly = await prisma.sport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportCreateManyAndReturnArgs>(args?: SelectSubset<T, SportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sport.
     * @param {SportDeleteArgs} args - Arguments to delete one Sport.
     * @example
     * // Delete one Sport
     * const Sport = await prisma.sport.delete({
     *   where: {
     *     // ... filter to delete one Sport
     *   }
     * })
     * 
     */
    delete<T extends SportDeleteArgs>(args: SelectSubset<T, SportDeleteArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sport.
     * @param {SportUpdateArgs} args - Arguments to update one Sport.
     * @example
     * // Update one Sport
     * const sport = await prisma.sport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportUpdateArgs>(args: SelectSubset<T, SportUpdateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sports.
     * @param {SportDeleteManyArgs} args - Arguments to filter Sports to delete.
     * @example
     * // Delete a few Sports
     * const { count } = await prisma.sport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportDeleteManyArgs>(args?: SelectSubset<T, SportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportUpdateManyArgs>(args: SelectSubset<T, SportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports and returns the data updated in the database.
     * @param {SportUpdateManyAndReturnArgs} args - Arguments to update many Sports.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sports and only return the `id`
     * const sportWithIdOnly = await prisma.sport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SportUpdateManyAndReturnArgs>(args: SelectSubset<T, SportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sport.
     * @param {SportUpsertArgs} args - Arguments to update or create a Sport.
     * @example
     * // Update or create a Sport
     * const sport = await prisma.sport.upsert({
     *   create: {
     *     // ... data to create a Sport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sport we want to update
     *   }
     * })
     */
    upsert<T extends SportUpsertArgs>(args: SelectSubset<T, SportUpsertArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportCountArgs} args - Arguments to filter Sports to count.
     * @example
     * // Count the number of Sports
     * const count = await prisma.sport.count({
     *   where: {
     *     // ... the filter for the Sports we want to count
     *   }
     * })
    **/
    count<T extends SportCountArgs>(
      args?: Subset<T, SportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SportAggregateArgs>(args: Subset<T, SportAggregateArgs>): Prisma.PrismaPromise<GetSportAggregateType<T>>

    /**
     * Group by Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportGroupByArgs['orderBy'] }
        : { orderBy?: SportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sport model
   */
  readonly fields: SportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Sport$usersArgs<ExtArgs> = {}>(args?: Subset<T, Sport$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Sport$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Sport$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sport model
   */
  interface SportFieldRefs {
    readonly id: FieldRef<"Sport", 'Int'>
    readonly name: FieldRef<"Sport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sport findUnique
   */
  export type SportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findUniqueOrThrow
   */
  export type SportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findFirst
   */
  export type SportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findFirstOrThrow
   */
  export type SportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findMany
   */
  export type SportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sports to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport create
   */
  export type SportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to create a Sport.
     */
    data: XOR<SportCreateInput, SportUncheckedCreateInput>
  }

  /**
   * Sport createMany
   */
  export type SportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sport createManyAndReturn
   */
  export type SportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sport update
   */
  export type SportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to update a Sport.
     */
    data: XOR<SportUpdateInput, SportUncheckedUpdateInput>
    /**
     * Choose, which Sport to update.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport updateMany
   */
  export type SportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sports.
     */
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to update.
     */
    limit?: number
  }

  /**
   * Sport updateManyAndReturn
   */
  export type SportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * The data used to update Sports.
     */
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to update.
     */
    limit?: number
  }

  /**
   * Sport upsert
   */
  export type SportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The filter to search for the Sport to update in case it exists.
     */
    where: SportWhereUniqueInput
    /**
     * In case the Sport found by the `where` argument doesn't exist, create a new Sport with this data.
     */
    create: XOR<SportCreateInput, SportUncheckedCreateInput>
    /**
     * In case the Sport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportUpdateInput, SportUncheckedUpdateInput>
  }

  /**
   * Sport delete
   */
  export type SportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter which Sport to delete.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport deleteMany
   */
  export type SportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sports to delete
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to delete.
     */
    limit?: number
  }

  /**
   * Sport.users
   */
  export type Sport$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    where?: UserSportWhereInput
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    cursor?: UserSportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * Sport.activities
   */
  export type Sport$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
    where?: SportActivityWhereInput
    orderBy?: SportActivityOrderByWithRelationInput | SportActivityOrderByWithRelationInput[]
    cursor?: SportActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SportActivityScalarFieldEnum | SportActivityScalarFieldEnum[]
  }

  /**
   * Sport without action
   */
  export type SportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
  }


  /**
   * Model SportRanks
   */

  export type AggregateSportRanks = {
    _count: SportRanksCountAggregateOutputType | null
    _avg: SportRanksAvgAggregateOutputType | null
    _sum: SportRanksSumAggregateOutputType | null
    _min: SportRanksMinAggregateOutputType | null
    _max: SportRanksMaxAggregateOutputType | null
  }

  export type SportRanksAvgAggregateOutputType = {
    id: number | null
  }

  export type SportRanksSumAggregateOutputType = {
    id: number | null
  }

  export type SportRanksMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type SportRanksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type SportRanksCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type SportRanksAvgAggregateInputType = {
    id?: true
  }

  export type SportRanksSumAggregateInputType = {
    id?: true
  }

  export type SportRanksMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SportRanksMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SportRanksCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type SportRanksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportRanks to aggregate.
     */
    where?: SportRanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportRanks to fetch.
     */
    orderBy?: SportRanksOrderByWithRelationInput | SportRanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportRanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportRanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportRanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SportRanks
    **/
    _count?: true | SportRanksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportRanksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportRanksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportRanksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportRanksMaxAggregateInputType
  }

  export type GetSportRanksAggregateType<T extends SportRanksAggregateArgs> = {
        [P in keyof T & keyof AggregateSportRanks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSportRanks[P]>
      : GetScalarType<T[P], AggregateSportRanks[P]>
  }




  export type SportRanksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportRanksWhereInput
    orderBy?: SportRanksOrderByWithAggregationInput | SportRanksOrderByWithAggregationInput[]
    by: SportRanksScalarFieldEnum[] | SportRanksScalarFieldEnum
    having?: SportRanksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportRanksCountAggregateInputType | true
    _avg?: SportRanksAvgAggregateInputType
    _sum?: SportRanksSumAggregateInputType
    _min?: SportRanksMinAggregateInputType
    _max?: SportRanksMaxAggregateInputType
  }

  export type SportRanksGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: SportRanksCountAggregateOutputType | null
    _avg: SportRanksAvgAggregateOutputType | null
    _sum: SportRanksSumAggregateOutputType | null
    _min: SportRanksMinAggregateOutputType | null
    _max: SportRanksMaxAggregateOutputType | null
  }

  type GetSportRanksGroupByPayload<T extends SportRanksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportRanksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportRanksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportRanksGroupByOutputType[P]>
            : GetScalarType<T[P], SportRanksGroupByOutputType[P]>
        }
      >
    >


  export type SportRanksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    users?: boolean | SportRanks$usersArgs<ExtArgs>
    _count?: boolean | SportRanksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sportRanks"]>

  export type SportRanksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["sportRanks"]>

  export type SportRanksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["sportRanks"]>

  export type SportRanksSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type SportRanksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["sportRanks"]>
  export type SportRanksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SportRanks$usersArgs<ExtArgs>
    _count?: boolean | SportRanksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SportRanksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SportRanksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SportRanksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SportRanks"
    objects: {
      users: Prisma.$UserSportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["sportRanks"]>
    composites: {}
  }

  type SportRanksGetPayload<S extends boolean | null | undefined | SportRanksDefaultArgs> = $Result.GetResult<Prisma.$SportRanksPayload, S>

  type SportRanksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportRanksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportRanksCountAggregateInputType | true
    }

  export interface SportRanksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SportRanks'], meta: { name: 'SportRanks' } }
    /**
     * Find zero or one SportRanks that matches the filter.
     * @param {SportRanksFindUniqueArgs} args - Arguments to find a SportRanks
     * @example
     * // Get one SportRanks
     * const sportRanks = await prisma.sportRanks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportRanksFindUniqueArgs>(args: SelectSubset<T, SportRanksFindUniqueArgs<ExtArgs>>): Prisma__SportRanksClient<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SportRanks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportRanksFindUniqueOrThrowArgs} args - Arguments to find a SportRanks
     * @example
     * // Get one SportRanks
     * const sportRanks = await prisma.sportRanks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportRanksFindUniqueOrThrowArgs>(args: SelectSubset<T, SportRanksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportRanksClient<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportRanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportRanksFindFirstArgs} args - Arguments to find a SportRanks
     * @example
     * // Get one SportRanks
     * const sportRanks = await prisma.sportRanks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportRanksFindFirstArgs>(args?: SelectSubset<T, SportRanksFindFirstArgs<ExtArgs>>): Prisma__SportRanksClient<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportRanks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportRanksFindFirstOrThrowArgs} args - Arguments to find a SportRanks
     * @example
     * // Get one SportRanks
     * const sportRanks = await prisma.sportRanks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportRanksFindFirstOrThrowArgs>(args?: SelectSubset<T, SportRanksFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportRanksClient<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SportRanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportRanksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SportRanks
     * const sportRanks = await prisma.sportRanks.findMany()
     * 
     * // Get first 10 SportRanks
     * const sportRanks = await prisma.sportRanks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportRanksWithIdOnly = await prisma.sportRanks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportRanksFindManyArgs>(args?: SelectSubset<T, SportRanksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SportRanks.
     * @param {SportRanksCreateArgs} args - Arguments to create a SportRanks.
     * @example
     * // Create one SportRanks
     * const SportRanks = await prisma.sportRanks.create({
     *   data: {
     *     // ... data to create a SportRanks
     *   }
     * })
     * 
     */
    create<T extends SportRanksCreateArgs>(args: SelectSubset<T, SportRanksCreateArgs<ExtArgs>>): Prisma__SportRanksClient<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SportRanks.
     * @param {SportRanksCreateManyArgs} args - Arguments to create many SportRanks.
     * @example
     * // Create many SportRanks
     * const sportRanks = await prisma.sportRanks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportRanksCreateManyArgs>(args?: SelectSubset<T, SportRanksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SportRanks and returns the data saved in the database.
     * @param {SportRanksCreateManyAndReturnArgs} args - Arguments to create many SportRanks.
     * @example
     * // Create many SportRanks
     * const sportRanks = await prisma.sportRanks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SportRanks and only return the `id`
     * const sportRanksWithIdOnly = await prisma.sportRanks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportRanksCreateManyAndReturnArgs>(args?: SelectSubset<T, SportRanksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SportRanks.
     * @param {SportRanksDeleteArgs} args - Arguments to delete one SportRanks.
     * @example
     * // Delete one SportRanks
     * const SportRanks = await prisma.sportRanks.delete({
     *   where: {
     *     // ... filter to delete one SportRanks
     *   }
     * })
     * 
     */
    delete<T extends SportRanksDeleteArgs>(args: SelectSubset<T, SportRanksDeleteArgs<ExtArgs>>): Prisma__SportRanksClient<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SportRanks.
     * @param {SportRanksUpdateArgs} args - Arguments to update one SportRanks.
     * @example
     * // Update one SportRanks
     * const sportRanks = await prisma.sportRanks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportRanksUpdateArgs>(args: SelectSubset<T, SportRanksUpdateArgs<ExtArgs>>): Prisma__SportRanksClient<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SportRanks.
     * @param {SportRanksDeleteManyArgs} args - Arguments to filter SportRanks to delete.
     * @example
     * // Delete a few SportRanks
     * const { count } = await prisma.sportRanks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportRanksDeleteManyArgs>(args?: SelectSubset<T, SportRanksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportRanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportRanksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SportRanks
     * const sportRanks = await prisma.sportRanks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportRanksUpdateManyArgs>(args: SelectSubset<T, SportRanksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportRanks and returns the data updated in the database.
     * @param {SportRanksUpdateManyAndReturnArgs} args - Arguments to update many SportRanks.
     * @example
     * // Update many SportRanks
     * const sportRanks = await prisma.sportRanks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SportRanks and only return the `id`
     * const sportRanksWithIdOnly = await prisma.sportRanks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SportRanksUpdateManyAndReturnArgs>(args: SelectSubset<T, SportRanksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SportRanks.
     * @param {SportRanksUpsertArgs} args - Arguments to update or create a SportRanks.
     * @example
     * // Update or create a SportRanks
     * const sportRanks = await prisma.sportRanks.upsert({
     *   create: {
     *     // ... data to create a SportRanks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SportRanks we want to update
     *   }
     * })
     */
    upsert<T extends SportRanksUpsertArgs>(args: SelectSubset<T, SportRanksUpsertArgs<ExtArgs>>): Prisma__SportRanksClient<$Result.GetResult<Prisma.$SportRanksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SportRanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportRanksCountArgs} args - Arguments to filter SportRanks to count.
     * @example
     * // Count the number of SportRanks
     * const count = await prisma.sportRanks.count({
     *   where: {
     *     // ... the filter for the SportRanks we want to count
     *   }
     * })
    **/
    count<T extends SportRanksCountArgs>(
      args?: Subset<T, SportRanksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportRanksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SportRanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportRanksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SportRanksAggregateArgs>(args: Subset<T, SportRanksAggregateArgs>): Prisma.PrismaPromise<GetSportRanksAggregateType<T>>

    /**
     * Group by SportRanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportRanksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SportRanksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportRanksGroupByArgs['orderBy'] }
        : { orderBy?: SportRanksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SportRanksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportRanksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SportRanks model
   */
  readonly fields: SportRanksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SportRanks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportRanksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends SportRanks$usersArgs<ExtArgs> = {}>(args?: Subset<T, SportRanks$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SportRanks model
   */
  interface SportRanksFieldRefs {
    readonly id: FieldRef<"SportRanks", 'Int'>
    readonly name: FieldRef<"SportRanks", 'String'>
    readonly description: FieldRef<"SportRanks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SportRanks findUnique
   */
  export type SportRanksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportRanksInclude<ExtArgs> | null
    /**
     * Filter, which SportRanks to fetch.
     */
    where: SportRanksWhereUniqueInput
  }

  /**
   * SportRanks findUniqueOrThrow
   */
  export type SportRanksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportRanksInclude<ExtArgs> | null
    /**
     * Filter, which SportRanks to fetch.
     */
    where: SportRanksWhereUniqueInput
  }

  /**
   * SportRanks findFirst
   */
  export type SportRanksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportRanksInclude<ExtArgs> | null
    /**
     * Filter, which SportRanks to fetch.
     */
    where?: SportRanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportRanks to fetch.
     */
    orderBy?: SportRanksOrderByWithRelationInput | SportRanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportRanks.
     */
    cursor?: SportRanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportRanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportRanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportRanks.
     */
    distinct?: SportRanksScalarFieldEnum | SportRanksScalarFieldEnum[]
  }

  /**
   * SportRanks findFirstOrThrow
   */
  export type SportRanksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportRanksInclude<ExtArgs> | null
    /**
     * Filter, which SportRanks to fetch.
     */
    where?: SportRanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportRanks to fetch.
     */
    orderBy?: SportRanksOrderByWithRelationInput | SportRanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportRanks.
     */
    cursor?: SportRanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportRanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportRanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportRanks.
     */
    distinct?: SportRanksScalarFieldEnum | SportRanksScalarFieldEnum[]
  }

  /**
   * SportRanks findMany
   */
  export type SportRanksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportRanksInclude<ExtArgs> | null
    /**
     * Filter, which SportRanks to fetch.
     */
    where?: SportRanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportRanks to fetch.
     */
    orderBy?: SportRanksOrderByWithRelationInput | SportRanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SportRanks.
     */
    cursor?: SportRanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportRanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportRanks.
     */
    skip?: number
    distinct?: SportRanksScalarFieldEnum | SportRanksScalarFieldEnum[]
  }

  /**
   * SportRanks create
   */
  export type SportRanksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportRanksInclude<ExtArgs> | null
    /**
     * The data needed to create a SportRanks.
     */
    data: XOR<SportRanksCreateInput, SportRanksUncheckedCreateInput>
  }

  /**
   * SportRanks createMany
   */
  export type SportRanksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SportRanks.
     */
    data: SportRanksCreateManyInput | SportRanksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SportRanks createManyAndReturn
   */
  export type SportRanksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * The data used to create many SportRanks.
     */
    data: SportRanksCreateManyInput | SportRanksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SportRanks update
   */
  export type SportRanksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportRanksInclude<ExtArgs> | null
    /**
     * The data needed to update a SportRanks.
     */
    data: XOR<SportRanksUpdateInput, SportRanksUncheckedUpdateInput>
    /**
     * Choose, which SportRanks to update.
     */
    where: SportRanksWhereUniqueInput
  }

  /**
   * SportRanks updateMany
   */
  export type SportRanksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SportRanks.
     */
    data: XOR<SportRanksUpdateManyMutationInput, SportRanksUncheckedUpdateManyInput>
    /**
     * Filter which SportRanks to update
     */
    where?: SportRanksWhereInput
    /**
     * Limit how many SportRanks to update.
     */
    limit?: number
  }

  /**
   * SportRanks updateManyAndReturn
   */
  export type SportRanksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * The data used to update SportRanks.
     */
    data: XOR<SportRanksUpdateManyMutationInput, SportRanksUncheckedUpdateManyInput>
    /**
     * Filter which SportRanks to update
     */
    where?: SportRanksWhereInput
    /**
     * Limit how many SportRanks to update.
     */
    limit?: number
  }

  /**
   * SportRanks upsert
   */
  export type SportRanksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportRanksInclude<ExtArgs> | null
    /**
     * The filter to search for the SportRanks to update in case it exists.
     */
    where: SportRanksWhereUniqueInput
    /**
     * In case the SportRanks found by the `where` argument doesn't exist, create a new SportRanks with this data.
     */
    create: XOR<SportRanksCreateInput, SportRanksUncheckedCreateInput>
    /**
     * In case the SportRanks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportRanksUpdateInput, SportRanksUncheckedUpdateInput>
  }

  /**
   * SportRanks delete
   */
  export type SportRanksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportRanksInclude<ExtArgs> | null
    /**
     * Filter which SportRanks to delete.
     */
    where: SportRanksWhereUniqueInput
  }

  /**
   * SportRanks deleteMany
   */
  export type SportRanksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportRanks to delete
     */
    where?: SportRanksWhereInput
    /**
     * Limit how many SportRanks to delete.
     */
    limit?: number
  }

  /**
   * SportRanks.users
   */
  export type SportRanks$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    where?: UserSportWhereInput
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    cursor?: UserSportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * SportRanks without action
   */
  export type SportRanksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportRanks
     */
    select?: SportRanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportRanks
     */
    omit?: SportRanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportRanksInclude<ExtArgs> | null
  }


  /**
   * Model SportActivity
   */

  export type AggregateSportActivity = {
    _count: SportActivityCountAggregateOutputType | null
    _avg: SportActivityAvgAggregateOutputType | null
    _sum: SportActivitySumAggregateOutputType | null
    _min: SportActivityMinAggregateOutputType | null
    _max: SportActivityMaxAggregateOutputType | null
  }

  export type SportActivityAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type SportActivitySumAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type SportActivityMinAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
    starttime: string | null
    endtime: string | null
    description: string | null
    date: Date | null
    latitude: number | null
    longitude: number | null
    publicity: string | null
  }

  export type SportActivityMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
    starttime: string | null
    endtime: string | null
    description: string | null
    date: Date | null
    latitude: number | null
    longitude: number | null
    publicity: string | null
  }

  export type SportActivityCountAggregateOutputType = {
    id: number
    userId: number
    sportId: number
    starttime: number
    endtime: number
    description: number
    date: number
    latitude: number
    longitude: number
    publicity: number
    _all: number
  }


  export type SportActivityAvgAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    latitude?: true
    longitude?: true
  }

  export type SportActivitySumAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    latitude?: true
    longitude?: true
  }

  export type SportActivityMinAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    starttime?: true
    endtime?: true
    description?: true
    date?: true
    latitude?: true
    longitude?: true
    publicity?: true
  }

  export type SportActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    starttime?: true
    endtime?: true
    description?: true
    date?: true
    latitude?: true
    longitude?: true
    publicity?: true
  }

  export type SportActivityCountAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    starttime?: true
    endtime?: true
    description?: true
    date?: true
    latitude?: true
    longitude?: true
    publicity?: true
    _all?: true
  }

  export type SportActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportActivity to aggregate.
     */
    where?: SportActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportActivities to fetch.
     */
    orderBy?: SportActivityOrderByWithRelationInput | SportActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SportActivities
    **/
    _count?: true | SportActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportActivityMaxAggregateInputType
  }

  export type GetSportActivityAggregateType<T extends SportActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateSportActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSportActivity[P]>
      : GetScalarType<T[P], AggregateSportActivity[P]>
  }




  export type SportActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportActivityWhereInput
    orderBy?: SportActivityOrderByWithAggregationInput | SportActivityOrderByWithAggregationInput[]
    by: SportActivityScalarFieldEnum[] | SportActivityScalarFieldEnum
    having?: SportActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportActivityCountAggregateInputType | true
    _avg?: SportActivityAvgAggregateInputType
    _sum?: SportActivitySumAggregateInputType
    _min?: SportActivityMinAggregateInputType
    _max?: SportActivityMaxAggregateInputType
  }

  export type SportActivityGroupByOutputType = {
    id: number
    userId: number
    sportId: number
    starttime: string
    endtime: string
    description: string
    date: Date
    latitude: number | null
    longitude: number | null
    publicity: string
    _count: SportActivityCountAggregateOutputType | null
    _avg: SportActivityAvgAggregateOutputType | null
    _sum: SportActivitySumAggregateOutputType | null
    _min: SportActivityMinAggregateOutputType | null
    _max: SportActivityMaxAggregateOutputType | null
  }

  type GetSportActivityGroupByPayload<T extends SportActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportActivityGroupByOutputType[P]>
            : GetScalarType<T[P], SportActivityGroupByOutputType[P]>
        }
      >
    >


  export type SportActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sportId?: boolean
    starttime?: boolean
    endtime?: boolean
    description?: boolean
    date?: boolean
    latitude?: boolean
    longitude?: boolean
    publicity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
    participants?: boolean | SportActivity$participantsArgs<ExtArgs>
    _count?: boolean | SportActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sportActivity"]>

  export type SportActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sportId?: boolean
    starttime?: boolean
    endtime?: boolean
    description?: boolean
    date?: boolean
    latitude?: boolean
    longitude?: boolean
    publicity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sportActivity"]>

  export type SportActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sportId?: boolean
    starttime?: boolean
    endtime?: boolean
    description?: boolean
    date?: boolean
    latitude?: boolean
    longitude?: boolean
    publicity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sportActivity"]>

  export type SportActivitySelectScalar = {
    id?: boolean
    userId?: boolean
    sportId?: boolean
    starttime?: boolean
    endtime?: boolean
    description?: boolean
    date?: boolean
    latitude?: boolean
    longitude?: boolean
    publicity?: boolean
  }

  export type SportActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sportId" | "starttime" | "endtime" | "description" | "date" | "latitude" | "longitude" | "publicity", ExtArgs["result"]["sportActivity"]>
  export type SportActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
    participants?: boolean | SportActivity$participantsArgs<ExtArgs>
    _count?: boolean | SportActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SportActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type SportActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }

  export type $SportActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SportActivity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sport: Prisma.$SportPayload<ExtArgs>
      participants: Prisma.$SportActivityParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      sportId: number
      starttime: string
      endtime: string
      description: string
      date: Date
      latitude: number | null
      longitude: number | null
      publicity: string
    }, ExtArgs["result"]["sportActivity"]>
    composites: {}
  }

  type SportActivityGetPayload<S extends boolean | null | undefined | SportActivityDefaultArgs> = $Result.GetResult<Prisma.$SportActivityPayload, S>

  type SportActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportActivityCountAggregateInputType | true
    }

  export interface SportActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SportActivity'], meta: { name: 'SportActivity' } }
    /**
     * Find zero or one SportActivity that matches the filter.
     * @param {SportActivityFindUniqueArgs} args - Arguments to find a SportActivity
     * @example
     * // Get one SportActivity
     * const sportActivity = await prisma.sportActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportActivityFindUniqueArgs>(args: SelectSubset<T, SportActivityFindUniqueArgs<ExtArgs>>): Prisma__SportActivityClient<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SportActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportActivityFindUniqueOrThrowArgs} args - Arguments to find a SportActivity
     * @example
     * // Get one SportActivity
     * const sportActivity = await prisma.sportActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, SportActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportActivityClient<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityFindFirstArgs} args - Arguments to find a SportActivity
     * @example
     * // Get one SportActivity
     * const sportActivity = await prisma.sportActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportActivityFindFirstArgs>(args?: SelectSubset<T, SportActivityFindFirstArgs<ExtArgs>>): Prisma__SportActivityClient<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityFindFirstOrThrowArgs} args - Arguments to find a SportActivity
     * @example
     * // Get one SportActivity
     * const sportActivity = await prisma.sportActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, SportActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportActivityClient<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SportActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SportActivities
     * const sportActivities = await prisma.sportActivity.findMany()
     * 
     * // Get first 10 SportActivities
     * const sportActivities = await prisma.sportActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportActivityWithIdOnly = await prisma.sportActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportActivityFindManyArgs>(args?: SelectSubset<T, SportActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SportActivity.
     * @param {SportActivityCreateArgs} args - Arguments to create a SportActivity.
     * @example
     * // Create one SportActivity
     * const SportActivity = await prisma.sportActivity.create({
     *   data: {
     *     // ... data to create a SportActivity
     *   }
     * })
     * 
     */
    create<T extends SportActivityCreateArgs>(args: SelectSubset<T, SportActivityCreateArgs<ExtArgs>>): Prisma__SportActivityClient<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SportActivities.
     * @param {SportActivityCreateManyArgs} args - Arguments to create many SportActivities.
     * @example
     * // Create many SportActivities
     * const sportActivity = await prisma.sportActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportActivityCreateManyArgs>(args?: SelectSubset<T, SportActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SportActivities and returns the data saved in the database.
     * @param {SportActivityCreateManyAndReturnArgs} args - Arguments to create many SportActivities.
     * @example
     * // Create many SportActivities
     * const sportActivity = await prisma.sportActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SportActivities and only return the `id`
     * const sportActivityWithIdOnly = await prisma.sportActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, SportActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SportActivity.
     * @param {SportActivityDeleteArgs} args - Arguments to delete one SportActivity.
     * @example
     * // Delete one SportActivity
     * const SportActivity = await prisma.sportActivity.delete({
     *   where: {
     *     // ... filter to delete one SportActivity
     *   }
     * })
     * 
     */
    delete<T extends SportActivityDeleteArgs>(args: SelectSubset<T, SportActivityDeleteArgs<ExtArgs>>): Prisma__SportActivityClient<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SportActivity.
     * @param {SportActivityUpdateArgs} args - Arguments to update one SportActivity.
     * @example
     * // Update one SportActivity
     * const sportActivity = await prisma.sportActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportActivityUpdateArgs>(args: SelectSubset<T, SportActivityUpdateArgs<ExtArgs>>): Prisma__SportActivityClient<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SportActivities.
     * @param {SportActivityDeleteManyArgs} args - Arguments to filter SportActivities to delete.
     * @example
     * // Delete a few SportActivities
     * const { count } = await prisma.sportActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportActivityDeleteManyArgs>(args?: SelectSubset<T, SportActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SportActivities
     * const sportActivity = await prisma.sportActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportActivityUpdateManyArgs>(args: SelectSubset<T, SportActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportActivities and returns the data updated in the database.
     * @param {SportActivityUpdateManyAndReturnArgs} args - Arguments to update many SportActivities.
     * @example
     * // Update many SportActivities
     * const sportActivity = await prisma.sportActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SportActivities and only return the `id`
     * const sportActivityWithIdOnly = await prisma.sportActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SportActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, SportActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SportActivity.
     * @param {SportActivityUpsertArgs} args - Arguments to update or create a SportActivity.
     * @example
     * // Update or create a SportActivity
     * const sportActivity = await prisma.sportActivity.upsert({
     *   create: {
     *     // ... data to create a SportActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SportActivity we want to update
     *   }
     * })
     */
    upsert<T extends SportActivityUpsertArgs>(args: SelectSubset<T, SportActivityUpsertArgs<ExtArgs>>): Prisma__SportActivityClient<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SportActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityCountArgs} args - Arguments to filter SportActivities to count.
     * @example
     * // Count the number of SportActivities
     * const count = await prisma.sportActivity.count({
     *   where: {
     *     // ... the filter for the SportActivities we want to count
     *   }
     * })
    **/
    count<T extends SportActivityCountArgs>(
      args?: Subset<T, SportActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SportActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SportActivityAggregateArgs>(args: Subset<T, SportActivityAggregateArgs>): Prisma.PrismaPromise<GetSportActivityAggregateType<T>>

    /**
     * Group by SportActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SportActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportActivityGroupByArgs['orderBy'] }
        : { orderBy?: SportActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SportActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SportActivity model
   */
  readonly fields: SportActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SportActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends SportActivity$participantsArgs<ExtArgs> = {}>(args?: Subset<T, SportActivity$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SportActivity model
   */
  interface SportActivityFieldRefs {
    readonly id: FieldRef<"SportActivity", 'Int'>
    readonly userId: FieldRef<"SportActivity", 'Int'>
    readonly sportId: FieldRef<"SportActivity", 'Int'>
    readonly starttime: FieldRef<"SportActivity", 'String'>
    readonly endtime: FieldRef<"SportActivity", 'String'>
    readonly description: FieldRef<"SportActivity", 'String'>
    readonly date: FieldRef<"SportActivity", 'DateTime'>
    readonly latitude: FieldRef<"SportActivity", 'Float'>
    readonly longitude: FieldRef<"SportActivity", 'Float'>
    readonly publicity: FieldRef<"SportActivity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SportActivity findUnique
   */
  export type SportActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
    /**
     * Filter, which SportActivity to fetch.
     */
    where: SportActivityWhereUniqueInput
  }

  /**
   * SportActivity findUniqueOrThrow
   */
  export type SportActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
    /**
     * Filter, which SportActivity to fetch.
     */
    where: SportActivityWhereUniqueInput
  }

  /**
   * SportActivity findFirst
   */
  export type SportActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
    /**
     * Filter, which SportActivity to fetch.
     */
    where?: SportActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportActivities to fetch.
     */
    orderBy?: SportActivityOrderByWithRelationInput | SportActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportActivities.
     */
    cursor?: SportActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportActivities.
     */
    distinct?: SportActivityScalarFieldEnum | SportActivityScalarFieldEnum[]
  }

  /**
   * SportActivity findFirstOrThrow
   */
  export type SportActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
    /**
     * Filter, which SportActivity to fetch.
     */
    where?: SportActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportActivities to fetch.
     */
    orderBy?: SportActivityOrderByWithRelationInput | SportActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportActivities.
     */
    cursor?: SportActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportActivities.
     */
    distinct?: SportActivityScalarFieldEnum | SportActivityScalarFieldEnum[]
  }

  /**
   * SportActivity findMany
   */
  export type SportActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
    /**
     * Filter, which SportActivities to fetch.
     */
    where?: SportActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportActivities to fetch.
     */
    orderBy?: SportActivityOrderByWithRelationInput | SportActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SportActivities.
     */
    cursor?: SportActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportActivities.
     */
    skip?: number
    distinct?: SportActivityScalarFieldEnum | SportActivityScalarFieldEnum[]
  }

  /**
   * SportActivity create
   */
  export type SportActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a SportActivity.
     */
    data: XOR<SportActivityCreateInput, SportActivityUncheckedCreateInput>
  }

  /**
   * SportActivity createMany
   */
  export type SportActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SportActivities.
     */
    data: SportActivityCreateManyInput | SportActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SportActivity createManyAndReturn
   */
  export type SportActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * The data used to create many SportActivities.
     */
    data: SportActivityCreateManyInput | SportActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SportActivity update
   */
  export type SportActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a SportActivity.
     */
    data: XOR<SportActivityUpdateInput, SportActivityUncheckedUpdateInput>
    /**
     * Choose, which SportActivity to update.
     */
    where: SportActivityWhereUniqueInput
  }

  /**
   * SportActivity updateMany
   */
  export type SportActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SportActivities.
     */
    data: XOR<SportActivityUpdateManyMutationInput, SportActivityUncheckedUpdateManyInput>
    /**
     * Filter which SportActivities to update
     */
    where?: SportActivityWhereInput
    /**
     * Limit how many SportActivities to update.
     */
    limit?: number
  }

  /**
   * SportActivity updateManyAndReturn
   */
  export type SportActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * The data used to update SportActivities.
     */
    data: XOR<SportActivityUpdateManyMutationInput, SportActivityUncheckedUpdateManyInput>
    /**
     * Filter which SportActivities to update
     */
    where?: SportActivityWhereInput
    /**
     * Limit how many SportActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SportActivity upsert
   */
  export type SportActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the SportActivity to update in case it exists.
     */
    where: SportActivityWhereUniqueInput
    /**
     * In case the SportActivity found by the `where` argument doesn't exist, create a new SportActivity with this data.
     */
    create: XOR<SportActivityCreateInput, SportActivityUncheckedCreateInput>
    /**
     * In case the SportActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportActivityUpdateInput, SportActivityUncheckedUpdateInput>
  }

  /**
   * SportActivity delete
   */
  export type SportActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
    /**
     * Filter which SportActivity to delete.
     */
    where: SportActivityWhereUniqueInput
  }

  /**
   * SportActivity deleteMany
   */
  export type SportActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportActivities to delete
     */
    where?: SportActivityWhereInput
    /**
     * Limit how many SportActivities to delete.
     */
    limit?: number
  }

  /**
   * SportActivity.participants
   */
  export type SportActivity$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
    where?: SportActivityParticipantWhereInput
    orderBy?: SportActivityParticipantOrderByWithRelationInput | SportActivityParticipantOrderByWithRelationInput[]
    cursor?: SportActivityParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SportActivityParticipantScalarFieldEnum | SportActivityParticipantScalarFieldEnum[]
  }

  /**
   * SportActivity without action
   */
  export type SportActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivity
     */
    select?: SportActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivity
     */
    omit?: SportActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityInclude<ExtArgs> | null
  }


  /**
   * Model SportActivityParticipant
   */

  export type AggregateSportActivityParticipant = {
    _count: SportActivityParticipantCountAggregateOutputType | null
    _avg: SportActivityParticipantAvgAggregateOutputType | null
    _sum: SportActivityParticipantSumAggregateOutputType | null
    _min: SportActivityParticipantMinAggregateOutputType | null
    _max: SportActivityParticipantMaxAggregateOutputType | null
  }

  export type SportActivityParticipantAvgAggregateOutputType = {
    id: number | null
    activityId: number | null
    userId: number | null
  }

  export type SportActivityParticipantSumAggregateOutputType = {
    id: number | null
    activityId: number | null
    userId: number | null
  }

  export type SportActivityParticipantMinAggregateOutputType = {
    id: number | null
    activityId: number | null
    userId: number | null
    role: string | null
  }

  export type SportActivityParticipantMaxAggregateOutputType = {
    id: number | null
    activityId: number | null
    userId: number | null
    role: string | null
  }

  export type SportActivityParticipantCountAggregateOutputType = {
    id: number
    activityId: number
    userId: number
    role: number
    _all: number
  }


  export type SportActivityParticipantAvgAggregateInputType = {
    id?: true
    activityId?: true
    userId?: true
  }

  export type SportActivityParticipantSumAggregateInputType = {
    id?: true
    activityId?: true
    userId?: true
  }

  export type SportActivityParticipantMinAggregateInputType = {
    id?: true
    activityId?: true
    userId?: true
    role?: true
  }

  export type SportActivityParticipantMaxAggregateInputType = {
    id?: true
    activityId?: true
    userId?: true
    role?: true
  }

  export type SportActivityParticipantCountAggregateInputType = {
    id?: true
    activityId?: true
    userId?: true
    role?: true
    _all?: true
  }

  export type SportActivityParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportActivityParticipant to aggregate.
     */
    where?: SportActivityParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportActivityParticipants to fetch.
     */
    orderBy?: SportActivityParticipantOrderByWithRelationInput | SportActivityParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportActivityParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportActivityParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportActivityParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SportActivityParticipants
    **/
    _count?: true | SportActivityParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportActivityParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportActivityParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportActivityParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportActivityParticipantMaxAggregateInputType
  }

  export type GetSportActivityParticipantAggregateType<T extends SportActivityParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateSportActivityParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSportActivityParticipant[P]>
      : GetScalarType<T[P], AggregateSportActivityParticipant[P]>
  }




  export type SportActivityParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportActivityParticipantWhereInput
    orderBy?: SportActivityParticipantOrderByWithAggregationInput | SportActivityParticipantOrderByWithAggregationInput[]
    by: SportActivityParticipantScalarFieldEnum[] | SportActivityParticipantScalarFieldEnum
    having?: SportActivityParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportActivityParticipantCountAggregateInputType | true
    _avg?: SportActivityParticipantAvgAggregateInputType
    _sum?: SportActivityParticipantSumAggregateInputType
    _min?: SportActivityParticipantMinAggregateInputType
    _max?: SportActivityParticipantMaxAggregateInputType
  }

  export type SportActivityParticipantGroupByOutputType = {
    id: number
    activityId: number
    userId: number
    role: string
    _count: SportActivityParticipantCountAggregateOutputType | null
    _avg: SportActivityParticipantAvgAggregateOutputType | null
    _sum: SportActivityParticipantSumAggregateOutputType | null
    _min: SportActivityParticipantMinAggregateOutputType | null
    _max: SportActivityParticipantMaxAggregateOutputType | null
  }

  type GetSportActivityParticipantGroupByPayload<T extends SportActivityParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportActivityParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportActivityParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportActivityParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], SportActivityParticipantGroupByOutputType[P]>
        }
      >
    >


  export type SportActivityParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityId?: boolean
    userId?: boolean
    role?: boolean
    activity?: boolean | SportActivityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sportActivityParticipant"]>

  export type SportActivityParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityId?: boolean
    userId?: boolean
    role?: boolean
    activity?: boolean | SportActivityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sportActivityParticipant"]>

  export type SportActivityParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityId?: boolean
    userId?: boolean
    role?: boolean
    activity?: boolean | SportActivityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sportActivityParticipant"]>

  export type SportActivityParticipantSelectScalar = {
    id?: boolean
    activityId?: boolean
    userId?: boolean
    role?: boolean
  }

  export type SportActivityParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activityId" | "userId" | "role", ExtArgs["result"]["sportActivityParticipant"]>
  export type SportActivityParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | SportActivityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SportActivityParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | SportActivityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SportActivityParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | SportActivityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SportActivityParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SportActivityParticipant"
    objects: {
      activity: Prisma.$SportActivityPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      activityId: number
      userId: number
      role: string
    }, ExtArgs["result"]["sportActivityParticipant"]>
    composites: {}
  }

  type SportActivityParticipantGetPayload<S extends boolean | null | undefined | SportActivityParticipantDefaultArgs> = $Result.GetResult<Prisma.$SportActivityParticipantPayload, S>

  type SportActivityParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportActivityParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportActivityParticipantCountAggregateInputType | true
    }

  export interface SportActivityParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SportActivityParticipant'], meta: { name: 'SportActivityParticipant' } }
    /**
     * Find zero or one SportActivityParticipant that matches the filter.
     * @param {SportActivityParticipantFindUniqueArgs} args - Arguments to find a SportActivityParticipant
     * @example
     * // Get one SportActivityParticipant
     * const sportActivityParticipant = await prisma.sportActivityParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportActivityParticipantFindUniqueArgs>(args: SelectSubset<T, SportActivityParticipantFindUniqueArgs<ExtArgs>>): Prisma__SportActivityParticipantClient<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SportActivityParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportActivityParticipantFindUniqueOrThrowArgs} args - Arguments to find a SportActivityParticipant
     * @example
     * // Get one SportActivityParticipant
     * const sportActivityParticipant = await prisma.sportActivityParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportActivityParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, SportActivityParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportActivityParticipantClient<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportActivityParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityParticipantFindFirstArgs} args - Arguments to find a SportActivityParticipant
     * @example
     * // Get one SportActivityParticipant
     * const sportActivityParticipant = await prisma.sportActivityParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportActivityParticipantFindFirstArgs>(args?: SelectSubset<T, SportActivityParticipantFindFirstArgs<ExtArgs>>): Prisma__SportActivityParticipantClient<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportActivityParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityParticipantFindFirstOrThrowArgs} args - Arguments to find a SportActivityParticipant
     * @example
     * // Get one SportActivityParticipant
     * const sportActivityParticipant = await prisma.sportActivityParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportActivityParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, SportActivityParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportActivityParticipantClient<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SportActivityParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SportActivityParticipants
     * const sportActivityParticipants = await prisma.sportActivityParticipant.findMany()
     * 
     * // Get first 10 SportActivityParticipants
     * const sportActivityParticipants = await prisma.sportActivityParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportActivityParticipantWithIdOnly = await prisma.sportActivityParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportActivityParticipantFindManyArgs>(args?: SelectSubset<T, SportActivityParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SportActivityParticipant.
     * @param {SportActivityParticipantCreateArgs} args - Arguments to create a SportActivityParticipant.
     * @example
     * // Create one SportActivityParticipant
     * const SportActivityParticipant = await prisma.sportActivityParticipant.create({
     *   data: {
     *     // ... data to create a SportActivityParticipant
     *   }
     * })
     * 
     */
    create<T extends SportActivityParticipantCreateArgs>(args: SelectSubset<T, SportActivityParticipantCreateArgs<ExtArgs>>): Prisma__SportActivityParticipantClient<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SportActivityParticipants.
     * @param {SportActivityParticipantCreateManyArgs} args - Arguments to create many SportActivityParticipants.
     * @example
     * // Create many SportActivityParticipants
     * const sportActivityParticipant = await prisma.sportActivityParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportActivityParticipantCreateManyArgs>(args?: SelectSubset<T, SportActivityParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SportActivityParticipants and returns the data saved in the database.
     * @param {SportActivityParticipantCreateManyAndReturnArgs} args - Arguments to create many SportActivityParticipants.
     * @example
     * // Create many SportActivityParticipants
     * const sportActivityParticipant = await prisma.sportActivityParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SportActivityParticipants and only return the `id`
     * const sportActivityParticipantWithIdOnly = await prisma.sportActivityParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportActivityParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, SportActivityParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SportActivityParticipant.
     * @param {SportActivityParticipantDeleteArgs} args - Arguments to delete one SportActivityParticipant.
     * @example
     * // Delete one SportActivityParticipant
     * const SportActivityParticipant = await prisma.sportActivityParticipant.delete({
     *   where: {
     *     // ... filter to delete one SportActivityParticipant
     *   }
     * })
     * 
     */
    delete<T extends SportActivityParticipantDeleteArgs>(args: SelectSubset<T, SportActivityParticipantDeleteArgs<ExtArgs>>): Prisma__SportActivityParticipantClient<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SportActivityParticipant.
     * @param {SportActivityParticipantUpdateArgs} args - Arguments to update one SportActivityParticipant.
     * @example
     * // Update one SportActivityParticipant
     * const sportActivityParticipant = await prisma.sportActivityParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportActivityParticipantUpdateArgs>(args: SelectSubset<T, SportActivityParticipantUpdateArgs<ExtArgs>>): Prisma__SportActivityParticipantClient<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SportActivityParticipants.
     * @param {SportActivityParticipantDeleteManyArgs} args - Arguments to filter SportActivityParticipants to delete.
     * @example
     * // Delete a few SportActivityParticipants
     * const { count } = await prisma.sportActivityParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportActivityParticipantDeleteManyArgs>(args?: SelectSubset<T, SportActivityParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportActivityParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SportActivityParticipants
     * const sportActivityParticipant = await prisma.sportActivityParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportActivityParticipantUpdateManyArgs>(args: SelectSubset<T, SportActivityParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportActivityParticipants and returns the data updated in the database.
     * @param {SportActivityParticipantUpdateManyAndReturnArgs} args - Arguments to update many SportActivityParticipants.
     * @example
     * // Update many SportActivityParticipants
     * const sportActivityParticipant = await prisma.sportActivityParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SportActivityParticipants and only return the `id`
     * const sportActivityParticipantWithIdOnly = await prisma.sportActivityParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SportActivityParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, SportActivityParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SportActivityParticipant.
     * @param {SportActivityParticipantUpsertArgs} args - Arguments to update or create a SportActivityParticipant.
     * @example
     * // Update or create a SportActivityParticipant
     * const sportActivityParticipant = await prisma.sportActivityParticipant.upsert({
     *   create: {
     *     // ... data to create a SportActivityParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SportActivityParticipant we want to update
     *   }
     * })
     */
    upsert<T extends SportActivityParticipantUpsertArgs>(args: SelectSubset<T, SportActivityParticipantUpsertArgs<ExtArgs>>): Prisma__SportActivityParticipantClient<$Result.GetResult<Prisma.$SportActivityParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SportActivityParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityParticipantCountArgs} args - Arguments to filter SportActivityParticipants to count.
     * @example
     * // Count the number of SportActivityParticipants
     * const count = await prisma.sportActivityParticipant.count({
     *   where: {
     *     // ... the filter for the SportActivityParticipants we want to count
     *   }
     * })
    **/
    count<T extends SportActivityParticipantCountArgs>(
      args?: Subset<T, SportActivityParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportActivityParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SportActivityParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SportActivityParticipantAggregateArgs>(args: Subset<T, SportActivityParticipantAggregateArgs>): Prisma.PrismaPromise<GetSportActivityParticipantAggregateType<T>>

    /**
     * Group by SportActivityParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportActivityParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SportActivityParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportActivityParticipantGroupByArgs['orderBy'] }
        : { orderBy?: SportActivityParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SportActivityParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportActivityParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SportActivityParticipant model
   */
  readonly fields: SportActivityParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SportActivityParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportActivityParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends SportActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportActivityDefaultArgs<ExtArgs>>): Prisma__SportActivityClient<$Result.GetResult<Prisma.$SportActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SportActivityParticipant model
   */
  interface SportActivityParticipantFieldRefs {
    readonly id: FieldRef<"SportActivityParticipant", 'Int'>
    readonly activityId: FieldRef<"SportActivityParticipant", 'Int'>
    readonly userId: FieldRef<"SportActivityParticipant", 'Int'>
    readonly role: FieldRef<"SportActivityParticipant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SportActivityParticipant findUnique
   */
  export type SportActivityParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SportActivityParticipant to fetch.
     */
    where: SportActivityParticipantWhereUniqueInput
  }

  /**
   * SportActivityParticipant findUniqueOrThrow
   */
  export type SportActivityParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SportActivityParticipant to fetch.
     */
    where: SportActivityParticipantWhereUniqueInput
  }

  /**
   * SportActivityParticipant findFirst
   */
  export type SportActivityParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SportActivityParticipant to fetch.
     */
    where?: SportActivityParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportActivityParticipants to fetch.
     */
    orderBy?: SportActivityParticipantOrderByWithRelationInput | SportActivityParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportActivityParticipants.
     */
    cursor?: SportActivityParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportActivityParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportActivityParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportActivityParticipants.
     */
    distinct?: SportActivityParticipantScalarFieldEnum | SportActivityParticipantScalarFieldEnum[]
  }

  /**
   * SportActivityParticipant findFirstOrThrow
   */
  export type SportActivityParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SportActivityParticipant to fetch.
     */
    where?: SportActivityParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportActivityParticipants to fetch.
     */
    orderBy?: SportActivityParticipantOrderByWithRelationInput | SportActivityParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportActivityParticipants.
     */
    cursor?: SportActivityParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportActivityParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportActivityParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportActivityParticipants.
     */
    distinct?: SportActivityParticipantScalarFieldEnum | SportActivityParticipantScalarFieldEnum[]
  }

  /**
   * SportActivityParticipant findMany
   */
  export type SportActivityParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SportActivityParticipants to fetch.
     */
    where?: SportActivityParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportActivityParticipants to fetch.
     */
    orderBy?: SportActivityParticipantOrderByWithRelationInput | SportActivityParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SportActivityParticipants.
     */
    cursor?: SportActivityParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportActivityParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportActivityParticipants.
     */
    skip?: number
    distinct?: SportActivityParticipantScalarFieldEnum | SportActivityParticipantScalarFieldEnum[]
  }

  /**
   * SportActivityParticipant create
   */
  export type SportActivityParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a SportActivityParticipant.
     */
    data: XOR<SportActivityParticipantCreateInput, SportActivityParticipantUncheckedCreateInput>
  }

  /**
   * SportActivityParticipant createMany
   */
  export type SportActivityParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SportActivityParticipants.
     */
    data: SportActivityParticipantCreateManyInput | SportActivityParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SportActivityParticipant createManyAndReturn
   */
  export type SportActivityParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many SportActivityParticipants.
     */
    data: SportActivityParticipantCreateManyInput | SportActivityParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SportActivityParticipant update
   */
  export type SportActivityParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a SportActivityParticipant.
     */
    data: XOR<SportActivityParticipantUpdateInput, SportActivityParticipantUncheckedUpdateInput>
    /**
     * Choose, which SportActivityParticipant to update.
     */
    where: SportActivityParticipantWhereUniqueInput
  }

  /**
   * SportActivityParticipant updateMany
   */
  export type SportActivityParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SportActivityParticipants.
     */
    data: XOR<SportActivityParticipantUpdateManyMutationInput, SportActivityParticipantUncheckedUpdateManyInput>
    /**
     * Filter which SportActivityParticipants to update
     */
    where?: SportActivityParticipantWhereInput
    /**
     * Limit how many SportActivityParticipants to update.
     */
    limit?: number
  }

  /**
   * SportActivityParticipant updateManyAndReturn
   */
  export type SportActivityParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * The data used to update SportActivityParticipants.
     */
    data: XOR<SportActivityParticipantUpdateManyMutationInput, SportActivityParticipantUncheckedUpdateManyInput>
    /**
     * Filter which SportActivityParticipants to update
     */
    where?: SportActivityParticipantWhereInput
    /**
     * Limit how many SportActivityParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SportActivityParticipant upsert
   */
  export type SportActivityParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the SportActivityParticipant to update in case it exists.
     */
    where: SportActivityParticipantWhereUniqueInput
    /**
     * In case the SportActivityParticipant found by the `where` argument doesn't exist, create a new SportActivityParticipant with this data.
     */
    create: XOR<SportActivityParticipantCreateInput, SportActivityParticipantUncheckedCreateInput>
    /**
     * In case the SportActivityParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportActivityParticipantUpdateInput, SportActivityParticipantUncheckedUpdateInput>
  }

  /**
   * SportActivityParticipant delete
   */
  export type SportActivityParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
    /**
     * Filter which SportActivityParticipant to delete.
     */
    where: SportActivityParticipantWhereUniqueInput
  }

  /**
   * SportActivityParticipant deleteMany
   */
  export type SportActivityParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportActivityParticipants to delete
     */
    where?: SportActivityParticipantWhereInput
    /**
     * Limit how many SportActivityParticipants to delete.
     */
    limit?: number
  }

  /**
   * SportActivityParticipant without action
   */
  export type SportActivityParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportActivityParticipant
     */
    select?: SportActivityParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportActivityParticipant
     */
    omit?: SportActivityParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportActivityParticipantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    bio: 'bio',
    image: 'image',
    followersCount: 'followersCount',
    followingCount: 'followingCount'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    text: 'text',
    likes: 'likes',
    postId: 'postId',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const HashtagScalarFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type HashtagScalarFieldEnum = (typeof HashtagScalarFieldEnum)[keyof typeof HashtagScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    authorId: 'authorId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PostCommentScalarFieldEnum: {
    postId: 'postId',
    commentId: 'commentId'
  };

  export type PostCommentScalarFieldEnum = (typeof PostCommentScalarFieldEnum)[keyof typeof PostCommentScalarFieldEnum]


  export const PostHashtagScalarFieldEnum: {
    postId: 'postId',
    hashtagId: 'hashtagId'
  };

  export type PostHashtagScalarFieldEnum = (typeof PostHashtagScalarFieldEnum)[keyof typeof PostHashtagScalarFieldEnum]


  export const UserLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt'
  };

  export type UserLikeScalarFieldEnum = (typeof UserLikeScalarFieldEnum)[keyof typeof UserLikeScalarFieldEnum]


  export const UserFollowScalarFieldEnum: {
    id: 'id',
    followerId: 'followerId',
    followingId: 'followingId',
    createdAt: 'createdAt'
  };

  export type UserFollowScalarFieldEnum = (typeof UserFollowScalarFieldEnum)[keyof typeof UserFollowScalarFieldEnum]


  export const UserSportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sportId: 'sportId',
    sportRankId: 'sportRankId',
    startedAt: 'startedAt',
    color: 'color'
  };

  export type UserSportScalarFieldEnum = (typeof UserSportScalarFieldEnum)[keyof typeof UserSportScalarFieldEnum]


  export const SportScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SportScalarFieldEnum = (typeof SportScalarFieldEnum)[keyof typeof SportScalarFieldEnum]


  export const SportRanksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type SportRanksScalarFieldEnum = (typeof SportRanksScalarFieldEnum)[keyof typeof SportRanksScalarFieldEnum]


  export const SportActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sportId: 'sportId',
    starttime: 'starttime',
    endtime: 'endtime',
    description: 'description',
    date: 'date',
    latitude: 'latitude',
    longitude: 'longitude',
    publicity: 'publicity'
  };

  export type SportActivityScalarFieldEnum = (typeof SportActivityScalarFieldEnum)[keyof typeof SportActivityScalarFieldEnum]


  export const SportActivityParticipantScalarFieldEnum: {
    id: 'id',
    activityId: 'activityId',
    userId: 'userId',
    role: 'role'
  };

  export type SportActivityParticipantScalarFieldEnum = (typeof SportActivityParticipantScalarFieldEnum)[keyof typeof SportActivityParticipantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    bio?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    followersCount?: IntFilter<"User"> | number
    followingCount?: IntFilter<"User"> | number
    userLikes?: UserLikeListRelationFilter
    followers?: UserFollowListRelationFilter
    following?: UserFollowListRelationFilter
    sports?: UserSportListRelationFilter
    activities?: SportActivityListRelationFilter
    activityParticipations?: SportActivityParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
    userLikes?: UserLikeOrderByRelationAggregateInput
    followers?: UserFollowOrderByRelationAggregateInput
    following?: UserFollowOrderByRelationAggregateInput
    sports?: UserSportOrderByRelationAggregateInput
    activities?: SportActivityOrderByRelationAggregateInput
    activityParticipations?: SportActivityParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    bio?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    followersCount?: IntFilter<"User"> | number
    followingCount?: IntFilter<"User"> | number
    userLikes?: UserLikeListRelationFilter
    followers?: UserFollowListRelationFilter
    following?: UserFollowListRelationFilter
    sports?: UserSportListRelationFilter
    activities?: SportActivityListRelationFilter
    activityParticipations?: SportActivityParticipantListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    bio?: StringWithAggregatesFilter<"User"> | string
    image?: StringWithAggregatesFilter<"User"> | string
    followersCount?: IntWithAggregatesFilter<"User"> | number
    followingCount?: IntWithAggregatesFilter<"User"> | number
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    created_at?: DateTimeFilter<"Post"> | Date | string
    text?: StringFilter<"Post"> | string
    likes?: IntFilter<"Post"> | number
    postId?: IntNullableFilter<"Post"> | number | null
    authorId?: IntFilter<"Post"> | number
    postHashtags?: PostHashtagListRelationFilter
    userLikes?: UserLikeListRelationFilter
    PostComment?: PostCommentListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    postId?: SortOrderInput | SortOrder
    authorId?: SortOrder
    postHashtags?: PostHashtagOrderByRelationAggregateInput
    userLikes?: UserLikeOrderByRelationAggregateInput
    PostComment?: PostCommentOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    created_at?: DateTimeFilter<"Post"> | Date | string
    text?: StringFilter<"Post"> | string
    likes?: IntFilter<"Post"> | number
    postId?: IntNullableFilter<"Post"> | number | null
    authorId?: IntFilter<"Post"> | number
    postHashtags?: PostHashtagListRelationFilter
    userLikes?: UserLikeListRelationFilter
    PostComment?: PostCommentListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    postId?: SortOrderInput | SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    created_at?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    text?: StringWithAggregatesFilter<"Post"> | string
    likes?: IntWithAggregatesFilter<"Post"> | number
    postId?: IntNullableWithAggregatesFilter<"Post"> | number | null
    authorId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type HashtagWhereInput = {
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    id?: IntFilter<"Hashtag"> | number
    text?: StringFilter<"Hashtag"> | string
    postHashtags?: PostHashtagListRelationFilter
  }

  export type HashtagOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    postHashtags?: PostHashtagOrderByRelationAggregateInput
  }

  export type HashtagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    text?: string
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    postHashtags?: PostHashtagListRelationFilter
  }, "id" | "text">

  export type HashtagOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    _count?: HashtagCountOrderByAggregateInput
    _avg?: HashtagAvgOrderByAggregateInput
    _max?: HashtagMaxOrderByAggregateInput
    _min?: HashtagMinOrderByAggregateInput
    _sum?: HashtagSumOrderByAggregateInput
  }

  export type HashtagScalarWhereWithAggregatesInput = {
    AND?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    OR?: HashtagScalarWhereWithAggregatesInput[]
    NOT?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hashtag"> | number
    text?: StringWithAggregatesFilter<"Hashtag"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    authorId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    PostComment?: PostCommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    PostComment?: PostCommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    text?: StringFilter<"Comment"> | string
    authorId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    PostComment?: PostCommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    text?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: IntWithAggregatesFilter<"Comment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type PostCommentWhereInput = {
    AND?: PostCommentWhereInput | PostCommentWhereInput[]
    OR?: PostCommentWhereInput[]
    NOT?: PostCommentWhereInput | PostCommentWhereInput[]
    postId?: IntFilter<"PostComment"> | number
    commentId?: IntFilter<"PostComment"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }

  export type PostCommentOrderByWithRelationInput = {
    postId?: SortOrder
    commentId?: SortOrder
    post?: PostOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type PostCommentWhereUniqueInput = Prisma.AtLeast<{
    postId_commentId?: PostCommentPostIdCommentIdCompoundUniqueInput
    AND?: PostCommentWhereInput | PostCommentWhereInput[]
    OR?: PostCommentWhereInput[]
    NOT?: PostCommentWhereInput | PostCommentWhereInput[]
    postId?: IntFilter<"PostComment"> | number
    commentId?: IntFilter<"PostComment"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }, "postId_commentId">

  export type PostCommentOrderByWithAggregationInput = {
    postId?: SortOrder
    commentId?: SortOrder
    _count?: PostCommentCountOrderByAggregateInput
    _avg?: PostCommentAvgOrderByAggregateInput
    _max?: PostCommentMaxOrderByAggregateInput
    _min?: PostCommentMinOrderByAggregateInput
    _sum?: PostCommentSumOrderByAggregateInput
  }

  export type PostCommentScalarWhereWithAggregatesInput = {
    AND?: PostCommentScalarWhereWithAggregatesInput | PostCommentScalarWhereWithAggregatesInput[]
    OR?: PostCommentScalarWhereWithAggregatesInput[]
    NOT?: PostCommentScalarWhereWithAggregatesInput | PostCommentScalarWhereWithAggregatesInput[]
    postId?: IntWithAggregatesFilter<"PostComment"> | number
    commentId?: IntWithAggregatesFilter<"PostComment"> | number
  }

  export type PostHashtagWhereInput = {
    AND?: PostHashtagWhereInput | PostHashtagWhereInput[]
    OR?: PostHashtagWhereInput[]
    NOT?: PostHashtagWhereInput | PostHashtagWhereInput[]
    postId?: IntFilter<"PostHashtag"> | number
    hashtagId?: IntFilter<"PostHashtag"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    hashtag?: XOR<HashtagScalarRelationFilter, HashtagWhereInput>
  }

  export type PostHashtagOrderByWithRelationInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
    post?: PostOrderByWithRelationInput
    hashtag?: HashtagOrderByWithRelationInput
  }

  export type PostHashtagWhereUniqueInput = Prisma.AtLeast<{
    postId_hashtagId?: PostHashtagPostIdHashtagIdCompoundUniqueInput
    AND?: PostHashtagWhereInput | PostHashtagWhereInput[]
    OR?: PostHashtagWhereInput[]
    NOT?: PostHashtagWhereInput | PostHashtagWhereInput[]
    postId?: IntFilter<"PostHashtag"> | number
    hashtagId?: IntFilter<"PostHashtag"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    hashtag?: XOR<HashtagScalarRelationFilter, HashtagWhereInput>
  }, "postId_hashtagId">

  export type PostHashtagOrderByWithAggregationInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
    _count?: PostHashtagCountOrderByAggregateInput
    _avg?: PostHashtagAvgOrderByAggregateInput
    _max?: PostHashtagMaxOrderByAggregateInput
    _min?: PostHashtagMinOrderByAggregateInput
    _sum?: PostHashtagSumOrderByAggregateInput
  }

  export type PostHashtagScalarWhereWithAggregatesInput = {
    AND?: PostHashtagScalarWhereWithAggregatesInput | PostHashtagScalarWhereWithAggregatesInput[]
    OR?: PostHashtagScalarWhereWithAggregatesInput[]
    NOT?: PostHashtagScalarWhereWithAggregatesInput | PostHashtagScalarWhereWithAggregatesInput[]
    postId?: IntWithAggregatesFilter<"PostHashtag"> | number
    hashtagId?: IntWithAggregatesFilter<"PostHashtag"> | number
  }

  export type UserLikeWhereInput = {
    AND?: UserLikeWhereInput | UserLikeWhereInput[]
    OR?: UserLikeWhereInput[]
    NOT?: UserLikeWhereInput | UserLikeWhereInput[]
    id?: IntFilter<"UserLike"> | number
    userId?: IntFilter<"UserLike"> | number
    postId?: IntFilter<"UserLike"> | number
    createdAt?: DateTimeFilter<"UserLike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type UserLikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type UserLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_postId?: UserLikeUserIdPostIdCompoundUniqueInput
    AND?: UserLikeWhereInput | UserLikeWhereInput[]
    OR?: UserLikeWhereInput[]
    NOT?: UserLikeWhereInput | UserLikeWhereInput[]
    userId?: IntFilter<"UserLike"> | number
    postId?: IntFilter<"UserLike"> | number
    createdAt?: DateTimeFilter<"UserLike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "userId_postId">

  export type UserLikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    _count?: UserLikeCountOrderByAggregateInput
    _avg?: UserLikeAvgOrderByAggregateInput
    _max?: UserLikeMaxOrderByAggregateInput
    _min?: UserLikeMinOrderByAggregateInput
    _sum?: UserLikeSumOrderByAggregateInput
  }

  export type UserLikeScalarWhereWithAggregatesInput = {
    AND?: UserLikeScalarWhereWithAggregatesInput | UserLikeScalarWhereWithAggregatesInput[]
    OR?: UserLikeScalarWhereWithAggregatesInput[]
    NOT?: UserLikeScalarWhereWithAggregatesInput | UserLikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserLike"> | number
    userId?: IntWithAggregatesFilter<"UserLike"> | number
    postId?: IntWithAggregatesFilter<"UserLike"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserLike"> | Date | string
  }

  export type UserFollowWhereInput = {
    AND?: UserFollowWhereInput | UserFollowWhereInput[]
    OR?: UserFollowWhereInput[]
    NOT?: UserFollowWhereInput | UserFollowWhereInput[]
    id?: IntFilter<"UserFollow"> | number
    followerId?: IntFilter<"UserFollow"> | number
    followingId?: IntFilter<"UserFollow"> | number
    createdAt?: DateTimeFilter<"UserFollow"> | Date | string
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
    following?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserFollowOrderByWithRelationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    follower?: UserOrderByWithRelationInput
    following?: UserOrderByWithRelationInput
  }

  export type UserFollowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    followerId_followingId?: UserFollowFollowerIdFollowingIdCompoundUniqueInput
    AND?: UserFollowWhereInput | UserFollowWhereInput[]
    OR?: UserFollowWhereInput[]
    NOT?: UserFollowWhereInput | UserFollowWhereInput[]
    followerId?: IntFilter<"UserFollow"> | number
    followingId?: IntFilter<"UserFollow"> | number
    createdAt?: DateTimeFilter<"UserFollow"> | Date | string
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
    following?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "followerId_followingId">

  export type UserFollowOrderByWithAggregationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    _count?: UserFollowCountOrderByAggregateInput
    _avg?: UserFollowAvgOrderByAggregateInput
    _max?: UserFollowMaxOrderByAggregateInput
    _min?: UserFollowMinOrderByAggregateInput
    _sum?: UserFollowSumOrderByAggregateInput
  }

  export type UserFollowScalarWhereWithAggregatesInput = {
    AND?: UserFollowScalarWhereWithAggregatesInput | UserFollowScalarWhereWithAggregatesInput[]
    OR?: UserFollowScalarWhereWithAggregatesInput[]
    NOT?: UserFollowScalarWhereWithAggregatesInput | UserFollowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserFollow"> | number
    followerId?: IntWithAggregatesFilter<"UserFollow"> | number
    followingId?: IntWithAggregatesFilter<"UserFollow"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserFollow"> | Date | string
  }

  export type UserSportWhereInput = {
    AND?: UserSportWhereInput | UserSportWhereInput[]
    OR?: UserSportWhereInput[]
    NOT?: UserSportWhereInput | UserSportWhereInput[]
    id?: IntFilter<"UserSport"> | number
    userId?: IntFilter<"UserSport"> | number
    sportId?: IntFilter<"UserSport"> | number
    sportRankId?: IntFilter<"UserSport"> | number
    startedAt?: DateTimeFilter<"UserSport"> | Date | string
    color?: StringNullableFilter<"UserSport"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
    sportrank?: XOR<SportRanksScalarRelationFilter, SportRanksWhereInput>
  }

  export type UserSportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    sportRankId?: SortOrder
    startedAt?: SortOrder
    color?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    sport?: SportOrderByWithRelationInput
    sportrank?: SportRanksOrderByWithRelationInput
  }

  export type UserSportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_sportId?: UserSportUserIdSportIdCompoundUniqueInput
    AND?: UserSportWhereInput | UserSportWhereInput[]
    OR?: UserSportWhereInput[]
    NOT?: UserSportWhereInput | UserSportWhereInput[]
    userId?: IntFilter<"UserSport"> | number
    sportId?: IntFilter<"UserSport"> | number
    sportRankId?: IntFilter<"UserSport"> | number
    startedAt?: DateTimeFilter<"UserSport"> | Date | string
    color?: StringNullableFilter<"UserSport"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
    sportrank?: XOR<SportRanksScalarRelationFilter, SportRanksWhereInput>
  }, "id" | "userId_sportId">

  export type UserSportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    sportRankId?: SortOrder
    startedAt?: SortOrder
    color?: SortOrderInput | SortOrder
    _count?: UserSportCountOrderByAggregateInput
    _avg?: UserSportAvgOrderByAggregateInput
    _max?: UserSportMaxOrderByAggregateInput
    _min?: UserSportMinOrderByAggregateInput
    _sum?: UserSportSumOrderByAggregateInput
  }

  export type UserSportScalarWhereWithAggregatesInput = {
    AND?: UserSportScalarWhereWithAggregatesInput | UserSportScalarWhereWithAggregatesInput[]
    OR?: UserSportScalarWhereWithAggregatesInput[]
    NOT?: UserSportScalarWhereWithAggregatesInput | UserSportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSport"> | number
    userId?: IntWithAggregatesFilter<"UserSport"> | number
    sportId?: IntWithAggregatesFilter<"UserSport"> | number
    sportRankId?: IntWithAggregatesFilter<"UserSport"> | number
    startedAt?: DateTimeWithAggregatesFilter<"UserSport"> | Date | string
    color?: StringNullableWithAggregatesFilter<"UserSport"> | string | null
  }

  export type SportWhereInput = {
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    id?: IntFilter<"Sport"> | number
    name?: StringFilter<"Sport"> | string
    users?: UserSportListRelationFilter
    activities?: SportActivityListRelationFilter
  }

  export type SportOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserSportOrderByRelationAggregateInput
    activities?: SportActivityOrderByRelationAggregateInput
  }

  export type SportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    users?: UserSportListRelationFilter
    activities?: SportActivityListRelationFilter
  }, "id" | "name">

  export type SportOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SportCountOrderByAggregateInput
    _avg?: SportAvgOrderByAggregateInput
    _max?: SportMaxOrderByAggregateInput
    _min?: SportMinOrderByAggregateInput
    _sum?: SportSumOrderByAggregateInput
  }

  export type SportScalarWhereWithAggregatesInput = {
    AND?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    OR?: SportScalarWhereWithAggregatesInput[]
    NOT?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sport"> | number
    name?: StringWithAggregatesFilter<"Sport"> | string
  }

  export type SportRanksWhereInput = {
    AND?: SportRanksWhereInput | SportRanksWhereInput[]
    OR?: SportRanksWhereInput[]
    NOT?: SportRanksWhereInput | SportRanksWhereInput[]
    id?: IntFilter<"SportRanks"> | number
    name?: StringFilter<"SportRanks"> | string
    description?: StringFilter<"SportRanks"> | string
    users?: UserSportListRelationFilter
  }

  export type SportRanksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    users?: UserSportOrderByRelationAggregateInput
  }

  export type SportRanksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SportRanksWhereInput | SportRanksWhereInput[]
    OR?: SportRanksWhereInput[]
    NOT?: SportRanksWhereInput | SportRanksWhereInput[]
    description?: StringFilter<"SportRanks"> | string
    users?: UserSportListRelationFilter
  }, "id" | "name">

  export type SportRanksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: SportRanksCountOrderByAggregateInput
    _avg?: SportRanksAvgOrderByAggregateInput
    _max?: SportRanksMaxOrderByAggregateInput
    _min?: SportRanksMinOrderByAggregateInput
    _sum?: SportRanksSumOrderByAggregateInput
  }

  export type SportRanksScalarWhereWithAggregatesInput = {
    AND?: SportRanksScalarWhereWithAggregatesInput | SportRanksScalarWhereWithAggregatesInput[]
    OR?: SportRanksScalarWhereWithAggregatesInput[]
    NOT?: SportRanksScalarWhereWithAggregatesInput | SportRanksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SportRanks"> | number
    name?: StringWithAggregatesFilter<"SportRanks"> | string
    description?: StringWithAggregatesFilter<"SportRanks"> | string
  }

  export type SportActivityWhereInput = {
    AND?: SportActivityWhereInput | SportActivityWhereInput[]
    OR?: SportActivityWhereInput[]
    NOT?: SportActivityWhereInput | SportActivityWhereInput[]
    id?: IntFilter<"SportActivity"> | number
    userId?: IntFilter<"SportActivity"> | number
    sportId?: IntFilter<"SportActivity"> | number
    starttime?: StringFilter<"SportActivity"> | string
    endtime?: StringFilter<"SportActivity"> | string
    description?: StringFilter<"SportActivity"> | string
    date?: DateTimeFilter<"SportActivity"> | Date | string
    latitude?: FloatNullableFilter<"SportActivity"> | number | null
    longitude?: FloatNullableFilter<"SportActivity"> | number | null
    publicity?: StringFilter<"SportActivity"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
    participants?: SportActivityParticipantListRelationFilter
  }

  export type SportActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    starttime?: SortOrder
    endtime?: SortOrder
    description?: SortOrder
    date?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    publicity?: SortOrder
    user?: UserOrderByWithRelationInput
    sport?: SportOrderByWithRelationInput
    participants?: SportActivityParticipantOrderByRelationAggregateInput
  }

  export type SportActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SportActivityWhereInput | SportActivityWhereInput[]
    OR?: SportActivityWhereInput[]
    NOT?: SportActivityWhereInput | SportActivityWhereInput[]
    userId?: IntFilter<"SportActivity"> | number
    sportId?: IntFilter<"SportActivity"> | number
    starttime?: StringFilter<"SportActivity"> | string
    endtime?: StringFilter<"SportActivity"> | string
    description?: StringFilter<"SportActivity"> | string
    date?: DateTimeFilter<"SportActivity"> | Date | string
    latitude?: FloatNullableFilter<"SportActivity"> | number | null
    longitude?: FloatNullableFilter<"SportActivity"> | number | null
    publicity?: StringFilter<"SportActivity"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
    participants?: SportActivityParticipantListRelationFilter
  }, "id">

  export type SportActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    starttime?: SortOrder
    endtime?: SortOrder
    description?: SortOrder
    date?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    publicity?: SortOrder
    _count?: SportActivityCountOrderByAggregateInput
    _avg?: SportActivityAvgOrderByAggregateInput
    _max?: SportActivityMaxOrderByAggregateInput
    _min?: SportActivityMinOrderByAggregateInput
    _sum?: SportActivitySumOrderByAggregateInput
  }

  export type SportActivityScalarWhereWithAggregatesInput = {
    AND?: SportActivityScalarWhereWithAggregatesInput | SportActivityScalarWhereWithAggregatesInput[]
    OR?: SportActivityScalarWhereWithAggregatesInput[]
    NOT?: SportActivityScalarWhereWithAggregatesInput | SportActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SportActivity"> | number
    userId?: IntWithAggregatesFilter<"SportActivity"> | number
    sportId?: IntWithAggregatesFilter<"SportActivity"> | number
    starttime?: StringWithAggregatesFilter<"SportActivity"> | string
    endtime?: StringWithAggregatesFilter<"SportActivity"> | string
    description?: StringWithAggregatesFilter<"SportActivity"> | string
    date?: DateTimeWithAggregatesFilter<"SportActivity"> | Date | string
    latitude?: FloatNullableWithAggregatesFilter<"SportActivity"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"SportActivity"> | number | null
    publicity?: StringWithAggregatesFilter<"SportActivity"> | string
  }

  export type SportActivityParticipantWhereInput = {
    AND?: SportActivityParticipantWhereInput | SportActivityParticipantWhereInput[]
    OR?: SportActivityParticipantWhereInput[]
    NOT?: SportActivityParticipantWhereInput | SportActivityParticipantWhereInput[]
    id?: IntFilter<"SportActivityParticipant"> | number
    activityId?: IntFilter<"SportActivityParticipant"> | number
    userId?: IntFilter<"SportActivityParticipant"> | number
    role?: StringFilter<"SportActivityParticipant"> | string
    activity?: XOR<SportActivityScalarRelationFilter, SportActivityWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SportActivityParticipantOrderByWithRelationInput = {
    id?: SortOrder
    activityId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    activity?: SportActivityOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SportActivityParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SportActivityParticipantWhereInput | SportActivityParticipantWhereInput[]
    OR?: SportActivityParticipantWhereInput[]
    NOT?: SportActivityParticipantWhereInput | SportActivityParticipantWhereInput[]
    activityId?: IntFilter<"SportActivityParticipant"> | number
    userId?: IntFilter<"SportActivityParticipant"> | number
    role?: StringFilter<"SportActivityParticipant"> | string
    activity?: XOR<SportActivityScalarRelationFilter, SportActivityWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SportActivityParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    activityId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    _count?: SportActivityParticipantCountOrderByAggregateInput
    _avg?: SportActivityParticipantAvgOrderByAggregateInput
    _max?: SportActivityParticipantMaxOrderByAggregateInput
    _min?: SportActivityParticipantMinOrderByAggregateInput
    _sum?: SportActivityParticipantSumOrderByAggregateInput
  }

  export type SportActivityParticipantScalarWhereWithAggregatesInput = {
    AND?: SportActivityParticipantScalarWhereWithAggregatesInput | SportActivityParticipantScalarWhereWithAggregatesInput[]
    OR?: SportActivityParticipantScalarWhereWithAggregatesInput[]
    NOT?: SportActivityParticipantScalarWhereWithAggregatesInput | SportActivityParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SportActivityParticipant"> | number
    activityId?: IntWithAggregatesFilter<"SportActivityParticipant"> | number
    userId?: IntWithAggregatesFilter<"SportActivityParticipant"> | number
    role?: StringWithAggregatesFilter<"SportActivityParticipant"> | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeCreateNestedManyWithoutUserInput
    followers?: UserFollowCreateNestedManyWithoutFollowingInput
    following?: UserFollowCreateNestedManyWithoutFollowerInput
    sports?: UserSportCreateNestedManyWithoutUserInput
    activities?: SportActivityCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutUserInput
    followers?: UserFollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserFollowUncheckedCreateNestedManyWithoutFollowerInput
    sports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    activities?: SportActivityUncheckedCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUpdateManyWithoutUserNestedInput
    followers?: UserFollowUpdateManyWithoutFollowingNestedInput
    following?: UserFollowUpdateManyWithoutFollowerNestedInput
    sports?: UserSportUpdateManyWithoutUserNestedInput
    activities?: SportActivityUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUncheckedUpdateManyWithoutUserNestedInput
    followers?: UserFollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserFollowUncheckedUpdateManyWithoutFollowerNestedInput
    sports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    activities?: SportActivityUncheckedUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateInput = {
    created_at?: Date | string
    text: string
    likes?: number
    postId?: number | null
    authorId: number
    postHashtags?: PostHashtagCreateNestedManyWithoutPostInput
    userLikes?: UserLikeCreateNestedManyWithoutPostInput
    PostComment?: PostCommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    postId?: number | null
    authorId: number
    postHashtags?: PostHashtagUncheckedCreateNestedManyWithoutPostInput
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutPostInput
    PostComment?: PostCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUpdateManyWithoutPostNestedInput
    userLikes?: UserLikeUpdateManyWithoutPostNestedInput
    PostComment?: PostCommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUncheckedUpdateManyWithoutPostNestedInput
    userLikes?: UserLikeUncheckedUpdateManyWithoutPostNestedInput
    PostComment?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    postId?: number | null
    authorId: number
  }

  export type PostUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type HashtagCreateInput = {
    text: string
    postHashtags?: PostHashtagCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUncheckedCreateInput = {
    id?: number
    text: string
    postHashtags?: PostHashtagUncheckedCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    postHashtags?: PostHashtagUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    postHashtags?: PostHashtagUncheckedUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagCreateManyInput = {
    id?: number
    text: string
  }

  export type HashtagUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type HashtagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    text: string
    authorId: number
    createdAt?: Date | string
    PostComment?: PostCommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    text: string
    authorId: number
    createdAt?: Date | string
    PostComment?: PostCommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostComment?: PostCommentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostComment?: PostCommentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: number
    text: string
    authorId: number
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentCreateInput = {
    post: PostCreateNestedOneWithoutPostCommentInput
    comment: CommentCreateNestedOneWithoutPostCommentInput
  }

  export type PostCommentUncheckedCreateInput = {
    postId: number
    commentId: number
  }

  export type PostCommentUpdateInput = {
    post?: PostUpdateOneRequiredWithoutPostCommentNestedInput
    comment?: CommentUpdateOneRequiredWithoutPostCommentNestedInput
  }

  export type PostCommentUncheckedUpdateInput = {
    postId?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCommentCreateManyInput = {
    postId: number
    commentId: number
  }

  export type PostCommentUpdateManyMutationInput = {

  }

  export type PostCommentUncheckedUpdateManyInput = {
    postId?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type PostHashtagCreateInput = {
    post: PostCreateNestedOneWithoutPostHashtagsInput
    hashtag: HashtagCreateNestedOneWithoutPostHashtagsInput
  }

  export type PostHashtagUncheckedCreateInput = {
    postId: number
    hashtagId: number
  }

  export type PostHashtagUpdateInput = {
    post?: PostUpdateOneRequiredWithoutPostHashtagsNestedInput
    hashtag?: HashtagUpdateOneRequiredWithoutPostHashtagsNestedInput
  }

  export type PostHashtagUncheckedUpdateInput = {
    postId?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
  }

  export type PostHashtagCreateManyInput = {
    postId: number
    hashtagId: number
  }

  export type PostHashtagUpdateManyMutationInput = {

  }

  export type PostHashtagUncheckedUpdateManyInput = {
    postId?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
  }

  export type UserLikeCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserLikesInput
    post: PostCreateNestedOneWithoutUserLikesInput
  }

  export type UserLikeUncheckedCreateInput = {
    id?: number
    userId: number
    postId: number
    createdAt?: Date | string
  }

  export type UserLikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserLikesNestedInput
    post?: PostUpdateOneRequiredWithoutUserLikesNestedInput
  }

  export type UserLikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikeCreateManyInput = {
    id?: number
    userId: number
    postId: number
    createdAt?: Date | string
  }

  export type UserLikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowCreateInput = {
    createdAt?: Date | string
    follower: UserCreateNestedOneWithoutFollowingInput
    following: UserCreateNestedOneWithoutFollowersInput
  }

  export type UserFollowUncheckedCreateInput = {
    id?: number
    followerId: number
    followingId: number
    createdAt?: Date | string
  }

  export type UserFollowUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFollowingNestedInput
    following?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type UserFollowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowCreateManyInput = {
    id?: number
    followerId: number
    followingId: number
    createdAt?: Date | string
  }

  export type UserFollowUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportCreateInput = {
    startedAt?: Date | string
    color?: string | null
    user: UserCreateNestedOneWithoutSportsInput
    sport: SportCreateNestedOneWithoutUsersInput
    sportrank: SportRanksCreateNestedOneWithoutUsersInput
  }

  export type UserSportUncheckedCreateInput = {
    id?: number
    userId: number
    sportId: number
    sportRankId: number
    startedAt?: Date | string
    color?: string | null
  }

  export type UserSportUpdateInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSportsNestedInput
    sport?: SportUpdateOneRequiredWithoutUsersNestedInput
    sportrank?: SportRanksUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    sportRankId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSportCreateManyInput = {
    id?: number
    userId: number
    sportId: number
    sportRankId: number
    startedAt?: Date | string
    color?: string | null
  }

  export type UserSportUpdateManyMutationInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    sportRankId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportCreateInput = {
    name: string
    users?: UserSportCreateNestedManyWithoutSportInput
    activities?: SportActivityCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserSportUncheckedCreateNestedManyWithoutSportInput
    activities?: SportActivityUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserSportUpdateManyWithoutSportNestedInput
    activities?: SportActivityUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserSportUncheckedUpdateManyWithoutSportNestedInput
    activities?: SportActivityUncheckedUpdateManyWithoutSportNestedInput
  }

  export type SportCreateManyInput = {
    id?: number
    name: string
  }

  export type SportUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SportRanksCreateInput = {
    name: string
    description: string
    users?: UserSportCreateNestedManyWithoutSportrankInput
  }

  export type SportRanksUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    users?: UserSportUncheckedCreateNestedManyWithoutSportrankInput
  }

  export type SportRanksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    users?: UserSportUpdateManyWithoutSportrankNestedInput
  }

  export type SportRanksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    users?: UserSportUncheckedUpdateManyWithoutSportrankNestedInput
  }

  export type SportRanksCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type SportRanksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SportRanksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SportActivityCreateInput = {
    starttime: string
    endtime: string
    description: string
    date?: Date | string
    latitude?: number | null
    longitude?: number | null
    publicity?: string
    user: UserCreateNestedOneWithoutActivitiesInput
    sport: SportCreateNestedOneWithoutActivitiesInput
    participants?: SportActivityParticipantCreateNestedManyWithoutActivityInput
  }

  export type SportActivityUncheckedCreateInput = {
    id?: number
    userId: number
    sportId: number
    starttime: string
    endtime: string
    description: string
    date?: Date | string
    latitude?: number | null
    longitude?: number | null
    publicity?: string
    participants?: SportActivityParticipantUncheckedCreateNestedManyWithoutActivityInput
  }

  export type SportActivityUpdateInput = {
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
    sport?: SportUpdateOneRequiredWithoutActivitiesNestedInput
    participants?: SportActivityParticipantUpdateManyWithoutActivityNestedInput
  }

  export type SportActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
    participants?: SportActivityParticipantUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type SportActivityCreateManyInput = {
    id?: number
    userId: number
    sportId: number
    starttime: string
    endtime: string
    description: string
    date?: Date | string
    latitude?: number | null
    longitude?: number | null
    publicity?: string
  }

  export type SportActivityUpdateManyMutationInput = {
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
  }

  export type SportActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
  }

  export type SportActivityParticipantCreateInput = {
    role: string
    activity: SportActivityCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutActivityParticipationsInput
  }

  export type SportActivityParticipantUncheckedCreateInput = {
    id?: number
    activityId: number
    userId: number
    role: string
  }

  export type SportActivityParticipantUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    activity?: SportActivityUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutActivityParticipationsNestedInput
  }

  export type SportActivityParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type SportActivityParticipantCreateManyInput = {
    id?: number
    activityId: number
    userId: number
    role: string
  }

  export type SportActivityParticipantUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type SportActivityParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserLikeListRelationFilter = {
    every?: UserLikeWhereInput
    some?: UserLikeWhereInput
    none?: UserLikeWhereInput
  }

  export type UserFollowListRelationFilter = {
    every?: UserFollowWhereInput
    some?: UserFollowWhereInput
    none?: UserFollowWhereInput
  }

  export type UserSportListRelationFilter = {
    every?: UserSportWhereInput
    some?: UserSportWhereInput
    none?: UserSportWhereInput
  }

  export type SportActivityListRelationFilter = {
    every?: SportActivityWhereInput
    some?: SportActivityWhereInput
    none?: SportActivityWhereInput
  }

  export type SportActivityParticipantListRelationFilter = {
    every?: SportActivityParticipantWhereInput
    some?: SportActivityParticipantWhereInput
    none?: SportActivityParticipantWhereInput
  }

  export type UserLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SportActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SportActivityParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PostHashtagListRelationFilter = {
    every?: PostHashtagWhereInput
    some?: PostHashtagWhereInput
    none?: PostHashtagWhereInput
  }

  export type PostCommentListRelationFilter = {
    every?: PostCommentWhereInput
    some?: PostCommentWhereInput
    none?: PostCommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostHashtagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type HashtagCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type HashtagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashtagMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type HashtagMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type HashtagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentScalarRelationFilter = {
    is?: CommentWhereInput
    isNot?: CommentWhereInput
  }

  export type PostCommentPostIdCommentIdCompoundUniqueInput = {
    postId: number
    commentId: number
  }

  export type PostCommentCountOrderByAggregateInput = {
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type PostCommentAvgOrderByAggregateInput = {
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type PostCommentMaxOrderByAggregateInput = {
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type PostCommentMinOrderByAggregateInput = {
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type PostCommentSumOrderByAggregateInput = {
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type HashtagScalarRelationFilter = {
    is?: HashtagWhereInput
    isNot?: HashtagWhereInput
  }

  export type PostHashtagPostIdHashtagIdCompoundUniqueInput = {
    postId: number
    hashtagId: number
  }

  export type PostHashtagCountOrderByAggregateInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type PostHashtagAvgOrderByAggregateInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type PostHashtagMaxOrderByAggregateInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type PostHashtagMinOrderByAggregateInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type PostHashtagSumOrderByAggregateInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserLikeUserIdPostIdCompoundUniqueInput = {
    userId: number
    postId: number
  }

  export type UserLikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type UserLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLikeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type UserFollowFollowerIdFollowingIdCompoundUniqueInput = {
    followerId: number
    followingId: number
  }

  export type UserFollowCountOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFollowAvgOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type UserFollowMaxOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFollowMinOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFollowSumOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SportScalarRelationFilter = {
    is?: SportWhereInput
    isNot?: SportWhereInput
  }

  export type SportRanksScalarRelationFilter = {
    is?: SportRanksWhereInput
    isNot?: SportRanksWhereInput
  }

  export type UserSportUserIdSportIdCompoundUniqueInput = {
    userId: number
    sportId: number
  }

  export type UserSportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    sportRankId?: SortOrder
    startedAt?: SortOrder
    color?: SortOrder
  }

  export type UserSportAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    sportRankId?: SortOrder
  }

  export type UserSportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    sportRankId?: SortOrder
    startedAt?: SortOrder
    color?: SortOrder
  }

  export type UserSportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    sportRankId?: SortOrder
    startedAt?: SortOrder
    color?: SortOrder
  }

  export type UserSportSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    sportRankId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SportCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SportMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SportMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SportRanksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SportRanksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SportRanksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SportRanksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SportRanksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SportActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    starttime?: SortOrder
    endtime?: SortOrder
    description?: SortOrder
    date?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    publicity?: SortOrder
  }

  export type SportActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type SportActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    starttime?: SortOrder
    endtime?: SortOrder
    description?: SortOrder
    date?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    publicity?: SortOrder
  }

  export type SportActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    starttime?: SortOrder
    endtime?: SortOrder
    description?: SortOrder
    date?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    publicity?: SortOrder
  }

  export type SportActivitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SportActivityScalarRelationFilter = {
    is?: SportActivityWhereInput
    isNot?: SportActivityWhereInput
  }

  export type SportActivityParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type SportActivityParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    userId?: SortOrder
  }

  export type SportActivityParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type SportActivityParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type SportActivityParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    userId?: SortOrder
  }

  export type UserLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLikeCreateWithoutUserInput, UserLikeUncheckedCreateWithoutUserInput> | UserLikeCreateWithoutUserInput[] | UserLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutUserInput | UserLikeCreateOrConnectWithoutUserInput[]
    createMany?: UserLikeCreateManyUserInputEnvelope
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
  }

  export type UserFollowCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UserFollowCreateWithoutFollowingInput, UserFollowUncheckedCreateWithoutFollowingInput> | UserFollowCreateWithoutFollowingInput[] | UserFollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutFollowingInput | UserFollowCreateOrConnectWithoutFollowingInput[]
    createMany?: UserFollowCreateManyFollowingInputEnvelope
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
  }

  export type UserFollowCreateNestedManyWithoutFollowerInput = {
    create?: XOR<UserFollowCreateWithoutFollowerInput, UserFollowUncheckedCreateWithoutFollowerInput> | UserFollowCreateWithoutFollowerInput[] | UserFollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutFollowerInput | UserFollowCreateOrConnectWithoutFollowerInput[]
    createMany?: UserFollowCreateManyFollowerInputEnvelope
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
  }

  export type UserSportCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type SportActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<SportActivityCreateWithoutUserInput, SportActivityUncheckedCreateWithoutUserInput> | SportActivityCreateWithoutUserInput[] | SportActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SportActivityCreateOrConnectWithoutUserInput | SportActivityCreateOrConnectWithoutUserInput[]
    createMany?: SportActivityCreateManyUserInputEnvelope
    connect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
  }

  export type SportActivityParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<SportActivityParticipantCreateWithoutUserInput, SportActivityParticipantUncheckedCreateWithoutUserInput> | SportActivityParticipantCreateWithoutUserInput[] | SportActivityParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SportActivityParticipantCreateOrConnectWithoutUserInput | SportActivityParticipantCreateOrConnectWithoutUserInput[]
    createMany?: SportActivityParticipantCreateManyUserInputEnvelope
    connect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
  }

  export type UserLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLikeCreateWithoutUserInput, UserLikeUncheckedCreateWithoutUserInput> | UserLikeCreateWithoutUserInput[] | UserLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutUserInput | UserLikeCreateOrConnectWithoutUserInput[]
    createMany?: UserLikeCreateManyUserInputEnvelope
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
  }

  export type UserFollowUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UserFollowCreateWithoutFollowingInput, UserFollowUncheckedCreateWithoutFollowingInput> | UserFollowCreateWithoutFollowingInput[] | UserFollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutFollowingInput | UserFollowCreateOrConnectWithoutFollowingInput[]
    createMany?: UserFollowCreateManyFollowingInputEnvelope
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
  }

  export type UserFollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<UserFollowCreateWithoutFollowerInput, UserFollowUncheckedCreateWithoutFollowerInput> | UserFollowCreateWithoutFollowerInput[] | UserFollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutFollowerInput | UserFollowCreateOrConnectWithoutFollowerInput[]
    createMany?: UserFollowCreateManyFollowerInputEnvelope
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
  }

  export type UserSportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type SportActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SportActivityCreateWithoutUserInput, SportActivityUncheckedCreateWithoutUserInput> | SportActivityCreateWithoutUserInput[] | SportActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SportActivityCreateOrConnectWithoutUserInput | SportActivityCreateOrConnectWithoutUserInput[]
    createMany?: SportActivityCreateManyUserInputEnvelope
    connect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
  }

  export type SportActivityParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SportActivityParticipantCreateWithoutUserInput, SportActivityParticipantUncheckedCreateWithoutUserInput> | SportActivityParticipantCreateWithoutUserInput[] | SportActivityParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SportActivityParticipantCreateOrConnectWithoutUserInput | SportActivityParticipantCreateOrConnectWithoutUserInput[]
    createMany?: SportActivityParticipantCreateManyUserInputEnvelope
    connect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLikeCreateWithoutUserInput, UserLikeUncheckedCreateWithoutUserInput> | UserLikeCreateWithoutUserInput[] | UserLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutUserInput | UserLikeCreateOrConnectWithoutUserInput[]
    upsert?: UserLikeUpsertWithWhereUniqueWithoutUserInput | UserLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLikeCreateManyUserInputEnvelope
    set?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    disconnect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    delete?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    update?: UserLikeUpdateWithWhereUniqueWithoutUserInput | UserLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLikeUpdateManyWithWhereWithoutUserInput | UserLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLikeScalarWhereInput | UserLikeScalarWhereInput[]
  }

  export type UserFollowUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UserFollowCreateWithoutFollowingInput, UserFollowUncheckedCreateWithoutFollowingInput> | UserFollowCreateWithoutFollowingInput[] | UserFollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutFollowingInput | UserFollowCreateOrConnectWithoutFollowingInput[]
    upsert?: UserFollowUpsertWithWhereUniqueWithoutFollowingInput | UserFollowUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: UserFollowCreateManyFollowingInputEnvelope
    set?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    disconnect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    delete?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    update?: UserFollowUpdateWithWhereUniqueWithoutFollowingInput | UserFollowUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UserFollowUpdateManyWithWhereWithoutFollowingInput | UserFollowUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
  }

  export type UserFollowUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<UserFollowCreateWithoutFollowerInput, UserFollowUncheckedCreateWithoutFollowerInput> | UserFollowCreateWithoutFollowerInput[] | UserFollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutFollowerInput | UserFollowCreateOrConnectWithoutFollowerInput[]
    upsert?: UserFollowUpsertWithWhereUniqueWithoutFollowerInput | UserFollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: UserFollowCreateManyFollowerInputEnvelope
    set?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    disconnect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    delete?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    update?: UserFollowUpdateWithWhereUniqueWithoutFollowerInput | UserFollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: UserFollowUpdateManyWithWhereWithoutFollowerInput | UserFollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
  }

  export type UserSportUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutUserInput | UserSportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutUserInput | UserSportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutUserInput | UserSportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type SportActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<SportActivityCreateWithoutUserInput, SportActivityUncheckedCreateWithoutUserInput> | SportActivityCreateWithoutUserInput[] | SportActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SportActivityCreateOrConnectWithoutUserInput | SportActivityCreateOrConnectWithoutUserInput[]
    upsert?: SportActivityUpsertWithWhereUniqueWithoutUserInput | SportActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SportActivityCreateManyUserInputEnvelope
    set?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    disconnect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    delete?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    connect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    update?: SportActivityUpdateWithWhereUniqueWithoutUserInput | SportActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SportActivityUpdateManyWithWhereWithoutUserInput | SportActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SportActivityScalarWhereInput | SportActivityScalarWhereInput[]
  }

  export type SportActivityParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<SportActivityParticipantCreateWithoutUserInput, SportActivityParticipantUncheckedCreateWithoutUserInput> | SportActivityParticipantCreateWithoutUserInput[] | SportActivityParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SportActivityParticipantCreateOrConnectWithoutUserInput | SportActivityParticipantCreateOrConnectWithoutUserInput[]
    upsert?: SportActivityParticipantUpsertWithWhereUniqueWithoutUserInput | SportActivityParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SportActivityParticipantCreateManyUserInputEnvelope
    set?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    disconnect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    delete?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    connect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    update?: SportActivityParticipantUpdateWithWhereUniqueWithoutUserInput | SportActivityParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SportActivityParticipantUpdateManyWithWhereWithoutUserInput | SportActivityParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SportActivityParticipantScalarWhereInput | SportActivityParticipantScalarWhereInput[]
  }

  export type UserLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLikeCreateWithoutUserInput, UserLikeUncheckedCreateWithoutUserInput> | UserLikeCreateWithoutUserInput[] | UserLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutUserInput | UserLikeCreateOrConnectWithoutUserInput[]
    upsert?: UserLikeUpsertWithWhereUniqueWithoutUserInput | UserLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLikeCreateManyUserInputEnvelope
    set?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    disconnect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    delete?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    update?: UserLikeUpdateWithWhereUniqueWithoutUserInput | UserLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLikeUpdateManyWithWhereWithoutUserInput | UserLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLikeScalarWhereInput | UserLikeScalarWhereInput[]
  }

  export type UserFollowUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UserFollowCreateWithoutFollowingInput, UserFollowUncheckedCreateWithoutFollowingInput> | UserFollowCreateWithoutFollowingInput[] | UserFollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutFollowingInput | UserFollowCreateOrConnectWithoutFollowingInput[]
    upsert?: UserFollowUpsertWithWhereUniqueWithoutFollowingInput | UserFollowUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: UserFollowCreateManyFollowingInputEnvelope
    set?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    disconnect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    delete?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    update?: UserFollowUpdateWithWhereUniqueWithoutFollowingInput | UserFollowUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UserFollowUpdateManyWithWhereWithoutFollowingInput | UserFollowUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
  }

  export type UserFollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<UserFollowCreateWithoutFollowerInput, UserFollowUncheckedCreateWithoutFollowerInput> | UserFollowCreateWithoutFollowerInput[] | UserFollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutFollowerInput | UserFollowCreateOrConnectWithoutFollowerInput[]
    upsert?: UserFollowUpsertWithWhereUniqueWithoutFollowerInput | UserFollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: UserFollowCreateManyFollowerInputEnvelope
    set?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    disconnect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    delete?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    update?: UserFollowUpdateWithWhereUniqueWithoutFollowerInput | UserFollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: UserFollowUpdateManyWithWhereWithoutFollowerInput | UserFollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
  }

  export type UserSportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutUserInput | UserSportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutUserInput | UserSportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutUserInput | UserSportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type SportActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SportActivityCreateWithoutUserInput, SportActivityUncheckedCreateWithoutUserInput> | SportActivityCreateWithoutUserInput[] | SportActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SportActivityCreateOrConnectWithoutUserInput | SportActivityCreateOrConnectWithoutUserInput[]
    upsert?: SportActivityUpsertWithWhereUniqueWithoutUserInput | SportActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SportActivityCreateManyUserInputEnvelope
    set?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    disconnect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    delete?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    connect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    update?: SportActivityUpdateWithWhereUniqueWithoutUserInput | SportActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SportActivityUpdateManyWithWhereWithoutUserInput | SportActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SportActivityScalarWhereInput | SportActivityScalarWhereInput[]
  }

  export type SportActivityParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SportActivityParticipantCreateWithoutUserInput, SportActivityParticipantUncheckedCreateWithoutUserInput> | SportActivityParticipantCreateWithoutUserInput[] | SportActivityParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SportActivityParticipantCreateOrConnectWithoutUserInput | SportActivityParticipantCreateOrConnectWithoutUserInput[]
    upsert?: SportActivityParticipantUpsertWithWhereUniqueWithoutUserInput | SportActivityParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SportActivityParticipantCreateManyUserInputEnvelope
    set?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    disconnect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    delete?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    connect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    update?: SportActivityParticipantUpdateWithWhereUniqueWithoutUserInput | SportActivityParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SportActivityParticipantUpdateManyWithWhereWithoutUserInput | SportActivityParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SportActivityParticipantScalarWhereInput | SportActivityParticipantScalarWhereInput[]
  }

  export type PostHashtagCreateNestedManyWithoutPostInput = {
    create?: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput> | PostHashtagCreateWithoutPostInput[] | PostHashtagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutPostInput | PostHashtagCreateOrConnectWithoutPostInput[]
    createMany?: PostHashtagCreateManyPostInputEnvelope
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
  }

  export type UserLikeCreateNestedManyWithoutPostInput = {
    create?: XOR<UserLikeCreateWithoutPostInput, UserLikeUncheckedCreateWithoutPostInput> | UserLikeCreateWithoutPostInput[] | UserLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutPostInput | UserLikeCreateOrConnectWithoutPostInput[]
    createMany?: UserLikeCreateManyPostInputEnvelope
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
  }

  export type PostCommentCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type PostHashtagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput> | PostHashtagCreateWithoutPostInput[] | PostHashtagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutPostInput | PostHashtagCreateOrConnectWithoutPostInput[]
    createMany?: PostHashtagCreateManyPostInputEnvelope
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
  }

  export type UserLikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<UserLikeCreateWithoutPostInput, UserLikeUncheckedCreateWithoutPostInput> | UserLikeCreateWithoutPostInput[] | UserLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutPostInput | UserLikeCreateOrConnectWithoutPostInput[]
    createMany?: UserLikeCreateManyPostInputEnvelope
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
  }

  export type PostCommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostHashtagUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput> | PostHashtagCreateWithoutPostInput[] | PostHashtagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutPostInput | PostHashtagCreateOrConnectWithoutPostInput[]
    upsert?: PostHashtagUpsertWithWhereUniqueWithoutPostInput | PostHashtagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostHashtagCreateManyPostInputEnvelope
    set?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    disconnect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    delete?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    update?: PostHashtagUpdateWithWhereUniqueWithoutPostInput | PostHashtagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostHashtagUpdateManyWithWhereWithoutPostInput | PostHashtagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
  }

  export type UserLikeUpdateManyWithoutPostNestedInput = {
    create?: XOR<UserLikeCreateWithoutPostInput, UserLikeUncheckedCreateWithoutPostInput> | UserLikeCreateWithoutPostInput[] | UserLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutPostInput | UserLikeCreateOrConnectWithoutPostInput[]
    upsert?: UserLikeUpsertWithWhereUniqueWithoutPostInput | UserLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: UserLikeCreateManyPostInputEnvelope
    set?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    disconnect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    delete?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    update?: UserLikeUpdateWithWhereUniqueWithoutPostInput | UserLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: UserLikeUpdateManyWithWhereWithoutPostInput | UserLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: UserLikeScalarWhereInput | UserLikeScalarWhereInput[]
  }

  export type PostCommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutPostInput | PostCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutPostInput | PostCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutPostInput | PostCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type PostHashtagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput> | PostHashtagCreateWithoutPostInput[] | PostHashtagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutPostInput | PostHashtagCreateOrConnectWithoutPostInput[]
    upsert?: PostHashtagUpsertWithWhereUniqueWithoutPostInput | PostHashtagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostHashtagCreateManyPostInputEnvelope
    set?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    disconnect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    delete?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    update?: PostHashtagUpdateWithWhereUniqueWithoutPostInput | PostHashtagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostHashtagUpdateManyWithWhereWithoutPostInput | PostHashtagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
  }

  export type UserLikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<UserLikeCreateWithoutPostInput, UserLikeUncheckedCreateWithoutPostInput> | UserLikeCreateWithoutPostInput[] | UserLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutPostInput | UserLikeCreateOrConnectWithoutPostInput[]
    upsert?: UserLikeUpsertWithWhereUniqueWithoutPostInput | UserLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: UserLikeCreateManyPostInputEnvelope
    set?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    disconnect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    delete?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
    update?: UserLikeUpdateWithWhereUniqueWithoutPostInput | UserLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: UserLikeUpdateManyWithWhereWithoutPostInput | UserLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: UserLikeScalarWhereInput | UserLikeScalarWhereInput[]
  }

  export type PostCommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutPostInput | PostCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutPostInput | PostCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutPostInput | PostCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type PostHashtagCreateNestedManyWithoutHashtagInput = {
    create?: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput> | PostHashtagCreateWithoutHashtagInput[] | PostHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutHashtagInput | PostHashtagCreateOrConnectWithoutHashtagInput[]
    createMany?: PostHashtagCreateManyHashtagInputEnvelope
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
  }

  export type PostHashtagUncheckedCreateNestedManyWithoutHashtagInput = {
    create?: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput> | PostHashtagCreateWithoutHashtagInput[] | PostHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutHashtagInput | PostHashtagCreateOrConnectWithoutHashtagInput[]
    createMany?: PostHashtagCreateManyHashtagInputEnvelope
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
  }

  export type PostHashtagUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput> | PostHashtagCreateWithoutHashtagInput[] | PostHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutHashtagInput | PostHashtagCreateOrConnectWithoutHashtagInput[]
    upsert?: PostHashtagUpsertWithWhereUniqueWithoutHashtagInput | PostHashtagUpsertWithWhereUniqueWithoutHashtagInput[]
    createMany?: PostHashtagCreateManyHashtagInputEnvelope
    set?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    disconnect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    delete?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    update?: PostHashtagUpdateWithWhereUniqueWithoutHashtagInput | PostHashtagUpdateWithWhereUniqueWithoutHashtagInput[]
    updateMany?: PostHashtagUpdateManyWithWhereWithoutHashtagInput | PostHashtagUpdateManyWithWhereWithoutHashtagInput[]
    deleteMany?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
  }

  export type PostHashtagUncheckedUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput> | PostHashtagCreateWithoutHashtagInput[] | PostHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutHashtagInput | PostHashtagCreateOrConnectWithoutHashtagInput[]
    upsert?: PostHashtagUpsertWithWhereUniqueWithoutHashtagInput | PostHashtagUpsertWithWhereUniqueWithoutHashtagInput[]
    createMany?: PostHashtagCreateManyHashtagInputEnvelope
    set?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    disconnect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    delete?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    update?: PostHashtagUpdateWithWhereUniqueWithoutHashtagInput | PostHashtagUpdateWithWhereUniqueWithoutHashtagInput[]
    updateMany?: PostHashtagUpdateManyWithWhereWithoutHashtagInput | PostHashtagUpdateManyWithWhereWithoutHashtagInput[]
    deleteMany?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
  }

  export type PostCommentCreateNestedManyWithoutCommentInput = {
    create?: XOR<PostCommentCreateWithoutCommentInput, PostCommentUncheckedCreateWithoutCommentInput> | PostCommentCreateWithoutCommentInput[] | PostCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutCommentInput | PostCommentCreateOrConnectWithoutCommentInput[]
    createMany?: PostCommentCreateManyCommentInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type PostCommentUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<PostCommentCreateWithoutCommentInput, PostCommentUncheckedCreateWithoutCommentInput> | PostCommentCreateWithoutCommentInput[] | PostCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutCommentInput | PostCommentCreateOrConnectWithoutCommentInput[]
    createMany?: PostCommentCreateManyCommentInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type PostCommentUpdateManyWithoutCommentNestedInput = {
    create?: XOR<PostCommentCreateWithoutCommentInput, PostCommentUncheckedCreateWithoutCommentInput> | PostCommentCreateWithoutCommentInput[] | PostCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutCommentInput | PostCommentCreateOrConnectWithoutCommentInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutCommentInput | PostCommentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: PostCommentCreateManyCommentInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutCommentInput | PostCommentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutCommentInput | PostCommentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type PostCommentUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<PostCommentCreateWithoutCommentInput, PostCommentUncheckedCreateWithoutCommentInput> | PostCommentCreateWithoutCommentInput[] | PostCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutCommentInput | PostCommentCreateOrConnectWithoutCommentInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutCommentInput | PostCommentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: PostCommentCreateManyCommentInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutCommentInput | PostCommentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutCommentInput | PostCommentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutPostCommentInput = {
    create?: XOR<PostCreateWithoutPostCommentInput, PostUncheckedCreateWithoutPostCommentInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostCommentInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutPostCommentInput = {
    create?: XOR<CommentCreateWithoutPostCommentInput, CommentUncheckedCreateWithoutPostCommentInput>
    connectOrCreate?: CommentCreateOrConnectWithoutPostCommentInput
    connect?: CommentWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutPostCommentNestedInput = {
    create?: XOR<PostCreateWithoutPostCommentInput, PostUncheckedCreateWithoutPostCommentInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostCommentInput
    upsert?: PostUpsertWithoutPostCommentInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostCommentInput, PostUpdateWithoutPostCommentInput>, PostUncheckedUpdateWithoutPostCommentInput>
  }

  export type CommentUpdateOneRequiredWithoutPostCommentNestedInput = {
    create?: XOR<CommentCreateWithoutPostCommentInput, CommentUncheckedCreateWithoutPostCommentInput>
    connectOrCreate?: CommentCreateOrConnectWithoutPostCommentInput
    upsert?: CommentUpsertWithoutPostCommentInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutPostCommentInput, CommentUpdateWithoutPostCommentInput>, CommentUncheckedUpdateWithoutPostCommentInput>
  }

  export type PostCreateNestedOneWithoutPostHashtagsInput = {
    create?: XOR<PostCreateWithoutPostHashtagsInput, PostUncheckedCreateWithoutPostHashtagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostHashtagsInput
    connect?: PostWhereUniqueInput
  }

  export type HashtagCreateNestedOneWithoutPostHashtagsInput = {
    create?: XOR<HashtagCreateWithoutPostHashtagsInput, HashtagUncheckedCreateWithoutPostHashtagsInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutPostHashtagsInput
    connect?: HashtagWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutPostHashtagsNestedInput = {
    create?: XOR<PostCreateWithoutPostHashtagsInput, PostUncheckedCreateWithoutPostHashtagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostHashtagsInput
    upsert?: PostUpsertWithoutPostHashtagsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostHashtagsInput, PostUpdateWithoutPostHashtagsInput>, PostUncheckedUpdateWithoutPostHashtagsInput>
  }

  export type HashtagUpdateOneRequiredWithoutPostHashtagsNestedInput = {
    create?: XOR<HashtagCreateWithoutPostHashtagsInput, HashtagUncheckedCreateWithoutPostHashtagsInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutPostHashtagsInput
    upsert?: HashtagUpsertWithoutPostHashtagsInput
    connect?: HashtagWhereUniqueInput
    update?: XOR<XOR<HashtagUpdateToOneWithWhereWithoutPostHashtagsInput, HashtagUpdateWithoutPostHashtagsInput>, HashtagUncheckedUpdateWithoutPostHashtagsInput>
  }

  export type UserCreateNestedOneWithoutUserLikesInput = {
    create?: XOR<UserCreateWithoutUserLikesInput, UserUncheckedCreateWithoutUserLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLikesInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutUserLikesInput = {
    create?: XOR<PostCreateWithoutUserLikesInput, PostUncheckedCreateWithoutUserLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutUserLikesInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserLikesNestedInput = {
    create?: XOR<UserCreateWithoutUserLikesInput, UserUncheckedCreateWithoutUserLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLikesInput
    upsert?: UserUpsertWithoutUserLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserLikesInput, UserUpdateWithoutUserLikesInput>, UserUncheckedUpdateWithoutUserLikesInput>
  }

  export type PostUpdateOneRequiredWithoutUserLikesNestedInput = {
    create?: XOR<PostCreateWithoutUserLikesInput, PostUncheckedCreateWithoutUserLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutUserLikesInput
    upsert?: PostUpsertWithoutUserLikesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutUserLikesInput, PostUpdateWithoutUserLikesInput>, PostUncheckedUpdateWithoutUserLikesInput>
  }

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    upsert?: UserUpsertWithoutFollowingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowingInput, UserUpdateWithoutFollowingInput>, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    upsert?: UserUpsertWithoutFollowersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowersInput, UserUpdateWithoutFollowersInput>, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserCreateNestedOneWithoutSportsInput = {
    create?: XOR<UserCreateWithoutSportsInput, UserUncheckedCreateWithoutSportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSportsInput
    connect?: UserWhereUniqueInput
  }

  export type SportCreateNestedOneWithoutUsersInput = {
    create?: XOR<SportCreateWithoutUsersInput, SportUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SportCreateOrConnectWithoutUsersInput
    connect?: SportWhereUniqueInput
  }

  export type SportRanksCreateNestedOneWithoutUsersInput = {
    create?: XOR<SportRanksCreateWithoutUsersInput, SportRanksUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SportRanksCreateOrConnectWithoutUsersInput
    connect?: SportRanksWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutSportsNestedInput = {
    create?: XOR<UserCreateWithoutSportsInput, UserUncheckedCreateWithoutSportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSportsInput
    upsert?: UserUpsertWithoutSportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSportsInput, UserUpdateWithoutSportsInput>, UserUncheckedUpdateWithoutSportsInput>
  }

  export type SportUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SportCreateWithoutUsersInput, SportUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SportCreateOrConnectWithoutUsersInput
    upsert?: SportUpsertWithoutUsersInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutUsersInput, SportUpdateWithoutUsersInput>, SportUncheckedUpdateWithoutUsersInput>
  }

  export type SportRanksUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SportRanksCreateWithoutUsersInput, SportRanksUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SportRanksCreateOrConnectWithoutUsersInput
    upsert?: SportRanksUpsertWithoutUsersInput
    connect?: SportRanksWhereUniqueInput
    update?: XOR<XOR<SportRanksUpdateToOneWithWhereWithoutUsersInput, SportRanksUpdateWithoutUsersInput>, SportRanksUncheckedUpdateWithoutUsersInput>
  }

  export type UserSportCreateNestedManyWithoutSportInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type SportActivityCreateNestedManyWithoutSportInput = {
    create?: XOR<SportActivityCreateWithoutSportInput, SportActivityUncheckedCreateWithoutSportInput> | SportActivityCreateWithoutSportInput[] | SportActivityUncheckedCreateWithoutSportInput[]
    connectOrCreate?: SportActivityCreateOrConnectWithoutSportInput | SportActivityCreateOrConnectWithoutSportInput[]
    createMany?: SportActivityCreateManySportInputEnvelope
    connect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
  }

  export type UserSportUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type SportActivityUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<SportActivityCreateWithoutSportInput, SportActivityUncheckedCreateWithoutSportInput> | SportActivityCreateWithoutSportInput[] | SportActivityUncheckedCreateWithoutSportInput[]
    connectOrCreate?: SportActivityCreateOrConnectWithoutSportInput | SportActivityCreateOrConnectWithoutSportInput[]
    createMany?: SportActivityCreateManySportInputEnvelope
    connect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
  }

  export type UserSportUpdateManyWithoutSportNestedInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutSportInput | UserSportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutSportInput | UserSportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutSportInput | UserSportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type SportActivityUpdateManyWithoutSportNestedInput = {
    create?: XOR<SportActivityCreateWithoutSportInput, SportActivityUncheckedCreateWithoutSportInput> | SportActivityCreateWithoutSportInput[] | SportActivityUncheckedCreateWithoutSportInput[]
    connectOrCreate?: SportActivityCreateOrConnectWithoutSportInput | SportActivityCreateOrConnectWithoutSportInput[]
    upsert?: SportActivityUpsertWithWhereUniqueWithoutSportInput | SportActivityUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: SportActivityCreateManySportInputEnvelope
    set?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    disconnect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    delete?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    connect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    update?: SportActivityUpdateWithWhereUniqueWithoutSportInput | SportActivityUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: SportActivityUpdateManyWithWhereWithoutSportInput | SportActivityUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: SportActivityScalarWhereInput | SportActivityScalarWhereInput[]
  }

  export type UserSportUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutSportInput | UserSportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutSportInput | UserSportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutSportInput | UserSportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type SportActivityUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<SportActivityCreateWithoutSportInput, SportActivityUncheckedCreateWithoutSportInput> | SportActivityCreateWithoutSportInput[] | SportActivityUncheckedCreateWithoutSportInput[]
    connectOrCreate?: SportActivityCreateOrConnectWithoutSportInput | SportActivityCreateOrConnectWithoutSportInput[]
    upsert?: SportActivityUpsertWithWhereUniqueWithoutSportInput | SportActivityUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: SportActivityCreateManySportInputEnvelope
    set?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    disconnect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    delete?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    connect?: SportActivityWhereUniqueInput | SportActivityWhereUniqueInput[]
    update?: SportActivityUpdateWithWhereUniqueWithoutSportInput | SportActivityUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: SportActivityUpdateManyWithWhereWithoutSportInput | SportActivityUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: SportActivityScalarWhereInput | SportActivityScalarWhereInput[]
  }

  export type UserSportCreateNestedManyWithoutSportrankInput = {
    create?: XOR<UserSportCreateWithoutSportrankInput, UserSportUncheckedCreateWithoutSportrankInput> | UserSportCreateWithoutSportrankInput[] | UserSportUncheckedCreateWithoutSportrankInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportrankInput | UserSportCreateOrConnectWithoutSportrankInput[]
    createMany?: UserSportCreateManySportrankInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type UserSportUncheckedCreateNestedManyWithoutSportrankInput = {
    create?: XOR<UserSportCreateWithoutSportrankInput, UserSportUncheckedCreateWithoutSportrankInput> | UserSportCreateWithoutSportrankInput[] | UserSportUncheckedCreateWithoutSportrankInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportrankInput | UserSportCreateOrConnectWithoutSportrankInput[]
    createMany?: UserSportCreateManySportrankInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type UserSportUpdateManyWithoutSportrankNestedInput = {
    create?: XOR<UserSportCreateWithoutSportrankInput, UserSportUncheckedCreateWithoutSportrankInput> | UserSportCreateWithoutSportrankInput[] | UserSportUncheckedCreateWithoutSportrankInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportrankInput | UserSportCreateOrConnectWithoutSportrankInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutSportrankInput | UserSportUpsertWithWhereUniqueWithoutSportrankInput[]
    createMany?: UserSportCreateManySportrankInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutSportrankInput | UserSportUpdateWithWhereUniqueWithoutSportrankInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutSportrankInput | UserSportUpdateManyWithWhereWithoutSportrankInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type UserSportUncheckedUpdateManyWithoutSportrankNestedInput = {
    create?: XOR<UserSportCreateWithoutSportrankInput, UserSportUncheckedCreateWithoutSportrankInput> | UserSportCreateWithoutSportrankInput[] | UserSportUncheckedCreateWithoutSportrankInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportrankInput | UserSportCreateOrConnectWithoutSportrankInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutSportrankInput | UserSportUpsertWithWhereUniqueWithoutSportrankInput[]
    createMany?: UserSportCreateManySportrankInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutSportrankInput | UserSportUpdateWithWhereUniqueWithoutSportrankInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutSportrankInput | UserSportUpdateManyWithWhereWithoutSportrankInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type SportCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<SportCreateWithoutActivitiesInput, SportUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: SportCreateOrConnectWithoutActivitiesInput
    connect?: SportWhereUniqueInput
  }

  export type SportActivityParticipantCreateNestedManyWithoutActivityInput = {
    create?: XOR<SportActivityParticipantCreateWithoutActivityInput, SportActivityParticipantUncheckedCreateWithoutActivityInput> | SportActivityParticipantCreateWithoutActivityInput[] | SportActivityParticipantUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: SportActivityParticipantCreateOrConnectWithoutActivityInput | SportActivityParticipantCreateOrConnectWithoutActivityInput[]
    createMany?: SportActivityParticipantCreateManyActivityInputEnvelope
    connect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
  }

  export type SportActivityParticipantUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<SportActivityParticipantCreateWithoutActivityInput, SportActivityParticipantUncheckedCreateWithoutActivityInput> | SportActivityParticipantCreateWithoutActivityInput[] | SportActivityParticipantUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: SportActivityParticipantCreateOrConnectWithoutActivityInput | SportActivityParticipantCreateOrConnectWithoutActivityInput[]
    createMany?: SportActivityParticipantCreateManyActivityInputEnvelope
    connect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type SportUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<SportCreateWithoutActivitiesInput, SportUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: SportCreateOrConnectWithoutActivitiesInput
    upsert?: SportUpsertWithoutActivitiesInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutActivitiesInput, SportUpdateWithoutActivitiesInput>, SportUncheckedUpdateWithoutActivitiesInput>
  }

  export type SportActivityParticipantUpdateManyWithoutActivityNestedInput = {
    create?: XOR<SportActivityParticipantCreateWithoutActivityInput, SportActivityParticipantUncheckedCreateWithoutActivityInput> | SportActivityParticipantCreateWithoutActivityInput[] | SportActivityParticipantUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: SportActivityParticipantCreateOrConnectWithoutActivityInput | SportActivityParticipantCreateOrConnectWithoutActivityInput[]
    upsert?: SportActivityParticipantUpsertWithWhereUniqueWithoutActivityInput | SportActivityParticipantUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: SportActivityParticipantCreateManyActivityInputEnvelope
    set?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    disconnect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    delete?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    connect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    update?: SportActivityParticipantUpdateWithWhereUniqueWithoutActivityInput | SportActivityParticipantUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: SportActivityParticipantUpdateManyWithWhereWithoutActivityInput | SportActivityParticipantUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: SportActivityParticipantScalarWhereInput | SportActivityParticipantScalarWhereInput[]
  }

  export type SportActivityParticipantUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<SportActivityParticipantCreateWithoutActivityInput, SportActivityParticipantUncheckedCreateWithoutActivityInput> | SportActivityParticipantCreateWithoutActivityInput[] | SportActivityParticipantUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: SportActivityParticipantCreateOrConnectWithoutActivityInput | SportActivityParticipantCreateOrConnectWithoutActivityInput[]
    upsert?: SportActivityParticipantUpsertWithWhereUniqueWithoutActivityInput | SportActivityParticipantUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: SportActivityParticipantCreateManyActivityInputEnvelope
    set?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    disconnect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    delete?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    connect?: SportActivityParticipantWhereUniqueInput | SportActivityParticipantWhereUniqueInput[]
    update?: SportActivityParticipantUpdateWithWhereUniqueWithoutActivityInput | SportActivityParticipantUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: SportActivityParticipantUpdateManyWithWhereWithoutActivityInput | SportActivityParticipantUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: SportActivityParticipantScalarWhereInput | SportActivityParticipantScalarWhereInput[]
  }

  export type SportActivityCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<SportActivityCreateWithoutParticipantsInput, SportActivityUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: SportActivityCreateOrConnectWithoutParticipantsInput
    connect?: SportActivityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActivityParticipationsInput = {
    create?: XOR<UserCreateWithoutActivityParticipationsInput, UserUncheckedCreateWithoutActivityParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityParticipationsInput
    connect?: UserWhereUniqueInput
  }

  export type SportActivityUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<SportActivityCreateWithoutParticipantsInput, SportActivityUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: SportActivityCreateOrConnectWithoutParticipantsInput
    upsert?: SportActivityUpsertWithoutParticipantsInput
    connect?: SportActivityWhereUniqueInput
    update?: XOR<XOR<SportActivityUpdateToOneWithWhereWithoutParticipantsInput, SportActivityUpdateWithoutParticipantsInput>, SportActivityUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutActivityParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutActivityParticipationsInput, UserUncheckedCreateWithoutActivityParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityParticipationsInput
    upsert?: UserUpsertWithoutActivityParticipationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityParticipationsInput, UserUpdateWithoutActivityParticipationsInput>, UserUncheckedUpdateWithoutActivityParticipationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserLikeCreateWithoutUserInput = {
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutUserLikesInput
  }

  export type UserLikeUncheckedCreateWithoutUserInput = {
    id?: number
    postId: number
    createdAt?: Date | string
  }

  export type UserLikeCreateOrConnectWithoutUserInput = {
    where: UserLikeWhereUniqueInput
    create: XOR<UserLikeCreateWithoutUserInput, UserLikeUncheckedCreateWithoutUserInput>
  }

  export type UserLikeCreateManyUserInputEnvelope = {
    data: UserLikeCreateManyUserInput | UserLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFollowCreateWithoutFollowingInput = {
    createdAt?: Date | string
    follower: UserCreateNestedOneWithoutFollowingInput
  }

  export type UserFollowUncheckedCreateWithoutFollowingInput = {
    id?: number
    followerId: number
    createdAt?: Date | string
  }

  export type UserFollowCreateOrConnectWithoutFollowingInput = {
    where: UserFollowWhereUniqueInput
    create: XOR<UserFollowCreateWithoutFollowingInput, UserFollowUncheckedCreateWithoutFollowingInput>
  }

  export type UserFollowCreateManyFollowingInputEnvelope = {
    data: UserFollowCreateManyFollowingInput | UserFollowCreateManyFollowingInput[]
    skipDuplicates?: boolean
  }

  export type UserFollowCreateWithoutFollowerInput = {
    createdAt?: Date | string
    following: UserCreateNestedOneWithoutFollowersInput
  }

  export type UserFollowUncheckedCreateWithoutFollowerInput = {
    id?: number
    followingId: number
    createdAt?: Date | string
  }

  export type UserFollowCreateOrConnectWithoutFollowerInput = {
    where: UserFollowWhereUniqueInput
    create: XOR<UserFollowCreateWithoutFollowerInput, UserFollowUncheckedCreateWithoutFollowerInput>
  }

  export type UserFollowCreateManyFollowerInputEnvelope = {
    data: UserFollowCreateManyFollowerInput | UserFollowCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type UserSportCreateWithoutUserInput = {
    startedAt?: Date | string
    color?: string | null
    sport: SportCreateNestedOneWithoutUsersInput
    sportrank: SportRanksCreateNestedOneWithoutUsersInput
  }

  export type UserSportUncheckedCreateWithoutUserInput = {
    id?: number
    sportId: number
    sportRankId: number
    startedAt?: Date | string
    color?: string | null
  }

  export type UserSportCreateOrConnectWithoutUserInput = {
    where: UserSportWhereUniqueInput
    create: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput>
  }

  export type UserSportCreateManyUserInputEnvelope = {
    data: UserSportCreateManyUserInput | UserSportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SportActivityCreateWithoutUserInput = {
    starttime: string
    endtime: string
    description: string
    date?: Date | string
    latitude?: number | null
    longitude?: number | null
    publicity?: string
    sport: SportCreateNestedOneWithoutActivitiesInput
    participants?: SportActivityParticipantCreateNestedManyWithoutActivityInput
  }

  export type SportActivityUncheckedCreateWithoutUserInput = {
    id?: number
    sportId: number
    starttime: string
    endtime: string
    description: string
    date?: Date | string
    latitude?: number | null
    longitude?: number | null
    publicity?: string
    participants?: SportActivityParticipantUncheckedCreateNestedManyWithoutActivityInput
  }

  export type SportActivityCreateOrConnectWithoutUserInput = {
    where: SportActivityWhereUniqueInput
    create: XOR<SportActivityCreateWithoutUserInput, SportActivityUncheckedCreateWithoutUserInput>
  }

  export type SportActivityCreateManyUserInputEnvelope = {
    data: SportActivityCreateManyUserInput | SportActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SportActivityParticipantCreateWithoutUserInput = {
    role: string
    activity: SportActivityCreateNestedOneWithoutParticipantsInput
  }

  export type SportActivityParticipantUncheckedCreateWithoutUserInput = {
    id?: number
    activityId: number
    role: string
  }

  export type SportActivityParticipantCreateOrConnectWithoutUserInput = {
    where: SportActivityParticipantWhereUniqueInput
    create: XOR<SportActivityParticipantCreateWithoutUserInput, SportActivityParticipantUncheckedCreateWithoutUserInput>
  }

  export type SportActivityParticipantCreateManyUserInputEnvelope = {
    data: SportActivityParticipantCreateManyUserInput | SportActivityParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLikeWhereUniqueInput
    update: XOR<UserLikeUpdateWithoutUserInput, UserLikeUncheckedUpdateWithoutUserInput>
    create: XOR<UserLikeCreateWithoutUserInput, UserLikeUncheckedCreateWithoutUserInput>
  }

  export type UserLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLikeWhereUniqueInput
    data: XOR<UserLikeUpdateWithoutUserInput, UserLikeUncheckedUpdateWithoutUserInput>
  }

  export type UserLikeUpdateManyWithWhereWithoutUserInput = {
    where: UserLikeScalarWhereInput
    data: XOR<UserLikeUpdateManyMutationInput, UserLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLikeScalarWhereInput = {
    AND?: UserLikeScalarWhereInput | UserLikeScalarWhereInput[]
    OR?: UserLikeScalarWhereInput[]
    NOT?: UserLikeScalarWhereInput | UserLikeScalarWhereInput[]
    id?: IntFilter<"UserLike"> | number
    userId?: IntFilter<"UserLike"> | number
    postId?: IntFilter<"UserLike"> | number
    createdAt?: DateTimeFilter<"UserLike"> | Date | string
  }

  export type UserFollowUpsertWithWhereUniqueWithoutFollowingInput = {
    where: UserFollowWhereUniqueInput
    update: XOR<UserFollowUpdateWithoutFollowingInput, UserFollowUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserFollowCreateWithoutFollowingInput, UserFollowUncheckedCreateWithoutFollowingInput>
  }

  export type UserFollowUpdateWithWhereUniqueWithoutFollowingInput = {
    where: UserFollowWhereUniqueInput
    data: XOR<UserFollowUpdateWithoutFollowingInput, UserFollowUncheckedUpdateWithoutFollowingInput>
  }

  export type UserFollowUpdateManyWithWhereWithoutFollowingInput = {
    where: UserFollowScalarWhereInput
    data: XOR<UserFollowUpdateManyMutationInput, UserFollowUncheckedUpdateManyWithoutFollowingInput>
  }

  export type UserFollowScalarWhereInput = {
    AND?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
    OR?: UserFollowScalarWhereInput[]
    NOT?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
    id?: IntFilter<"UserFollow"> | number
    followerId?: IntFilter<"UserFollow"> | number
    followingId?: IntFilter<"UserFollow"> | number
    createdAt?: DateTimeFilter<"UserFollow"> | Date | string
  }

  export type UserFollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: UserFollowWhereUniqueInput
    update: XOR<UserFollowUpdateWithoutFollowerInput, UserFollowUncheckedUpdateWithoutFollowerInput>
    create: XOR<UserFollowCreateWithoutFollowerInput, UserFollowUncheckedCreateWithoutFollowerInput>
  }

  export type UserFollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: UserFollowWhereUniqueInput
    data: XOR<UserFollowUpdateWithoutFollowerInput, UserFollowUncheckedUpdateWithoutFollowerInput>
  }

  export type UserFollowUpdateManyWithWhereWithoutFollowerInput = {
    where: UserFollowScalarWhereInput
    data: XOR<UserFollowUpdateManyMutationInput, UserFollowUncheckedUpdateManyWithoutFollowerInput>
  }

  export type UserSportUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSportWhereUniqueInput
    update: XOR<UserSportUpdateWithoutUserInput, UserSportUncheckedUpdateWithoutUserInput>
    create: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput>
  }

  export type UserSportUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSportWhereUniqueInput
    data: XOR<UserSportUpdateWithoutUserInput, UserSportUncheckedUpdateWithoutUserInput>
  }

  export type UserSportUpdateManyWithWhereWithoutUserInput = {
    where: UserSportScalarWhereInput
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSportScalarWhereInput = {
    AND?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
    OR?: UserSportScalarWhereInput[]
    NOT?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
    id?: IntFilter<"UserSport"> | number
    userId?: IntFilter<"UserSport"> | number
    sportId?: IntFilter<"UserSport"> | number
    sportRankId?: IntFilter<"UserSport"> | number
    startedAt?: DateTimeFilter<"UserSport"> | Date | string
    color?: StringNullableFilter<"UserSport"> | string | null
  }

  export type SportActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: SportActivityWhereUniqueInput
    update: XOR<SportActivityUpdateWithoutUserInput, SportActivityUncheckedUpdateWithoutUserInput>
    create: XOR<SportActivityCreateWithoutUserInput, SportActivityUncheckedCreateWithoutUserInput>
  }

  export type SportActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: SportActivityWhereUniqueInput
    data: XOR<SportActivityUpdateWithoutUserInput, SportActivityUncheckedUpdateWithoutUserInput>
  }

  export type SportActivityUpdateManyWithWhereWithoutUserInput = {
    where: SportActivityScalarWhereInput
    data: XOR<SportActivityUpdateManyMutationInput, SportActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type SportActivityScalarWhereInput = {
    AND?: SportActivityScalarWhereInput | SportActivityScalarWhereInput[]
    OR?: SportActivityScalarWhereInput[]
    NOT?: SportActivityScalarWhereInput | SportActivityScalarWhereInput[]
    id?: IntFilter<"SportActivity"> | number
    userId?: IntFilter<"SportActivity"> | number
    sportId?: IntFilter<"SportActivity"> | number
    starttime?: StringFilter<"SportActivity"> | string
    endtime?: StringFilter<"SportActivity"> | string
    description?: StringFilter<"SportActivity"> | string
    date?: DateTimeFilter<"SportActivity"> | Date | string
    latitude?: FloatNullableFilter<"SportActivity"> | number | null
    longitude?: FloatNullableFilter<"SportActivity"> | number | null
    publicity?: StringFilter<"SportActivity"> | string
  }

  export type SportActivityParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: SportActivityParticipantWhereUniqueInput
    update: XOR<SportActivityParticipantUpdateWithoutUserInput, SportActivityParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<SportActivityParticipantCreateWithoutUserInput, SportActivityParticipantUncheckedCreateWithoutUserInput>
  }

  export type SportActivityParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: SportActivityParticipantWhereUniqueInput
    data: XOR<SportActivityParticipantUpdateWithoutUserInput, SportActivityParticipantUncheckedUpdateWithoutUserInput>
  }

  export type SportActivityParticipantUpdateManyWithWhereWithoutUserInput = {
    where: SportActivityParticipantScalarWhereInput
    data: XOR<SportActivityParticipantUpdateManyMutationInput, SportActivityParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type SportActivityParticipantScalarWhereInput = {
    AND?: SportActivityParticipantScalarWhereInput | SportActivityParticipantScalarWhereInput[]
    OR?: SportActivityParticipantScalarWhereInput[]
    NOT?: SportActivityParticipantScalarWhereInput | SportActivityParticipantScalarWhereInput[]
    id?: IntFilter<"SportActivityParticipant"> | number
    activityId?: IntFilter<"SportActivityParticipant"> | number
    userId?: IntFilter<"SportActivityParticipant"> | number
    role?: StringFilter<"SportActivityParticipant"> | string
  }

  export type PostHashtagCreateWithoutPostInput = {
    hashtag: HashtagCreateNestedOneWithoutPostHashtagsInput
  }

  export type PostHashtagUncheckedCreateWithoutPostInput = {
    hashtagId: number
  }

  export type PostHashtagCreateOrConnectWithoutPostInput = {
    where: PostHashtagWhereUniqueInput
    create: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput>
  }

  export type PostHashtagCreateManyPostInputEnvelope = {
    data: PostHashtagCreateManyPostInput | PostHashtagCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserLikeCreateWithoutPostInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserLikesInput
  }

  export type UserLikeUncheckedCreateWithoutPostInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type UserLikeCreateOrConnectWithoutPostInput = {
    where: UserLikeWhereUniqueInput
    create: XOR<UserLikeCreateWithoutPostInput, UserLikeUncheckedCreateWithoutPostInput>
  }

  export type UserLikeCreateManyPostInputEnvelope = {
    data: UserLikeCreateManyPostInput | UserLikeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostCommentCreateWithoutPostInput = {
    comment: CommentCreateNestedOneWithoutPostCommentInput
  }

  export type PostCommentUncheckedCreateWithoutPostInput = {
    commentId: number
  }

  export type PostCommentCreateOrConnectWithoutPostInput = {
    where: PostCommentWhereUniqueInput
    create: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput>
  }

  export type PostCommentCreateManyPostInputEnvelope = {
    data: PostCommentCreateManyPostInput | PostCommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostHashtagUpsertWithWhereUniqueWithoutPostInput = {
    where: PostHashtagWhereUniqueInput
    update: XOR<PostHashtagUpdateWithoutPostInput, PostHashtagUncheckedUpdateWithoutPostInput>
    create: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput>
  }

  export type PostHashtagUpdateWithWhereUniqueWithoutPostInput = {
    where: PostHashtagWhereUniqueInput
    data: XOR<PostHashtagUpdateWithoutPostInput, PostHashtagUncheckedUpdateWithoutPostInput>
  }

  export type PostHashtagUpdateManyWithWhereWithoutPostInput = {
    where: PostHashtagScalarWhereInput
    data: XOR<PostHashtagUpdateManyMutationInput, PostHashtagUncheckedUpdateManyWithoutPostInput>
  }

  export type PostHashtagScalarWhereInput = {
    AND?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
    OR?: PostHashtagScalarWhereInput[]
    NOT?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
    postId?: IntFilter<"PostHashtag"> | number
    hashtagId?: IntFilter<"PostHashtag"> | number
  }

  export type UserLikeUpsertWithWhereUniqueWithoutPostInput = {
    where: UserLikeWhereUniqueInput
    update: XOR<UserLikeUpdateWithoutPostInput, UserLikeUncheckedUpdateWithoutPostInput>
    create: XOR<UserLikeCreateWithoutPostInput, UserLikeUncheckedCreateWithoutPostInput>
  }

  export type UserLikeUpdateWithWhereUniqueWithoutPostInput = {
    where: UserLikeWhereUniqueInput
    data: XOR<UserLikeUpdateWithoutPostInput, UserLikeUncheckedUpdateWithoutPostInput>
  }

  export type UserLikeUpdateManyWithWhereWithoutPostInput = {
    where: UserLikeScalarWhereInput
    data: XOR<UserLikeUpdateManyMutationInput, UserLikeUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCommentUpsertWithWhereUniqueWithoutPostInput = {
    where: PostCommentWhereUniqueInput
    update: XOR<PostCommentUpdateWithoutPostInput, PostCommentUncheckedUpdateWithoutPostInput>
    create: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput>
  }

  export type PostCommentUpdateWithWhereUniqueWithoutPostInput = {
    where: PostCommentWhereUniqueInput
    data: XOR<PostCommentUpdateWithoutPostInput, PostCommentUncheckedUpdateWithoutPostInput>
  }

  export type PostCommentUpdateManyWithWhereWithoutPostInput = {
    where: PostCommentScalarWhereInput
    data: XOR<PostCommentUpdateManyMutationInput, PostCommentUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCommentScalarWhereInput = {
    AND?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
    OR?: PostCommentScalarWhereInput[]
    NOT?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
    postId?: IntFilter<"PostComment"> | number
    commentId?: IntFilter<"PostComment"> | number
  }

  export type PostHashtagCreateWithoutHashtagInput = {
    post: PostCreateNestedOneWithoutPostHashtagsInput
  }

  export type PostHashtagUncheckedCreateWithoutHashtagInput = {
    postId: number
  }

  export type PostHashtagCreateOrConnectWithoutHashtagInput = {
    where: PostHashtagWhereUniqueInput
    create: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput>
  }

  export type PostHashtagCreateManyHashtagInputEnvelope = {
    data: PostHashtagCreateManyHashtagInput | PostHashtagCreateManyHashtagInput[]
    skipDuplicates?: boolean
  }

  export type PostHashtagUpsertWithWhereUniqueWithoutHashtagInput = {
    where: PostHashtagWhereUniqueInput
    update: XOR<PostHashtagUpdateWithoutHashtagInput, PostHashtagUncheckedUpdateWithoutHashtagInput>
    create: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput>
  }

  export type PostHashtagUpdateWithWhereUniqueWithoutHashtagInput = {
    where: PostHashtagWhereUniqueInput
    data: XOR<PostHashtagUpdateWithoutHashtagInput, PostHashtagUncheckedUpdateWithoutHashtagInput>
  }

  export type PostHashtagUpdateManyWithWhereWithoutHashtagInput = {
    where: PostHashtagScalarWhereInput
    data: XOR<PostHashtagUpdateManyMutationInput, PostHashtagUncheckedUpdateManyWithoutHashtagInput>
  }

  export type PostCommentCreateWithoutCommentInput = {
    post: PostCreateNestedOneWithoutPostCommentInput
  }

  export type PostCommentUncheckedCreateWithoutCommentInput = {
    postId: number
  }

  export type PostCommentCreateOrConnectWithoutCommentInput = {
    where: PostCommentWhereUniqueInput
    create: XOR<PostCommentCreateWithoutCommentInput, PostCommentUncheckedCreateWithoutCommentInput>
  }

  export type PostCommentCreateManyCommentInputEnvelope = {
    data: PostCommentCreateManyCommentInput | PostCommentCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type PostCommentUpsertWithWhereUniqueWithoutCommentInput = {
    where: PostCommentWhereUniqueInput
    update: XOR<PostCommentUpdateWithoutCommentInput, PostCommentUncheckedUpdateWithoutCommentInput>
    create: XOR<PostCommentCreateWithoutCommentInput, PostCommentUncheckedCreateWithoutCommentInput>
  }

  export type PostCommentUpdateWithWhereUniqueWithoutCommentInput = {
    where: PostCommentWhereUniqueInput
    data: XOR<PostCommentUpdateWithoutCommentInput, PostCommentUncheckedUpdateWithoutCommentInput>
  }

  export type PostCommentUpdateManyWithWhereWithoutCommentInput = {
    where: PostCommentScalarWhereInput
    data: XOR<PostCommentUpdateManyMutationInput, PostCommentUncheckedUpdateManyWithoutCommentInput>
  }

  export type PostCreateWithoutPostCommentInput = {
    created_at?: Date | string
    text: string
    likes?: number
    postId?: number | null
    authorId: number
    postHashtags?: PostHashtagCreateNestedManyWithoutPostInput
    userLikes?: UserLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostCommentInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    postId?: number | null
    authorId: number
    postHashtags?: PostHashtagUncheckedCreateNestedManyWithoutPostInput
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostCommentInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostCommentInput, PostUncheckedCreateWithoutPostCommentInput>
  }

  export type CommentCreateWithoutPostCommentInput = {
    text: string
    authorId: number
    createdAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutPostCommentInput = {
    id?: number
    text: string
    authorId: number
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutPostCommentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostCommentInput, CommentUncheckedCreateWithoutPostCommentInput>
  }

  export type PostUpsertWithoutPostCommentInput = {
    update: XOR<PostUpdateWithoutPostCommentInput, PostUncheckedUpdateWithoutPostCommentInput>
    create: XOR<PostCreateWithoutPostCommentInput, PostUncheckedCreateWithoutPostCommentInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostCommentInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostCommentInput, PostUncheckedUpdateWithoutPostCommentInput>
  }

  export type PostUpdateWithoutPostCommentInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUpdateManyWithoutPostNestedInput
    userLikes?: UserLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUncheckedUpdateManyWithoutPostNestedInput
    userLikes?: UserLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentUpsertWithoutPostCommentInput = {
    update: XOR<CommentUpdateWithoutPostCommentInput, CommentUncheckedUpdateWithoutPostCommentInput>
    create: XOR<CommentCreateWithoutPostCommentInput, CommentUncheckedCreateWithoutPostCommentInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutPostCommentInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutPostCommentInput, CommentUncheckedUpdateWithoutPostCommentInput>
  }

  export type CommentUpdateWithoutPostCommentInput = {
    text?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutPostCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutPostHashtagsInput = {
    created_at?: Date | string
    text: string
    likes?: number
    postId?: number | null
    authorId: number
    userLikes?: UserLikeCreateNestedManyWithoutPostInput
    PostComment?: PostCommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostHashtagsInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    postId?: number | null
    authorId: number
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutPostInput
    PostComment?: PostCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostHashtagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostHashtagsInput, PostUncheckedCreateWithoutPostHashtagsInput>
  }

  export type HashtagCreateWithoutPostHashtagsInput = {
    text: string
  }

  export type HashtagUncheckedCreateWithoutPostHashtagsInput = {
    id?: number
    text: string
  }

  export type HashtagCreateOrConnectWithoutPostHashtagsInput = {
    where: HashtagWhereUniqueInput
    create: XOR<HashtagCreateWithoutPostHashtagsInput, HashtagUncheckedCreateWithoutPostHashtagsInput>
  }

  export type PostUpsertWithoutPostHashtagsInput = {
    update: XOR<PostUpdateWithoutPostHashtagsInput, PostUncheckedUpdateWithoutPostHashtagsInput>
    create: XOR<PostCreateWithoutPostHashtagsInput, PostUncheckedCreateWithoutPostHashtagsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostHashtagsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostHashtagsInput, PostUncheckedUpdateWithoutPostHashtagsInput>
  }

  export type PostUpdateWithoutPostHashtagsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUpdateManyWithoutPostNestedInput
    PostComment?: PostCommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostHashtagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUncheckedUpdateManyWithoutPostNestedInput
    PostComment?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type HashtagUpsertWithoutPostHashtagsInput = {
    update: XOR<HashtagUpdateWithoutPostHashtagsInput, HashtagUncheckedUpdateWithoutPostHashtagsInput>
    create: XOR<HashtagCreateWithoutPostHashtagsInput, HashtagUncheckedCreateWithoutPostHashtagsInput>
    where?: HashtagWhereInput
  }

  export type HashtagUpdateToOneWithWhereWithoutPostHashtagsInput = {
    where?: HashtagWhereInput
    data: XOR<HashtagUpdateWithoutPostHashtagsInput, HashtagUncheckedUpdateWithoutPostHashtagsInput>
  }

  export type HashtagUpdateWithoutPostHashtagsInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type HashtagUncheckedUpdateWithoutPostHashtagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutUserLikesInput = {
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    followers?: UserFollowCreateNestedManyWithoutFollowingInput
    following?: UserFollowCreateNestedManyWithoutFollowerInput
    sports?: UserSportCreateNestedManyWithoutUserInput
    activities?: SportActivityCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserLikesInput = {
    id?: number
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    followers?: UserFollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserFollowUncheckedCreateNestedManyWithoutFollowerInput
    sports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    activities?: SportActivityUncheckedCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserLikesInput, UserUncheckedCreateWithoutUserLikesInput>
  }

  export type PostCreateWithoutUserLikesInput = {
    created_at?: Date | string
    text: string
    likes?: number
    postId?: number | null
    authorId: number
    postHashtags?: PostHashtagCreateNestedManyWithoutPostInput
    PostComment?: PostCommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserLikesInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    postId?: number | null
    authorId: number
    postHashtags?: PostHashtagUncheckedCreateNestedManyWithoutPostInput
    PostComment?: PostCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserLikesInput, PostUncheckedCreateWithoutUserLikesInput>
  }

  export type UserUpsertWithoutUserLikesInput = {
    update: XOR<UserUpdateWithoutUserLikesInput, UserUncheckedUpdateWithoutUserLikesInput>
    create: XOR<UserCreateWithoutUserLikesInput, UserUncheckedCreateWithoutUserLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserLikesInput, UserUncheckedUpdateWithoutUserLikesInput>
  }

  export type UserUpdateWithoutUserLikesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    followers?: UserFollowUpdateManyWithoutFollowingNestedInput
    following?: UserFollowUpdateManyWithoutFollowerNestedInput
    sports?: UserSportUpdateManyWithoutUserNestedInput
    activities?: SportActivityUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    followers?: UserFollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserFollowUncheckedUpdateManyWithoutFollowerNestedInput
    sports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    activities?: SportActivityUncheckedUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutUserLikesInput = {
    update: XOR<PostUpdateWithoutUserLikesInput, PostUncheckedUpdateWithoutUserLikesInput>
    create: XOR<PostCreateWithoutUserLikesInput, PostUncheckedCreateWithoutUserLikesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutUserLikesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutUserLikesInput, PostUncheckedUpdateWithoutUserLikesInput>
  }

  export type PostUpdateWithoutUserLikesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUpdateManyWithoutPostNestedInput
    PostComment?: PostCommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUncheckedUpdateManyWithoutPostNestedInput
    PostComment?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutFollowingInput = {
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeCreateNestedManyWithoutUserInput
    followers?: UserFollowCreateNestedManyWithoutFollowingInput
    sports?: UserSportCreateNestedManyWithoutUserInput
    activities?: SportActivityCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: number
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutUserInput
    followers?: UserFollowUncheckedCreateNestedManyWithoutFollowingInput
    sports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    activities?: SportActivityUncheckedCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserCreateWithoutFollowersInput = {
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeCreateNestedManyWithoutUserInput
    following?: UserFollowCreateNestedManyWithoutFollowerInput
    sports?: UserSportCreateNestedManyWithoutUserInput
    activities?: SportActivityCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: number
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutUserInput
    following?: UserFollowUncheckedCreateNestedManyWithoutFollowerInput
    sports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    activities?: SportActivityUncheckedCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateWithoutFollowingInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUpdateManyWithoutUserNestedInput
    followers?: UserFollowUpdateManyWithoutFollowingNestedInput
    sports?: UserSportUpdateManyWithoutUserNestedInput
    activities?: SportActivityUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUncheckedUpdateManyWithoutUserNestedInput
    followers?: UserFollowUncheckedUpdateManyWithoutFollowingNestedInput
    sports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    activities?: SportActivityUncheckedUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUpdateManyWithoutUserNestedInput
    following?: UserFollowUpdateManyWithoutFollowerNestedInput
    sports?: UserSportUpdateManyWithoutUserNestedInput
    activities?: SportActivityUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUncheckedUpdateManyWithoutUserNestedInput
    following?: UserFollowUncheckedUpdateManyWithoutFollowerNestedInput
    sports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    activities?: SportActivityUncheckedUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSportsInput = {
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeCreateNestedManyWithoutUserInput
    followers?: UserFollowCreateNestedManyWithoutFollowingInput
    following?: UserFollowCreateNestedManyWithoutFollowerInput
    activities?: SportActivityCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSportsInput = {
    id?: number
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutUserInput
    followers?: UserFollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserFollowUncheckedCreateNestedManyWithoutFollowerInput
    activities?: SportActivityUncheckedCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSportsInput, UserUncheckedCreateWithoutSportsInput>
  }

  export type SportCreateWithoutUsersInput = {
    name: string
    activities?: SportActivityCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    activities?: SportActivityUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutUsersInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutUsersInput, SportUncheckedCreateWithoutUsersInput>
  }

  export type SportRanksCreateWithoutUsersInput = {
    name: string
    description: string
  }

  export type SportRanksUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description: string
  }

  export type SportRanksCreateOrConnectWithoutUsersInput = {
    where: SportRanksWhereUniqueInput
    create: XOR<SportRanksCreateWithoutUsersInput, SportRanksUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutSportsInput = {
    update: XOR<UserUpdateWithoutSportsInput, UserUncheckedUpdateWithoutSportsInput>
    create: XOR<UserCreateWithoutSportsInput, UserUncheckedCreateWithoutSportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSportsInput, UserUncheckedUpdateWithoutSportsInput>
  }

  export type UserUpdateWithoutSportsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUpdateManyWithoutUserNestedInput
    followers?: UserFollowUpdateManyWithoutFollowingNestedInput
    following?: UserFollowUpdateManyWithoutFollowerNestedInput
    activities?: SportActivityUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUncheckedUpdateManyWithoutUserNestedInput
    followers?: UserFollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserFollowUncheckedUpdateManyWithoutFollowerNestedInput
    activities?: SportActivityUncheckedUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SportUpsertWithoutUsersInput = {
    update: XOR<SportUpdateWithoutUsersInput, SportUncheckedUpdateWithoutUsersInput>
    create: XOR<SportCreateWithoutUsersInput, SportUncheckedCreateWithoutUsersInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutUsersInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutUsersInput, SportUncheckedUpdateWithoutUsersInput>
  }

  export type SportUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    activities?: SportActivityUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    activities?: SportActivityUncheckedUpdateManyWithoutSportNestedInput
  }

  export type SportRanksUpsertWithoutUsersInput = {
    update: XOR<SportRanksUpdateWithoutUsersInput, SportRanksUncheckedUpdateWithoutUsersInput>
    create: XOR<SportRanksCreateWithoutUsersInput, SportRanksUncheckedCreateWithoutUsersInput>
    where?: SportRanksWhereInput
  }

  export type SportRanksUpdateToOneWithWhereWithoutUsersInput = {
    where?: SportRanksWhereInput
    data: XOR<SportRanksUpdateWithoutUsersInput, SportRanksUncheckedUpdateWithoutUsersInput>
  }

  export type SportRanksUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SportRanksUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserSportCreateWithoutSportInput = {
    startedAt?: Date | string
    color?: string | null
    user: UserCreateNestedOneWithoutSportsInput
    sportrank: SportRanksCreateNestedOneWithoutUsersInput
  }

  export type UserSportUncheckedCreateWithoutSportInput = {
    id?: number
    userId: number
    sportRankId: number
    startedAt?: Date | string
    color?: string | null
  }

  export type UserSportCreateOrConnectWithoutSportInput = {
    where: UserSportWhereUniqueInput
    create: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput>
  }

  export type UserSportCreateManySportInputEnvelope = {
    data: UserSportCreateManySportInput | UserSportCreateManySportInput[]
    skipDuplicates?: boolean
  }

  export type SportActivityCreateWithoutSportInput = {
    starttime: string
    endtime: string
    description: string
    date?: Date | string
    latitude?: number | null
    longitude?: number | null
    publicity?: string
    user: UserCreateNestedOneWithoutActivitiesInput
    participants?: SportActivityParticipantCreateNestedManyWithoutActivityInput
  }

  export type SportActivityUncheckedCreateWithoutSportInput = {
    id?: number
    userId: number
    starttime: string
    endtime: string
    description: string
    date?: Date | string
    latitude?: number | null
    longitude?: number | null
    publicity?: string
    participants?: SportActivityParticipantUncheckedCreateNestedManyWithoutActivityInput
  }

  export type SportActivityCreateOrConnectWithoutSportInput = {
    where: SportActivityWhereUniqueInput
    create: XOR<SportActivityCreateWithoutSportInput, SportActivityUncheckedCreateWithoutSportInput>
  }

  export type SportActivityCreateManySportInputEnvelope = {
    data: SportActivityCreateManySportInput | SportActivityCreateManySportInput[]
    skipDuplicates?: boolean
  }

  export type UserSportUpsertWithWhereUniqueWithoutSportInput = {
    where: UserSportWhereUniqueInput
    update: XOR<UserSportUpdateWithoutSportInput, UserSportUncheckedUpdateWithoutSportInput>
    create: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput>
  }

  export type UserSportUpdateWithWhereUniqueWithoutSportInput = {
    where: UserSportWhereUniqueInput
    data: XOR<UserSportUpdateWithoutSportInput, UserSportUncheckedUpdateWithoutSportInput>
  }

  export type UserSportUpdateManyWithWhereWithoutSportInput = {
    where: UserSportScalarWhereInput
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyWithoutSportInput>
  }

  export type SportActivityUpsertWithWhereUniqueWithoutSportInput = {
    where: SportActivityWhereUniqueInput
    update: XOR<SportActivityUpdateWithoutSportInput, SportActivityUncheckedUpdateWithoutSportInput>
    create: XOR<SportActivityCreateWithoutSportInput, SportActivityUncheckedCreateWithoutSportInput>
  }

  export type SportActivityUpdateWithWhereUniqueWithoutSportInput = {
    where: SportActivityWhereUniqueInput
    data: XOR<SportActivityUpdateWithoutSportInput, SportActivityUncheckedUpdateWithoutSportInput>
  }

  export type SportActivityUpdateManyWithWhereWithoutSportInput = {
    where: SportActivityScalarWhereInput
    data: XOR<SportActivityUpdateManyMutationInput, SportActivityUncheckedUpdateManyWithoutSportInput>
  }

  export type UserSportCreateWithoutSportrankInput = {
    startedAt?: Date | string
    color?: string | null
    user: UserCreateNestedOneWithoutSportsInput
    sport: SportCreateNestedOneWithoutUsersInput
  }

  export type UserSportUncheckedCreateWithoutSportrankInput = {
    id?: number
    userId: number
    sportId: number
    startedAt?: Date | string
    color?: string | null
  }

  export type UserSportCreateOrConnectWithoutSportrankInput = {
    where: UserSportWhereUniqueInput
    create: XOR<UserSportCreateWithoutSportrankInput, UserSportUncheckedCreateWithoutSportrankInput>
  }

  export type UserSportCreateManySportrankInputEnvelope = {
    data: UserSportCreateManySportrankInput | UserSportCreateManySportrankInput[]
    skipDuplicates?: boolean
  }

  export type UserSportUpsertWithWhereUniqueWithoutSportrankInput = {
    where: UserSportWhereUniqueInput
    update: XOR<UserSportUpdateWithoutSportrankInput, UserSportUncheckedUpdateWithoutSportrankInput>
    create: XOR<UserSportCreateWithoutSportrankInput, UserSportUncheckedCreateWithoutSportrankInput>
  }

  export type UserSportUpdateWithWhereUniqueWithoutSportrankInput = {
    where: UserSportWhereUniqueInput
    data: XOR<UserSportUpdateWithoutSportrankInput, UserSportUncheckedUpdateWithoutSportrankInput>
  }

  export type UserSportUpdateManyWithWhereWithoutSportrankInput = {
    where: UserSportScalarWhereInput
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyWithoutSportrankInput>
  }

  export type UserCreateWithoutActivitiesInput = {
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeCreateNestedManyWithoutUserInput
    followers?: UserFollowCreateNestedManyWithoutFollowingInput
    following?: UserFollowCreateNestedManyWithoutFollowerInput
    sports?: UserSportCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: number
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutUserInput
    followers?: UserFollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserFollowUncheckedCreateNestedManyWithoutFollowerInput
    sports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    activityParticipations?: SportActivityParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type SportCreateWithoutActivitiesInput = {
    name: string
    users?: UserSportCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutActivitiesInput = {
    id?: number
    name: string
    users?: UserSportUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutActivitiesInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutActivitiesInput, SportUncheckedCreateWithoutActivitiesInput>
  }

  export type SportActivityParticipantCreateWithoutActivityInput = {
    role: string
    user: UserCreateNestedOneWithoutActivityParticipationsInput
  }

  export type SportActivityParticipantUncheckedCreateWithoutActivityInput = {
    id?: number
    userId: number
    role: string
  }

  export type SportActivityParticipantCreateOrConnectWithoutActivityInput = {
    where: SportActivityParticipantWhereUniqueInput
    create: XOR<SportActivityParticipantCreateWithoutActivityInput, SportActivityParticipantUncheckedCreateWithoutActivityInput>
  }

  export type SportActivityParticipantCreateManyActivityInputEnvelope = {
    data: SportActivityParticipantCreateManyActivityInput | SportActivityParticipantCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUpdateManyWithoutUserNestedInput
    followers?: UserFollowUpdateManyWithoutFollowingNestedInput
    following?: UserFollowUpdateManyWithoutFollowerNestedInput
    sports?: UserSportUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUncheckedUpdateManyWithoutUserNestedInput
    followers?: UserFollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserFollowUncheckedUpdateManyWithoutFollowerNestedInput
    sports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    activityParticipations?: SportActivityParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SportUpsertWithoutActivitiesInput = {
    update: XOR<SportUpdateWithoutActivitiesInput, SportUncheckedUpdateWithoutActivitiesInput>
    create: XOR<SportCreateWithoutActivitiesInput, SportUncheckedCreateWithoutActivitiesInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutActivitiesInput, SportUncheckedUpdateWithoutActivitiesInput>
  }

  export type SportUpdateWithoutActivitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserSportUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserSportUncheckedUpdateManyWithoutSportNestedInput
  }

  export type SportActivityParticipantUpsertWithWhereUniqueWithoutActivityInput = {
    where: SportActivityParticipantWhereUniqueInput
    update: XOR<SportActivityParticipantUpdateWithoutActivityInput, SportActivityParticipantUncheckedUpdateWithoutActivityInput>
    create: XOR<SportActivityParticipantCreateWithoutActivityInput, SportActivityParticipantUncheckedCreateWithoutActivityInput>
  }

  export type SportActivityParticipantUpdateWithWhereUniqueWithoutActivityInput = {
    where: SportActivityParticipantWhereUniqueInput
    data: XOR<SportActivityParticipantUpdateWithoutActivityInput, SportActivityParticipantUncheckedUpdateWithoutActivityInput>
  }

  export type SportActivityParticipantUpdateManyWithWhereWithoutActivityInput = {
    where: SportActivityParticipantScalarWhereInput
    data: XOR<SportActivityParticipantUpdateManyMutationInput, SportActivityParticipantUncheckedUpdateManyWithoutActivityInput>
  }

  export type SportActivityCreateWithoutParticipantsInput = {
    starttime: string
    endtime: string
    description: string
    date?: Date | string
    latitude?: number | null
    longitude?: number | null
    publicity?: string
    user: UserCreateNestedOneWithoutActivitiesInput
    sport: SportCreateNestedOneWithoutActivitiesInput
  }

  export type SportActivityUncheckedCreateWithoutParticipantsInput = {
    id?: number
    userId: number
    sportId: number
    starttime: string
    endtime: string
    description: string
    date?: Date | string
    latitude?: number | null
    longitude?: number | null
    publicity?: string
  }

  export type SportActivityCreateOrConnectWithoutParticipantsInput = {
    where: SportActivityWhereUniqueInput
    create: XOR<SportActivityCreateWithoutParticipantsInput, SportActivityUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutActivityParticipationsInput = {
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeCreateNestedManyWithoutUserInput
    followers?: UserFollowCreateNestedManyWithoutFollowingInput
    following?: UserFollowCreateNestedManyWithoutFollowerInput
    sports?: UserSportCreateNestedManyWithoutUserInput
    activities?: SportActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityParticipationsInput = {
    id?: number
    email: string
    username: string
    password?: string
    bio?: string
    image?: string
    followersCount?: number
    followingCount?: number
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutUserInput
    followers?: UserFollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: UserFollowUncheckedCreateNestedManyWithoutFollowerInput
    sports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    activities?: SportActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityParticipationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityParticipationsInput, UserUncheckedCreateWithoutActivityParticipationsInput>
  }

  export type SportActivityUpsertWithoutParticipantsInput = {
    update: XOR<SportActivityUpdateWithoutParticipantsInput, SportActivityUncheckedUpdateWithoutParticipantsInput>
    create: XOR<SportActivityCreateWithoutParticipantsInput, SportActivityUncheckedCreateWithoutParticipantsInput>
    where?: SportActivityWhereInput
  }

  export type SportActivityUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: SportActivityWhereInput
    data: XOR<SportActivityUpdateWithoutParticipantsInput, SportActivityUncheckedUpdateWithoutParticipantsInput>
  }

  export type SportActivityUpdateWithoutParticipantsInput = {
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
    sport?: SportUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type SportActivityUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutActivityParticipationsInput = {
    update: XOR<UserUpdateWithoutActivityParticipationsInput, UserUncheckedUpdateWithoutActivityParticipationsInput>
    create: XOR<UserCreateWithoutActivityParticipationsInput, UserUncheckedCreateWithoutActivityParticipationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityParticipationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityParticipationsInput, UserUncheckedUpdateWithoutActivityParticipationsInput>
  }

  export type UserUpdateWithoutActivityParticipationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUpdateManyWithoutUserNestedInput
    followers?: UserFollowUpdateManyWithoutFollowingNestedInput
    following?: UserFollowUpdateManyWithoutFollowerNestedInput
    sports?: UserSportUpdateManyWithoutUserNestedInput
    activities?: SportActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityParticipationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    userLikes?: UserLikeUncheckedUpdateManyWithoutUserNestedInput
    followers?: UserFollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: UserFollowUncheckedUpdateManyWithoutFollowerNestedInput
    sports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    activities?: SportActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserLikeCreateManyUserInput = {
    id?: number
    postId: number
    createdAt?: Date | string
  }

  export type UserFollowCreateManyFollowingInput = {
    id?: number
    followerId: number
    createdAt?: Date | string
  }

  export type UserFollowCreateManyFollowerInput = {
    id?: number
    followingId: number
    createdAt?: Date | string
  }

  export type UserSportCreateManyUserInput = {
    id?: number
    sportId: number
    sportRankId: number
    startedAt?: Date | string
    color?: string | null
  }

  export type SportActivityCreateManyUserInput = {
    id?: number
    sportId: number
    starttime: string
    endtime: string
    description: string
    date?: Date | string
    latitude?: number | null
    longitude?: number | null
    publicity?: string
  }

  export type SportActivityParticipantCreateManyUserInput = {
    id?: number
    activityId: number
    role: string
  }

  export type UserLikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutUserLikesNestedInput
  }

  export type UserLikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUpdateWithoutFollowingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type UserFollowUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUncheckedUpdateManyWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUpdateWithoutFollowerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type UserFollowUncheckedUpdateWithoutFollowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUncheckedUpdateManyWithoutFollowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportUpdateWithoutUserInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: SportUpdateOneRequiredWithoutUsersNestedInput
    sportrank?: SportRanksUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSportUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    sportRankId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSportUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    sportRankId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportActivityUpdateWithoutUserInput = {
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
    sport?: SportUpdateOneRequiredWithoutActivitiesNestedInput
    participants?: SportActivityParticipantUpdateManyWithoutActivityNestedInput
  }

  export type SportActivityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
    participants?: SportActivityParticipantUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type SportActivityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
  }

  export type SportActivityParticipantUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    activity?: SportActivityUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type SportActivityParticipantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type SportActivityParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PostHashtagCreateManyPostInput = {
    hashtagId: number
  }

  export type UserLikeCreateManyPostInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type PostCommentCreateManyPostInput = {
    commentId: number
  }

  export type PostHashtagUpdateWithoutPostInput = {
    hashtag?: HashtagUpdateOneRequiredWithoutPostHashtagsNestedInput
  }

  export type PostHashtagUncheckedUpdateWithoutPostInput = {
    hashtagId?: IntFieldUpdateOperationsInput | number
  }

  export type PostHashtagUncheckedUpdateManyWithoutPostInput = {
    hashtagId?: IntFieldUpdateOperationsInput | number
  }

  export type UserLikeUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserLikesNestedInput
  }

  export type UserLikeUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikeUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentUpdateWithoutPostInput = {
    comment?: CommentUpdateOneRequiredWithoutPostCommentNestedInput
  }

  export type PostCommentUncheckedUpdateWithoutPostInput = {
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCommentUncheckedUpdateManyWithoutPostInput = {
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type PostHashtagCreateManyHashtagInput = {
    postId: number
  }

  export type PostHashtagUpdateWithoutHashtagInput = {
    post?: PostUpdateOneRequiredWithoutPostHashtagsNestedInput
  }

  export type PostHashtagUncheckedUpdateWithoutHashtagInput = {
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostHashtagUncheckedUpdateManyWithoutHashtagInput = {
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCommentCreateManyCommentInput = {
    postId: number
  }

  export type PostCommentUpdateWithoutCommentInput = {
    post?: PostUpdateOneRequiredWithoutPostCommentNestedInput
  }

  export type PostCommentUncheckedUpdateWithoutCommentInput = {
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCommentUncheckedUpdateManyWithoutCommentInput = {
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type UserSportCreateManySportInput = {
    id?: number
    userId: number
    sportRankId: number
    startedAt?: Date | string
    color?: string | null
  }

  export type SportActivityCreateManySportInput = {
    id?: number
    userId: number
    starttime: string
    endtime: string
    description: string
    date?: Date | string
    latitude?: number | null
    longitude?: number | null
    publicity?: string
  }

  export type UserSportUpdateWithoutSportInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSportsNestedInput
    sportrank?: SportRanksUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSportUncheckedUpdateWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sportRankId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSportUncheckedUpdateManyWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sportRankId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportActivityUpdateWithoutSportInput = {
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
    participants?: SportActivityParticipantUpdateManyWithoutActivityNestedInput
  }

  export type SportActivityUncheckedUpdateWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
    participants?: SportActivityParticipantUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type SportActivityUncheckedUpdateManyWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    starttime?: StringFieldUpdateOperationsInput | string
    endtime?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    publicity?: StringFieldUpdateOperationsInput | string
  }

  export type UserSportCreateManySportrankInput = {
    id?: number
    userId: number
    sportId: number
    startedAt?: Date | string
    color?: string | null
  }

  export type UserSportUpdateWithoutSportrankInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSportsNestedInput
    sport?: SportUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSportUncheckedUpdateWithoutSportrankInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSportUncheckedUpdateManyWithoutSportrankInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportActivityParticipantCreateManyActivityInput = {
    id?: number
    userId: number
    role: string
  }

  export type SportActivityParticipantUpdateWithoutActivityInput = {
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutActivityParticipationsNestedInput
  }

  export type SportActivityParticipantUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type SportActivityParticipantUncheckedUpdateManyWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
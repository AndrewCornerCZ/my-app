
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
    PostHashtag: 'PostHashtag',
    UserLike: 'UserLike'
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
      modelProps: "user" | "post" | "hashtag" | "comment" | "postHashtag" | "userLike"
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
    postHashtag?: PostHashtagOmit
    userLike?: UserLikeOmit
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
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLikes?: boolean | UserCountOutputTypeCountUserLikesArgs
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
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    postHashtags: number
    comments: number
    userLikes: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postHashtags?: boolean | PostCountOutputTypeCountPostHashtagsArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    userLikes?: boolean | PostCountOutputTypeCountUserLikesArgs
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
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountUserLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikeWhereInput
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
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
    userLikes?: boolean | User$userLikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLikes?: boolean | User$userLikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userLikes: Prisma.$UserLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
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
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    likes: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    text: string | null
    likes: number | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    text: string | null
    likes: number | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    created_at: number
    text: number
    likes: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    likes?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    likes?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    likes?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    likes?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    likes?: true
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
    authorId?: boolean
    postHashtags?: boolean | Post$postHashtagsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    userLikes?: boolean | Post$userLikesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
    likes?: boolean
    authorId?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
    likes?: boolean
    authorId?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    created_at?: boolean
    text?: boolean
    likes?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "text" | "likes" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postHashtags?: boolean | Post$postHashtagsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    userLikes?: boolean | Post$userLikesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      postHashtags: Prisma.$PostHashtagPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      userLikes: Prisma.$UserLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      text: string
      likes: number
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
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userLikes<T extends Post$userLikesArgs<ExtArgs> = {}>(args?: Subset<T, Post$userLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
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
    likes: number | null
    postId: number | null
    authorId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    likes: number | null
    postId: number | null
    authorId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    text: string | null
    likes: number | null
    postId: number | null
    authorId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    text: string | null
    likes: number | null
    postId: number | null
    authorId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    created_at: number
    text: number
    likes: number
    postId: number
    authorId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    likes?: true
    postId?: true
    authorId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    likes?: true
    postId?: true
    authorId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    likes?: true
    postId?: true
    authorId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    likes?: true
    postId?: true
    authorId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    likes?: true
    postId?: true
    authorId?: true
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
    created_at: Date
    text: string
    likes: number
    postId: number
    authorId: number
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
    created_at?: boolean
    text?: boolean
    likes?: boolean
    postId?: boolean
    authorId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
    likes?: boolean
    postId?: boolean
    authorId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
    likes?: boolean
    postId?: boolean
    authorId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    created_at?: boolean
    text?: boolean
    likes?: boolean
    postId?: boolean
    authorId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "text" | "likes" | "postId" | "authorId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      text: string
      likes: number
      postId: number
      authorId: number
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly created_at: FieldRef<"Comment", 'DateTime'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly likes: FieldRef<"Comment", 'Int'>
    readonly postId: FieldRef<"Comment", 'Int'>
    readonly authorId: FieldRef<"Comment", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
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
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    text: 'text',
    likes: 'likes',
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
    created_at: 'created_at',
    text: 'text',
    likes: 'likes',
    postId: 'postId',
    authorId: 'authorId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


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
    userLikes?: UserLikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userLikes?: UserLikeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userLikes?: UserLikeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
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
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    created_at?: DateTimeFilter<"Post"> | Date | string
    text?: StringFilter<"Post"> | string
    likes?: IntFilter<"Post"> | number
    authorId?: IntFilter<"Post"> | number
    postHashtags?: PostHashtagListRelationFilter
    comments?: CommentListRelationFilter
    userLikes?: UserLikeListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    authorId?: SortOrder
    postHashtags?: PostHashtagOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    userLikes?: UserLikeOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    created_at?: DateTimeFilter<"Post"> | Date | string
    text?: StringFilter<"Post"> | string
    likes?: IntFilter<"Post"> | number
    authorId?: IntFilter<"Post"> | number
    postHashtags?: PostHashtagListRelationFilter
    comments?: CommentListRelationFilter
    userLikes?: UserLikeListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
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
    created_at?: DateTimeFilter<"Comment"> | Date | string
    text?: StringFilter<"Comment"> | string
    likes?: IntFilter<"Comment"> | number
    postId?: IntFilter<"Comment"> | number
    authorId?: IntFilter<"Comment"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    created_at?: DateTimeFilter<"Comment"> | Date | string
    text?: StringFilter<"Comment"> | string
    likes?: IntFilter<"Comment"> | number
    postId?: IntFilter<"Comment"> | number
    authorId?: IntFilter<"Comment"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
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
    created_at?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    text?: StringWithAggregatesFilter<"Comment"> | string
    likes?: IntWithAggregatesFilter<"Comment"> | number
    postId?: IntWithAggregatesFilter<"Comment"> | number
    authorId?: IntWithAggregatesFilter<"Comment"> | number
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

  export type UserCreateInput = {
    email: string
    username?: string
    password?: string
    userLikes?: UserLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username?: string
    password?: string
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userLikes?: UserLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userLikes?: UserLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username?: string
    password?: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
    postHashtags?: PostHashtagCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    userLikes?: UserLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
    postHashtags?: PostHashtagUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    userLikes?: UserLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    userLikes?: UserLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
  }

  export type PostUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
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
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    postId: number
    authorId: number
  }

  export type CommentUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateManyInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    postId: number
    authorId: number
  }

  export type CommentUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
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

  export type UserLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type PostHashtagListRelationFilter = {
    every?: PostHashtagWhereInput
    some?: PostHashtagWhereInput
    none?: PostHashtagWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type PostHashtagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    likes?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    likes?: SortOrder
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

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    likes?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
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

  export type UserLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLikeCreateWithoutUserInput, UserLikeUncheckedCreateWithoutUserInput> | UserLikeCreateWithoutUserInput[] | UserLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutUserInput | UserLikeCreateOrConnectWithoutUserInput[]
    createMany?: UserLikeCreateManyUserInputEnvelope
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
  }

  export type UserLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLikeCreateWithoutUserInput, UserLikeUncheckedCreateWithoutUserInput> | UserLikeCreateWithoutUserInput[] | UserLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutUserInput | UserLikeCreateOrConnectWithoutUserInput[]
    createMany?: UserLikeCreateManyUserInputEnvelope
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type PostHashtagCreateNestedManyWithoutPostInput = {
    create?: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput> | PostHashtagCreateWithoutPostInput[] | PostHashtagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutPostInput | PostHashtagCreateOrConnectWithoutPostInput[]
    createMany?: PostHashtagCreateManyPostInputEnvelope
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserLikeCreateNestedManyWithoutPostInput = {
    create?: XOR<UserLikeCreateWithoutPostInput, UserLikeUncheckedCreateWithoutPostInput> | UserLikeCreateWithoutPostInput[] | UserLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutPostInput | UserLikeCreateOrConnectWithoutPostInput[]
    createMany?: UserLikeCreateManyPostInputEnvelope
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
  }

  export type PostHashtagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput> | PostHashtagCreateWithoutPostInput[] | PostHashtagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutPostInput | PostHashtagCreateOrConnectWithoutPostInput[]
    createMany?: PostHashtagCreateManyPostInputEnvelope
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserLikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<UserLikeCreateWithoutPostInput, UserLikeUncheckedCreateWithoutPostInput> | UserLikeCreateWithoutPostInput[] | UserLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: UserLikeCreateOrConnectWithoutPostInput | UserLikeCreateOrConnectWithoutPostInput[]
    createMany?: UserLikeCreateManyPostInputEnvelope
    connect?: UserLikeWhereUniqueInput | UserLikeWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
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

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
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

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
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

  export type CommentCreateWithoutPostInput = {
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
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

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    created_at?: DateTimeFilter<"Comment"> | Date | string
    text?: StringFilter<"Comment"> | string
    likes?: IntFilter<"Comment"> | number
    postId?: IntFilter<"Comment"> | number
    authorId?: IntFilter<"Comment"> | number
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

  export type PostCreateWithoutCommentsInput = {
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
    postHashtags?: PostHashtagCreateNestedManyWithoutPostInput
    userLikes?: UserLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
    postHashtags?: PostHashtagUncheckedCreateNestedManyWithoutPostInput
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUpdateManyWithoutPostNestedInput
    userLikes?: UserLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUncheckedUpdateManyWithoutPostNestedInput
    userLikes?: UserLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutPostHashtagsInput = {
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
    comments?: CommentCreateNestedManyWithoutPostInput
    userLikes?: UserLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostHashtagsInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    userLikes?: UserLikeUncheckedCreateNestedManyWithoutPostInput
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
    authorId?: IntFieldUpdateOperationsInput | number
    comments?: CommentUpdateManyWithoutPostNestedInput
    userLikes?: UserLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostHashtagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    userLikes?: UserLikeUncheckedUpdateManyWithoutPostNestedInput
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
    username?: string
    password?: string
  }

  export type UserUncheckedCreateWithoutUserLikesInput = {
    id?: number
    email: string
    username?: string
    password?: string
  }

  export type UserCreateOrConnectWithoutUserLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserLikesInput, UserUncheckedCreateWithoutUserLikesInput>
  }

  export type PostCreateWithoutUserLikesInput = {
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
    postHashtags?: PostHashtagCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserLikesInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
    postHashtags?: PostHashtagUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
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
  }

  export type UserUncheckedUpdateWithoutUserLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
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
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    postHashtags?: PostHashtagUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserLikeCreateManyUserInput = {
    id?: number
    postId: number
    createdAt?: Date | string
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

  export type PostHashtagCreateManyPostInput = {
    hashtagId: number
  }

  export type CommentCreateManyPostInput = {
    id?: number
    created_at?: Date | string
    text: string
    likes?: number
    authorId: number
  }

  export type UserLikeCreateManyPostInput = {
    id?: number
    userId: number
    createdAt?: Date | string
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

  export type CommentUpdateWithoutPostInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
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

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
 * Model CreatedFile
 * 
 */
export type CreatedFile = $Result.DefaultSelection<Prisma.$CreatedFilePayload>
/**
 * Model Stroke
 * 
 */
export type Stroke = $Result.DefaultSelection<Prisma.$StrokePayload>
/**
 * Model Collaborator
 * 
 */
export type Collaborator = $Result.DefaultSelection<Prisma.$CollaboratorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  EDITOR: 'EDITOR'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * `prisma.createdFile`: Exposes CRUD operations for the **CreatedFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreatedFiles
    * const createdFiles = await prisma.createdFile.findMany()
    * ```
    */
  get createdFile(): Prisma.CreatedFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stroke`: Exposes CRUD operations for the **Stroke** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Strokes
    * const strokes = await prisma.stroke.findMany()
    * ```
    */
  get stroke(): Prisma.StrokeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collaborator`: Exposes CRUD operations for the **Collaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collaborators
    * const collaborators = await prisma.collaborator.findMany()
    * ```
    */
  get collaborator(): Prisma.CollaboratorDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    CreatedFile: 'CreatedFile',
    Stroke: 'Stroke',
    Collaborator: 'Collaborator'
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
      modelProps: "user" | "createdFile" | "stroke" | "collaborator"
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
      CreatedFile: {
        payload: Prisma.$CreatedFilePayload<ExtArgs>
        fields: Prisma.CreatedFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreatedFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreatedFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedFilePayload>
          }
          findFirst: {
            args: Prisma.CreatedFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreatedFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedFilePayload>
          }
          findMany: {
            args: Prisma.CreatedFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedFilePayload>[]
          }
          create: {
            args: Prisma.CreatedFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedFilePayload>
          }
          createMany: {
            args: Prisma.CreatedFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreatedFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedFilePayload>[]
          }
          delete: {
            args: Prisma.CreatedFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedFilePayload>
          }
          update: {
            args: Prisma.CreatedFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedFilePayload>
          }
          deleteMany: {
            args: Prisma.CreatedFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreatedFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreatedFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedFilePayload>[]
          }
          upsert: {
            args: Prisma.CreatedFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedFilePayload>
          }
          aggregate: {
            args: Prisma.CreatedFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreatedFile>
          }
          groupBy: {
            args: Prisma.CreatedFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreatedFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreatedFileCountArgs<ExtArgs>
            result: $Utils.Optional<CreatedFileCountAggregateOutputType> | number
          }
        }
      }
      Stroke: {
        payload: Prisma.$StrokePayload<ExtArgs>
        fields: Prisma.StrokeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StrokeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StrokeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          findFirst: {
            args: Prisma.StrokeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StrokeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          findMany: {
            args: Prisma.StrokeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>[]
          }
          create: {
            args: Prisma.StrokeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          createMany: {
            args: Prisma.StrokeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StrokeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>[]
          }
          delete: {
            args: Prisma.StrokeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          update: {
            args: Prisma.StrokeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          deleteMany: {
            args: Prisma.StrokeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StrokeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StrokeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>[]
          }
          upsert: {
            args: Prisma.StrokeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          aggregate: {
            args: Prisma.StrokeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStroke>
          }
          groupBy: {
            args: Prisma.StrokeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StrokeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StrokeCountArgs<ExtArgs>
            result: $Utils.Optional<StrokeCountAggregateOutputType> | number
          }
        }
      }
      Collaborator: {
        payload: Prisma.$CollaboratorPayload<ExtArgs>
        fields: Prisma.CollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          findFirst: {
            args: Prisma.CollaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          findMany: {
            args: Prisma.CollaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          create: {
            args: Prisma.CollaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          createMany: {
            args: Prisma.CollaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          delete: {
            args: Prisma.CollaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          update: {
            args: Prisma.CollaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.CollaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollaboratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          upsert: {
            args: Prisma.CollaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          aggregate: {
            args: Prisma.CollaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollaborator>
          }
          groupBy: {
            args: Prisma.CollaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<CollaboratorCountAggregateOutputType> | number
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
    createdFile?: CreatedFileOmit
    stroke?: StrokeOmit
    collaborator?: CollaboratorOmit
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
    collaborations: number
    createdFiles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborations?: boolean | UserCountOutputTypeCountCollaborationsArgs
    createdFiles?: boolean | UserCountOutputTypeCountCreatedFilesArgs
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
  export type UserCountOutputTypeCountCollaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatedFileWhereInput
  }


  /**
   * Count Type CreatedFileCountOutputType
   */

  export type CreatedFileCountOutputType = {
    collaborators: number
    strokes: number
  }

  export type CreatedFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborators?: boolean | CreatedFileCountOutputTypeCountCollaboratorsArgs
    strokes?: boolean | CreatedFileCountOutputTypeCountStrokesArgs
  }

  // Custom InputTypes
  /**
   * CreatedFileCountOutputType without action
   */
  export type CreatedFileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFileCountOutputType
     */
    select?: CreatedFileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreatedFileCountOutputType without action
   */
  export type CreatedFileCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
  }

  /**
   * CreatedFileCountOutputType without action
   */
  export type CreatedFileCountOutputTypeCountStrokesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StrokeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    createdAt: Date | null
    email: string | null
    name: string | null
    bio: string | null
    profilePhoto: string | null
    userName: string | null
    provider: string | null
    id: string | null
  }

  export type UserMaxAggregateOutputType = {
    createdAt: Date | null
    email: string | null
    name: string | null
    bio: string | null
    profilePhoto: string | null
    userName: string | null
    provider: string | null
    id: string | null
  }

  export type UserCountAggregateOutputType = {
    createdAt: number
    email: number
    name: number
    bio: number
    profilePhoto: number
    userName: number
    provider: number
    id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    createdAt?: true
    email?: true
    name?: true
    bio?: true
    profilePhoto?: true
    userName?: true
    provider?: true
    id?: true
  }

  export type UserMaxAggregateInputType = {
    createdAt?: true
    email?: true
    name?: true
    bio?: true
    profilePhoto?: true
    userName?: true
    provider?: true
    id?: true
  }

  export type UserCountAggregateInputType = {
    createdAt?: true
    email?: true
    name?: true
    bio?: true
    profilePhoto?: true
    userName?: true
    provider?: true
    id?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    createdAt: Date
    email: string
    name: string | null
    bio: string | null
    profilePhoto: string | null
    userName: string
    provider: string
    id: string
    _count: UserCountAggregateOutputType | null
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
    createdAt?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    profilePhoto?: boolean
    userName?: boolean
    provider?: boolean
    id?: boolean
    collaborations?: boolean | User$collaborationsArgs<ExtArgs>
    createdFiles?: boolean | User$createdFilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    profilePhoto?: boolean
    userName?: boolean
    provider?: boolean
    id?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    profilePhoto?: boolean
    userName?: boolean
    provider?: boolean
    id?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    createdAt?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    profilePhoto?: boolean
    userName?: boolean
    provider?: boolean
    id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"createdAt" | "email" | "name" | "bio" | "profilePhoto" | "userName" | "provider" | "id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborations?: boolean | User$collaborationsArgs<ExtArgs>
    createdFiles?: boolean | User$createdFilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      collaborations: Prisma.$CollaboratorPayload<ExtArgs>[]
      createdFiles: Prisma.$CreatedFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      createdAt: Date
      email: string
      name: string | null
      bio: string | null
      profilePhoto: string | null
      userName: string
      provider: string
      id: string
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
     * // Only select the `createdAt`
     * const userWithCreatedAtOnly = await prisma.user.findMany({ select: { createdAt: true } })
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
     * // Create many Users and only return the `createdAt`
     * const userWithCreatedAtOnly = await prisma.user.createManyAndReturn({
     *   select: { createdAt: true },
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
     * // Update zero or more Users and only return the `createdAt`
     * const userWithCreatedAtOnly = await prisma.user.updateManyAndReturn({
     *   select: { createdAt: true },
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
    collaborations<T extends User$collaborationsArgs<ExtArgs> = {}>(args?: Subset<T, User$collaborationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdFiles<T extends User$createdFilesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly profilePhoto: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly id: FieldRef<"User", 'String'>
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
   * User.collaborations
   */
  export type User$collaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    cursor?: CollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * User.createdFiles
   */
  export type User$createdFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileInclude<ExtArgs> | null
    where?: CreatedFileWhereInput
    orderBy?: CreatedFileOrderByWithRelationInput | CreatedFileOrderByWithRelationInput[]
    cursor?: CreatedFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreatedFileScalarFieldEnum | CreatedFileScalarFieldEnum[]
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
   * Model CreatedFile
   */

  export type AggregateCreatedFile = {
    _count: CreatedFileCountAggregateOutputType | null
    _min: CreatedFileMinAggregateOutputType | null
    _max: CreatedFileMaxAggregateOutputType | null
  }

  export type CreatedFileMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdByUserId: string | null
    name: string | null
  }

  export type CreatedFileMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdByUserId: string | null
    name: string | null
  }

  export type CreatedFileCountAggregateOutputType = {
    id: number
    createdAt: number
    createdByUserId: number
    name: number
    _all: number
  }


  export type CreatedFileMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdByUserId?: true
    name?: true
  }

  export type CreatedFileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdByUserId?: true
    name?: true
  }

  export type CreatedFileCountAggregateInputType = {
    id?: true
    createdAt?: true
    createdByUserId?: true
    name?: true
    _all?: true
  }

  export type CreatedFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreatedFile to aggregate.
     */
    where?: CreatedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatedFiles to fetch.
     */
    orderBy?: CreatedFileOrderByWithRelationInput | CreatedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreatedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreatedFiles
    **/
    _count?: true | CreatedFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreatedFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreatedFileMaxAggregateInputType
  }

  export type GetCreatedFileAggregateType<T extends CreatedFileAggregateArgs> = {
        [P in keyof T & keyof AggregateCreatedFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreatedFile[P]>
      : GetScalarType<T[P], AggregateCreatedFile[P]>
  }




  export type CreatedFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatedFileWhereInput
    orderBy?: CreatedFileOrderByWithAggregationInput | CreatedFileOrderByWithAggregationInput[]
    by: CreatedFileScalarFieldEnum[] | CreatedFileScalarFieldEnum
    having?: CreatedFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreatedFileCountAggregateInputType | true
    _min?: CreatedFileMinAggregateInputType
    _max?: CreatedFileMaxAggregateInputType
  }

  export type CreatedFileGroupByOutputType = {
    id: string
    createdAt: Date
    createdByUserId: string
    name: string
    _count: CreatedFileCountAggregateOutputType | null
    _min: CreatedFileMinAggregateOutputType | null
    _max: CreatedFileMaxAggregateOutputType | null
  }

  type GetCreatedFileGroupByPayload<T extends CreatedFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreatedFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreatedFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreatedFileGroupByOutputType[P]>
            : GetScalarType<T[P], CreatedFileGroupByOutputType[P]>
        }
      >
    >


  export type CreatedFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    name?: boolean
    collaborators?: boolean | CreatedFile$collaboratorsArgs<ExtArgs>
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    strokes?: boolean | CreatedFile$strokesArgs<ExtArgs>
    _count?: boolean | CreatedFileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["createdFile"]>

  export type CreatedFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    name?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["createdFile"]>

  export type CreatedFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    name?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["createdFile"]>

  export type CreatedFileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    name?: boolean
  }

  export type CreatedFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "createdByUserId" | "name", ExtArgs["result"]["createdFile"]>
  export type CreatedFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborators?: boolean | CreatedFile$collaboratorsArgs<ExtArgs>
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    strokes?: boolean | CreatedFile$strokesArgs<ExtArgs>
    _count?: boolean | CreatedFileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreatedFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreatedFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreatedFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreatedFile"
    objects: {
      collaborators: Prisma.$CollaboratorPayload<ExtArgs>[]
      createdByUser: Prisma.$UserPayload<ExtArgs>
      strokes: Prisma.$StrokePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      createdByUserId: string
      name: string
    }, ExtArgs["result"]["createdFile"]>
    composites: {}
  }

  type CreatedFileGetPayload<S extends boolean | null | undefined | CreatedFileDefaultArgs> = $Result.GetResult<Prisma.$CreatedFilePayload, S>

  type CreatedFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreatedFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreatedFileCountAggregateInputType | true
    }

  export interface CreatedFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreatedFile'], meta: { name: 'CreatedFile' } }
    /**
     * Find zero or one CreatedFile that matches the filter.
     * @param {CreatedFileFindUniqueArgs} args - Arguments to find a CreatedFile
     * @example
     * // Get one CreatedFile
     * const createdFile = await prisma.createdFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreatedFileFindUniqueArgs>(args: SelectSubset<T, CreatedFileFindUniqueArgs<ExtArgs>>): Prisma__CreatedFileClient<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreatedFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreatedFileFindUniqueOrThrowArgs} args - Arguments to find a CreatedFile
     * @example
     * // Get one CreatedFile
     * const createdFile = await prisma.createdFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreatedFileFindUniqueOrThrowArgs>(args: SelectSubset<T, CreatedFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreatedFileClient<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreatedFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedFileFindFirstArgs} args - Arguments to find a CreatedFile
     * @example
     * // Get one CreatedFile
     * const createdFile = await prisma.createdFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreatedFileFindFirstArgs>(args?: SelectSubset<T, CreatedFileFindFirstArgs<ExtArgs>>): Prisma__CreatedFileClient<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreatedFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedFileFindFirstOrThrowArgs} args - Arguments to find a CreatedFile
     * @example
     * // Get one CreatedFile
     * const createdFile = await prisma.createdFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreatedFileFindFirstOrThrowArgs>(args?: SelectSubset<T, CreatedFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreatedFileClient<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreatedFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreatedFiles
     * const createdFiles = await prisma.createdFile.findMany()
     * 
     * // Get first 10 CreatedFiles
     * const createdFiles = await prisma.createdFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const createdFileWithIdOnly = await prisma.createdFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreatedFileFindManyArgs>(args?: SelectSubset<T, CreatedFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreatedFile.
     * @param {CreatedFileCreateArgs} args - Arguments to create a CreatedFile.
     * @example
     * // Create one CreatedFile
     * const CreatedFile = await prisma.createdFile.create({
     *   data: {
     *     // ... data to create a CreatedFile
     *   }
     * })
     * 
     */
    create<T extends CreatedFileCreateArgs>(args: SelectSubset<T, CreatedFileCreateArgs<ExtArgs>>): Prisma__CreatedFileClient<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreatedFiles.
     * @param {CreatedFileCreateManyArgs} args - Arguments to create many CreatedFiles.
     * @example
     * // Create many CreatedFiles
     * const createdFile = await prisma.createdFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreatedFileCreateManyArgs>(args?: SelectSubset<T, CreatedFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreatedFiles and returns the data saved in the database.
     * @param {CreatedFileCreateManyAndReturnArgs} args - Arguments to create many CreatedFiles.
     * @example
     * // Create many CreatedFiles
     * const createdFile = await prisma.createdFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreatedFiles and only return the `id`
     * const createdFileWithIdOnly = await prisma.createdFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreatedFileCreateManyAndReturnArgs>(args?: SelectSubset<T, CreatedFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreatedFile.
     * @param {CreatedFileDeleteArgs} args - Arguments to delete one CreatedFile.
     * @example
     * // Delete one CreatedFile
     * const CreatedFile = await prisma.createdFile.delete({
     *   where: {
     *     // ... filter to delete one CreatedFile
     *   }
     * })
     * 
     */
    delete<T extends CreatedFileDeleteArgs>(args: SelectSubset<T, CreatedFileDeleteArgs<ExtArgs>>): Prisma__CreatedFileClient<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreatedFile.
     * @param {CreatedFileUpdateArgs} args - Arguments to update one CreatedFile.
     * @example
     * // Update one CreatedFile
     * const createdFile = await prisma.createdFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreatedFileUpdateArgs>(args: SelectSubset<T, CreatedFileUpdateArgs<ExtArgs>>): Prisma__CreatedFileClient<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreatedFiles.
     * @param {CreatedFileDeleteManyArgs} args - Arguments to filter CreatedFiles to delete.
     * @example
     * // Delete a few CreatedFiles
     * const { count } = await prisma.createdFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreatedFileDeleteManyArgs>(args?: SelectSubset<T, CreatedFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreatedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreatedFiles
     * const createdFile = await prisma.createdFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreatedFileUpdateManyArgs>(args: SelectSubset<T, CreatedFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreatedFiles and returns the data updated in the database.
     * @param {CreatedFileUpdateManyAndReturnArgs} args - Arguments to update many CreatedFiles.
     * @example
     * // Update many CreatedFiles
     * const createdFile = await prisma.createdFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreatedFiles and only return the `id`
     * const createdFileWithIdOnly = await prisma.createdFile.updateManyAndReturn({
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
    updateManyAndReturn<T extends CreatedFileUpdateManyAndReturnArgs>(args: SelectSubset<T, CreatedFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreatedFile.
     * @param {CreatedFileUpsertArgs} args - Arguments to update or create a CreatedFile.
     * @example
     * // Update or create a CreatedFile
     * const createdFile = await prisma.createdFile.upsert({
     *   create: {
     *     // ... data to create a CreatedFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreatedFile we want to update
     *   }
     * })
     */
    upsert<T extends CreatedFileUpsertArgs>(args: SelectSubset<T, CreatedFileUpsertArgs<ExtArgs>>): Prisma__CreatedFileClient<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreatedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedFileCountArgs} args - Arguments to filter CreatedFiles to count.
     * @example
     * // Count the number of CreatedFiles
     * const count = await prisma.createdFile.count({
     *   where: {
     *     // ... the filter for the CreatedFiles we want to count
     *   }
     * })
    **/
    count<T extends CreatedFileCountArgs>(
      args?: Subset<T, CreatedFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreatedFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreatedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreatedFileAggregateArgs>(args: Subset<T, CreatedFileAggregateArgs>): Prisma.PrismaPromise<GetCreatedFileAggregateType<T>>

    /**
     * Group by CreatedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedFileGroupByArgs} args - Group by arguments.
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
      T extends CreatedFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreatedFileGroupByArgs['orderBy'] }
        : { orderBy?: CreatedFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreatedFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatedFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreatedFile model
   */
  readonly fields: CreatedFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreatedFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreatedFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collaborators<T extends CreatedFile$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, CreatedFile$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    strokes<T extends CreatedFile$strokesArgs<ExtArgs> = {}>(args?: Subset<T, CreatedFile$strokesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CreatedFile model
   */ 
  interface CreatedFileFieldRefs {
    readonly id: FieldRef<"CreatedFile", 'String'>
    readonly createdAt: FieldRef<"CreatedFile", 'DateTime'>
    readonly createdByUserId: FieldRef<"CreatedFile", 'String'>
    readonly name: FieldRef<"CreatedFile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CreatedFile findUnique
   */
  export type CreatedFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileInclude<ExtArgs> | null
    /**
     * Filter, which CreatedFile to fetch.
     */
    where: CreatedFileWhereUniqueInput
  }

  /**
   * CreatedFile findUniqueOrThrow
   */
  export type CreatedFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileInclude<ExtArgs> | null
    /**
     * Filter, which CreatedFile to fetch.
     */
    where: CreatedFileWhereUniqueInput
  }

  /**
   * CreatedFile findFirst
   */
  export type CreatedFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileInclude<ExtArgs> | null
    /**
     * Filter, which CreatedFile to fetch.
     */
    where?: CreatedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatedFiles to fetch.
     */
    orderBy?: CreatedFileOrderByWithRelationInput | CreatedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatedFiles.
     */
    cursor?: CreatedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatedFiles.
     */
    distinct?: CreatedFileScalarFieldEnum | CreatedFileScalarFieldEnum[]
  }

  /**
   * CreatedFile findFirstOrThrow
   */
  export type CreatedFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileInclude<ExtArgs> | null
    /**
     * Filter, which CreatedFile to fetch.
     */
    where?: CreatedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatedFiles to fetch.
     */
    orderBy?: CreatedFileOrderByWithRelationInput | CreatedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatedFiles.
     */
    cursor?: CreatedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatedFiles.
     */
    distinct?: CreatedFileScalarFieldEnum | CreatedFileScalarFieldEnum[]
  }

  /**
   * CreatedFile findMany
   */
  export type CreatedFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileInclude<ExtArgs> | null
    /**
     * Filter, which CreatedFiles to fetch.
     */
    where?: CreatedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatedFiles to fetch.
     */
    orderBy?: CreatedFileOrderByWithRelationInput | CreatedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreatedFiles.
     */
    cursor?: CreatedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatedFiles.
     */
    skip?: number
    distinct?: CreatedFileScalarFieldEnum | CreatedFileScalarFieldEnum[]
  }

  /**
   * CreatedFile create
   */
  export type CreatedFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileInclude<ExtArgs> | null
    /**
     * The data needed to create a CreatedFile.
     */
    data: XOR<CreatedFileCreateInput, CreatedFileUncheckedCreateInput>
  }

  /**
   * CreatedFile createMany
   */
  export type CreatedFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreatedFiles.
     */
    data: CreatedFileCreateManyInput | CreatedFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreatedFile createManyAndReturn
   */
  export type CreatedFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * The data used to create many CreatedFiles.
     */
    data: CreatedFileCreateManyInput | CreatedFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreatedFile update
   */
  export type CreatedFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileInclude<ExtArgs> | null
    /**
     * The data needed to update a CreatedFile.
     */
    data: XOR<CreatedFileUpdateInput, CreatedFileUncheckedUpdateInput>
    /**
     * Choose, which CreatedFile to update.
     */
    where: CreatedFileWhereUniqueInput
  }

  /**
   * CreatedFile updateMany
   */
  export type CreatedFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreatedFiles.
     */
    data: XOR<CreatedFileUpdateManyMutationInput, CreatedFileUncheckedUpdateManyInput>
    /**
     * Filter which CreatedFiles to update
     */
    where?: CreatedFileWhereInput
    /**
     * Limit how many CreatedFiles to update.
     */
    limit?: number
  }

  /**
   * CreatedFile updateManyAndReturn
   */
  export type CreatedFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * The data used to update CreatedFiles.
     */
    data: XOR<CreatedFileUpdateManyMutationInput, CreatedFileUncheckedUpdateManyInput>
    /**
     * Filter which CreatedFiles to update
     */
    where?: CreatedFileWhereInput
    /**
     * Limit how many CreatedFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreatedFile upsert
   */
  export type CreatedFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileInclude<ExtArgs> | null
    /**
     * The filter to search for the CreatedFile to update in case it exists.
     */
    where: CreatedFileWhereUniqueInput
    /**
     * In case the CreatedFile found by the `where` argument doesn't exist, create a new CreatedFile with this data.
     */
    create: XOR<CreatedFileCreateInput, CreatedFileUncheckedCreateInput>
    /**
     * In case the CreatedFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreatedFileUpdateInput, CreatedFileUncheckedUpdateInput>
  }

  /**
   * CreatedFile delete
   */
  export type CreatedFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileInclude<ExtArgs> | null
    /**
     * Filter which CreatedFile to delete.
     */
    where: CreatedFileWhereUniqueInput
  }

  /**
   * CreatedFile deleteMany
   */
  export type CreatedFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreatedFiles to delete
     */
    where?: CreatedFileWhereInput
    /**
     * Limit how many CreatedFiles to delete.
     */
    limit?: number
  }

  /**
   * CreatedFile.collaborators
   */
  export type CreatedFile$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    cursor?: CollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * CreatedFile.strokes
   */
  export type CreatedFile$strokesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    where?: StrokeWhereInput
    orderBy?: StrokeOrderByWithRelationInput | StrokeOrderByWithRelationInput[]
    cursor?: StrokeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StrokeScalarFieldEnum | StrokeScalarFieldEnum[]
  }

  /**
   * CreatedFile without action
   */
  export type CreatedFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedFile
     */
    select?: CreatedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedFile
     */
    omit?: CreatedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedFileInclude<ExtArgs> | null
  }


  /**
   * Model Stroke
   */

  export type AggregateStroke = {
    _count: StrokeCountAggregateOutputType | null
    _avg: StrokeAvgAggregateOutputType | null
    _sum: StrokeSumAggregateOutputType | null
    _min: StrokeMinAggregateOutputType | null
    _max: StrokeMaxAggregateOutputType | null
  }

  export type StrokeAvgAggregateOutputType = {
    x: number | null
    y: number | null
    w: number | null
    h: number | null
    radius: number | null
    fontSize: number | null
  }

  export type StrokeSumAggregateOutputType = {
    x: number | null
    y: number | null
    w: number | null
    h: number | null
    radius: number | null
    fontSize: number | null
  }

  export type StrokeMinAggregateOutputType = {
    id: string | null
    fileId: string | null
    type: string | null
    x: number | null
    y: number | null
    w: number | null
    h: number | null
    radius: number | null
    text: string | null
    fontSize: number | null
    fontFamily: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StrokeMaxAggregateOutputType = {
    id: string | null
    fileId: string | null
    type: string | null
    x: number | null
    y: number | null
    w: number | null
    h: number | null
    radius: number | null
    text: string | null
    fontSize: number | null
    fontFamily: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StrokeCountAggregateOutputType = {
    id: number
    fileId: number
    type: number
    x: number
    y: number
    w: number
    h: number
    radius: number
    text: number
    fontSize: number
    fontFamily: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StrokeAvgAggregateInputType = {
    x?: true
    y?: true
    w?: true
    h?: true
    radius?: true
    fontSize?: true
  }

  export type StrokeSumAggregateInputType = {
    x?: true
    y?: true
    w?: true
    h?: true
    radius?: true
    fontSize?: true
  }

  export type StrokeMinAggregateInputType = {
    id?: true
    fileId?: true
    type?: true
    x?: true
    y?: true
    w?: true
    h?: true
    radius?: true
    text?: true
    fontSize?: true
    fontFamily?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StrokeMaxAggregateInputType = {
    id?: true
    fileId?: true
    type?: true
    x?: true
    y?: true
    w?: true
    h?: true
    radius?: true
    text?: true
    fontSize?: true
    fontFamily?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StrokeCountAggregateInputType = {
    id?: true
    fileId?: true
    type?: true
    x?: true
    y?: true
    w?: true
    h?: true
    radius?: true
    text?: true
    fontSize?: true
    fontFamily?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StrokeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stroke to aggregate.
     */
    where?: StrokeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strokes to fetch.
     */
    orderBy?: StrokeOrderByWithRelationInput | StrokeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StrokeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strokes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strokes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Strokes
    **/
    _count?: true | StrokeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StrokeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StrokeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StrokeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StrokeMaxAggregateInputType
  }

  export type GetStrokeAggregateType<T extends StrokeAggregateArgs> = {
        [P in keyof T & keyof AggregateStroke]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStroke[P]>
      : GetScalarType<T[P], AggregateStroke[P]>
  }




  export type StrokeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StrokeWhereInput
    orderBy?: StrokeOrderByWithAggregationInput | StrokeOrderByWithAggregationInput[]
    by: StrokeScalarFieldEnum[] | StrokeScalarFieldEnum
    having?: StrokeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StrokeCountAggregateInputType | true
    _avg?: StrokeAvgAggregateInputType
    _sum?: StrokeSumAggregateInputType
    _min?: StrokeMinAggregateInputType
    _max?: StrokeMaxAggregateInputType
  }

  export type StrokeGroupByOutputType = {
    id: string
    fileId: string
    type: string
    x: number | null
    y: number | null
    w: number | null
    h: number | null
    radius: number | null
    text: string | null
    fontSize: number | null
    fontFamily: string | null
    color: string | null
    createdAt: Date
    updatedAt: Date
    _count: StrokeCountAggregateOutputType | null
    _avg: StrokeAvgAggregateOutputType | null
    _sum: StrokeSumAggregateOutputType | null
    _min: StrokeMinAggregateOutputType | null
    _max: StrokeMaxAggregateOutputType | null
  }

  type GetStrokeGroupByPayload<T extends StrokeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StrokeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StrokeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StrokeGroupByOutputType[P]>
            : GetScalarType<T[P], StrokeGroupByOutputType[P]>
        }
      >
    >


  export type StrokeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    w?: boolean
    h?: boolean
    radius?: boolean
    text?: boolean
    fontSize?: boolean
    fontFamily?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stroke"]>

  export type StrokeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    w?: boolean
    h?: boolean
    radius?: boolean
    text?: boolean
    fontSize?: boolean
    fontFamily?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stroke"]>

  export type StrokeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    w?: boolean
    h?: boolean
    radius?: boolean
    text?: boolean
    fontSize?: boolean
    fontFamily?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stroke"]>

  export type StrokeSelectScalar = {
    id?: boolean
    fileId?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    w?: boolean
    h?: boolean
    radius?: boolean
    text?: boolean
    fontSize?: boolean
    fontFamily?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StrokeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "type" | "x" | "y" | "w" | "h" | "radius" | "text" | "fontSize" | "fontFamily" | "color" | "createdAt" | "updatedAt", ExtArgs["result"]["stroke"]>
  export type StrokeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
  }
  export type StrokeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
  }
  export type StrokeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
  }

  export type $StrokePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stroke"
    objects: {
      file: Prisma.$CreatedFilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileId: string
      type: string
      x: number | null
      y: number | null
      w: number | null
      h: number | null
      radius: number | null
      text: string | null
      fontSize: number | null
      fontFamily: string | null
      color: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stroke"]>
    composites: {}
  }

  type StrokeGetPayload<S extends boolean | null | undefined | StrokeDefaultArgs> = $Result.GetResult<Prisma.$StrokePayload, S>

  type StrokeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StrokeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StrokeCountAggregateInputType | true
    }

  export interface StrokeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stroke'], meta: { name: 'Stroke' } }
    /**
     * Find zero or one Stroke that matches the filter.
     * @param {StrokeFindUniqueArgs} args - Arguments to find a Stroke
     * @example
     * // Get one Stroke
     * const stroke = await prisma.stroke.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StrokeFindUniqueArgs>(args: SelectSubset<T, StrokeFindUniqueArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stroke that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StrokeFindUniqueOrThrowArgs} args - Arguments to find a Stroke
     * @example
     * // Get one Stroke
     * const stroke = await prisma.stroke.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StrokeFindUniqueOrThrowArgs>(args: SelectSubset<T, StrokeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stroke that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeFindFirstArgs} args - Arguments to find a Stroke
     * @example
     * // Get one Stroke
     * const stroke = await prisma.stroke.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StrokeFindFirstArgs>(args?: SelectSubset<T, StrokeFindFirstArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stroke that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeFindFirstOrThrowArgs} args - Arguments to find a Stroke
     * @example
     * // Get one Stroke
     * const stroke = await prisma.stroke.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StrokeFindFirstOrThrowArgs>(args?: SelectSubset<T, StrokeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Strokes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Strokes
     * const strokes = await prisma.stroke.findMany()
     * 
     * // Get first 10 Strokes
     * const strokes = await prisma.stroke.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const strokeWithIdOnly = await prisma.stroke.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StrokeFindManyArgs>(args?: SelectSubset<T, StrokeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stroke.
     * @param {StrokeCreateArgs} args - Arguments to create a Stroke.
     * @example
     * // Create one Stroke
     * const Stroke = await prisma.stroke.create({
     *   data: {
     *     // ... data to create a Stroke
     *   }
     * })
     * 
     */
    create<T extends StrokeCreateArgs>(args: SelectSubset<T, StrokeCreateArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Strokes.
     * @param {StrokeCreateManyArgs} args - Arguments to create many Strokes.
     * @example
     * // Create many Strokes
     * const stroke = await prisma.stroke.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StrokeCreateManyArgs>(args?: SelectSubset<T, StrokeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Strokes and returns the data saved in the database.
     * @param {StrokeCreateManyAndReturnArgs} args - Arguments to create many Strokes.
     * @example
     * // Create many Strokes
     * const stroke = await prisma.stroke.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Strokes and only return the `id`
     * const strokeWithIdOnly = await prisma.stroke.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StrokeCreateManyAndReturnArgs>(args?: SelectSubset<T, StrokeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stroke.
     * @param {StrokeDeleteArgs} args - Arguments to delete one Stroke.
     * @example
     * // Delete one Stroke
     * const Stroke = await prisma.stroke.delete({
     *   where: {
     *     // ... filter to delete one Stroke
     *   }
     * })
     * 
     */
    delete<T extends StrokeDeleteArgs>(args: SelectSubset<T, StrokeDeleteArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stroke.
     * @param {StrokeUpdateArgs} args - Arguments to update one Stroke.
     * @example
     * // Update one Stroke
     * const stroke = await prisma.stroke.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StrokeUpdateArgs>(args: SelectSubset<T, StrokeUpdateArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Strokes.
     * @param {StrokeDeleteManyArgs} args - Arguments to filter Strokes to delete.
     * @example
     * // Delete a few Strokes
     * const { count } = await prisma.stroke.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StrokeDeleteManyArgs>(args?: SelectSubset<T, StrokeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Strokes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Strokes
     * const stroke = await prisma.stroke.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StrokeUpdateManyArgs>(args: SelectSubset<T, StrokeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Strokes and returns the data updated in the database.
     * @param {StrokeUpdateManyAndReturnArgs} args - Arguments to update many Strokes.
     * @example
     * // Update many Strokes
     * const stroke = await prisma.stroke.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Strokes and only return the `id`
     * const strokeWithIdOnly = await prisma.stroke.updateManyAndReturn({
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
    updateManyAndReturn<T extends StrokeUpdateManyAndReturnArgs>(args: SelectSubset<T, StrokeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stroke.
     * @param {StrokeUpsertArgs} args - Arguments to update or create a Stroke.
     * @example
     * // Update or create a Stroke
     * const stroke = await prisma.stroke.upsert({
     *   create: {
     *     // ... data to create a Stroke
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stroke we want to update
     *   }
     * })
     */
    upsert<T extends StrokeUpsertArgs>(args: SelectSubset<T, StrokeUpsertArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Strokes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeCountArgs} args - Arguments to filter Strokes to count.
     * @example
     * // Count the number of Strokes
     * const count = await prisma.stroke.count({
     *   where: {
     *     // ... the filter for the Strokes we want to count
     *   }
     * })
    **/
    count<T extends StrokeCountArgs>(
      args?: Subset<T, StrokeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StrokeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stroke.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StrokeAggregateArgs>(args: Subset<T, StrokeAggregateArgs>): Prisma.PrismaPromise<GetStrokeAggregateType<T>>

    /**
     * Group by Stroke.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeGroupByArgs} args - Group by arguments.
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
      T extends StrokeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StrokeGroupByArgs['orderBy'] }
        : { orderBy?: StrokeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StrokeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrokeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stroke model
   */
  readonly fields: StrokeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stroke.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StrokeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends CreatedFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreatedFileDefaultArgs<ExtArgs>>): Prisma__CreatedFileClient<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Stroke model
   */ 
  interface StrokeFieldRefs {
    readonly id: FieldRef<"Stroke", 'String'>
    readonly fileId: FieldRef<"Stroke", 'String'>
    readonly type: FieldRef<"Stroke", 'String'>
    readonly x: FieldRef<"Stroke", 'Float'>
    readonly y: FieldRef<"Stroke", 'Float'>
    readonly w: FieldRef<"Stroke", 'Float'>
    readonly h: FieldRef<"Stroke", 'Float'>
    readonly radius: FieldRef<"Stroke", 'Float'>
    readonly text: FieldRef<"Stroke", 'String'>
    readonly fontSize: FieldRef<"Stroke", 'Int'>
    readonly fontFamily: FieldRef<"Stroke", 'String'>
    readonly color: FieldRef<"Stroke", 'String'>
    readonly createdAt: FieldRef<"Stroke", 'DateTime'>
    readonly updatedAt: FieldRef<"Stroke", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stroke findUnique
   */
  export type StrokeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter, which Stroke to fetch.
     */
    where: StrokeWhereUniqueInput
  }

  /**
   * Stroke findUniqueOrThrow
   */
  export type StrokeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter, which Stroke to fetch.
     */
    where: StrokeWhereUniqueInput
  }

  /**
   * Stroke findFirst
   */
  export type StrokeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter, which Stroke to fetch.
     */
    where?: StrokeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strokes to fetch.
     */
    orderBy?: StrokeOrderByWithRelationInput | StrokeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Strokes.
     */
    cursor?: StrokeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strokes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strokes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Strokes.
     */
    distinct?: StrokeScalarFieldEnum | StrokeScalarFieldEnum[]
  }

  /**
   * Stroke findFirstOrThrow
   */
  export type StrokeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter, which Stroke to fetch.
     */
    where?: StrokeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strokes to fetch.
     */
    orderBy?: StrokeOrderByWithRelationInput | StrokeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Strokes.
     */
    cursor?: StrokeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strokes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strokes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Strokes.
     */
    distinct?: StrokeScalarFieldEnum | StrokeScalarFieldEnum[]
  }

  /**
   * Stroke findMany
   */
  export type StrokeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter, which Strokes to fetch.
     */
    where?: StrokeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strokes to fetch.
     */
    orderBy?: StrokeOrderByWithRelationInput | StrokeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Strokes.
     */
    cursor?: StrokeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strokes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strokes.
     */
    skip?: number
    distinct?: StrokeScalarFieldEnum | StrokeScalarFieldEnum[]
  }

  /**
   * Stroke create
   */
  export type StrokeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * The data needed to create a Stroke.
     */
    data: XOR<StrokeCreateInput, StrokeUncheckedCreateInput>
  }

  /**
   * Stroke createMany
   */
  export type StrokeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Strokes.
     */
    data: StrokeCreateManyInput | StrokeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stroke createManyAndReturn
   */
  export type StrokeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * The data used to create many Strokes.
     */
    data: StrokeCreateManyInput | StrokeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stroke update
   */
  export type StrokeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * The data needed to update a Stroke.
     */
    data: XOR<StrokeUpdateInput, StrokeUncheckedUpdateInput>
    /**
     * Choose, which Stroke to update.
     */
    where: StrokeWhereUniqueInput
  }

  /**
   * Stroke updateMany
   */
  export type StrokeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Strokes.
     */
    data: XOR<StrokeUpdateManyMutationInput, StrokeUncheckedUpdateManyInput>
    /**
     * Filter which Strokes to update
     */
    where?: StrokeWhereInput
    /**
     * Limit how many Strokes to update.
     */
    limit?: number
  }

  /**
   * Stroke updateManyAndReturn
   */
  export type StrokeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * The data used to update Strokes.
     */
    data: XOR<StrokeUpdateManyMutationInput, StrokeUncheckedUpdateManyInput>
    /**
     * Filter which Strokes to update
     */
    where?: StrokeWhereInput
    /**
     * Limit how many Strokes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stroke upsert
   */
  export type StrokeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * The filter to search for the Stroke to update in case it exists.
     */
    where: StrokeWhereUniqueInput
    /**
     * In case the Stroke found by the `where` argument doesn't exist, create a new Stroke with this data.
     */
    create: XOR<StrokeCreateInput, StrokeUncheckedCreateInput>
    /**
     * In case the Stroke was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StrokeUpdateInput, StrokeUncheckedUpdateInput>
  }

  /**
   * Stroke delete
   */
  export type StrokeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter which Stroke to delete.
     */
    where: StrokeWhereUniqueInput
  }

  /**
   * Stroke deleteMany
   */
  export type StrokeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Strokes to delete
     */
    where?: StrokeWhereInput
    /**
     * Limit how many Strokes to delete.
     */
    limit?: number
  }

  /**
   * Stroke without action
   */
  export type StrokeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
  }


  /**
   * Model Collaborator
   */

  export type AggregateCollaborator = {
    _count: CollaboratorCountAggregateOutputType | null
    _min: CollaboratorMinAggregateOutputType | null
    _max: CollaboratorMaxAggregateOutputType | null
  }

  export type CollaboratorMinAggregateOutputType = {
    id: string | null
    fileId: string | null
    userId: string | null
    role: $Enums.Role | null
    joinedAt: Date | null
  }

  export type CollaboratorMaxAggregateOutputType = {
    id: string | null
    fileId: string | null
    userId: string | null
    role: $Enums.Role | null
    joinedAt: Date | null
  }

  export type CollaboratorCountAggregateOutputType = {
    id: number
    fileId: number
    userId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type CollaboratorMinAggregateInputType = {
    id?: true
    fileId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type CollaboratorMaxAggregateInputType = {
    id?: true
    fileId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type CollaboratorCountAggregateInputType = {
    id?: true
    fileId?: true
    userId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type CollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborator to aggregate.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collaborators
    **/
    _count?: true | CollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaboratorMaxAggregateInputType
  }

  export type GetCollaboratorAggregateType<T extends CollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaborator[P]>
      : GetScalarType<T[P], AggregateCollaborator[P]>
  }




  export type CollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithAggregationInput | CollaboratorOrderByWithAggregationInput[]
    by: CollaboratorScalarFieldEnum[] | CollaboratorScalarFieldEnum
    having?: CollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaboratorCountAggregateInputType | true
    _min?: CollaboratorMinAggregateInputType
    _max?: CollaboratorMaxAggregateInputType
  }

  export type CollaboratorGroupByOutputType = {
    id: string
    fileId: string
    userId: string
    role: $Enums.Role
    joinedAt: Date
    _count: CollaboratorCountAggregateOutputType | null
    _min: CollaboratorMinAggregateOutputType | null
    _max: CollaboratorMaxAggregateOutputType | null
  }

  type GetCollaboratorGroupByPayload<T extends CollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], CollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type CollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectScalar = {
    id?: boolean
    fileId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type CollaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "userId" | "role" | "joinedAt", ExtArgs["result"]["collaborator"]>
  export type CollaboratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CollaboratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CollaboratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | CreatedFileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collaborator"
    objects: {
      file: Prisma.$CreatedFilePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileId: string
      userId: string
      role: $Enums.Role
      joinedAt: Date
    }, ExtArgs["result"]["collaborator"]>
    composites: {}
  }

  type CollaboratorGetPayload<S extends boolean | null | undefined | CollaboratorDefaultArgs> = $Result.GetResult<Prisma.$CollaboratorPayload, S>

  type CollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollaboratorCountAggregateInputType | true
    }

  export interface CollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collaborator'], meta: { name: 'Collaborator' } }
    /**
     * Find zero or one Collaborator that matches the filter.
     * @param {CollaboratorFindUniqueArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollaboratorFindUniqueArgs>(args: SelectSubset<T, CollaboratorFindUniqueArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollaboratorFindUniqueOrThrowArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, CollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindFirstArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollaboratorFindFirstArgs>(args?: SelectSubset<T, CollaboratorFindFirstArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindFirstOrThrowArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, CollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collaborators
     * const collaborators = await prisma.collaborator.findMany()
     * 
     * // Get first 10 Collaborators
     * const collaborators = await prisma.collaborator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collaboratorWithIdOnly = await prisma.collaborator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollaboratorFindManyArgs>(args?: SelectSubset<T, CollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collaborator.
     * @param {CollaboratorCreateArgs} args - Arguments to create a Collaborator.
     * @example
     * // Create one Collaborator
     * const Collaborator = await prisma.collaborator.create({
     *   data: {
     *     // ... data to create a Collaborator
     *   }
     * })
     * 
     */
    create<T extends CollaboratorCreateArgs>(args: SelectSubset<T, CollaboratorCreateArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collaborators.
     * @param {CollaboratorCreateManyArgs} args - Arguments to create many Collaborators.
     * @example
     * // Create many Collaborators
     * const collaborator = await prisma.collaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollaboratorCreateManyArgs>(args?: SelectSubset<T, CollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collaborators and returns the data saved in the database.
     * @param {CollaboratorCreateManyAndReturnArgs} args - Arguments to create many Collaborators.
     * @example
     * // Create many Collaborators
     * const collaborator = await prisma.collaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collaborators and only return the `id`
     * const collaboratorWithIdOnly = await prisma.collaborator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, CollaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collaborator.
     * @param {CollaboratorDeleteArgs} args - Arguments to delete one Collaborator.
     * @example
     * // Delete one Collaborator
     * const Collaborator = await prisma.collaborator.delete({
     *   where: {
     *     // ... filter to delete one Collaborator
     *   }
     * })
     * 
     */
    delete<T extends CollaboratorDeleteArgs>(args: SelectSubset<T, CollaboratorDeleteArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collaborator.
     * @param {CollaboratorUpdateArgs} args - Arguments to update one Collaborator.
     * @example
     * // Update one Collaborator
     * const collaborator = await prisma.collaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollaboratorUpdateArgs>(args: SelectSubset<T, CollaboratorUpdateArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collaborators.
     * @param {CollaboratorDeleteManyArgs} args - Arguments to filter Collaborators to delete.
     * @example
     * // Delete a few Collaborators
     * const { count } = await prisma.collaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollaboratorDeleteManyArgs>(args?: SelectSubset<T, CollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collaborators
     * const collaborator = await prisma.collaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollaboratorUpdateManyArgs>(args: SelectSubset<T, CollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborators and returns the data updated in the database.
     * @param {CollaboratorUpdateManyAndReturnArgs} args - Arguments to update many Collaborators.
     * @example
     * // Update many Collaborators
     * const collaborator = await prisma.collaborator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collaborators and only return the `id`
     * const collaboratorWithIdOnly = await prisma.collaborator.updateManyAndReturn({
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
    updateManyAndReturn<T extends CollaboratorUpdateManyAndReturnArgs>(args: SelectSubset<T, CollaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collaborator.
     * @param {CollaboratorUpsertArgs} args - Arguments to update or create a Collaborator.
     * @example
     * // Update or create a Collaborator
     * const collaborator = await prisma.collaborator.upsert({
     *   create: {
     *     // ... data to create a Collaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collaborator we want to update
     *   }
     * })
     */
    upsert<T extends CollaboratorUpsertArgs>(args: SelectSubset<T, CollaboratorUpsertArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorCountArgs} args - Arguments to filter Collaborators to count.
     * @example
     * // Count the number of Collaborators
     * const count = await prisma.collaborator.count({
     *   where: {
     *     // ... the filter for the Collaborators we want to count
     *   }
     * })
    **/
    count<T extends CollaboratorCountArgs>(
      args?: Subset<T, CollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollaboratorAggregateArgs>(args: Subset<T, CollaboratorAggregateArgs>): Prisma.PrismaPromise<GetCollaboratorAggregateType<T>>

    /**
     * Group by Collaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorGroupByArgs} args - Group by arguments.
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
      T extends CollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollaboratorGroupByArgs['orderBy'] }
        : { orderBy?: CollaboratorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collaborator model
   */
  readonly fields: CollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends CreatedFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreatedFileDefaultArgs<ExtArgs>>): Prisma__CreatedFileClient<$Result.GetResult<Prisma.$CreatedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Collaborator model
   */ 
  interface CollaboratorFieldRefs {
    readonly id: FieldRef<"Collaborator", 'String'>
    readonly fileId: FieldRef<"Collaborator", 'String'>
    readonly userId: FieldRef<"Collaborator", 'String'>
    readonly role: FieldRef<"Collaborator", 'Role'>
    readonly joinedAt: FieldRef<"Collaborator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collaborator findUnique
   */
  export type CollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator findUniqueOrThrow
   */
  export type CollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator findFirst
   */
  export type CollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborators.
     */
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator findFirstOrThrow
   */
  export type CollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborators.
     */
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator findMany
   */
  export type CollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborators to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator create
   */
  export type CollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to create a Collaborator.
     */
    data: XOR<CollaboratorCreateInput, CollaboratorUncheckedCreateInput>
  }

  /**
   * Collaborator createMany
   */
  export type CollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collaborators.
     */
    data: CollaboratorCreateManyInput | CollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collaborator createManyAndReturn
   */
  export type CollaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * The data used to create many Collaborators.
     */
    data: CollaboratorCreateManyInput | CollaboratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collaborator update
   */
  export type CollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to update a Collaborator.
     */
    data: XOR<CollaboratorUpdateInput, CollaboratorUncheckedUpdateInput>
    /**
     * Choose, which Collaborator to update.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator updateMany
   */
  export type CollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collaborators.
     */
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Collaborators to update
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to update.
     */
    limit?: number
  }

  /**
   * Collaborator updateManyAndReturn
   */
  export type CollaboratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * The data used to update Collaborators.
     */
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Collaborators to update
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collaborator upsert
   */
  export type CollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * The filter to search for the Collaborator to update in case it exists.
     */
    where: CollaboratorWhereUniqueInput
    /**
     * In case the Collaborator found by the `where` argument doesn't exist, create a new Collaborator with this data.
     */
    create: XOR<CollaboratorCreateInput, CollaboratorUncheckedCreateInput>
    /**
     * In case the Collaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollaboratorUpdateInput, CollaboratorUncheckedUpdateInput>
  }

  /**
   * Collaborator delete
   */
  export type CollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter which Collaborator to delete.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator deleteMany
   */
  export type CollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborators to delete
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to delete.
     */
    limit?: number
  }

  /**
   * Collaborator without action
   */
  export type CollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
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
    createdAt: 'createdAt',
    email: 'email',
    name: 'name',
    bio: 'bio',
    profilePhoto: 'profilePhoto',
    userName: 'userName',
    provider: 'provider',
    id: 'id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CreatedFileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    createdByUserId: 'createdByUserId',
    name: 'name'
  };

  export type CreatedFileScalarFieldEnum = (typeof CreatedFileScalarFieldEnum)[keyof typeof CreatedFileScalarFieldEnum]


  export const StrokeScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    type: 'type',
    x: 'x',
    y: 'y',
    w: 'w',
    h: 'h',
    radius: 'radius',
    text: 'text',
    fontSize: 'fontSize',
    fontFamily: 'fontFamily',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StrokeScalarFieldEnum = (typeof StrokeScalarFieldEnum)[keyof typeof StrokeScalarFieldEnum]


  export const CollaboratorScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    userId: 'userId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type CollaboratorScalarFieldEnum = (typeof CollaboratorScalarFieldEnum)[keyof typeof CollaboratorScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    profilePhoto?: StringNullableFilter<"User"> | string | null
    userName?: StringFilter<"User"> | string
    provider?: StringFilter<"User"> | string
    id?: StringFilter<"User"> | string
    collaborations?: CollaboratorListRelationFilter
    createdFiles?: CreatedFileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    userName?: SortOrder
    provider?: SortOrder
    id?: SortOrder
    collaborations?: CollaboratorOrderByRelationAggregateInput
    createdFiles?: CreatedFileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    userName?: string
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    profilePhoto?: StringNullableFilter<"User"> | string | null
    provider?: StringFilter<"User"> | string
    collaborations?: CollaboratorListRelationFilter
    createdFiles?: CreatedFileListRelationFilter
  }, "id" | "email" | "userName">

  export type UserOrderByWithAggregationInput = {
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    userName?: SortOrder
    provider?: SortOrder
    id?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePhoto?: StringNullableWithAggregatesFilter<"User"> | string | null
    userName?: StringWithAggregatesFilter<"User"> | string
    provider?: StringWithAggregatesFilter<"User"> | string
    id?: StringWithAggregatesFilter<"User"> | string
  }

  export type CreatedFileWhereInput = {
    AND?: CreatedFileWhereInput | CreatedFileWhereInput[]
    OR?: CreatedFileWhereInput[]
    NOT?: CreatedFileWhereInput | CreatedFileWhereInput[]
    id?: StringFilter<"CreatedFile"> | string
    createdAt?: DateTimeFilter<"CreatedFile"> | Date | string
    createdByUserId?: StringFilter<"CreatedFile"> | string
    name?: StringFilter<"CreatedFile"> | string
    collaborators?: CollaboratorListRelationFilter
    createdByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    strokes?: StrokeListRelationFilter
  }

  export type CreatedFileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    name?: SortOrder
    collaborators?: CollaboratorOrderByRelationAggregateInput
    createdByUser?: UserOrderByWithRelationInput
    strokes?: StrokeOrderByRelationAggregateInput
  }

  export type CreatedFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreatedFileWhereInput | CreatedFileWhereInput[]
    OR?: CreatedFileWhereInput[]
    NOT?: CreatedFileWhereInput | CreatedFileWhereInput[]
    createdAt?: DateTimeFilter<"CreatedFile"> | Date | string
    createdByUserId?: StringFilter<"CreatedFile"> | string
    name?: StringFilter<"CreatedFile"> | string
    collaborators?: CollaboratorListRelationFilter
    createdByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    strokes?: StrokeListRelationFilter
  }, "id">

  export type CreatedFileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    name?: SortOrder
    _count?: CreatedFileCountOrderByAggregateInput
    _max?: CreatedFileMaxOrderByAggregateInput
    _min?: CreatedFileMinOrderByAggregateInput
  }

  export type CreatedFileScalarWhereWithAggregatesInput = {
    AND?: CreatedFileScalarWhereWithAggregatesInput | CreatedFileScalarWhereWithAggregatesInput[]
    OR?: CreatedFileScalarWhereWithAggregatesInput[]
    NOT?: CreatedFileScalarWhereWithAggregatesInput | CreatedFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreatedFile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CreatedFile"> | Date | string
    createdByUserId?: StringWithAggregatesFilter<"CreatedFile"> | string
    name?: StringWithAggregatesFilter<"CreatedFile"> | string
  }

  export type StrokeWhereInput = {
    AND?: StrokeWhereInput | StrokeWhereInput[]
    OR?: StrokeWhereInput[]
    NOT?: StrokeWhereInput | StrokeWhereInput[]
    id?: StringFilter<"Stroke"> | string
    fileId?: StringFilter<"Stroke"> | string
    type?: StringFilter<"Stroke"> | string
    x?: FloatNullableFilter<"Stroke"> | number | null
    y?: FloatNullableFilter<"Stroke"> | number | null
    w?: FloatNullableFilter<"Stroke"> | number | null
    h?: FloatNullableFilter<"Stroke"> | number | null
    radius?: FloatNullableFilter<"Stroke"> | number | null
    text?: StringNullableFilter<"Stroke"> | string | null
    fontSize?: IntNullableFilter<"Stroke"> | number | null
    fontFamily?: StringNullableFilter<"Stroke"> | string | null
    color?: StringNullableFilter<"Stroke"> | string | null
    createdAt?: DateTimeFilter<"Stroke"> | Date | string
    updatedAt?: DateTimeFilter<"Stroke"> | Date | string
    file?: XOR<CreatedFileScalarRelationFilter, CreatedFileWhereInput>
  }

  export type StrokeOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    type?: SortOrder
    x?: SortOrderInput | SortOrder
    y?: SortOrderInput | SortOrder
    w?: SortOrderInput | SortOrder
    h?: SortOrderInput | SortOrder
    radius?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    fontSize?: SortOrderInput | SortOrder
    fontFamily?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    file?: CreatedFileOrderByWithRelationInput
  }

  export type StrokeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StrokeWhereInput | StrokeWhereInput[]
    OR?: StrokeWhereInput[]
    NOT?: StrokeWhereInput | StrokeWhereInput[]
    fileId?: StringFilter<"Stroke"> | string
    type?: StringFilter<"Stroke"> | string
    x?: FloatNullableFilter<"Stroke"> | number | null
    y?: FloatNullableFilter<"Stroke"> | number | null
    w?: FloatNullableFilter<"Stroke"> | number | null
    h?: FloatNullableFilter<"Stroke"> | number | null
    radius?: FloatNullableFilter<"Stroke"> | number | null
    text?: StringNullableFilter<"Stroke"> | string | null
    fontSize?: IntNullableFilter<"Stroke"> | number | null
    fontFamily?: StringNullableFilter<"Stroke"> | string | null
    color?: StringNullableFilter<"Stroke"> | string | null
    createdAt?: DateTimeFilter<"Stroke"> | Date | string
    updatedAt?: DateTimeFilter<"Stroke"> | Date | string
    file?: XOR<CreatedFileScalarRelationFilter, CreatedFileWhereInput>
  }, "id">

  export type StrokeOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    type?: SortOrder
    x?: SortOrderInput | SortOrder
    y?: SortOrderInput | SortOrder
    w?: SortOrderInput | SortOrder
    h?: SortOrderInput | SortOrder
    radius?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    fontSize?: SortOrderInput | SortOrder
    fontFamily?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StrokeCountOrderByAggregateInput
    _avg?: StrokeAvgOrderByAggregateInput
    _max?: StrokeMaxOrderByAggregateInput
    _min?: StrokeMinOrderByAggregateInput
    _sum?: StrokeSumOrderByAggregateInput
  }

  export type StrokeScalarWhereWithAggregatesInput = {
    AND?: StrokeScalarWhereWithAggregatesInput | StrokeScalarWhereWithAggregatesInput[]
    OR?: StrokeScalarWhereWithAggregatesInput[]
    NOT?: StrokeScalarWhereWithAggregatesInput | StrokeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stroke"> | string
    fileId?: StringWithAggregatesFilter<"Stroke"> | string
    type?: StringWithAggregatesFilter<"Stroke"> | string
    x?: FloatNullableWithAggregatesFilter<"Stroke"> | number | null
    y?: FloatNullableWithAggregatesFilter<"Stroke"> | number | null
    w?: FloatNullableWithAggregatesFilter<"Stroke"> | number | null
    h?: FloatNullableWithAggregatesFilter<"Stroke"> | number | null
    radius?: FloatNullableWithAggregatesFilter<"Stroke"> | number | null
    text?: StringNullableWithAggregatesFilter<"Stroke"> | string | null
    fontSize?: IntNullableWithAggregatesFilter<"Stroke"> | number | null
    fontFamily?: StringNullableWithAggregatesFilter<"Stroke"> | string | null
    color?: StringNullableWithAggregatesFilter<"Stroke"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Stroke"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Stroke"> | Date | string
  }

  export type CollaboratorWhereInput = {
    AND?: CollaboratorWhereInput | CollaboratorWhereInput[]
    OR?: CollaboratorWhereInput[]
    NOT?: CollaboratorWhereInput | CollaboratorWhereInput[]
    id?: StringFilter<"Collaborator"> | string
    fileId?: StringFilter<"Collaborator"> | string
    userId?: StringFilter<"Collaborator"> | string
    role?: EnumRoleFilter<"Collaborator"> | $Enums.Role
    joinedAt?: DateTimeFilter<"Collaborator"> | Date | string
    file?: XOR<CreatedFileScalarRelationFilter, CreatedFileWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CollaboratorOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    file?: CreatedFileOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CollaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollaboratorWhereInput | CollaboratorWhereInput[]
    OR?: CollaboratorWhereInput[]
    NOT?: CollaboratorWhereInput | CollaboratorWhereInput[]
    fileId?: StringFilter<"Collaborator"> | string
    userId?: StringFilter<"Collaborator"> | string
    role?: EnumRoleFilter<"Collaborator"> | $Enums.Role
    joinedAt?: DateTimeFilter<"Collaborator"> | Date | string
    file?: XOR<CreatedFileScalarRelationFilter, CreatedFileWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CollaboratorOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: CollaboratorCountOrderByAggregateInput
    _max?: CollaboratorMaxOrderByAggregateInput
    _min?: CollaboratorMinOrderByAggregateInput
  }

  export type CollaboratorScalarWhereWithAggregatesInput = {
    AND?: CollaboratorScalarWhereWithAggregatesInput | CollaboratorScalarWhereWithAggregatesInput[]
    OR?: CollaboratorScalarWhereWithAggregatesInput[]
    NOT?: CollaboratorScalarWhereWithAggregatesInput | CollaboratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collaborator"> | string
    fileId?: StringWithAggregatesFilter<"Collaborator"> | string
    userId?: StringWithAggregatesFilter<"Collaborator"> | string
    role?: EnumRoleWithAggregatesFilter<"Collaborator"> | $Enums.Role
    joinedAt?: DateTimeWithAggregatesFilter<"Collaborator"> | Date | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
    bio?: string | null
    profilePhoto?: string | null
    userName: string
    provider: string
    id?: string
    collaborations?: CollaboratorCreateNestedManyWithoutUserInput
    createdFiles?: CreatedFileCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
    bio?: string | null
    profilePhoto?: string | null
    userName: string
    provider: string
    id?: string
    collaborations?: CollaboratorUncheckedCreateNestedManyWithoutUserInput
    createdFiles?: CreatedFileUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    collaborations?: CollaboratorUpdateManyWithoutUserNestedInput
    createdFiles?: CreatedFileUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    collaborations?: CollaboratorUncheckedUpdateManyWithoutUserNestedInput
    createdFiles?: CreatedFileUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserCreateManyInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
    bio?: string | null
    profilePhoto?: string | null
    userName: string
    provider: string
    id?: string
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CreatedFileCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    collaborators?: CollaboratorCreateNestedManyWithoutFileInput
    createdByUser: UserCreateNestedOneWithoutCreatedFilesInput
    strokes?: StrokeCreateNestedManyWithoutFileInput
  }

  export type CreatedFileUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    createdByUserId: string
    name: string
    collaborators?: CollaboratorUncheckedCreateNestedManyWithoutFileInput
    strokes?: StrokeUncheckedCreateNestedManyWithoutFileInput
  }

  export type CreatedFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collaborators?: CollaboratorUpdateManyWithoutFileNestedInput
    createdByUser?: UserUpdateOneRequiredWithoutCreatedFilesNestedInput
    strokes?: StrokeUpdateManyWithoutFileNestedInput
  }

  export type CreatedFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collaborators?: CollaboratorUncheckedUpdateManyWithoutFileNestedInput
    strokes?: StrokeUncheckedUpdateManyWithoutFileNestedInput
  }

  export type CreatedFileCreateManyInput = {
    id?: string
    createdAt?: Date | string
    createdByUserId: string
    name: string
  }

  export type CreatedFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CreatedFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StrokeCreateInput = {
    id?: string
    type: string
    x?: number | null
    y?: number | null
    w?: number | null
    h?: number | null
    radius?: number | null
    text?: string | null
    fontSize?: number | null
    fontFamily?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    file: CreatedFileCreateNestedOneWithoutStrokesInput
  }

  export type StrokeUncheckedCreateInput = {
    id?: string
    fileId: string
    type: string
    x?: number | null
    y?: number | null
    w?: number | null
    h?: number | null
    radius?: number | null
    text?: string | null
    fontSize?: number | null
    fontFamily?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrokeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    w?: NullableFloatFieldUpdateOperationsInput | number | null
    h?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: CreatedFileUpdateOneRequiredWithoutStrokesNestedInput
  }

  export type StrokeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    w?: NullableFloatFieldUpdateOperationsInput | number | null
    h?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrokeCreateManyInput = {
    id?: string
    fileId: string
    type: string
    x?: number | null
    y?: number | null
    w?: number | null
    h?: number | null
    radius?: number | null
    text?: string | null
    fontSize?: number | null
    fontFamily?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrokeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    w?: NullableFloatFieldUpdateOperationsInput | number | null
    h?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrokeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    w?: NullableFloatFieldUpdateOperationsInput | number | null
    h?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorCreateInput = {
    id?: string
    role?: $Enums.Role
    joinedAt?: Date | string
    file: CreatedFileCreateNestedOneWithoutCollaboratorsInput
    user: UserCreateNestedOneWithoutCollaborationsInput
  }

  export type CollaboratorUncheckedCreateInput = {
    id?: string
    fileId: string
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type CollaboratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: CreatedFileUpdateOneRequiredWithoutCollaboratorsNestedInput
    user?: UserUpdateOneRequiredWithoutCollaborationsNestedInput
  }

  export type CollaboratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorCreateManyInput = {
    id?: string
    fileId: string
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type CollaboratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CollaboratorListRelationFilter = {
    every?: CollaboratorWhereInput
    some?: CollaboratorWhereInput
    none?: CollaboratorWhereInput
  }

  export type CreatedFileListRelationFilter = {
    every?: CreatedFileWhereInput
    some?: CreatedFileWhereInput
    none?: CreatedFileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CollaboratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreatedFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    profilePhoto?: SortOrder
    userName?: SortOrder
    provider?: SortOrder
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    profilePhoto?: SortOrder
    userName?: SortOrder
    provider?: SortOrder
    id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    profilePhoto?: SortOrder
    userName?: SortOrder
    provider?: SortOrder
    id?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StrokeListRelationFilter = {
    every?: StrokeWhereInput
    some?: StrokeWhereInput
    none?: StrokeWhereInput
  }

  export type StrokeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreatedFileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    name?: SortOrder
  }

  export type CreatedFileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    name?: SortOrder
  }

  export type CreatedFileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    name?: SortOrder
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

  export type CreatedFileScalarRelationFilter = {
    is?: CreatedFileWhereInput
    isNot?: CreatedFileWhereInput
  }

  export type StrokeCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    radius?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StrokeAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    radius?: SortOrder
    fontSize?: SortOrder
  }

  export type StrokeMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    radius?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StrokeMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    radius?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StrokeSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    radius?: SortOrder
    fontSize?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type CollaboratorCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type CollaboratorMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type CollaboratorMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type CollaboratorCreateNestedManyWithoutUserInput = {
    create?: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput> | CollaboratorCreateWithoutUserInput[] | CollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutUserInput | CollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: CollaboratorCreateManyUserInputEnvelope
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type CreatedFileCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<CreatedFileCreateWithoutCreatedByUserInput, CreatedFileUncheckedCreateWithoutCreatedByUserInput> | CreatedFileCreateWithoutCreatedByUserInput[] | CreatedFileUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: CreatedFileCreateOrConnectWithoutCreatedByUserInput | CreatedFileCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: CreatedFileCreateManyCreatedByUserInputEnvelope
    connect?: CreatedFileWhereUniqueInput | CreatedFileWhereUniqueInput[]
  }

  export type CollaboratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput> | CollaboratorCreateWithoutUserInput[] | CollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutUserInput | CollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: CollaboratorCreateManyUserInputEnvelope
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type CreatedFileUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<CreatedFileCreateWithoutCreatedByUserInput, CreatedFileUncheckedCreateWithoutCreatedByUserInput> | CreatedFileCreateWithoutCreatedByUserInput[] | CreatedFileUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: CreatedFileCreateOrConnectWithoutCreatedByUserInput | CreatedFileCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: CreatedFileCreateManyCreatedByUserInputEnvelope
    connect?: CreatedFileWhereUniqueInput | CreatedFileWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CollaboratorUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput> | CollaboratorCreateWithoutUserInput[] | CollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutUserInput | CollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutUserInput | CollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollaboratorCreateManyUserInputEnvelope
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutUserInput | CollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutUserInput | CollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type CreatedFileUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<CreatedFileCreateWithoutCreatedByUserInput, CreatedFileUncheckedCreateWithoutCreatedByUserInput> | CreatedFileCreateWithoutCreatedByUserInput[] | CreatedFileUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: CreatedFileCreateOrConnectWithoutCreatedByUserInput | CreatedFileCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: CreatedFileUpsertWithWhereUniqueWithoutCreatedByUserInput | CreatedFileUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: CreatedFileCreateManyCreatedByUserInputEnvelope
    set?: CreatedFileWhereUniqueInput | CreatedFileWhereUniqueInput[]
    disconnect?: CreatedFileWhereUniqueInput | CreatedFileWhereUniqueInput[]
    delete?: CreatedFileWhereUniqueInput | CreatedFileWhereUniqueInput[]
    connect?: CreatedFileWhereUniqueInput | CreatedFileWhereUniqueInput[]
    update?: CreatedFileUpdateWithWhereUniqueWithoutCreatedByUserInput | CreatedFileUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: CreatedFileUpdateManyWithWhereWithoutCreatedByUserInput | CreatedFileUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: CreatedFileScalarWhereInput | CreatedFileScalarWhereInput[]
  }

  export type CollaboratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput> | CollaboratorCreateWithoutUserInput[] | CollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutUserInput | CollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutUserInput | CollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollaboratorCreateManyUserInputEnvelope
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutUserInput | CollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutUserInput | CollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type CreatedFileUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<CreatedFileCreateWithoutCreatedByUserInput, CreatedFileUncheckedCreateWithoutCreatedByUserInput> | CreatedFileCreateWithoutCreatedByUserInput[] | CreatedFileUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: CreatedFileCreateOrConnectWithoutCreatedByUserInput | CreatedFileCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: CreatedFileUpsertWithWhereUniqueWithoutCreatedByUserInput | CreatedFileUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: CreatedFileCreateManyCreatedByUserInputEnvelope
    set?: CreatedFileWhereUniqueInput | CreatedFileWhereUniqueInput[]
    disconnect?: CreatedFileWhereUniqueInput | CreatedFileWhereUniqueInput[]
    delete?: CreatedFileWhereUniqueInput | CreatedFileWhereUniqueInput[]
    connect?: CreatedFileWhereUniqueInput | CreatedFileWhereUniqueInput[]
    update?: CreatedFileUpdateWithWhereUniqueWithoutCreatedByUserInput | CreatedFileUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: CreatedFileUpdateManyWithWhereWithoutCreatedByUserInput | CreatedFileUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: CreatedFileScalarWhereInput | CreatedFileScalarWhereInput[]
  }

  export type CollaboratorCreateNestedManyWithoutFileInput = {
    create?: XOR<CollaboratorCreateWithoutFileInput, CollaboratorUncheckedCreateWithoutFileInput> | CollaboratorCreateWithoutFileInput[] | CollaboratorUncheckedCreateWithoutFileInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutFileInput | CollaboratorCreateOrConnectWithoutFileInput[]
    createMany?: CollaboratorCreateManyFileInputEnvelope
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedFilesInput = {
    create?: XOR<UserCreateWithoutCreatedFilesInput, UserUncheckedCreateWithoutCreatedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedFilesInput
    connect?: UserWhereUniqueInput
  }

  export type StrokeCreateNestedManyWithoutFileInput = {
    create?: XOR<StrokeCreateWithoutFileInput, StrokeUncheckedCreateWithoutFileInput> | StrokeCreateWithoutFileInput[] | StrokeUncheckedCreateWithoutFileInput[]
    connectOrCreate?: StrokeCreateOrConnectWithoutFileInput | StrokeCreateOrConnectWithoutFileInput[]
    createMany?: StrokeCreateManyFileInputEnvelope
    connect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
  }

  export type CollaboratorUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<CollaboratorCreateWithoutFileInput, CollaboratorUncheckedCreateWithoutFileInput> | CollaboratorCreateWithoutFileInput[] | CollaboratorUncheckedCreateWithoutFileInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutFileInput | CollaboratorCreateOrConnectWithoutFileInput[]
    createMany?: CollaboratorCreateManyFileInputEnvelope
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type StrokeUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<StrokeCreateWithoutFileInput, StrokeUncheckedCreateWithoutFileInput> | StrokeCreateWithoutFileInput[] | StrokeUncheckedCreateWithoutFileInput[]
    connectOrCreate?: StrokeCreateOrConnectWithoutFileInput | StrokeCreateOrConnectWithoutFileInput[]
    createMany?: StrokeCreateManyFileInputEnvelope
    connect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
  }

  export type CollaboratorUpdateManyWithoutFileNestedInput = {
    create?: XOR<CollaboratorCreateWithoutFileInput, CollaboratorUncheckedCreateWithoutFileInput> | CollaboratorCreateWithoutFileInput[] | CollaboratorUncheckedCreateWithoutFileInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutFileInput | CollaboratorCreateOrConnectWithoutFileInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutFileInput | CollaboratorUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: CollaboratorCreateManyFileInputEnvelope
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutFileInput | CollaboratorUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutFileInput | CollaboratorUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedFilesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedFilesInput, UserUncheckedCreateWithoutCreatedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedFilesInput
    upsert?: UserUpsertWithoutCreatedFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedFilesInput, UserUpdateWithoutCreatedFilesInput>, UserUncheckedUpdateWithoutCreatedFilesInput>
  }

  export type StrokeUpdateManyWithoutFileNestedInput = {
    create?: XOR<StrokeCreateWithoutFileInput, StrokeUncheckedCreateWithoutFileInput> | StrokeCreateWithoutFileInput[] | StrokeUncheckedCreateWithoutFileInput[]
    connectOrCreate?: StrokeCreateOrConnectWithoutFileInput | StrokeCreateOrConnectWithoutFileInput[]
    upsert?: StrokeUpsertWithWhereUniqueWithoutFileInput | StrokeUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: StrokeCreateManyFileInputEnvelope
    set?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    disconnect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    delete?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    connect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    update?: StrokeUpdateWithWhereUniqueWithoutFileInput | StrokeUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: StrokeUpdateManyWithWhereWithoutFileInput | StrokeUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: StrokeScalarWhereInput | StrokeScalarWhereInput[]
  }

  export type CollaboratorUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<CollaboratorCreateWithoutFileInput, CollaboratorUncheckedCreateWithoutFileInput> | CollaboratorCreateWithoutFileInput[] | CollaboratorUncheckedCreateWithoutFileInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutFileInput | CollaboratorCreateOrConnectWithoutFileInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutFileInput | CollaboratorUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: CollaboratorCreateManyFileInputEnvelope
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutFileInput | CollaboratorUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutFileInput | CollaboratorUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type StrokeUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<StrokeCreateWithoutFileInput, StrokeUncheckedCreateWithoutFileInput> | StrokeCreateWithoutFileInput[] | StrokeUncheckedCreateWithoutFileInput[]
    connectOrCreate?: StrokeCreateOrConnectWithoutFileInput | StrokeCreateOrConnectWithoutFileInput[]
    upsert?: StrokeUpsertWithWhereUniqueWithoutFileInput | StrokeUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: StrokeCreateManyFileInputEnvelope
    set?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    disconnect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    delete?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    connect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    update?: StrokeUpdateWithWhereUniqueWithoutFileInput | StrokeUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: StrokeUpdateManyWithWhereWithoutFileInput | StrokeUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: StrokeScalarWhereInput | StrokeScalarWhereInput[]
  }

  export type CreatedFileCreateNestedOneWithoutStrokesInput = {
    create?: XOR<CreatedFileCreateWithoutStrokesInput, CreatedFileUncheckedCreateWithoutStrokesInput>
    connectOrCreate?: CreatedFileCreateOrConnectWithoutStrokesInput
    connect?: CreatedFileWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CreatedFileUpdateOneRequiredWithoutStrokesNestedInput = {
    create?: XOR<CreatedFileCreateWithoutStrokesInput, CreatedFileUncheckedCreateWithoutStrokesInput>
    connectOrCreate?: CreatedFileCreateOrConnectWithoutStrokesInput
    upsert?: CreatedFileUpsertWithoutStrokesInput
    connect?: CreatedFileWhereUniqueInput
    update?: XOR<XOR<CreatedFileUpdateToOneWithWhereWithoutStrokesInput, CreatedFileUpdateWithoutStrokesInput>, CreatedFileUncheckedUpdateWithoutStrokesInput>
  }

  export type CreatedFileCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<CreatedFileCreateWithoutCollaboratorsInput, CreatedFileUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: CreatedFileCreateOrConnectWithoutCollaboratorsInput
    connect?: CreatedFileWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCollaborationsInput = {
    create?: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaborationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CreatedFileUpdateOneRequiredWithoutCollaboratorsNestedInput = {
    create?: XOR<CreatedFileCreateWithoutCollaboratorsInput, CreatedFileUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: CreatedFileCreateOrConnectWithoutCollaboratorsInput
    upsert?: CreatedFileUpsertWithoutCollaboratorsInput
    connect?: CreatedFileWhereUniqueInput
    update?: XOR<XOR<CreatedFileUpdateToOneWithWhereWithoutCollaboratorsInput, CreatedFileUpdateWithoutCollaboratorsInput>, CreatedFileUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type UserUpdateOneRequiredWithoutCollaborationsNestedInput = {
    create?: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaborationsInput
    upsert?: UserUpsertWithoutCollaborationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollaborationsInput, UserUpdateWithoutCollaborationsInput>, UserUncheckedUpdateWithoutCollaborationsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type CollaboratorCreateWithoutUserInput = {
    id?: string
    role?: $Enums.Role
    joinedAt?: Date | string
    file: CreatedFileCreateNestedOneWithoutCollaboratorsInput
  }

  export type CollaboratorUncheckedCreateWithoutUserInput = {
    id?: string
    fileId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type CollaboratorCreateOrConnectWithoutUserInput = {
    where: CollaboratorWhereUniqueInput
    create: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput>
  }

  export type CollaboratorCreateManyUserInputEnvelope = {
    data: CollaboratorCreateManyUserInput | CollaboratorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreatedFileCreateWithoutCreatedByUserInput = {
    id?: string
    createdAt?: Date | string
    name: string
    collaborators?: CollaboratorCreateNestedManyWithoutFileInput
    strokes?: StrokeCreateNestedManyWithoutFileInput
  }

  export type CreatedFileUncheckedCreateWithoutCreatedByUserInput = {
    id?: string
    createdAt?: Date | string
    name: string
    collaborators?: CollaboratorUncheckedCreateNestedManyWithoutFileInput
    strokes?: StrokeUncheckedCreateNestedManyWithoutFileInput
  }

  export type CreatedFileCreateOrConnectWithoutCreatedByUserInput = {
    where: CreatedFileWhereUniqueInput
    create: XOR<CreatedFileCreateWithoutCreatedByUserInput, CreatedFileUncheckedCreateWithoutCreatedByUserInput>
  }

  export type CreatedFileCreateManyCreatedByUserInputEnvelope = {
    data: CreatedFileCreateManyCreatedByUserInput | CreatedFileCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type CollaboratorUpsertWithWhereUniqueWithoutUserInput = {
    where: CollaboratorWhereUniqueInput
    update: XOR<CollaboratorUpdateWithoutUserInput, CollaboratorUncheckedUpdateWithoutUserInput>
    create: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput>
  }

  export type CollaboratorUpdateWithWhereUniqueWithoutUserInput = {
    where: CollaboratorWhereUniqueInput
    data: XOR<CollaboratorUpdateWithoutUserInput, CollaboratorUncheckedUpdateWithoutUserInput>
  }

  export type CollaboratorUpdateManyWithWhereWithoutUserInput = {
    where: CollaboratorScalarWhereInput
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyWithoutUserInput>
  }

  export type CollaboratorScalarWhereInput = {
    AND?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
    OR?: CollaboratorScalarWhereInput[]
    NOT?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
    id?: StringFilter<"Collaborator"> | string
    fileId?: StringFilter<"Collaborator"> | string
    userId?: StringFilter<"Collaborator"> | string
    role?: EnumRoleFilter<"Collaborator"> | $Enums.Role
    joinedAt?: DateTimeFilter<"Collaborator"> | Date | string
  }

  export type CreatedFileUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: CreatedFileWhereUniqueInput
    update: XOR<CreatedFileUpdateWithoutCreatedByUserInput, CreatedFileUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<CreatedFileCreateWithoutCreatedByUserInput, CreatedFileUncheckedCreateWithoutCreatedByUserInput>
  }

  export type CreatedFileUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: CreatedFileWhereUniqueInput
    data: XOR<CreatedFileUpdateWithoutCreatedByUserInput, CreatedFileUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type CreatedFileUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: CreatedFileScalarWhereInput
    data: XOR<CreatedFileUpdateManyMutationInput, CreatedFileUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type CreatedFileScalarWhereInput = {
    AND?: CreatedFileScalarWhereInput | CreatedFileScalarWhereInput[]
    OR?: CreatedFileScalarWhereInput[]
    NOT?: CreatedFileScalarWhereInput | CreatedFileScalarWhereInput[]
    id?: StringFilter<"CreatedFile"> | string
    createdAt?: DateTimeFilter<"CreatedFile"> | Date | string
    createdByUserId?: StringFilter<"CreatedFile"> | string
    name?: StringFilter<"CreatedFile"> | string
  }

  export type CollaboratorCreateWithoutFileInput = {
    id?: string
    role?: $Enums.Role
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutCollaborationsInput
  }

  export type CollaboratorUncheckedCreateWithoutFileInput = {
    id?: string
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type CollaboratorCreateOrConnectWithoutFileInput = {
    where: CollaboratorWhereUniqueInput
    create: XOR<CollaboratorCreateWithoutFileInput, CollaboratorUncheckedCreateWithoutFileInput>
  }

  export type CollaboratorCreateManyFileInputEnvelope = {
    data: CollaboratorCreateManyFileInput | CollaboratorCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedFilesInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
    bio?: string | null
    profilePhoto?: string | null
    userName: string
    provider: string
    id?: string
    collaborations?: CollaboratorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedFilesInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
    bio?: string | null
    profilePhoto?: string | null
    userName: string
    provider: string
    id?: string
    collaborations?: CollaboratorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedFilesInput, UserUncheckedCreateWithoutCreatedFilesInput>
  }

  export type StrokeCreateWithoutFileInput = {
    id?: string
    type: string
    x?: number | null
    y?: number | null
    w?: number | null
    h?: number | null
    radius?: number | null
    text?: string | null
    fontSize?: number | null
    fontFamily?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrokeUncheckedCreateWithoutFileInput = {
    id?: string
    type: string
    x?: number | null
    y?: number | null
    w?: number | null
    h?: number | null
    radius?: number | null
    text?: string | null
    fontSize?: number | null
    fontFamily?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrokeCreateOrConnectWithoutFileInput = {
    where: StrokeWhereUniqueInput
    create: XOR<StrokeCreateWithoutFileInput, StrokeUncheckedCreateWithoutFileInput>
  }

  export type StrokeCreateManyFileInputEnvelope = {
    data: StrokeCreateManyFileInput | StrokeCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type CollaboratorUpsertWithWhereUniqueWithoutFileInput = {
    where: CollaboratorWhereUniqueInput
    update: XOR<CollaboratorUpdateWithoutFileInput, CollaboratorUncheckedUpdateWithoutFileInput>
    create: XOR<CollaboratorCreateWithoutFileInput, CollaboratorUncheckedCreateWithoutFileInput>
  }

  export type CollaboratorUpdateWithWhereUniqueWithoutFileInput = {
    where: CollaboratorWhereUniqueInput
    data: XOR<CollaboratorUpdateWithoutFileInput, CollaboratorUncheckedUpdateWithoutFileInput>
  }

  export type CollaboratorUpdateManyWithWhereWithoutFileInput = {
    where: CollaboratorScalarWhereInput
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyWithoutFileInput>
  }

  export type UserUpsertWithoutCreatedFilesInput = {
    update: XOR<UserUpdateWithoutCreatedFilesInput, UserUncheckedUpdateWithoutCreatedFilesInput>
    create: XOR<UserCreateWithoutCreatedFilesInput, UserUncheckedCreateWithoutCreatedFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedFilesInput, UserUncheckedUpdateWithoutCreatedFilesInput>
  }

  export type UserUpdateWithoutCreatedFilesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    collaborations?: CollaboratorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedFilesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    collaborations?: CollaboratorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StrokeUpsertWithWhereUniqueWithoutFileInput = {
    where: StrokeWhereUniqueInput
    update: XOR<StrokeUpdateWithoutFileInput, StrokeUncheckedUpdateWithoutFileInput>
    create: XOR<StrokeCreateWithoutFileInput, StrokeUncheckedCreateWithoutFileInput>
  }

  export type StrokeUpdateWithWhereUniqueWithoutFileInput = {
    where: StrokeWhereUniqueInput
    data: XOR<StrokeUpdateWithoutFileInput, StrokeUncheckedUpdateWithoutFileInput>
  }

  export type StrokeUpdateManyWithWhereWithoutFileInput = {
    where: StrokeScalarWhereInput
    data: XOR<StrokeUpdateManyMutationInput, StrokeUncheckedUpdateManyWithoutFileInput>
  }

  export type StrokeScalarWhereInput = {
    AND?: StrokeScalarWhereInput | StrokeScalarWhereInput[]
    OR?: StrokeScalarWhereInput[]
    NOT?: StrokeScalarWhereInput | StrokeScalarWhereInput[]
    id?: StringFilter<"Stroke"> | string
    fileId?: StringFilter<"Stroke"> | string
    type?: StringFilter<"Stroke"> | string
    x?: FloatNullableFilter<"Stroke"> | number | null
    y?: FloatNullableFilter<"Stroke"> | number | null
    w?: FloatNullableFilter<"Stroke"> | number | null
    h?: FloatNullableFilter<"Stroke"> | number | null
    radius?: FloatNullableFilter<"Stroke"> | number | null
    text?: StringNullableFilter<"Stroke"> | string | null
    fontSize?: IntNullableFilter<"Stroke"> | number | null
    fontFamily?: StringNullableFilter<"Stroke"> | string | null
    color?: StringNullableFilter<"Stroke"> | string | null
    createdAt?: DateTimeFilter<"Stroke"> | Date | string
    updatedAt?: DateTimeFilter<"Stroke"> | Date | string
  }

  export type CreatedFileCreateWithoutStrokesInput = {
    id?: string
    createdAt?: Date | string
    name: string
    collaborators?: CollaboratorCreateNestedManyWithoutFileInput
    createdByUser: UserCreateNestedOneWithoutCreatedFilesInput
  }

  export type CreatedFileUncheckedCreateWithoutStrokesInput = {
    id?: string
    createdAt?: Date | string
    createdByUserId: string
    name: string
    collaborators?: CollaboratorUncheckedCreateNestedManyWithoutFileInput
  }

  export type CreatedFileCreateOrConnectWithoutStrokesInput = {
    where: CreatedFileWhereUniqueInput
    create: XOR<CreatedFileCreateWithoutStrokesInput, CreatedFileUncheckedCreateWithoutStrokesInput>
  }

  export type CreatedFileUpsertWithoutStrokesInput = {
    update: XOR<CreatedFileUpdateWithoutStrokesInput, CreatedFileUncheckedUpdateWithoutStrokesInput>
    create: XOR<CreatedFileCreateWithoutStrokesInput, CreatedFileUncheckedCreateWithoutStrokesInput>
    where?: CreatedFileWhereInput
  }

  export type CreatedFileUpdateToOneWithWhereWithoutStrokesInput = {
    where?: CreatedFileWhereInput
    data: XOR<CreatedFileUpdateWithoutStrokesInput, CreatedFileUncheckedUpdateWithoutStrokesInput>
  }

  export type CreatedFileUpdateWithoutStrokesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collaborators?: CollaboratorUpdateManyWithoutFileNestedInput
    createdByUser?: UserUpdateOneRequiredWithoutCreatedFilesNestedInput
  }

  export type CreatedFileUncheckedUpdateWithoutStrokesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collaborators?: CollaboratorUncheckedUpdateManyWithoutFileNestedInput
  }

  export type CreatedFileCreateWithoutCollaboratorsInput = {
    id?: string
    createdAt?: Date | string
    name: string
    createdByUser: UserCreateNestedOneWithoutCreatedFilesInput
    strokes?: StrokeCreateNestedManyWithoutFileInput
  }

  export type CreatedFileUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    createdAt?: Date | string
    createdByUserId: string
    name: string
    strokes?: StrokeUncheckedCreateNestedManyWithoutFileInput
  }

  export type CreatedFileCreateOrConnectWithoutCollaboratorsInput = {
    where: CreatedFileWhereUniqueInput
    create: XOR<CreatedFileCreateWithoutCollaboratorsInput, CreatedFileUncheckedCreateWithoutCollaboratorsInput>
  }

  export type UserCreateWithoutCollaborationsInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
    bio?: string | null
    profilePhoto?: string | null
    userName: string
    provider: string
    id?: string
    createdFiles?: CreatedFileCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutCollaborationsInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
    bio?: string | null
    profilePhoto?: string | null
    userName: string
    provider: string
    id?: string
    createdFiles?: CreatedFileUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutCollaborationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
  }

  export type CreatedFileUpsertWithoutCollaboratorsInput = {
    update: XOR<CreatedFileUpdateWithoutCollaboratorsInput, CreatedFileUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<CreatedFileCreateWithoutCollaboratorsInput, CreatedFileUncheckedCreateWithoutCollaboratorsInput>
    where?: CreatedFileWhereInput
  }

  export type CreatedFileUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: CreatedFileWhereInput
    data: XOR<CreatedFileUpdateWithoutCollaboratorsInput, CreatedFileUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type CreatedFileUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    createdByUser?: UserUpdateOneRequiredWithoutCreatedFilesNestedInput
    strokes?: StrokeUpdateManyWithoutFileNestedInput
  }

  export type CreatedFileUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    strokes?: StrokeUncheckedUpdateManyWithoutFileNestedInput
  }

  export type UserUpsertWithoutCollaborationsInput = {
    update: XOR<UserUpdateWithoutCollaborationsInput, UserUncheckedUpdateWithoutCollaborationsInput>
    create: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollaborationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollaborationsInput, UserUncheckedUpdateWithoutCollaborationsInput>
  }

  export type UserUpdateWithoutCollaborationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdFiles?: CreatedFileUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollaborationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdFiles?: CreatedFileUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type CollaboratorCreateManyUserInput = {
    id?: string
    fileId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type CreatedFileCreateManyCreatedByUserInput = {
    id?: string
    createdAt?: Date | string
    name: string
  }

  export type CollaboratorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: CreatedFileUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type CollaboratorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreatedFileUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collaborators?: CollaboratorUpdateManyWithoutFileNestedInput
    strokes?: StrokeUpdateManyWithoutFileNestedInput
  }

  export type CreatedFileUncheckedUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collaborators?: CollaboratorUncheckedUpdateManyWithoutFileNestedInput
    strokes?: StrokeUncheckedUpdateManyWithoutFileNestedInput
  }

  export type CreatedFileUncheckedUpdateManyWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CollaboratorCreateManyFileInput = {
    id?: string
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type StrokeCreateManyFileInput = {
    id?: string
    type: string
    x?: number | null
    y?: number | null
    w?: number | null
    h?: number | null
    radius?: number | null
    text?: string | null
    fontSize?: number | null
    fontFamily?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaboratorUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollaborationsNestedInput
  }

  export type CollaboratorUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrokeUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    w?: NullableFloatFieldUpdateOperationsInput | number | null
    h?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrokeUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    w?: NullableFloatFieldUpdateOperationsInput | number | null
    h?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrokeUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: NullableFloatFieldUpdateOperationsInput | number | null
    y?: NullableFloatFieldUpdateOperationsInput | number | null
    w?: NullableFloatFieldUpdateOperationsInput | number | null
    h?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
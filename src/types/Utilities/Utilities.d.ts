//*[ TYPE MODIFIER ]*//

/**
 * Creates a partial type from an existing type.
 * 
 * @template T - The type to make partial.
 * @type {{ [P in keyof T]?: T[P] }} Partial
 * 
 * @example <caption>Creating a partial type</caption>
 * interface Foo { a: number; b: string; c: boolean; }
 * type PartialFoo = Partial<Foo>; // PartialFoo is { a?: number; b?: string; c?: boolean; }
 */
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Creates a required type from an existing type.
 * 
 * @template T - The type to make required.
 * @type {{ [P in keyof T]-?: T[P] }} Required
 * 
 * @example <caption>Creating a required type</caption>
 * interface Foo { a?: number; b?: string; c?: boolean; }
 * type RequiredFoo = Required<Foo>; // RequiredFoo is { a: number; b: string; c: boolean; }
 */
export type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Creates a readonly type from an existing type.
 * 
 * @template T - The type to make readonly.
 * @type {{ readonly [P in keyof T]: T[P] }} Readonly
 * 
 * @example <caption>Creating a readonly type</caption>
 * interface Foo { a: number; b: string; c: boolean; }
 * type ReadonlyFoo = Readonly<Foo>; // ReadonlyFoo is { readonly a: number; readonly b: string; readonly c: boolean; }
 */
export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * Creates a mutable type from an existing type.
 * 
 * @template T - The type to make mutable.
 * @type {{ -readonly [P in keyof T]: T[P] }} Mutable
 * 
 * @example <caption>Creating a mutable type</caption>
 * interface Foo { readonly a: number; readonly b: string; readonly c: boolean; }
 * type MutableFoo = Mutable<Foo>; // MutableFoo is { a: number; b: string; c: boolean; }
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

//*[ TYPE EXTRACTORS ]*//

/**
 * Extract keys of an object type.
 * 
 * @template T - The object type to extract keys from.
 * @type {keyof T} ExtractKeys
 * 
 * @example <caption>Extracting keys from an object type</caption>
 * interface Foo { a: number; b: string; c: boolean; }
 * type Keys = ExtractKeys<Foo>; // Keys is 'a' | 'b' | 'c'
 */
export type ExtractKeys<T> = keyof T;

/**
 * Extract values of an object type.
 * 
 * @template T - The object type to extract values from.
 * @type {T[keyof T]} ExtractValues
 * 
 * @example <caption>Extracting values from an object type</caption>
 * interface Foo { a: number; b: string; c: boolean; }
 * type Values = ExtractValues<Foo>; // Values is number | string | boolean
 */
export type ExtractValues<T> = T[keyof T];

//*[ XXXXXXXX ]*//

/**
 * Check if a type is an object.
 * 
 * @template T - The type to check.
 * @type {T extends object ? true : false} IsObject
 * 
 * @example <caption>Checking if a type is an object</caption>
 * type A = IsObject<string>; // false
 * type B = IsObject<{ a: number }>; // true
 */
export type IsObject<T> = T extends object ? true : false;

/**
 * Check if a type is a string.
 * 
 * @template T - The type to check.
 * @type {T extends string ? true : false} IsString
 * 
 * @example <caption>Checking if a type is a string</caption>
 * type A = IsString<number>; // false
 * type B = IsString<string>; // true
 */
export type IsString<T> = T extends string ? true : false;

/**
 * Check if a type is a number.
 * 
 * @template T - The type to check.
 * @type {T extends number ? true : false} IsNumber
 * 
 * @example <caption>Checking if a type is a number</caption>
 * type A = IsNumber<string>; // false
 * type B = IsNumber<number>; // true
 */
export type IsNumber<T> = T extends number ? true : false;

/**
 * Check if a type is a boolean.
 * 
 * @template T - The type to check.
 * @type {T extends boolean ? true : false} IsBoolean
 * 
 * @example <caption>Checking if a type is a boolean</caption>
 * type A = IsBoolean<string>; // false
 * type B = IsBoolean<boolean>; // true
 */
export type IsBoolean<T> = T extends boolean ? true : false;

/**
 * Check if a type is a bigint.
 * 
 * @template T - The type to check.
 * @type {T extends bigint ? true : false} IsBigInt
 * 
 * @example <caption>Checking if a type is a bigint</caption>
 * type A = IsBigInt<string>; // false
 * type B = IsBigInt<bigint>; // true
 */
export type IsBigInt<T> = T extends bigint ? true : false;

/**
 * Check if a type is a symbol.
 * 
 * @template T - The type to check.
 * @type {T extends symbol ? true : false} IsSymbol
 * 
 * @example <caption>Checking if a type is a symbol</caption>
 * type A = IsSymbol<string>; // false
 * type B = IsSymbol<symbol>; // true
 */
export type IsSymbol<T> = T extends symbol ? true : false;

/**
 * Check if a type is a null.
 * 
 * @template T - The type to check.
 * @type {T extends null ? true : false} IsNull
 * 
 * @example <caption>Checking if a type is null</caption>
 * type A = IsNull<string>; // false
 * type B = IsNull<null>; // true
 */
export type IsNull<T> = T extends null ? true : false;

/**
 * Check if a type is an undefined.
 * 
 * @template T - The type to check.
 * @type {T extends undefined ? true : false} IsUndefined
 * 
 * @example <caption>Checking if a type is undefined</caption>
 * type A = IsUndefined<string>; // false
 * type B = IsUndefined<undefined>; // true
 */
export type IsUndefined<T> = T extends undefined ? true : false;

/**
 * Check if a type is an array.
 * 
 * @template T - The type to check.
 * @type {T extends unknown[] ? true : false} IsArray
 * 
 * @example <caption>Checking if a type is an array</caption>
 * type A = IsArray<string>; // false
 * type B = IsArray<string[]>; // true
 */
export type IsArray<T> = T extends unknown[] ? true : false;

/**
 * Check if a type is a function.
 * 
 * @template T - The type to check.
 * @type {T extends (...args: unknown) => unknown ? true : false} IsFunction
 * 
 * @example <caption>Checking if a type is a function</caption>
 * type A = IsFunction<string>; // false
 * type B = IsFunction<() => void>; // true
 */
export type IsFunction<T> = T extends (...args: unknown) => unknown ? true : false;

/**
 * Check if a type is a class instance.
 * 
 * @template T - The type to check.
 * @type {T extends { prototype: unknown } ? true : false} IsClassInstance
 * 
 * @example <caption>Checking if a type is a class instance</caption>
 * class MyClass {}
 * type A = IsClassInstance<MyClass>; // true
 * type B = IsClassInstance<string>; // false
 */
export type IsClassInstance<T> = T extends { prototype: unknown } ? true : false;

/**
 * Check if a type is a constructor.
 * 
 * @template T - The type to check.
 * @type {T extends new (...args: unknown) => unknown ? true : false} IsConstructor
 * 
 * @example <caption>Checking if a type is a constructor</caption>
 * type A = IsConstructor<string>; // false
 * type B = IsConstructor<new () => void>; // true
 */
export type IsConstructor<T> = T extends new (...args: unknown[]) => unknown ? true : false;

/**
 * Check if a type is a promise.
 * 
 * @template T - The type to check.
 * @type {T extends Promise<unknown> ? true : false} IsPromise
 * 
 * @example <caption>Checking if a type is a promise</caption>
 * type A = IsPromise<string>; // false
 * type B = IsPromise<Promise<void>>; // true
 */
export type IsPromise<T> = T extends Promise<unknown> ? true : false;

/**
 * Check if a type is a tuple.
 * 
 * @template T - The type to check.
 * @type {T extends [unknown, ...unknown] ? true : false} IsTuple
 * 
 * @example <caption>Checking if a type is a tuple</caption>
 * type A = IsTuple<string>; // false
 * type B = IsTuple<[string, number]>; // true
 */
export type IsTuple<T> = T extends [unknown, ...unknown] ? true : false;

/**
 * Check if a type is a union.
 * 
 * @template T - The type to check.
 * @type {T extends unknown[] ? false : T extends unknown ? true : false} IsUnion
 * 
 * @example <caption>Checking if a type is a union</caption>
 * type A = IsUnion<string>; // false
 * type B = IsUnion<string | number>; // true
 */
export type IsUnion<T> = T extends unknown[] ? false : T extends unknown ? true : false;

/**
 * Check if a type is nullable.
 * 
 * @template T - The type to check.
 * @type {T extends null | undefined ? true : false} IsNullable
 * 
 * @example <caption>Checking if a type is nullable</caption>
 * type A = IsNullable<string>; // false
 * type B = IsNullable<string | null>; // true
 */
export type IsNullable<T> = T extends null | undefined ? true : false;


//*[ FUNCTION UTILITIES ]*//

/**
 * Creates a type that represents the parameters of a function type.
 * 
 * @template T - The function type to extract parameters from.
 * @type {T extends (...args: infer P) => unknown ? P : never} Parameters
 * 
 * @example <caption>Extracting parameters from a function type</caption>
 * type A = Parameters<() => void>; // A is []
 * type B = Parameters<(a: number, b: string) => void>; // B is [number, string]
 */
export type Parameters<T extends (...args: unknown) => unknown> = T extends (...args: infer P) => unknown ? P : never;

/**
 * Creates a type that represents the return type of a function type.
 * 
 * @template T - The function type to extract the return type from.
 * @type {T extends (...args: unknown) => infer R ? R : never} ReturnType
 * 
 * @example <caption>Extracting the return type from a function type</caption>
 * type A = ReturnType<() => void>; // A is void
 * type B = ReturnType<(a: number, b: string) => boolean>; // B is boolean
 */
export type ReturnType<T extends (...args: unknown) => unknown> = T extends (...args: unknown) => infer R ? R : never;

/**
 * Creates a type that represents the instance type of a constructor type.
 * 
 * @template T - The constructor type to extract the instance type from.
 * @type {T extends new (...args: unknown) => infer R ? R : never} InstanceType
 * 
 * @example <caption>Extracting the instance type from a constructor type</caption>
 * type A = InstanceType<new () => void>; // A is void
 * type B = InstanceType<new () => string>; // B is string
 */
export type InstanceType<T extends new (...args: unknown) => unknown> = T extends new (...args: unknown) => infer R ? R : never;

/**
 * Creates a type that represents the constructor parameters of a constructor type.
 * 
 * @template T - The constructor type to extract parameters from.
 * @type {T extends new (...args: infer P) => unknown ? P : never} ConstructorParameters
 * 
 * @example <caption>Extracting constructor parameters from a constructor type</caption>
 * type A = ConstructorParameters<new () => void>; // A is []
 * type B = ConstructorParameters<new (a: number, b: string) => void>; // B is [number, string]
 */
export type ConstructorParameters<T extends new (...args: unknown) => unknown> = T extends new (...args: infer P) => unknown ? P : never;


//*[ STRING UTILITIES ]*//

/**
 * Converts a string to a tuple type.
 *
 * @example
 * type A = StringToTuple<'abc'>; // ['a', 'b', 'c']
 */
export type StringToTuple<S extends string> = S extends `${infer Head}${infer Tail}` ? [Head, ...StringToTuple<Tail>] : [];

/**
 * Converts a tuple type to a string.
 *
 * @example
 * type A = TupleToString<['a', 'b', 'c']>; // 'abc'
 */
export type TupleToString<
  T extends readonly unknown[]
> = T extends [infer Head extends string | number | bigint | boolean | null | undefined, ...infer Tail]
  ? `${Head}${TupleToString<Tail>}`
  : '';

/**
 * Converts a string to a union type.
 *
 * @example
 * type A = StringToUnion<'abc'>; // 'a' | 'b' | 'c'
 */
export type StringToUnion<S extends string> = StringToTuple<S>[number];

/**
 * Converts a union type to a string.
 *
 * @example
 * type A = UnionToString<'a' | 'b' | 'c'>; // 'abc'
 */
export type UnionToString<U extends string> = U extends `${infer Head}${infer Tail}` ?  [Head, ...UnionToString<Tail>] : [];

/**
 * Reverses a string literal type.
 *
 * @template S - The string literal type to reverse.
 * @type {S extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : ""} ReverseString
 *
 * @example <caption>Reversing a string literal type</caption>
 * type Reversed = ReverseString<'hello'>; // Reversed is 'olleh'
 */
export type ReverseString<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${ReverseString<Rest>}${First}`
  : "";

/**
 * Parses a string literal type representing a single digit into a numeric literal type.
 *
 * @template T - The string literal type to parse.
 * @type {T extends `${infer Digit extends number}` ? Digit : never} ParseInt
 *
 * @example <caption>Parsing a string literal type into a numeric literal type</caption>
 * type Parsed = ParseInt<'5'>; // Parsed is 5
 */
export type ParseInt<T extends string> 
  = T extends `${infer Digit extends number}`               
  ? Digit
  : never;


  //*[ NUMERIC UTILITIES ]*//
  
  /**
   * Generates a union type of numbers starting from the length of a given starting array (`START`) 
   * up to (and including) an end number (`END`). This utility type leverages TypeScript's recursive type capabilities
   * to simulate numeric range generation in the type system.
   *
   * @template START An array type where its length represents the start of the numeric range.
   * @template END The end number of the range, inclusive.
   * @template ACC Accumulator for the recursive type construction, starts with `never` and accumulates possible numeric values.
   * @returns A union type of numbers from the start (derived from `START['length']`) to the `END` number.
   *
   * @example <caption>Generates a type that represents numbers from 0 to 60, inclusive.</caption>
   * type ZeroToSixty = NumericRange<[], 60>; // Can be used to type variables that can hold any number between 0 and 60.
   * const zeroToSixty: ZeroToSixty;
   * zeroToSixty = 30; // Valid
   * zeroToSixty = 61; // Error: Type '61' is not assignable to type 'ZeroToSixty'.
   * 
   * @example <caption>Generates a type that represents numbers from 20 to 40, inclusive.</caption>
   * type TwentyToForty = NumericRange<NumberTuple<20>, 40>; // Can be used to type variables that can hold any number between 20 and 40.
   * const mySecondNumber: TwentyToForty;
   * twentyToForty = 30; // Valid
   * twentyToForty = 19; // Error: Type '19' is not assignable to type 'TwentyToForty'.
   */
  export type NumericRange<
     START extends number[], 
     END extends number, 
     ACC extends number=never
  > = START['length'] extends END 
    ? ACC | END
    : NumericRange<[...START,1], END, ACC | START['length']>;
  
  /**
   * Increments a numeric literal type by one.
   *
   * @template T - The numeric literal type to increment.
   * @type {number extends T ? number : `${T}` extends `${string}${"." | "+" | "-" | "e"}${string}` ? number : _Inc<`${T}`> extends `${infer N extends number}` ? N : never} Increment
   *
   * @example <caption>Incrementing a numeric literal type</caption>
   * type Incremented = Increment<5>; // Incremented is 6
   */
  export type Increment<T extends number> =
    number extends T ? number :
    `${T}` extends `${string}${"." | "+" | "-" | "e"}${string}` ? number :
    _Inc<`${T}`> extends `${infer N extends number}` ? N : never;
  
    type _IncDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    type Digit = _IncDigit[number];
  
    type _Inc<T extends string> =
      T extends `${infer F}${Digit}` ? T extends `${F}${infer L extends Digit}` ?
      `${L extends 9 ? _Inc<F> : F}${_IncDigit[L]}` :
      never : 1;
  
  /**
   * Decrements a numeric literal type by one.
   *
   * @template T - The numeric literal type to decrement.
   * @type {number extends T ? number : `${T}` extends `${string}${"." | "+" | "-" | "e"}${string}` ? number : _Dec<`${T}`> extends `${infer N extends number}` ? N : never} Decrement
   *
   * @example <caption>Decrementing a numeric literal type</caption>
   * type Decremented = Decrement<5>; // Decremented is 4
   */
  export type Decrement<T extends number> =
    number extends T ? number :
    `${T}` extends `${string}${"." | "+" | "-" | "e"}${string}` ? number :
    _Dec<`${T}`> extends `${infer N extends number}` ? N : never;
  
    type _DecDigit = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8];
    type _Dec<T extends string> =
      T extends `${infer F}${Digit}` ? T extends `${F}${infer L extends Digit}` ?
      `${L extends 0 ? _Dec<F> : F}${_DecDigit[L]}` :
      never : 0;


//*[ OBJECT UTILITIES ]*//

/**
 * Converts an object type to a union type.
 *
 * @example
 * type A = ObjectToUnion<{ a: 1, b: 2, c: 3 }>; // 1 | 2 | 3
 */
export type ObjectToUnion<O> = O[keyof O];

/**
 * Converts a union type to an object type.
 *
 * @example
 * type A = UnionToObject<'a' | 'b' | 'c'>; // { a: 'a', b: 'b', c: 'c' }
 */
export type UnionToObject<U extends string | number | symbol> = { [K in U]: K };

/**
 * Converts a record type to a union type.
 * 
 * @example
 * type A = RecordToUnion<{ a: 1, b: 2, c: 3 }>; // 1 | 2 | 3
 */
export type RecordToUnion<R extends Record<string, unknown>> = R[keyof R];

/**
 * Converts a union type to a record type.
 *
 * @example
 * type A = UnionToRecord<'a' | 'b' | 'c'>; // { a: unknown, b: unknown, c: unknown }
 */
export type UnionToRecord<U extends string | number | symbol> = Record<U, unknown>;

/**
 * Converts a union type to a tuple type.
 *
 * @template U - The union type to convert.
 * @type {U extends unknown ? [U] : never} UnionToTuple
 *
 * @example <caption>Converting a union type to a tuple type</caption>
 * type MyUnion = 'a' | 'b' | 'c';
 * type MyTuple = UnionToTuple<MyUnion>; // MyTuple is ['a'] | ['b'] | ['c']
 */
export type UnionToTuple<U> = U extends unknown ? [U] : never;

/**
 * Converts an intersection type to a union type.
 *
 * @template I - The intersection type to convert.
 * @type {I extends infer U ? { [K in keyof U]: U[K] } : never} IntersectionToUnion
 *
 * @example <caption>Converting an intersection type to a union type</caption>
 * type MyIntersection = { a: string } & { b: number };
 * type MyUnion = IntersectionToUnion<MyIntersection>; // MyUnion is { a: string; b: number; }
 */
export type IntersectionToUnion<I> = I extends infer U ? { [K in keyof U]: U[K] } : never;

/**
 * Converts an object type to a tuple of its property types.
 *
 * @template O - The object type to convert.
 * @type {{ [K in keyof O]: O[K] }[keyof O]} ObjectToTuple
 *
 * @example <caption>Converting an object type to a tuple of its property types</caption>
 * type MyObject = { a: string; b: number };
 * type MyTuple = ObjectToTuple<MyObject>; // MyTuple is string | number
 */
export type ObjectToTuple<O> = { [K in keyof O]: O[K] }[keyof O];

/**
 * Converts a tuple type to an object type with the tuple elements as property values.
 *
 * @template T - The tuple type to convert.
 * @type {{ [K in keyof T]: T[K] }} TupleToObject
 *
 * @example <caption>Converting a tuple type to an object type</caption>
 * type MyTuple = [string, number];
 * type MyObject = TupleToObject<MyTuple>; // MyObject is { 0: string; 1: number; }
 */
export type TupleToObject<T extends readonly unknown[]> = { [K in keyof T]: T[K] };

/**
 * Converts a record type to a tuple of its property types.
 *
 * @template R - The record type to convert.
 * @type {{ [K in keyof R]: R[K] }[keyof R]} RecordToTuple
 *
 * @example <caption>Converting a record type to a tuple of its property types</caption>
 * type MyRecord = Record<string, number>;
 * type MyTuple = RecordToTuple<MyRecord>; // MyTuple is number
 */
export type RecordToTuple<R> = { [K in keyof R]: R[K] }[keyof R];

/**
 * Converts a tuple type to a record type with the tuple elements as property values.
 *
 * @template T - The tuple type to convert.
 * @type {Record<`${number}`, T[number]>} TupleToRecord
 *
 * @example <caption>Converting a tuple type to a record type</caption>
 * type MyTuple = [string, number];
 * type MyRecord = TupleToRecord<MyTuple>; // MyRecord is Record<`${number}`, string | number>
 */
export type TupleToRecord<T extends readonly unknown[]> = Record<`${number}`, T[number]>;

/**
 * Fixes "Index signature is missing in type" error by adding an index signature to an object type.
 * 
 * @example
 * interface Foo { 
 *   foo: string;
 * };
 * const foo: IndexSignature<Foo> = { foo: "foo" };
 * function bar(obj: Record<string, unknown>) {}
 * bar(foo); // Valid
 */
export type IndexSignature<O extends object> = {
  [P in keyof O]: O[P]
};


//*[ TYPE MANUPULATION UTILITIES ]*//

/**
 * Concatenates two character types into a single character type.
 * 
 * @template A - The first character type.
 * @template B - The second character type.
 * @type {`${A}${B}`} Concat
 * 
 * @example <caption>Concatenating two character types</caption>
 * type Concatenated = Concat<'a', 'b'>; // Concatenated is 'ab'
 */
export type Concat<A extends (string | number), B extends (string | number)> = `${A}${B}`;

/**
 * Combines multiple character types into a single character type.
 * 
 * @template T - The string literal type to combine.
 * @type {`${T}`} CombineStringTypes
 * 
 * @example <caption>Combining string literal types</caption>
 * type Combined = CombineStringTypes<`${'foo' | 'bar'}${0 | 1}`>; // Combined is 'foo' | 'bar'
 * const value1: Combined = "foo0"; // Valid
 * const value2: Combined = "bar1"; // Valid
 * const value3: Combined = "foo"; // Error: Type '"foo"' is not assignable to type 'Combined' ("foo0" | "foo1" | "bar0" | "bar1")
 */
export type CombineStringTypes<T extends string> = `${T}`;

/**
 * Creates a tuple type of a specified length filled with `unknown` elements.
 * This utility type is particularly useful for creating array types with a fixed length at compile time,
 * which can then be used in other type-level computations or constraints.
 *
 * @template LENGTH The target length of the tuple.
 * @template ACC The accumulator used during recursion, starts as an empty array and fills until the target length is reached.
 * @returns A tuple of type `unknown[]` with a length specified by `LENGTH`.
 *
 * @example <caption>Create a tuple type with a length of 5.</caption>
 * type FiveLengthArray = CreateAnyTypeArrayWithLengthX<5>; // Resulting type would be equivalent to: [unknown, unknown, unknown, unknown, unknown]
 * 
 * @example <caption>Create a tuple type with specific types.</caption>
 * type ThreeTypeArray = CreateAnyTypeArrayWithLengthX<3, [number, string, symbol]>; // Resulting type would be: [number, string, symbol]
 * type StrictThreeTypeArray = CreateAnyTypeArrayWithLengthX<3, [1, '2', true]>; // Resulting type would be: [1, '2', true]
 * 
 * @example <caption>Create a tuple type with an overload in the accumulator type.</caption>
 * type OverloadedArray = CreateAnyTypeArrayWithLengthX<3, [number, string, symbol, number]>; // Error: Type instantiation is excessively deep and possibly infinite.
 */
export type CreateAnyTypeArrayWithLengthX<
  LENGTH extends number,
  ACC extends unknown[] = []
> = ACC['length'] extends LENGTH
  ? ACC
  : CreateAnyTypeArrayWithLengthX<LENGTH, [...ACC, unknown]>;

/**
 * Creates a tuple type of a specified length filled with a specified type.
 *
 * @template LENGTH The target length of the tuple.
 * @template T The type to fill the tuple with.
 * @template ACC The accumulator used during recursion, starts as an empty array and fills until the target length is reached.
 * @returns A tuple of type `T[]` with a length specified by `LENGTH`.
 *
 * @example <caption>Create a tuple type with a length of 3 filled with `number`.</caption>
 * type ThreeNumberValues = CreateSingleTypeArrayWithLengthX<3, number>; // Resulting type would be equivalent to: [number, number, number]
 * type StrictNumberValues = CreateSingleTypeArrayWithLengthX<3, number, [1, 2, 3]>; // Resulting type would be equivalent to: [1, 2, 3]
 * type StrictNumberError = CreateSingleTypeArrayWithLengthX<3, number, [1, 2, '3']>; // Type '[1, 2, "3"]' does not satisfy the constraint 'number[]'. Type 'string' is not assignable to type 'number'.
 * 
 * @example <caption>Create a tuple type with a length of 4 filled with `string`.</caption>
 * type FourStringValues = CreateSingleTypeArrayWithLengthX<4, string>; // Resulting type would be equivalent to: [string, string, string, string]
 * 
 * @example <caption>Create a tuple type using generics.</caption>
 * type GenericWithThreeStrings<T> = CreateSingleTypeArrayWithLengthX<3, T>; // Resulting type would be equivalent to: [string, string, string]
 * const ThreeStrings: GenericWithThreeStrings<['a', 'b', 'c']> = ['a', 'b', 'c']; // Valid
 */
export type CreateSingleTypeArrayWithLengthX<
  LENGTH extends number,
  T,
  ACC extends T[] = []
> = ACC['length'] extends LENGTH
  ? ACC
  : CreateSingleTypeArrayWithLengthX<LENGTH, T, [...ACC, T]>;

/**
 * Creates a tuple type of a specified length filled with `number` elements.
 * This utility type is particularly useful for creating numeric range types.
 *
 * @template LENGTH The target length of the tuple.
 * @returns A tuple of type `number[]` with a length specified by `LENGTH`.
 *
 * @example <caption>Create a tuple type with a length of 3.</caption>
 * type ThreeLengthArray = NumberTypeArray<3>; // Resulting type would be equivalent to: [number, number, number]
 */
export type NumberTuple<LENGTH extends number> = CreateSingleTypeArrayWithLengthX<LENGTH, number>;

/**
 * Creates a tuple type of a specified length filled with `string` elements.
 *
 * @template LENGTH The target length of the tuple.
 * @returns A tuple of type `string[]` with a length specified by `LENGTH`.
 *
 * @example <caption>Create a tuple type with a length of 3.</caption>
 * type ThreeLengthArray = StringTuple<3>; // Resulting type would be equivalent to: [string, string, string]
 */
export type StringTuple<LENGTH extends number> = CreateSingleTypeArrayWithLengthX<LENGTH, string>;

/**
 * Creates a tuple type of a specified length filled with `boolean` elements.
 *
 * @template LENGTH The target length of the tuple.
 * @returns A tuple of type `boolean[]` with a length specified by `LENGTH`.
 *
 * @example <caption>Create a tuple type with a length of 3.</caption>
 * type ThreeLengthArray = BooleanTuple<3>; // Resulting type would be equivalent to: [boolean, boolean, boolean]
 */
export type BooleanTuple<LENGTH extends number> = CreateSingleTypeArrayWithLengthX<LENGTH, boolean>;

/**
 * Creates a tuple type of a specified length filled with `unknown` elements.
 *
 * @template LENGTH The target length of the tuple.
 * @returns A tuple of type `unknown[]` with a length specified by `LENGTH`.
 *
 * @example <caption>Create a tuple type with a length of 3.</caption>
 * type ThreeLengthArray = UnknownTuple<3>; // Resulting type would be equivalent to: [unknown, unknown, unknown]
 */
export type UnknownTuple<LENGTH extends number> = CreateSingleTypeArrayWithLengthX<LENGTH, unknown>;

/**
 * Converts a tuple type to a union type.
 *
 * @example
 * type A = [1, 2, 3];
 * type B = TupleToUnion<A>; // 1 | 2 | 3
 */
export type TupleToUnion<T extends readonly unknown[]> = T[number];
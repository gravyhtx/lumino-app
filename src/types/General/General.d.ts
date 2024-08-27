/* eslint-disable no-unused-vars */
import { type ComponentType } from 'react';

//*[ PRIMITIVES ]*//

/**
 * A type representing a primitive value.
 * 
 * @type {string | number | bigint | symbol | boolean | null | undefined} AnyPrimitive
 * 
 * @example <caption>Using a primitive value</caption>
 * const value: AnyPrimitive[] = ['Hello, world!', 0, BigInt(35), Symbol('key'), true, null, undefined];
 */
export type AnyPrimitive = string | number | bigint | symbol | boolean | null | undefined;

/**
 * A type representing a primitive value with specified types.
 * 
 * @template T - The type of the primitive value.
 * @type {T} StrictPrimitive
 * 
 * @example <caption>Using a strict primitive value</caption>
 * const value: StrictPrimitive<string> = 'Hello, world!';
 * const value2: StrictPrimitive<number> = 0;
 * const value3: StrictPrimitive<bigint> = Symbol('a');
 */
export type StrictPrimitive<T extends string | number | bigint | symbol | boolean | null | undefined> = T;

/**
 * A type representing a primitive value excluding `null` and `undefined`.
 * 
 * @type {string | number | bigint | symbol | boolean} AnyValidPrimitive
 * 
 * @example <caption>Using a non-nullable primitive value</caption>
 * const value: AnyValidPrimitive[] = ['Hello, world!', 0, BigInt(35), Symbol('key'), true];
 */
export type AnyValidPrimitive = Exclude<AnyPrimitive, null | undefined>;

/**
 * A type representing a primitive value excluding `null` and `undefined`, with specified types.
 * 
 * @template T - The type of the primitive value.
 * @type {T} StrictAnyValidPrimitive
 * 
 * @example <caption>Using a non-nullable strict primitive value</caption>
 * const value: StrictAnyValidPrimitive<string> = 'Hello, world!';
 * const value2: StrictAnyValidPrimitive<number> = 0;
 * const value3: StrictAnyValidPrimitive<bigint> = Symbol('a');
 */
export type StrictAnyValidPrimitive<T extends AnyValidPrimitive> = T;


//*[ OBJECTS ]*//

/**
 * A type representing a key of an object.
 * 
 * @type {string | number | symbol} ObjectKey
 * 
 * @example <caption>Using an object key</caption>
 * const key: ObjectKey = 'key';
 * const obj = { [key]: 'value' }; // Valid
 * 
 * @example <caption>Using an invalid object key</caption>
 * const key2: ObjectKey = [42]; // Error: Type 'number[]' is not assignable to type 'string | number | symbol'
 * const obj2 = { [key2]: 'value' }; // Error: Element implicitly has an 'any' type because expression of type '42' can't be used to index type '{}'
 */
export type AnyObjectKey = string | number | symbol;

/**
 * A type representing a key of an object with specified types.
 * 
 * @template T - The type of the object keys (string, number, or symbol).
 * @type {T} StrictObjectKey
 * 
 * @example <caption>Using a strict object key</caption>
 * const key: StrictObjectKey<string> = 'key';
 * const obj: StrictObject<StrictObjectKey<string>, string> = { [key]: 'value' }; // Valid
 * 
 * @example <caption>Using an invalid strict object key</caption>
 * const key2: StrictObjectKey<string> = [42]; // Error: Type 'number[]' is not assignable to type 'string'
 * const obj2: StrictObject<StrictObjectKey<string>, string> = { [key2]: 'value' }; // Error: Element implicitly has an 'any' type because expression of type '42' can't be used to index type '{}'
 */
export type StrictObjectKey<T extends AnyObjectKey> = T;

/**
 * A type representing a record with 'string | number | symbol' for keys and 'unknown' values.
 * 
 * @type {Record<AnyObjectKey, unknown>} AnyObject
 * 
 * @example <caption>Using a general object</caption>
 * const obj: AnyObject = {
 *   key: 'value',
 *   0: BigInt(35),
 *   [Symbol('key')]: () => console.log('Hello, world!')
 * };
 */
export type AnyObject = Record<AnyObjectKey, unknown>;

/**
 * A type representing an object with specified types for keys and values.
 * 
 * @template T - The type of the object keys (string, number, or symbol).
 * @template U - The type of the object values.
 * @type {StrictObject<T, U>} StrictObject
 * 
 * @example <caption>Using a strict object with a single type allowed for all keys and all values</caption>
 * const stringObject: StrictObject<string, number> = { a: 1, b: 2, c: 3};
 * const numberObject: StrictObject<number, symbol> = { 0: Symbol('a'), 1: Symbol('b'), 2: Symbol('c')};
 * const symbolObject: StrictObject<symbol, string> = { [Symbol()]: 'a', [Symbol()]: 'b', [Symbol()]: 'c' };
 * 
 * @example <caption>Using a strict object with a single type for all values and predetermined names for keys</caption>
 * const validObject: StrictObject<'a' | 'b' | 'c', boolean> = { a: true, b: false, c: true }; // Valid
 * const invalidObject: StrictObject<'a' | 'b' | 'c', boolean> = { a: true, b: false, d: true }; // Error: Object literal may only specify known properties
 */
export type StrictObject<T extends AnyObjectKey, U> = {
  [K in T]: U;
}


//*[ ARRAYS ]*//

/**
 * A type representing an array with unknown values.
 * 
 * @type {unknown[]} AnyArray
 * 
 * @example <caption>Using a general array</caption>
 * const arr: AnyArray = ['Hello, world!', 0, BigInt(35), Symbol('key'), true, null, undefined];
 */
export type AnyArray = unknown[];

/**
 * A type representing an array with specified types of values.
 * 
 * @template T - The type of the array values.
 * @type {T[]} StrictArray
 * 
 * @example <caption>Using a strict array</caption>
 * const arr: StrictArray<string> = ['Hello, world!', 'Goodbye, world!'];
 */
export type StrictArray<T> = T[];

/**
 * A type representing a tuple with specified types of values.
 * 
 * @template T - The type of the tuple values.
 * @type {T[]} StrictTuple
 * 
 * @example <caption>Using a strict tuple</caption>
 * const tuple: StrictTuple<[string, number]> = ['Hello, world!', 42];
 */
export type StrictTuple<T extends unknown[]> = T;


//*[ COLLECTIONS ]*//

/**
 * A type representing a key of a map.
 * 
 * @type {unknown} MapKey
 * 
 * @example <caption>Using a map key</caption>
 * const key: MapKey = 'key';
 * const map = new Map([[key, 'value']]); // Valid
 */
export type MapKey = unknown;

/**
 * A type representing a map with 'MapKey' keys and 'unknown' values.
 * 
 * @type {Map<MapKey, unknown>} AnyMap
 * 
 * @example <caption>Using a general map</caption>
 * const map: AnyMap = new Map([[Symbol('key'), 'value']]); // Valid
 */
export type AnyMap = Map<MapKey, unknown>;

/**
 * A type representing a set with 'unknown' values.
 * 
 * @type {Set<unknown>} AnySet
 * 
 * @example <caption>Using a general set</caption>
 * const set: AnySet = new Set(['value1', 'value2']); // Valid
 */
export type AnySet = Set<unknown>;

/**
 * A type representing any collection, including arrays, objects, maps, and sets.
 * 
 * @type {AnyCollection[] | AnyObject | AnyMap | AnySet} AnyCollection
 * 
 * @example <caption>Using a collection</caption>
 * const arrayCollection: AnyCollection[] = [['value1'], ['value2']];
 * const objectCollection: AnyCollection = { key1: 'value1', key2: 'value2' };
 * const mapCollection: AnyCollection = new Map([['key1', 'value1'], ['key2', 'value2']]);
 * const setCollection: AnyCollection = new Set(['value1', 'value2']);
 */
export type AnyCollection = AnyCollection[] | AnyArray | AnyObject | AnyMap | AnySet;

/**
 * A type representing a strict collection with specified types.
 * 
 * @template T - The type of the values in the collection.
 * @type {StrictArray<T> | StrictObject<AnyObjectKey, T> | Map<T, unknown> | Set<T>} StrictCollection
 * 
 * @example <caption>Using a strict collection</caption>
 * const strictArray: StrictCollection<number> = [1, 2, 3];
 * const strictObject: StrictCollection<number> = { key1: 1, key2: 2 };
 * const strictMap: StrictCollection<number> = new Map([[Symbol('key'), 1]]);
 * const strictSet: StrictCollection<number> = new Set([1, 2, 3]);
 */
export type StrictCollection<T> = StrictArray<T> | StrictObject<AnyObjectKey, T> | Map<T, unknown> | Set<T>;

/**
 * A type representing a weak collection, including weak maps and weak sets.
 * 
 * @type {WeakMap<MapKey, unknown> | WeakSet<unknown>} WeakCollection
 * 
 * @example <caption>Using a weak collection</caption>
 * const weakMap: WeakCollection = new WeakMap();
 * const weakSet: WeakCollection = new WeakSet();
 */
export type WeakCollection = WeakMap<MapKey, unknown> | WeakSet<unknown>;

/**
 * A type representing a strict weak collection with specified types.
 * 
 * @template K - The type of the keys in the weak map.
 * @template V - The type of the values in the weak map and weak set.
 * @type {WeakMap<K, V> | WeakSet<V>} StrictWeakCollection
 * 
 * @example <caption>Using a strict weak collection</caption>
 * const strictWeakMap: StrictWeakCollection<object, number> = new WeakMap();
 * const strictWeakSet: StrictWeakCollection<object, number> = new WeakSet();
 */
export type StrictWeakCollection<K, V> = WeakMap<K, V> | WeakSet<V>;


//*[ FUNCTIONS ]*//

/**
 * A type representing a function that accepts any number of arguments and returns an unknown value.
 * 
 * @type {(..._args: unknown[]) => unknown} AnyFunction
 * 
 * @example <caption>Using an any function</caption>
 * const fn: AnyFunction = (...args) => args;
 */
export type AnyFunction = (..._args?: unknown[]) => unknown;

/**
 * A type representing a function that accepts any number of arguments and returns a value of type `T`.
 * 
 * @template T - The return type of the function.
 * @type {(..._args: unknown[]) => T} StrictFunction
 * 
 * @example <caption>Using a specific return type</caption>
 * const function: StrictFunction<number> = () => 42;
 * 
 * @example <caption>Using a generic type</caption>
 * const function2: StrictFunction<T> = (...args: T[]) => args[0];
 */
export type StrictFunction<T> = (..._args?: unknown[]) => T; //! export type StrictFunction<T, A> = (..._args: A[]) => T;

/**
 * A type representing a function with a conditional return type, providing a fallback type if the condition is not met.
 * 
 * @template T - The type of the function.
 * @template U - The type to return if the function does not match the conditional type.
 * @type {T extends (...args: unknown[]) => T ? T : U} FunctionWithFallback
 * 
 * @example <caption>Using a conditional function type with a fallback</caption>
 * const invokeFunction = <T, U>(fn: FunctionWithFallback<T, U>, fallback: U): T | U => {
 *   if (typeof fn === 'function') {
 *    return fn();
 *   }
 *   return fallback;
 * };
 * 
 * @example <caption>Using a valid function type</caption>
 * type MyFunction = FunctionWithFallback<() => void>; // MyFunction is `() => void`
 * const myFunction: MyFunction = () => {}; // Valid
 * 
 * @example <caption>Using an invalid function type</caption>
 * type NotAFunction = FunctionWithFallback<string>; // NotAFunction is `never`
 * const notAFunction: NotAFunction = 'Hello, world!'; // Error: Type 'string' is not assignable to type 'never'
 */
export type FunctionWithFallback<T, U = never> = T extends (...args: unknown[]) => T ? T : U;


//*[ COMPONENTS ]*//

/**
 * A type representing a React component that accepts any props.
 * 
 * @type {ComponentType<unknown>} AnyComponent
 * 
 * @example <caption>Using a typical JSX component type</caption>
 * const MyComponent: AnyComponent = ({ message }) => <div>{message}</div>;
 */
export type AnyComponent = ComponentType<unknown>;

/**
 * A type representing a React component that accepts specified types of props.
 * 
 * @template T - The type of the component props.
 * @type {ComponentType<T>} StrictComponent
 * 
 * @example <caption>Using a specific component type</caption>
 * const MyComponent: StrictComponent<{ message: string }> = ({ message }) => <div>{message}</div>;
 */
export type StrictComponent<T extends object> = ComponentType<T>;


//*[ HIGHER-ORDER COMPONENTS ]*//

/**
 * A type representing the signature of a higher-order component that takes a component of type `T` and returns a new component
 * with the same props.
 * 
 * @template T - The type of the component props.
 * @param {React.ComponentType<T>} _component - The component to wrap.
 * @returns {React.ComponentType<T>} - The wrapped component.
 * 
 * @example <caption>Using the HOC type to create a higher-order component</caption>
 * export function compose(...hocs: HOC[]): HOC {
 *   return function <T extends object>(component: React.ComponentType<T>): React.ComponentType<T> {
 *     return hocs.reduceRight(
 *       (accComponent, hoc) => hoc(accComponent),
 *       component
 *     );
 *   };
 * }
 * 
 * @example <caption>Using the HOC type with a specific component</caption>
 * const withProps = <T extends object>(Component: React.ComponentType<T>) => (props: T) => <Component {...props} />;
 * const MyComponent = withProps<{ message: string }>(MyComponent);
 */
export type HOC = <T extends object>(_component: ComponentType<T>) => ComponentType<T>;


//*[ NOTHING ]*//

/**
 * A type representing the absence of a value.
 * 
 * @type {null | undefined} Nothing
 * 
 * @example <caption>Using a nothing value</caption>
 * const value: Nothing = null;
 * const value2: Nothing = undefined;
 * const value3: Nothing = 'Hello, world!'; // Error: Type '"Hello, world!"' is not assignable to type 'null | undefined'
 */
export type Nothing = null | undefined;

/**
 * A type representing the absence of a value or specified types.
 * 
 * @template T - The type of the value.
 * @type {T | Nothing} Maybe
 * 
 * @example <caption>Using a maybe value</caption>
 * const value: Maybe<string> = 'Hello, world!';
 * const value2: Maybe<number> = null;
 * const value3: Maybe<boolean> = undefined;
 * const value4: Maybe<bigint> = 'Goodbye, world!'; // Error: Type '"Goodbye, world!"' is not assignable to type 'bigint | null | undefined'
 */
export type Maybe<T> = T | Nothing;


//*[ ANYTHING ]*//

/**
 * A type representing any value, including primitives, objects, arrays, functions, components, and collections.
 * 
 * @type {AnyPrimitive | AnyObject | AnyArray | AnyFunction | AnyComponent | AnyCollection} Anything
 * 
 * @example <caption>Using an anything value</caption>
 * const value: Anything = 'Hello, world!';
 * const value2: Anything = { key: 'value' };
 * const value3: Anything = ['Hello, world!', 'Goodbye, world!'];
 * const value4: Anything = () => console.log('Hello, world!');
 * const value5: Anything = ({ message }) => <div>{message}</div>;
 * const value6: Anything = new Map([['key', 'value']]);
 * 
 */
export type Anything = AnyValidPrimitive | AnyObject | AnyArray | AnyFunction | AnyComponent | AnyCollection;

/**
 * A type representing any value, including primitives, objects, arrays, functions, components, collections, or the absence of a value.
 * 
 * @type {Anything | Nothing} Everything
 * 
 * @example <caption>Using an everything value</caption>
 * const value: Everything = 'Hello, world!';
 * const value2: Everything = { key: 'value' };
 * const value3: Everything = ['Hello, world!', 'Goodbye, world!'];
 * const value4: Everything = () => console.log('Hello, world!');
 * const value5: Everything = ({ message }) => <div>{message}</div>;
 * const value6: Everything = new Map([['key', 'value']]);
 * const value7: Everything = null;
 * const value8: Everything = undefined;
 */
export type Everything = Anything | Nothing;

/**
 * A type representing any valid collection or primitive value.
 * 
 * @type {AnyValidPrimitive | AnyCollection} AnyValue
 * 
 * @example <caption>Using an any value</caption>
 * const value: AnyValue = 'Hello, world!';
 * const value2: AnyValue = ['Hello, world!', 'Goodbye, world!'];
 * const value3: AnyValue = new Map([['key', 'value']]);
 * const value4: AnyValue = 42;
 * const value5: AnyValue = true;
 * const value6: AnyValue = null; // Error: Type 'null' is not assignable to type 'AnyValidPrimitive | AnyCollection'
 */
export type AnyValue = AnyValidPrimitive | AnyCollection;

/**
 * A type representing any value, including primitives, collections, or the absence of a value.
 * 
 * @type {AnyValue | Nothing} EveryValue
 * 
 * @example <caption>Using an every value</caption>
 * const value: EveryValue = 'Hello, world!';
 * const value2: EveryValue = ['Hello, world!', 'Goodbye, world!'];
 * const value3: EveryValue = new Map([['key', 'value']]);
 * const value4: EveryValue = 42;
 * const value5: EveryValue = true;
 * const value6: EveryValue = null;
 * const value7: EveryValue = undefined;
 * const value8: EveryValue = () => console.log('Hello, world!'); // Error: Type '() => void' is not assignable to type 'EveryValue'
 */
export type EveryValue = AnyValue | Nothing;
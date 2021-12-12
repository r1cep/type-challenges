/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #初級 #array

  ### 質問

  配列`T`を受け取り、その最初のプロパティの型を返す`First<T>`を実装します。

  例えば

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```

  > GitHubで確認する：https://tsch.js.org/14/ja
*/

/* _____________ ここにコードを記入 _____________ */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type First<T extends any[]> = T extends { [K in 0]: infer U } ? U : never;

/* _____________ テストケース _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/14/answer/ja
  > 解答を見る：https://tsch.js.org/14/solutions
  > その他の課題：https://tsch.js.org/ja
*/

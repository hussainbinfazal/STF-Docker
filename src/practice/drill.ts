# TypeScript Elite Muscle Memory Drills

## How To Practice Effectively On Your Laptop

# Daily Practice System

## Step 1 — Open VS Code

Create a file:

```bash
practice.ts
```

---

## Step 2 — Split Screen Method

Left Side:

* This drill sheet

Right Side:

* Your `practice.ts`

---

## Step 3 — Type Everything Manually

DO NOT COPY PASTE.

The goal is:

* finger repetition
* syntax memory
* speed
* automatic recall

---

## Step 4 — Repeat In Rounds

### Round 1

Copy while looking.

### Round 2

Delete everything.
Rewrite from memory.

### Round 3

Add your own examples.

### Round 4

Use in mini projects.

---

# BEST PRACTICE METHOD

## Method 1 — Speed Typing Drill

Set timer:

```txt
10 minutes
```

Then write:

* interfaces
* functions
* generics
* utility types

as fast as possible.

---

## Method 2 — Blind Recall

1. Read syntax once
2. Close notes
3. Rewrite from memory
4. Check mistakes
5. Repeat

This builds REAL muscle memory.

---

## Method 3 — Real Usage

After drills:

Build:

* Express APIs
* React components
* middleware
* hooks
* schemas
* auth systems
* repositories

Real-world repetition is mandatory.

---

# TypeScript Elite Muscle Memory Drills

---

# 1. Variables

```ts
let age: number = 21;
```

```ts
let name: string = "Hussain";
```

```ts
let isActive: boolean = true;
```

```ts
let value: null = null;
```

```ts
let data: undefined = undefined;
```

```ts
const id: bigint = 123n;
```

---

# 2. Arrays

```ts
const nums: number[] = [1, 2, 3];
```

```ts
const users: Array<string> = ["a", "b"];
```

```ts
const matrix: number[][] = [[1], [2]];
```

---

# 3. Objects

```ts
const user: { name: string; age: number } = {
  name: "Hussain",
  age: 21,
};
```

```ts
const product: { title: string; price?: number } = {
  title: "Laptop",
};
```

---

# 4. Functions

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

```ts
const subtract = (a: number, b: number): number => {
  return a - b;
};
```

```ts
function greet(name: string = "Guest"): string {
  return name;
}
```

```ts
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
```

---

# 5. Callback Functions

```ts
function process(cb: (value: number) => void) {
  cb(10);
}
```

---

# 6. Async Functions

```ts
async function fetchUser(): Promise<string> {
  return "Hussain";
}
```

---

# 7. Interfaces

```ts
interface User {
  id: string;
  name: string;
}
```

```ts
interface Admin extends User {
  role: string;
}
```

---

# 8. Type Aliases

```ts
type User = {
  id: string;
  name: string;
};
```

```ts
type ID = string | number;
```

---

# 9. Union Types

```ts
let status: "loading" | "success" | "error";
```

```ts
type Result = string | number;
```

---

# 10. Intersection Types

```ts
type A = { name: string };
```

```ts
type B = { age: number };
```

```ts
type C = A & B;
```

---

# 11. Enums

```ts
enum Role {
  ADMIN,
  USER,
}
```

```ts
enum Status {
  SUCCESS = "success",
  ERROR = "error",
}
```

---

# 12. Generics

```ts
function identity<T>(value: T): T {
  return value;
}
```

```ts
const result = identity<number>(10);
```

---

# 13. Generic Interfaces

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

---

# 14. Generic Constraints

```ts
function getLength<T extends { length: number }>(item: T) {
  return item.length;
}
```

---

# 15. keyof

```ts
type User = {
  name: string;
  age: number;
};
```

```ts
type UserKeys = keyof User;
```

---

# 16. typeof

```ts
const user = {
  name: "Hussain",
};
```

```ts
type User = typeof user;
```

---

# 17. Index Signatures

```ts
type Dictionary = {
  [key: string]: string;
};
```

---

# 18. Mapped Types

```ts
type Optional<T> = {
  [K in keyof T]?: T[K];
};
```

---

# 19. Conditional Types

```ts
type IsString<T> = T extends string ? true : false;
```

---

# 20. infer Keyword

```ts
type Return<T> = T extends (...args: any[]) => infer R
  ? R
  : never;
```

---

# 21. Utility Types

```ts
type PartialUser = Partial<User>;
```

```ts
type RequiredUser = Required<User>;
```

```ts
type ReadonlyUser = Readonly<User>;
```

```ts
type UserName = Pick<User, "name">;
```

```ts
type UserWithoutAge = Omit<User, "age">;
```

```ts
type Users = Record<string, User>;
```

---

# 22. Classes

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

---

# 23. Access Modifiers

```ts
class User {
  public name: string;
  private password: string;
  protected age: number;

  constructor(name: string, password: string, age: number) {
    this.name = name;
    this.password = password;
    this.age = age;
  }
}
```

---

# 24. Abstract Classes

```ts
abstract class Animal {
  abstract sound(): void;
}
```

---

# 25. Implement Interface

```ts
interface Animal {
  sound(): void;
}
```

```ts
class Dog implements Animal {
  sound() {
    console.log("Bark");
  }
}
```

---

# 26. Type Assertions

```ts
const value = "hello" as string;
```

---

# 27. unknown

```ts
let value: unknown;
```

```ts
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

# 28. never

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

# 29. Express Typing

```ts
import { Request, Response } from "express";
```

```ts
const getUser = (req: Request, res: Response) => {
  res.json({});
};
```

---

# 30. Middleware Typing

```ts
import { NextFunction } from "express";
```

```ts
const middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};
```

---

# 31. React Props

```tsx
type ButtonProps = {
  title: string;
};
```

```tsx
const Button = ({ title }: ButtonProps) => {
  return <button>{title}</button>;
};
```

---

# 32. useState Typing

```tsx
const [user, setUser] = useState<User | null>(null);
```

---

# 33. Event Typing

```tsx
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {};
```

---

# 34. Reducer Typing

```ts
type Action =
  | { type: "increment" }
  | { type: "decrement" };
```

---

# 35. Promise Typing

```ts
const promise: Promise<string> = new Promise((resolve) => {
  resolve("done");
});
```

---

# 36. Readonly Arrays

```ts
const nums: readonly number[] = [1, 2, 3];
```

---

# 37. Tuples

```ts
const user: [string, number] = ["Hussain", 21];
```

---

# 38. Template Literal Types

```ts
type Direction = "top" | "bottom";
```

```ts
type Position = `${Direction}-left`;
```

---

# 39. Optional Chaining

```ts
console.log(user?.name);
```

---

# 40. Nullish Coalescing

```ts
const username = value ?? "Guest";
```

---

# 41. Type Narrowing

```ts
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

# 42. Discriminated Unions

```ts
type Loading = {
  status: "loading";
};
```

```ts
type Success = {
  status: "success";
  data: string;
};
```

```ts
type Error = {
  status: "error";
  message: string;
};
```

---

# 43. Exhaustive Checking

```ts
function check(value: never): never {
  throw new Error("Unexpected");
}
```

---

# 44. Constructor Parameter Properties

```ts
class User {
  constructor(public name: string) {}
}
```

---

# 45. Readonly Properties

```ts
type User = {
  readonly id: string;
};
```

---

# 46. Optional Properties

```ts
type User = {
  name?: string;
};
```

---

# 47. Function Type Alias

```ts
type Add = (a: number, b: number) => number;
```

---

# 48. Record Type

```ts
type Users = Record<string, number>;
```

---

# 49. Exclude

```ts
type Result = Exclude<"a" | "b" | "c", "a">;
```

---

# 50. Extract

```ts
type Result = Extract<"a" | "b" | "c", "a" | "b">;
```

---

# Elite Daily Routine

## Morning

30 mins syntax drills

## Afternoon

1 hour real project coding

## Night

Blind recall rewrite session

---

# Important Rule

Never overuse:

```ts
any
```

Prefer:

* generics
* unknown
* proper typing
* inference

---

# Elite Goal

When you reach elite muscle memory:

* types become automatic
* autocomplete becomes faster
* architecture improves
* bugs reduce massively
* interviews become easier
* large-scale coding becomes faster

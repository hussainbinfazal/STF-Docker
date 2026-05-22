let age: number = 25;
const uniqueName : string = "John Doe";
const letIsActive : boolean = true;
let value : null= null;
let data : undefined = undefined;
const id  : bigint = 123332323n;


////Arrys
const nums : number[] = [1,2,3,4,5];
const names : string[] = ["Alice", "Bob", "Charlie"];
const matrix : number[][] =  [[1],[3]];

////Objects
const user : {user:string,id:number,iSAuthorized: boolean} = {
    user:"Hussain Khan",
    id: 1234,
    iSAuthorized:false
}



const product :{
    productName: string,
    price:number,
    category:
} = {
    productName: "kaoti",
    price: 26,
    category:"food"
}

//// funcitons
 ///Arrow Functions
const subtract = (a: number,b:number):number => {
    return a-b
}

//// Regular Functions
function add (a:number,b:number):number {
    return a + b
}

const multiply = function(a: number,b:number):number{
    return a*b
}


const sum =  function (...nums: number[]): number {
    return nums.reduce((acc, curr) => acc + curr, 0);
}



////Call back functions
function process(cb: (value:number) => void){
    cb(10)
}



///Async functions
async function fetchUser(): Promise<string> {
    return "hussain"
}
async function fetchUser(): Promise<string>{
    return "Hussain"

}

//// Interfaces
interface User{
    id:string,
    name:string
}
interface Admin extends User {
    role:string
}
interface User{
    id: string,
    name: string
}
///Interface Inheritance
interface Admin extends User {
    role: string
}


///Type Aliases
type tallyUser = {
    id: string,
    name: string,
}
type ID = string | number


///Union Types
let authStatus : "success" | "error"  | "loading" = "success"    
type Result = string | number



/// Intersection Types
type A = { name: string }
type B = { age: number}
type C = A & B



////Enums 
enum Status{
    SUCCESS = "success",
    ERROR = 'error',
    LOADING = 'loading'
}

/// Generics
function identity<T>(arg: T): T {
    return arg
}


function identity<T>(arg: T): T {
    return arg
}

const result = identity<number>(10);

////Generic Constants
function getLength <T extends {length : number}>(item: T): number {
    return item.length
}
function getLength<T extends {length: number}>(item: T){
    return item.length
}
function getLength <T extends {length : number}>(item: T ){
    return item.length
}


/// type 
type User = { 
    name: string,
    age: number
}

type userKeys = keyof User


type animal = {
    name: string,
    age: number

}

type userKeys = keyof User

//// type of 
const user = {
    name:"Hussain",
    passion:"Coding , sleeping, flexing, working , achieviing goals"
}

type User = typeof user

const user = {
    name:"hussain",
    passo:"hi"
}
type User = typeof user


///Index signature 
type Dictionary ={
    [key: string]: string
};

type Dictionary = {
    [key : string]: string
}

type Dictionary ={
    [key: string] : string
}
 

// ///Mapped Types Take all keys
// ↓
// Loop through them
// ↓
// Transform each property
// ↓
// Build a new type
///Maped types
type OptionalUser<T> ={
    [K in keyof T]?:T[K]
}

type OptionalUser<T> = {
    [K in keyof T]? = T[K]
}


/////Condiitonal types
///Does T satisfy/string-match compatibility
type isString <T> = T extends string ? true : false

type isString <T> = T extends string ? true : false;
type isString<T> =  T extends string ? true : false
type isString<T> = T extends string ? true : false 
type isstring <T> = T extends string ? true : false 
type isString<T> = T extends string ? true : false


/// Infer KeyWord

type Return<T> =T extends (...args: any[]) => infer R ? R : never
type Return<T> = T extends (....args: any[]) => infer R ? R : never

type Return<T> = T extends (...args: any[]) => infer R ? R: never

type Return<T> = T extends (...args: any[]) => infer R ? R: never

////utility types
type partialUser = Partial<User>
type PartialUser = Partial<User>
type PartialUser = Partial<User>
type PartialUser = Partial<User>
type PartialUser = Partial<User>

type RequiredUser = Required<User>
type RequiredUser = Required<User>
type RequiredUser = Required<User>
type RequiredUser = Requires<User>
type RequiredUser = Required<User>

type ReadOnlyUser = ReadOnly<User>
type ReadOnlyUser = ReadOnly<User>
type ReadOnlyUser = ReadOnly<User>
type ReadOnlyUser = ReadOnly<User>

type UserName = Pick<User, "name">
type UserName = Pick<User,"name">
type UserName = Pick<User,"name">
type UserName = Pick<User,"name">
type UserWithoutAge = Omit<User,"age">
type UserWithoutAge = Omit<User,"age">

type UserWithoutAge = Omit<User,"age">
type UserWithoutAge = Omit<User,"Age">

type Users = Record<string ,User>
type Users = Record<string,User>
type Users = Record<string,User>



///Classes

class User {
    name: string;
    constructor(name: string){
        this.name = name
    }
}

class User {
    name: string;
    
    constructor(name: string){
        this.name = name
    }
}


class User {
    name : string;
    constructor(name: string){
        this.name = name
    }
}

///Access Modifiers

class User {
    public name: string;
    public name : string;
    public character : string;
    public character : string;
    public character : string;
    public character : string;
    private password: string;
    private password : string;
    private  password : string;
    private password : string;
    private password : string;
    private password : string;
    protected age: number;
    protected age : number;
    protected age : number;
    protected age : number


    constructor(name: string, password: string, age: number){
        this.name = name;
        this.password = password;
        this.age = age
    }
}

class User {
    private name: string;
    public name: string;
    protected name: string;
    public name: string
    constructor(name: string, ){
        this.name = name;
    }
}


class User {
    public name: string;
    private pasword: string;
}




////Abstract Classes

abstract class Animal{
    abstract sound(): void;
}

abstract class Animal {
    abstract sound(): void;
}

abstract class Animal {
    abstract sound(): void;
}

class Dog extends Animal {
    sound(): void {
        console.log("bark");
    }
}
class MontainDog extends Animal{
    sound(): void {
        console.log("Bark");
    }
}

////Implement Interface
interface Animal {
    sound(): void;
}
interface Animal {
    sound(): void;
}

class Dog implements Animal {
    sound():void {
        console.log("Woof");
    }
}

class cat implements Animal {
    sound(): void {
        console.log("Meow");
    }
}


///type assertions 
const value = "Hello" as string;
const value = "Hello" as string
const value = "Hello" as string
const value = "Hello" as string
const value = "Hello" as string


///unknown

let value: unknown;
let value: unknown;
let value: unknown;
let value: unknown
let value: unknown;

if(typeof value === "string"){
    console.log(value.toUpperCase());
}

if(typeof value === "string"){
    console.log(value.toUpperCase());
}

if(type of value === "string"){
    console.log(value.toUpperCase());
}

if (typeof value === "string"){
    console.log(value.toUpperCase());

}

///never 
function throwError(message: string): never {
    throw new Error(message);
}

function throwError(message: string): never {
    throw new Error(message);
}
function throwError(message: string): never {
    throw new Error(message);
}


import {Request, Response} from "express";
import {Request, Response} from "express";
import {Request, Response} from "express"
import {Request, Response} from "express"


const getUser = (req: Request,res:Response){
    res.json({})
}
const getUser = (req:Request, res: Response){
    res.json({})
}
const getUser = (req: Request,res: Response){
    res.json({})
}

const getUser = (req: Request, res:Response){
    res.json({})
}

const getUser = (req:Request,res:Response){
    res.json({})
}















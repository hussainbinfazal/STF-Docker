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









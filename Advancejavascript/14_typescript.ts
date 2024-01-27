let a: Number = 123
let b: string = 'monika'
console.log(a);


abstract class Sum {
    num1: Number
    num2: Number
    constructor(a: Number, b: Number) {
        this.num1 = a
        this.num2 = b
    }

    abstract add(): void
}

// const obj = new Sum(2,3)
class Multi extends Sum {
    n1: number
    n2: number
    constructor(a: number, b: number) {
        super(a, b)
        this.n1 = a
        this.n2 = b
    }

    add() {
        console.log(this.n1 + this.n2);

    }
}


const multi = new Multi(3, 2)
multi.add()
    



// type 1
// CMD run programme ( folder ma jai file ma jai tema file pr cmd lakhi ne run krvu)
// Microsoft Windows[Version 10.0.19045.2965]
// (c) Microsoft Corporation.All rights reserved.

//     C: \Users\01\Desktop\TEST_GIT\javascript - WORK - B\Advancejavascript > ts - node 14_typescript.ts
// 123


// type 2 
//  powershell => right click kri=>

//    run addminstarar jai
// set - executionpolicy remotesigned  (a code lakhvo enter api ne vs code ni file ma avi ne trminal ma )=>
// ts-node p6i file name lkhi enter apo so code khulse 
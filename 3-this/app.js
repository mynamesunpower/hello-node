function hello() {
    console.log('--- function scope ---')
    console.log(this)
    console.log(this === global) // 전역 함수에서의 this는 global
}

hello();

class A {
    constructor(num) {
        this.num = num;
    }

    memberFunction() {
        console.log('---- class ----')
        console.log(this)   // 클래스 자신
        console.log(this === global)
    }
}

const a = new A(1);
a.memberFunction();

console.log('----- global scope -----')
console.log(this)   // global object는 아니다
console.log(this === module.exports)
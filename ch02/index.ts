//타입스크립트가 해당 값은 바탕으로 추론을 수행하는 두 가지 핵심 개념을 소개하겠습니다.
// 1. 유니언 union: 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것
// 2. 내로잉 narrowing: 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것

// 1. 유니언 타입
// 여기서 질문! mathematician의 타입은 무엇일까요?

let mathematician = Math.random() > 0.5 ? undefined : "개발자 9Diin";

// 둘 다 잠재적인 타입이긴 하지만, 무조건 undefined 이거나 혹은 string 인 것도 아닙니다.
// mathematician은 undefined이거나 string일수 있습니다. 이렇게 "이거 혹은 저거"와 같은 타입을 유니언이라고 합니다.
// 유니언 타입은 값이 정확히 어떤 타입인지 모르지만 두 개 이상의 옵션 중 하나라는 것을 알고 있는 경우에 코드를 처리하는 훌륭한 개념입니다.

// 1.1 유니언 타입 선언
// 유니언 타입 선언의 순서는 중요하지 않습니다.
let user: string | null = null;
// let user: null | string = null;

if(Math.random() > 0.5){
    user = "개발자 9Diin";
} else{
    user = 1000;
}

// 1.2 유니언 속성
// 값이 유니언 타입일 때, 타입스크립트는 유니언으로 선언한 모든 가능한 타입에 존재하는 멤버 속성에만 접근할 수 있다.
// 유니언 외의 타입에 접근하려고 하면 타입 검사 오류가 발생한다.

let developer = Math.random() > 0.5 ? "개발자 9Diin" : 1000;
developer.toString() // OK
developer.toUpperCase();    // 'number' 형식에 'toUppeCase' 속성이 없습니다.
developer.toFixed()         // Error: 'string' 형식에 'toFixed' 속성이 없습니다.

// 2. 내로잉
// 값이 정의, 선언 혹은 이전에 유추된 것보다 더 구체적인 타입임을 코드에서 유추하는 것입니다.
// 타입스크립트가 값의 타입이 이전에 알려진 것보다 더 좁혀졌다는 것을 알게 되면 값을 더 구체적인 타입으로 취급합니다.
// 타입을 좁히는데 사용할 수 있는 논리적 검사를 타입 가드(Type Guard)라고 합니다.

// 2.1 값 할당을 내로잉
let scientist: string | number;
scientist = "개발자 9Diin";
scientist.toString();    // OK
scientist.toFixed();     // Error: 'toFixed' 속성이 'string' 형식에 없습니다.

let inventor: number | string = "개발자 9Diin";
inventor.toString();        //OK
inventor.toFixed();         // Error: 'toFixed' 속성이 'string' 형식에 없습니다.

// 2.2 조건 검사를 통한 내로잉
let teacher = Math.random() > 0.5 ? "Franklin" : 51;

if (teacher === "Franklin"){
    // teacher: string 타입
    teacher.toUpperCase();
} else if(teacher === 51) {
    teacher.toFixed();
}
teacher.toUpperCase();  // Error: 'string | number' 형식에 'toUpperCase' 속성이 없습니다.

// 2.3 typeof 검사를 통한 내로잉
let researcher = Math.random() > 0.5 ? "Franklin" : 51;

if(typeof researcher === "string"){
    researcher.toUpperCase();
} else{
    researcher.toFixed();
}


//typeof를 통한 내로잉
if(!(typeof researcher === "string")){
    researcher.toFixed();
} else {
    researcher.toUpperCase();
}

typeof researcher === "string" ? researcher.toUpperCase() : researcher.toFixed();
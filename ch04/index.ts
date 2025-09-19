// 함수
// 한쪽 끝에난 함수 인수/인자가 있고, 다른 쪽 끝에는 반환 타입이 있습니다.

// 1. 함수 매개변수
// sing 함수를 작성한 개발자가 song 매개변수를 제공하기 위해 의도한 값의 타입은 무엇일까요?
// 명시적 타입 정보가 선언되지 않으면 절대 타입을 알 수 없습니다.
// 타입스크립트가 이를 any 타입으로 간주하며 매개변수의 타입은 무엇이든 될 수 있습니다.

function sing1(song){
    console.log(`Singing : ${song}!`)
}

function sing2(song: string){
    console.log(`Singing : ${song}!`)
}

//1.1 필수 매개변수
//자바스크립트에서는 인수의 수와 상관없이 함수를 호출할 수 있습니다.
//하지만 타입스크립트는 함수에 선언된 모든 매개변수가 필수라고 가정합니다.

function sing3(first: string, second: string){
    console.log(`${first} | ${second}`);
}

sing3("첫 번째 인자");      // Error: 2개의 인수가 필요한데 1개를 가져왔습니다.
sing3("첫 번째 인자", "2");   // OK
sing3("첫 번째 인자", "두 번째 인자", "세번째 인자");   //Error : 2개의 인수가 필요한데 3개를 가져왔습니다.

// 매개변수는 인수르 받은 것으로 예상되는 함수의 선언을 나타냅니다.
// 인수는 함수를 호출할 때, 매개변수에 제공되는 값을 나타냅니다.

function fn(x: string, y: string, z: string){
    console.log("x : ", x);
    console.log("y : ", y);
    console.log("z : ", z);
}

// 위 함수에서 x, y, z는 매개변수라고 하고

fn("G-Dragon", "태양", "대성"); // => GD, 태양, 대성은 인수/인자라고 부릅니다.

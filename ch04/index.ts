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

// 1.2 선택적 매개변수
// 자바스크립트에서 함수 매개변수가 제공되지 않으면 함수 내부의 인수값은 undefined으로 기본값이 설정된다는 것을 떠올려보세요.
// 때로는 함수 매개변수를 제공할 필요가 없을 때 있고, undefined 값을 위해 의도적으로 사용할 수도 있습니다.
// 타입스크립트가 이러한 선택적 매개변수에 인수를 제공하지 못하는 경우, 타입 오류를 보고하지 않았으면 할 때도 있습니다.
// 타입스크립트에서는 선택적 객체 타입 속성과 유사하게 타입 애너테이션 : 앞에 ? 를 추가해 매개변수가 선택적이라고 표시합니다.
// 선택적 매개변수에는 항상 | undefined가 유니언 타입으로 추가되어 있습니다.

function announceSong(song: string, singer?: string){
    console.log("song : ", song);

    if(singer){
        console.log("singer: ", singer);
    }
}

announceSong("봄여름가을겨울");
announceSong("BAEBAE", undefined);
announceSong("거짓말", "하루하루");

// 선택적 매개변수는 항상 암묵적으로 undefineed가 될 수 있습니다.
// 선택적 매개변수는 | undefined를 포함하는 유니언 타입 매개변수와는 다릅니다.
// ?으로 표시된 선택적 매개변수가 아닌 매개변수는 값이 명시적으로 undefined일지라도 항상 제공되어야 합니다.

function announceSongBy(song: string, singer: string | undefined){
    console.log("song : ", song);

    if (singer) {
        console.log("singer: ", singer);
    }
}

announceSongBy("봄여름가을겨울");       //Error: 두개의 인수가 필요한데 1개를 가져왔습니다.
announceSongBy("BAEBAE", undefined);    // OK
announceSongBy("거짓말", "하루하루");       //OK

// 함수에서 사용되는 모든 선택적 매개변수는 마지막 매개변수여야 합니다.
function announceSinger(singer?: string, song: string){ //Error: 필수 매개 변수는 선택적 매개 변수 뒤에 올 수 없습니다.

}

// 1.3 나머지 매개변수
// ... 스프레드 연산자는 함수 선언의 마지막 매개변수에 위치하고,
// 해당 매개변수에서 시작해 함수에 전달된 '나머지' 인수가 모든 단일 배열에 저장되어야 함을 나타냅니다.

function singAllTheSongs(singer: string, ...songs: string[]){
    for(const song of songs){
        console.log(`${song}, by ${singer}.`)
    }
}
singAllTheSongs("Alicia Keys");
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");
singAllTheSongs("String", 2000);        //Error: 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.


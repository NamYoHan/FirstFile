//Calculator 클래스 만들고 인스턴스 생성
class Calculator {

//생성자 함수를 통해 displatElement의 초기상태를 지정하기 위한 정리를 한다.
    constructor(displayElement) {

//Calculator클래스의 안에 있는 인스턴스 변수 displayElement에 displayElement를 담는다
        this.displayElement = displayElement

//Calculator클래스의 안에 있는 인스턴스 변수 displayContent에 빈 문자열을 담는다
        this.displayContent = ''

// constructor에서도 clear 메서드를 호출하도록 수정
        this.clear()
    }

//appendNumber 메서드(작업) 추가. 
    appendNumber(number) { 
       
//+= 는 복합대입연산자인데, this.displayContent = this.displayContent + number와 같은 의미를 가진다.
//문자열인경우 문자를 잇는다는 느낌으로 결과가 나온다."1"+"2"="12"
        this.displayContent += number }

//appendOperator 메서드 (작업)추가.
//this.displayContent = this.displayContent + operator 의 의미다.
    appendOperator(operator) { this.displayContent += operator }


//updateDisplay 메서드(작업)추가.
// 계산기에 입력한 숫자를 나타내는 화면표시기임
//this.displayElemnet의 값(value)에 this.displayContent를 담는다
    updateDisplay() { this.displayElement.value = this.displayContent }

// 클리어함수를 만든다.
    clear() {
// this.displayContent= 초기화를시켜줌
        this.displayContent = ''

// this.displayElement.value= 초기화를시켜줌
        this.displayElement.value = 0
    }

// "=" 버튼 클릭 시 compute 메서드를 호출하도록 연결
// 계속해서 클래스에 compute 메서드를 추가하고 eval() 함수를 사용해서 계산 기능 구현
    compute() {
        this.displayContent = eval(this.displayContent

// \U00D7는 곰셈
            .replace('\u00D7', '*')

// "\U00F7"는 나눗셈을 의미한다.
            .replace('\u00F7', '/')
        )
    }
}

//자바스크립트 코드에 ‘buttons’ 라는 변수를 선언한다. css 문서 내의 
//‘button’이라는 선택자에 해당하는 모든 요소를 리스트 타입으로 반환한다. 
// 계산기에서 각 버튼들을 의미한다.
const buttons = document.querySelectorAll('button')

//자바스크립트 코드에 ‘displayElemnet’ 라는 변수를 선언한다. 
// css 문서 내의 ‘input’이라는 
//선택자에 해당하는 모든 요소를 리스트 타입으로 반환한다. 
//계산기에서 입력된 내용을 보여주는 부분이다.
const displayElement = document.querySelector('input')

//new 함수를 통해 Calculator라는 객체를 만든다. 이 객체에는 위에서 정의한 것과 같이 
// displayElement와 displayContent가 세팅되어 있다.
const calculator = new Calculator(displayElement)

//arrow함수 forEach문으로 구성은 리스트.forEach(원소=>함수(원소)); 로 구성된다.
//리스트 내의 각 원소를 함소 안에 차례로 넣는다.
//클릭한 버튼이 연산자이면, calculator 클래스의 appendOperator 메서드를 추가한다.
buttons.forEach(button => {


    // <<!--대상객체.addEventListener('이벤트명', fuction 함수명(event){}) = ‘이벤트만들기’)
// 화살표 함수는 function 키워드 대신 화살표를 사용하여 간략하게 함수를 선언하는 것이다
// 매개변수가 없는 경우 
// ()=>{…} 처럼 사용할 수 있다.-->    
button.addEventListener('click', () => {
 

// button.dataset.type 부분은 button의 데이터타입을 가져오는 것이고,
// switch(반복문)을 케이스별로 분류하여 'operator', 'ac', 'equals'와 비교하여 일치여부 판단하고 콘솔 로그에 표시한다.
        switch (button.dataset.type) {

// switch문에서 타고갈 data-type은 html코드에서 Calculator요소에있는 버튼 ac,equals, default별로 부여했다.
            case 'operator':

//element.innerText;는 자바스크립트에 내장된 기능이다. HTML element 안의 텍스트를 가져온다.
                calculator.appendOperator(button.innerText)
                calculator.updateDisplay()

//스위치 문이 끝나는 시점이다.
                break

// ac버튼을 누르면 모든 입력이 초기화되도록 클래스에 clear 메서드 추가 후 ac버튼과 연결
            case 'ac':
                calculator.clear()

// 계산기에서 ac로 클리어된 후 개발자도구에 있는 로그창에 이력을 남겨준다.
                console.log('ac')

//스위치 문이 끝나는 시점이다.
                break


// case =에 대한 구성이다.
            case 'equals':

// =에대한 로그를 남겨준다
                console.log('equals')

// calculator 클래스 안에 있는 compute함수에 연결해준다.
                calculator.compute()

// calculator 클래스 안에 있는 updateDisplay 함수(화면표시기)에 연결해준다.
                calculator.updateDisplay()

//스위치 문이 끝나는 시점이다.
                break

// 디폴트는 숫자 Button 에 대한 구성이다. 1~9 Button
            default:

// calculator클래스내에 있는  appendNumber 함수로 숫자를 이어주고 눌럿던 버튼에대한 숫자를 넣어줬다.
                calculator.appendNumber(button.innerText)
// 화면표시기에 입력한 숫자를 넣어준다.
                calculator.updateDisplay()
                break

        }

    })

})

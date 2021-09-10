# 2021-09-10-Fri

<br/>

## 10. animation

### 🍏 개요

`transition`과 마찬가지로, 애니메이션을 적용한다.  
`transition`은 특정 action이 있어야만 원래 상태에서 전환되도록 동작하지만,  
**`animation`은 action 없이도 자동으로 계속 애니메이션 될 수 있고,**  
**`@keyframes`라는 속성으로 애니메이션 자체를 세트로 지정한다.**

<br/>

또한 단순한 스타일 변경이 아닌, 여러가지 변경점을 지정할 수 있다.  
쓸 수 있는 속성은 `transition`과 중복되는 속성이 꽤 있다.

<br/>

_단축 속성이다!_

<br/>
<br/>
<br/>

### 🍎 @keyframes

`@keyframes 지정 이름 {진행도 {속성: 속성값}}`과 같이 쓴다.  
진행도는 from~to로 작성 가능하고, 퍼센트로도 작성 가능하다.  
**_변경되는 부분이 원래의 값과 동일하다면 비워도 되고, 적지 않아도 된다._**

<br/>
<br/>
<br/>

### 🍐 animation-name, animation-duration

**`animation-name`** 은 `transition-property`와 같은 의미이다.  
애니메이션에서 어떤 `keyframe`을 쓸 것인지 지정하는 것이다.  
_기본 값은 `none`이고, 전역 속성인 상속 관련 속성값도 사용 가능하다._  
**작성 규칙은, 대소문자를 구분하고 `a-z`, `0-9`, `_`, `-`만 사용 가능하다.**

<br/>

`animation-duration`도 `transition-duration`와 같은 개념이다.  
음수 값이 허용되지 않고, 0 이상의 양수만 지정 가능하다.

<br/>
<br/>
<br/>

### 🍊 animation-delay, animation-timing-function

**`animation-delay`** 도 `transition-delay`와 유사하다.  
`animation-duration`과는 다르게 **음수가 지정이 가능**한데,  
이 경우 즉시 시작되나 애니메이션 시퀀스의 음수 시간 만큼부터 시작된다는 차이가 있다.  
_기본값은 `ease`이다!_

<br/>

**`animation-timing-function`** 은  
`transition-timing-function`과 같은 속성을 가진다.  
(`ease`, `ease-in`, `ease-in-out`, `linear` 등)

<br/>
<br/>
<br/>

### 🍋 animation-iteration-count, animation-direction

**`animation-iteration-count`** 는 반복 횟수이다.  
`transition`과 다르게, `infinite` 키워드 값으로 계속 재생되게도 가능하고,  
횟수를 숫자(소수도 가능)로 설정도 가능하다.  
_기본값은 1이다!_

<br/>

**`animation-direction`** 은 애니메이션의 방향을 지정할 수 있다!  
`transition`에서는, 만약 크기가 늘어나는 애니메이션을 hover에 지정했다고 하면  
hover에서 벗어났을 때는 애니메이션이 적용되지 않는 단점이 있었는데,  
이를 **`alternative`** 키워드로 돌아올 때도 적용되도록 지정할 수 있다는 점!  
**`reverse`** 는 역방향으로 재생된다.  
`ease-in` 같은 기능도 `ease-out`처럼 변경된다고 한다.
_기본값은 **normal**!_

<br/>
<br/>
<br/>

### 🍌 animation-play-state

**`running`** 과 **`paused`** 를 지정할 수 있다.  
각각 실행과 일시정지 효과를 일으킨다.  
_기본값은 running!_

<br/>
<br/>
<br/>

### 🍉 animation-fill-mode

**애니메이션의 시작되기 전/후 값 적용을 지정**한다!

<br/>

**`none`** : 애니메이션이 실행되지 않을 때, keyframes에 지정된 스타일을 적용하지 않는다.  
**`forwards`** : 끝난 모습의 keyframes를 유지한다.  
**`backwards`** : 시작할 때 기존 스타일을 적용하지 않는다.
**`both`** : `forwards`와 `backwards`를 둘 다 적용한다.  
_기본값은 none!_

<br/>

---

🥕 **진행되는 순서**를 작성하여 이해해보자.

1. 기존 스타일(애니메이션이 없는 스타일)
2. keyframes의 첫 번째 프레임 스타일 적용
3. 애니메이션 진행
4. keyframes의 마지막 프레임 스타일 적용
5. 기존 스타일로 돌아옴

---

<br/>

**`none`** 은 1번 ~ 5번,  
**`forwards`** 는 1번 ~ 4번, **`backwords`** 는 2번 ~ 5번,  
**`both`** 는 2번 ~ 4번의 과정을 거친다!

<br/>

속성값 자체의 설명으로는 이해가 잘 안갔지만,  
예제를 보면서 이해하니 재밌었다.  
오늘 배운 내용 중에서 가장 흥미로운 부분이었다. 🖐🖐🖐

<br/>
<br/>
<br/>

### 🍇 animation (shorthand)

**shorthand 속성은 값을 지정하지 않는 속성에 대해서**  
**initial 값을 지정한다는 것 잊지 말기!**

<br/>

`transition`과 마찬가지로, `<time>` 자료형 값이 두 개라면  
**앞의 시간을 `animation-duration`, 뒤의 시간을 `animation-delay`로 인식한다!**  
_보통 `duration`, `timing-function`, `delay`, ... , `name` 순서로 쓴다._

<br/>
<br/>

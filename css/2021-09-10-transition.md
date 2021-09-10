# 2021-09-10-Fri

<br/>

## 9. transition

### 🌴 개요

변환되는 모습을 지정된 시간 안으로  
과정을 포함해 보여주는 재밌는 속성이다!  
나는 이런 `transition`이 너무 예쁘고 좋아서  
프론트엔드 개발 연습이 재밌다. 😍

<br/>
<br/>
<br/>

### 🌳 transition-property, transition-duration

**`transition-property`** 는 `transition`이 적용될 특정 요소를 지정한다.  
`,`로 여러 속성을 지정 가능하다!  
**`transition-duration`** 은 그 과정을 보여줄 시간을 지정한다.  
_이 속성을 지정했지만 `transition-property`에서 제외됐다면,_  
_transition 효과 없이 즉각 적용된다._  
작성 가능한 값은 `<time>` 자료형이며, `s`와 `ms`를 사용 가능하다.

<br/>
<br/>
<br/>

### 🌲 transition-delay, transition-timing-function

**`transition-delay`**는 지연 시간이고,  
**`transition-timing-function`**은 transition 지정 함수이다.  
`transition-timing-function`은 중간 과정에 대한 시간 조절이라고 볼 수 있다.

<br/>
 
- **ease :** 기본값, 천천히 시작되어 빨라지다가 다시 느려진다.   
- **ease-in :** 천천히 효과가 시작된다.  
- **ease-in-out :** 천천히 시작되어, 천천히 끝난다.  
- **linear :** 처음부터 끝까지 등속도로 진행된다.   
- **cubic-bezier() :** 사용자 정의에 따라 진행된다.

<br/>
<br/>
<br/>

### 🎄 transition (shorthand)

대부분 이 shorthand를 사용한다!

<br/>

기본값은 다음과 같다.  
`transition-delay` : 0s  
`transition-duration` : 0s  
`transition-property` : all  
`transition-timing-function` : ease

<br/>

`<time>` 값을 사용하는 속성이 `duration`과 `delay` 두 가지가 있기 때문에  
**하나만 존재한다면 `duration`으로,**  
**두 개가 있다면 `duration`과 `delay` 순서대로 적용한다는 것에 주의해야 한다.**

<br/>

`transition: margin-right 3s, background-color 1s`라고 쓰면  
각각의 duration을 지정 가능하다.

<br/>

**보통은 `transition-property`를 맨 앞에 작성하는데,  
그것이 직관적으로 트랜지션을 알아볼 수 있기 때문이다.**

<br/>
<br/>
<br/>

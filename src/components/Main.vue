<template>
  <div class="main">
    <div class="section main-intro" id="main-intro">
      <h1>Save the Date</h1>
      <p>2022. 09. 24 SAT PM 12:00</p>
    </div>
    <div class="section main-greeting" id="main-greeting">
      <div class="main-greeting__photo">
        <img src="" alt=""/>
      </div>
      <div class="main-greeting__content">
        <div class="content__title">
          <p>신종술 박혜숙의 장남 명민</p>
          <p>유지황 김혜경의 장녀 도진</p>
        </div>
        <hr/>
        <div class="content__text">
          <p>
            저희 두사람 함께 맞는 세번째 가을의 어느 멋진 날,<br/>
            살다보면 찾아올 겨울마저 믿음과 사랑으로 견디며<br/>
            끝내 맞을 봄날을 감사함으로 누리겠다고<br/>
            평생의 약속과 함께 주님 앞에 예배하려 합니다<br/>
            귀한날 오셔서 함께 축복해주시면 감사하겠습니다
          </p>
        </div>
      </div>
    </div>
    <div class="section main-location">
      <h2 class="main-location__title">오시는길</h2>
      <div class="main-location__map">
      </div>
      <p class="main-location__desc">
        서울시 송파구 백제고분로 38 예한교회
        (지도를 클릭하시면 카카오맵으로 이동합니다)
      </p>
    </div>
    <div class="section main-date">
      <div class="main-date__calendar">
        <div class="calendar__header">
        </div>
        <div class="main-date__month">
          <div class="main-date__week">
            {{ date }}
            <div class="main-date__day"></div>
            <div class="main-date__day"></div>
            <div class="main-date__day"></div>
            <div class="main-date__day"></div>
            <div class="main-date__day">1</div>
            <div class="main-date__day">2</div>
            <div class="main-date__day">3</div>
          </div>
          <div class="main-date__week">
            <div class="main-date__day">4</div>
            <div class="main-date__day">5</div>
            <div class="main-date__day">6</div>
            <div class="main-date__day">7</div>
            <div class="main-date__day">8</div>
            <div class="main-date__day">9</div>
            <div class="main-date__day">10</div>
          </div>
          <div class="main-date__week">
            <div class="main-date__day">11</div>
            <div class="main-date__day">12</div>
            <div class="main-date__day">13</div>
            <div class="main-date__day">14</div>
            <div class="main-date__day">15</div>
            <div class="main-date__day">16</div>
            <div class="main-date__day">17</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section main-contact">
    </div>
    <div class="section main-contact"></div>
    <div class="section main-gallery"></div>
    <div class="section main-survey"></div>
  </div>
</template>

<script>
// import { ref } from 'vue';
export default {
  setup() {
    const date = new Date();


    return {
      date,
    }
  }
}
</script>

<style lang="scss">

</style>
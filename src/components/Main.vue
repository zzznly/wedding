<template>
  <div class="main">
    <div class="section main-intro" id="main-intro">
      <h1 class="main-intro__title">Save the Date</h1>
      <p class="main-intro__date">2022. 09. 24 SAT PM 12:00</p>
      <p class="main-intro__place">송파 예한교회 3층 예배당</p>
      <a href="#main-greeting" class="main-intro__more">더보기</a>
    </div>
    <div class="main-greeting" id="main-greeting">
      <div class="main-greeting__photo">
        <img src="../assets/img/img__greet.png" alt=""/>
      </div>
      <div class="main-greeting__content">
        <div class="content__title">
          <p>신종술 ∙ 박혜숙의 장남 <span>명민</span></p>
          <p>유지황 ∙ 김혜경의 장녀 <span>도진</span></p>
        </div>
        <hr style="border: solid 1px #2C3E50; width: 80px; margin: 40px auto" />
        <div class="content__text">
          <p>
            저희 두사람 함께 맞는 세번째 가을의 어느 멋진 날,<br/>
            살다보면 찾아올 겨울마저 믿음과 사랑으로 견디며<br/>
            끝내 맞을 봄날을 감사함으로 누리겠다고<br/>
            평생의 약속과 함께 주님 앞에 예배하려 합니다<br/>
            귀한날 오셔서 축복해주시면 감사하겠습니다
          </p>
        </div>
      </div>
    </div>
    <div class="main-location">
      <h2 class="main-location__title">오시는길</h2>
        <div class="main-location__map" id="map"></div>
      <p class="main-location__desc">
        서울특별시 송파구 올림픽로 417 예한교회 <br/>
        (지도를 클릭하시면 카카오맵으로 이동합니다)
      </p>
    </div>
    <div class="section main-date">
      <div class="main-date__calendar">
        <div class="main-date__header">
          <p>9월</p>
        </div>
        <div class="main-date__month">
          <div class="main-date__week">
            <div class="main-date__day empty"></div>
            <div class="main-date__day empty"></div>
            <div class="main-date__day empty"></div>
            <div class="main-date__day empty"></div>
            <div
                class="main-date__day"
                v-for="(item, idx) in monthDaysArr"
                :key="`monthDaysArr-${idx}`"
            >
              <span>{{ item }}</span>
            </div>
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

<script></script>
<script>
// import { ref } from 'vue';
export default {
  setup() {
    let monthDaysArr = Array(30).fill().map((arr, i) => { return i + 1 });

    function initMap() {
      const container = document.getElementById('map')
      container.addEventListener('click', function(){
        location.href='https://map.kakao.com/link/map/예한교회,37.5203981368124, 127.113885300836'
      })

      const options = {
        // 처음 지도의 위치를 lat, lng(위도, 경도) 값으로 설정한다.
        center: new kakao.maps.LatLng(37.5203981368124, 127.113885300836),
        level: 5
      }

      this.map = new kakao.maps.Map(container, options);

      // 마커 생성후 표시
      // 마커가 표시될 위치
      const markerPosition = options.center;
      // 마커를 생성
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });
      // 마커가 지도위에 표시되도록 설정
      marker.setMap(this.map);
    }

    return {
      monthDaysArr,
      initMap,
    }
  },

  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3f1959401f782b27f4aba3c934eca4e0&libraries=clusterer,drawing,services'
      /* eslint를 사용한다면 kakao 변수가 선언되지 않았다고
       * 오류를 내기 때문에 아래 줄과 같이 전역변수임을
       * 알려주어야 한다. */
      /* global kakao */
      script.addEventListener('load', () => {
        kakao.maps.load(() => {
          // 카카오맵 API가 로딩이 완료된 후 지도의 기본적인 세팅을 시작해야 한다.
          this.initMap()
        })
      })
      document.head.appendChild(script)
    } else {
      // 이미 카카오맵 API가 로딩되어 있다면 바로 지도를 생성한다.
      this.initMap()
    }
  }
}
</script>

<style lang="scss">

</style>
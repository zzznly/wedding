<template>
  <div class="main-contact">
    <h2 class="main-contact__title">연락처</h2>
    <div class="main-contact__content">
      <div class="content-row">
        <p class="content-row__name"><small>신부</small>&nbsp;&nbsp;유진리</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-3084-2625"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-3084-2625"><img src="../../assets/icons/message.png" alt=""/></a>
          <button @click="showAccount" class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></button>
        </div>
      </div>
      <div class="content-row__account" id="account">
        <span>{{ accountList[0] }}</span>
        <button class="copy" @click="copy(this.accountList[0])">복사하기</button>
      </div>
      <div class="content-row">
        <p class="content-row__name"><small>부</small>&nbsp;&nbsp;유지황</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-3084-2625"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-3084-2625"><img src="../../assets/icons/message.png" alt=""/></a>
          <a class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></a>
        </div>
      </div>
      <div class="content-row">
        <p class="content-row__name"><small>모</small>&nbsp;&nbsp;김혜경</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-9694-2625"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-9694-2625"><img src="../../assets/icons/message.png" alt=""/></a>
          <a class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></a>
        </div>
      </div>
      <br/>
      <div class="content-row">
        <p class="content-row__name"><small>신랑</small>&nbsp;&nbsp;신명민</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-3902-9081"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-3902-9081"><img src="../../assets/icons/message.png" alt=""/></a>
          <a class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></a>
        </div>
      </div>
      <div class="content-row">
        <p class="content-row__name"><small>부</small>&nbsp;&nbsp;신종술</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-3084-2625"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-3084-2625"><img src="../../assets/icons/message.png" alt=""/></a>
          <a class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></a>
        </div>
      </div>
      <div class="content-row">
        <p class="content-row__name"><small>모</small>&nbsp;&nbsp;박혜숙</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-9694-2625"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-9694-2625"><img src="../../assets/icons/message.png" alt=""/></a>
          <a class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const accountList = [
        '제일은행 627-20-241841 유지황',
        '신한은행 110-529-374666 유진리',
    ]

    function showAccount() {
      document.getElementById('account')
    }

    const copy = (text) => {
      const textarea = document.createElement('textarea');

      document.body.appendChild(textarea);

      textarea.value = text;
      textarea.select();

      document.execCommand('copy');
      alert('계좌번호가 복사되었습니다')

      document.body.removeChild(textarea);
    }

    return {
      accountList,
      showAccount,
      copy
    }
  }
}
</script>

<style scoped>

</style>
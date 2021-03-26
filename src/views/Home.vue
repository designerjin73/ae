<template>
    <div class="container">

        <div class="jumbotron h_jumbotron flex text-center align-items-center justify-content-center">
          <header class="h_title text-center"> APPLE English </header>
          <p class="text-center"> <b-button class="h_more" variant="outline-light" href="/aboutus">More</b-button> </p>
      </div>
    
      <div class="h_intro text-center justify-content-center">
        Apple English 영어학원은 Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt 
      </div>
    
      <div class="h_youtube">
        <b-img center :src="require('../assets/img/img_video_youtube.png')" fluid alt="Responsive image"></b-img>
      </div>

      <div>
        <B-card-group deck>
        <b-card>
          <hr>
          <a href="/whychooseae">
          <b-card-text class="h_subtitle">
            Why choose APPLE English
            <b-img right :src="require('../assets/img/icon_home_subtitle.svg')" fluid alt="Responsive image"></b-img>
          </b-card-text>
            
          <div>
            <img src="../assets/img/img_main_02.png" class="card-img-bottom">
          </div>
          </a>
        </b-card>

        <b-card>
          <hr>
          <b-card-text class="h_subtitle">
            Event zone
            <b-img right :src="require('../assets/img/icon_home_subtitle.svg')" fluid alt="Responsive image"></b-img>
          </b-card-text>
          <div>
            <img src="../assets/img/img_main_03.png" class="card-img-bottom">
          </div>
        </b-card>
        </B-card-group>

      <div class="h_test flex text-center align-items-center justify-content-center">
        <h5> 영어는 공부가 아닌 훈련! </h5>
        <p class="text-muted"> 제대로 된 훈련은 정확한 진단과 맞춤 처방에서 완성되는 법 </p>
        
        <div>
          <a class="btn btn-success btn-lg h_btn_test" href="#" role="button">
            LEVEL TEST
          </a>
        </div>
      </div>

      <div class="h_stepgroup">
      <B-card-group deck>
        <b-card>
          <hr>
          <b-card-text class="step_title">
            STEP 1
          </b-card-text>
          <div>
            <img src="../assets/img/img_main_04.png" class="card-img-bottom">
          </div>
          <b-card-title class="step_subtitle">
            이해 능력이 확장되고 <br> 영어 두뇌가 완성됩니다
          </b-card-title>
          <b-card-text class="step_text">
            우리 아이들이 필요로 하는 것은 바로 의사소통 능력, 문제 해결능력, 창의적 사고 능력입니다. 영어 두뇌는 이 네가지 능력을 기르는 바탕이 됩니다.
          </b-card-text>
        </b-card>
        <b-card>
          <hr>
          <b-card-text class="step_title">
            STEP 2
          </b-card-text>
          <div>
            <img src="../assets/img/img_main_05.png" class="card-img-bottom">
          </div>
          <b-card-title class="step_subtitle">
            이해 능력이 확장되고 <br> 영어 두뇌가 완성됩니다 
          </b-card-title>
          <b-card-text class="step_text">
            우리 아이들이 필요로 하는 것은 바로 의사소통 능력, 문제 해결능력, 창의적 사고 능력입니다. 영어 두뇌는 이 네가지 능력을 기르는 바탕이 됩니다.
          </b-card-text>
        </b-card>
        <b-card no-body>
          <hr>
          <b-card-text class="step_title">
            STEP 3
          </b-card-text>
          <div>
            <img src="../assets/img/img_main_06.png" class="card-img-bottom">
          </div>
          <b-card-title class="step_subtitle" >
            이해 능력이 확장되고 <br> 영어 두뇌가 완성됩니다
          </b-card-title>
          <b-card-text class="step_text">
            우리 아이들이 필요로 하는 것은 바로 의사소통 능력, 문제 해결능력, 창의적 사고 능력입니다. 영어 두뇌는 이 네가지 능력을 기르는 바탕이 됩니다.
          </b-card-text>
        </b-card>
                </B-card-group>
      </div>
      </div>

    </div>
</template>

<script>
export default {
    
}
</script>
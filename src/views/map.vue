<template>
    <div class="container">

        <div>
            <b-img center :src="require('../assets/img/img_map_title.png')" fluid alt="Responsive image"></b-img>
            </div>

        <div class="page__body">

        <div class="page__category text-right">
            Company
            </div>

        <div class="page__title row">
            <div class="col-2"></div>
            <div class="page__line col-10">
            <hr>
            </div>
            <div class="col-2"></div>
            <div class="page__title__text col-10">
            Map
            <b-img right :src="require('../assets/img/img_page_title.svg')" fluid alt="Responsive image"></b-img>
            </div>
        </div>

        <b-row >
            <b-col cols="0" md="2">
            </b-col>
            <b-col cols="12" md="9">
            <b-img class="map__main" center :src="require('../assets/img/img_map_map.svg')" fluid alt="Responsive image"></b-img>
            </b-col>

            <b-col cols="0" md="6">
            </b-col>
            <b-col class="m_subtitle" cols="0" md="5">
                Location
                <hr>
            </b-col>
            <b-col cols="0" md="6">
            </b-col>
            <b-col cols="12" md="5">
                <b-img class="map__sub" center :src="require('../assets/img/img_map_map2.png')" fluid alt="Responsive image"></b-img>    
            </b-col>
            <b-col cols="0" md="6">
            </b-col>
            <b-col cols="2" md="1">
                <p> 주소 </p>
                <p> 승용차 </p>
                <p> 전철 </p>
                <p> 버스 </p>
                <p> 연락처 </p>
            </b-col>
            <b-col class="m_txt2" cols="10" md="4">
                <p> 경기도 남양주시 순화궁로 343 6층</p>
                <p> 수도권제1순환고속도로 퇴계원 I/C에서 8분 소요 </p>
                <p> 경춘선 별내역 2번출구 도보 20분 소요 </p>
                <p> 화성프라자/카페거리 하차 후 1분 소요 </p>
                <p> 031-510-7007 </p>
            </b-col>

        </b-row>


        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>


</style>
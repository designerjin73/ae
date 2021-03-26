<template>
    <div class="container">

        <div>
            <b-img center :src="require('../assets/img/img_community_title.png')" fluid alt="Responsive image"></b-img>
            </div>

        <div class="page__body">

        <div class="page__category text-right">
            Community
            </div>

        <div class="page__title row">
            <div class="col-2"></div>
            <div class="page__line col-10">
            <hr>
            </div>
            <div class="col-2"></div>
            <div class="page__title__text col-10">
            Community
            <b-img right :src="require('../assets/img/img_page_title.svg')" fluid alt="Responsive image"></b-img>
            </div>
        </div>
    </div>

    <b-row class="community__table">
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <a class="text__24B" href="/notice"> Today's Class </a>
            <hr>
            <b-table class="text__20L" striped hover :items="items"></b-table>
        </b-col>
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <hr>
        </b-col>
    </b-row>

        <b-row class="community__table">
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <a class="text__24B" href="#"> Homework </a>
            <hr>
            <b-table class="text__20L" striped hover :items="items"></b-table>
        </b-col>
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <hr>
        </b-col>
    </b-row>

    <b-row class="community__table">
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <a class="text__24B" href="#"> Quizlet </a>
            <hr>
            <b-table class="text__20L" striped hover :items="items"></b-table>
        </b-col>
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <hr>
        </b-col>
    </b-row>

    <b-row class="community__table">
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <a class="src__lg" href="#">
                <b-img  center :src="require('../assets/img/img_community_src.png')" fluid alt="Responsive image"></b-img>
            </a>
        </b-col>
    </b-row>

    <b-row class="community__table">
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <a class="text__24B" href="#"> Recording </a>
            <hr>
            <b-table class="text__20L" striped hover :items="items"></b-table>
        </b-col>
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <hr>
        </b-col>
    </b-row>

    <b-row class="community__table">
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <a class="text__24B" href="#"> Writing </a>
            <hr>
            <b-table class="text__20L" striped hover :items="items"></b-table>
        </b-col>
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <hr>
        </b-col>
    </b-row>

        <b-row class="community__table">
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <b-button class="src__sm" size="lg" variant="dark" href="#"> Move to SRC Library </b-button>
        </b-col>
    </b-row>

        

    </div>
</template>

<script>

export default {
    data() {
      return {
        items: [
          { Date: '2020-03-25', title: 'With supporting text below as a natural lead-in to additional content.', name: 'Robert' },
          { Date: '2020-03-25', title: 'With supporting text below as a natural lead-in to additional content.', name: 'Robert' },
          { Date: '2020-03-25', title: 'With supporting text below as a natural lead-in to additional content.', name: 'Robert' },
          { Date: '2020-03-25', title: 'With supporting text below as a natural lead-in to additional content.', name: 'Robert' },
          { Date: '2020-03-25', title: 'With supporting text below as a natural lead-in to additional content.', name: 'Robert' }
        ]
      }
    }
}
</script>

<style scoped>

</style>
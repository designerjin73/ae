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
            Today's Class
            <b-img right :src="require('../assets/img/img_page_title.svg')" fluid alt="Responsive image"></b-img>
            </div>
        </div>
        </div>
    
        <b-row class="community__table">
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <a class="text__24B" href="#"> Write </a>
            <hr>
            <b-row class="my-1" v-for="type in types" :key="type">
                    <b-col sm="2">
                    <label :for="`type-${type}`"> {{ type }} </label>
                    </b-col>
                    <b-col sm="10">
                    <b-form-input class="ae__box" :id="`type-${type}`" :type="type"></b-form-input>
                    </b-col>
                    
            </b-row>

            <b-form-group label="File" label-cols-sm="2">
            <b-form-file id="file-default"></b-form-file>
            </b-form-group>

        <b-row>
            <b-col sm="2">
                <label for="textarea-no-resize">Contents</label>
            </b-col>
            <b-col sm="10">
                <b-form-textarea
                    class="ae__box"
                    id="textarea-no-resize"
                    placeholder=""
                    rows="30"
                    no-resize
                ></b-form-textarea>
            </b-col>
        </b-row>
        </b-col>

        <b-col cols="1" md="1"> </b-col>
        <b-col cols="1" md="1"> </b-col>
        <b-col cols="10" md="10">
            <hr class="write__underline">
        </b-col>
        <b-col cols="5" md="7"> </b-col>
        <b-col cols="3" md="2"> 
            <b-button block pill href="#"> 확인 </b-button></b-col>
        <b-col cols="3" md="2"> 
            <b-button block pill variant="outline-secondary" href="#"> 취소 </b-button>
            
        </b-col>
    </b-row>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        types: [
          'Name',
          'Title',
          'password',
        ]
      }
    
    }
  }
</script>

<style scoped>
.write__underline{
    margin-top: 2em;
    margin-bottom: 2em;
}
</style>
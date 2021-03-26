<template>
    <div class="container">

        <div>
            <b-img center :src="require('../assets/img/img_curri_title.png')" fluid alt="Responsive image"></b-img>
            </div>

        <div class="page__body">

        <div class="page__category text-right">
            Academics
            </div>

        <div class="page__title row">
            <div class="col-2"></div>
            <div class="page__line col-10">
            <hr>
            </div>
            <div class="col-2"></div>
            <div class="page__title__text col-10">
            Our curriculum
            <b-img right :src="require('../assets/img/img_page_title.svg')" fluid alt="Responsive image"></b-img>
            </div>
        </div>

        <b-row>
            <b-col cols="2" md="2"></b-col>
            <b-col cols="12" md="10">

        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="aca__cur" block v-b-toggle.accordion-1 variant="light">
            <a class="aca__grade"> GRADE 1 </a>
            <a class="aca__years"> 3years </a>
            <b-img right :src="require('../assets/img/icon_arrow_close.svg')" fluid alt="Responsive image"></b-img>
        </b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
            <b-row>
                <b-col class="gr__t1" cols="10" md="10"> Experience </b-col>
                <b-col class="aca__SR" cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/common_c_s_1.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>
                <b-col cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/workly_wise_1.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>

                <b-col class="gr__t1" cols="10" md="12"> Science Readers </b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_1_1.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_1_2.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_1_3.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_1_4.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_1_5.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_1_6.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_1_7.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_1_8.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_1_9.jpg')" fluid alt="Responsive image"></b-img></b-col>

            </b-row>
            
        </b-card-body>
        </b-collapse>
    </b-card>

            <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="aca__cur" block v-b-toggle.accordion-2 variant="light">
            <a class="aca__grade"> GRADE 2 </a>
            <a class="aca__years"> 4years </a>
            <b-img right :src="require('../assets/img/icon_arrow_close.svg')" fluid alt="Responsive image"></b-img>
        </b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
            <b-row>
                <b-col class="gr__t1" cols="10" md="10"> Experience </b-col>
                <b-col class="aca__SR" cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/common_c_s_2.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>
                <b-col cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/workly_wise_2.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>

                <b-col class="gr__t1" cols="10" md="12"> Science Readers </b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_2_1.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_2_2.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_2_3.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_2_4.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_2_5.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_2_6.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_2_7.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_2_8.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_2_9.jpg')" fluid alt="Responsive image"></b-img></b-col>

            </b-row>
            
        </b-card-body>
        </b-collapse>
    </b-card>

    
            <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="aca__cur" block v-b-toggle.accordion-3 variant="light">
            <a class="aca__grade"> GRADE 3 </a>
            <a class="aca__years"> 5years </a>
            <b-img right :src="require('../assets/img/icon_arrow_close.svg')" fluid alt="Responsive image"></b-img>
        </b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
            <b-row>
                <b-col class="gr__t1" cols="10" md="10"> Experience </b-col>
                <b-col class="aca__SR" cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/common_c_s_3.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>
                <b-col cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/workly_wise_3.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>
                <b-col cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/grammar_w_3.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>

                <b-col class="gr__t1" cols="10" md="12"> Science Readers </b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_3_1.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_3_2.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_3_3.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_3_4.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_3_5.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_3_6.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_3_7.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_3_8.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_3_9.jpg')" fluid alt="Responsive image"></b-img></b-col>

            </b-row>
            
        </b-card-body>
        </b-collapse>
    </b-card>

                <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="aca__cur" block v-b-toggle.accordion-4 variant="light">
            <a class="aca__grade"> GRADE 4 </a>
            <a class="aca__years"> 6years </a>
            <b-img right :src="require('../assets/img/icon_arrow_close.svg')" fluid alt="Responsive image"></b-img>
        </b-button>
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
            <b-row>
                <b-col class="gr__t1" cols="10" md="10"> Experience </b-col>
                <b-col class="aca__SR" cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/common_c_s_4.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>
                <b-col cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/workly_wise_4.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>
                <b-col cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/grammar_w_4.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>

                <b-col class="gr__t1" cols="10" md="12"> Science Readers </b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_4_1.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_4_2.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_4_3.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_4_4.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_4_5.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_4_6.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_4_7.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_4_8.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_4_9.jpg')" fluid alt="Responsive image"></b-img></b-col>

            </b-row>
            
        </b-card-body>
        </b-collapse>
    </b-card>

                <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="aca__cur" block v-b-toggle.accordion-5 variant="light">
            <a class="aca__grade"> GRADE 5 </a>
            <a class="aca__years"> 7years </a>
            <b-img right :src="require('../assets/img/icon_arrow_close.svg')" fluid alt="Responsive image"></b-img>
        </b-button>
        </b-card-header>
        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
            <b-row>
                <b-col class="gr__t1" cols="10" md="10"> Experience </b-col>
                <b-col class="aca__SR" cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/common_c_s_5.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>
                <b-col cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/workly_wise_5.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>
                <b-col cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/grammar_w_5.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>

                <b-col class="gr__t1" cols="10" md="12"> Science Readers </b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_1.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_2.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_4.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_5.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_6.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_7.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_8.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_9.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_10.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_11.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_12.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_13.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_15.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_16.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_17.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_18.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_19.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_20.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_21.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_22.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_23.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_5_24.jpg')" fluid alt="Responsive image"></b-img></b-col>

            </b-row>
            
        </b-card-body>
        </b-collapse>
    </b-card>

    
                <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="aca__cur" block v-b-toggle.accordion-6 variant="light">
            <a class="aca__grade"> GRADE 6 </a>
            <a class="aca__years"> 8years </a>
            <b-img right :src="require('../assets/img/icon_arrow_close.svg')" fluid alt="Responsive image"></b-img>
        </b-button>
        </b-card-header>
        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
            <b-row>
                <b-col class="gr__t1" cols="10" md="10"> Experience </b-col>
                <b-col class="aca__SR" cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/common_c_s_6.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>
                <b-col cols="6" md="4">
                    <b-img right :src="require('../assets/img/curriculum/workly_wise_6.jpg')" fluid alt="Responsive image"></b-img>
                    </b-col>

                <b-col class="gr__t1" cols="10" md="12"> Science Readers </b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_1.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_2.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_3.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_4.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_5.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_6.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_7.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_8.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_9.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_10.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_11.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_12.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_13.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_14.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_15.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_16.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_17.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_18.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_19.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_20.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_21.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_22.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_23.jpg')" fluid alt="Responsive image"></b-img></b-col>
                <b-col class="aca__SR" cols="6" md="2">
                    <b-img right :src="require('../assets/img/curriculum/sience/scienceR_6_24.jpg')" fluid alt="Responsive image"></b-img></b-col>

            </b-row>
            
        </b-card-body>
        </b-collapse>
    </b-card>

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
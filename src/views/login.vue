<template>
    <div class="container">
        <div class="row l_content">
            <div class="col-md-6 mb-3 img_login">
                <img src="../assets/img/img_ae_logo_lg.svg" class="img-fluid">
            </div>
            <div class="col-md-6">
                <h3 class="l_text txt_login mb-3"> Sign In </h3>
                <form>
                    <div class="form_input form-group">
                        <label for="ID"> ID </label>
                        <p><input class="label_input" type="ID" name="ID"></p>

                    </div>
                    <div class="form_input form-group">
                        <label for="password"> Password </label>
                        <p>
                        <input class="label_input" type="password" name="password"></p>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" name="checkbox" class="form-check-input" id="checkbox">
                        <label class="form-check-label" for="checkbox"> Remember Me </label>
                    </div>
                    <div flex text-center align-items-center justify-content-center>
                        <p class="text-center">
                    <b-button pill class="l_login" variant="primary" text-center> Login </b-button>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    </div>


</template>

<script>

export default {
  

}

</script>
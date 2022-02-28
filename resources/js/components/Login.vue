<template>
  <div>
      <div class="wrapper">
 

  <div class="content-wrapper">
        <section class="content">
      <div class="container">
        <div class="row justify-content-center mt-5">
          <!-- left column -->
          <div class="col-md-8">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Login</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="login">
                <div class="card-body">
                 
                  <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input v-model="product.email" type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>

                    <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="product.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>
                
                 
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
            <!-- /.card -->

            <!-- /.card -->

          </div>
        </div>
      </div>
        </section>
  </div>
      </div>
  </div>
</template>

<script>
export default {
     data() {
            return {
                product: {
                   
                    email:'',
                    password:''
                },
              
            }
        },
         methods: {
            login() {
                console.log(this.product);
                this.axios
                    .post('http://localhost:8000/api/loginn', this.product)
                    .then(response => {
                        console.log(response.data.access_token);
                        if (response.data.status == true) {
                        // window.location.href = 'http://localhost:8000/';
                        
                       console.log('status ok hai yar');
                       
                         window.localStorage.setItem('access_token', response.data.access_token);
                        //  this.$router.replace({ name: "home"}).catch(()=>{});
                         window.location.href = 'http://localhost:8000/';
                     
                    }
                    })
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }

}
</script>

<style>

</style>
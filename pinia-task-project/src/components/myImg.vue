<template>
    <div class="myImg">
        <img src="@/assets/img/eche3.png" alt="">
        <div class="img-text">
            <div class="peter">Peter John</div>
            <div class="front">frontend developer</div>
            <div class="location">location: <span>Lagos</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
   
   .myImg img{
       max-width: 150px;
       margin: 2rem auto 1rem;
       display: block;
       width: 100%;
       height: 150px;
       object-fit: cover;
       border-radius: 50%;
       object-position: center top;
       box-shadow: 1px 1px 2px 2px gray;
   }

   .img-text{
    text-align: center;
    margin-bottom: 2rem;
   }

   .peter{
    font-weight: bold;
    font-size: 1.3rem;

   }

   .front{
    color: green;
    font-weight: bold;
   }

   .location{
    font-weight: bold;
   }
</style>
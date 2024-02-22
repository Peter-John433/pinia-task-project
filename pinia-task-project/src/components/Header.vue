<template>
    <div>
        <div class="header">
            <div>
                <img src="../assets/img/pinia-seeklogo.svg" alt="pinia-logo">
            </div>
            <div class="pinia-tasks">
                <h1>Pinia tasks</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
  img{
    max-width: 50px;
    width: 100%;
    object-fit: cover;
    transform: rotate(-10deg);
  }

  .pinia-tasks h1{
     font-weight: 750;
     font-family: Arial, Helvetica, sans-serif;
     text-transform: capitalize;
     /* transform: rotate(-2deg); */
     color: white;
  }

  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    background-color: black;
    padding: 10px 0;
    border-bottom: 5px solid yellow;
  }
</style>
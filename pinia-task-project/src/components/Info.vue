<template>
    <div>
        <div class="container container-1">
            <div class="h2">About this project</div>
            <div>
               This  is a simple web application developed using Vue.js framework,This is a simple web application for managing tasks. It was created as an exercise to make you familiar with pinia store. Pinia is a store library for Vue, it allows you to share a state across components/pages,This simple project allows you to create, edit and delete tasks. get more familiar with pinia through this link <a href="https://pinia.vuejs.org/introduction">introduction to pinia</a>
            </div>

            <div class="h2">
                this pinia project touches so many part of pinia such as 
            </div>
            <ul>
                    <li>* state</li>
                    <li>* getters</li>
                    <li>* actions</li>
                    <li>* accessing a state in your component</li>
                    <li>* use of $reset in pinia</li>
                    <li>* storeToRefs</li>
                    <li>* fetching of data from JSON</li>
                    <li>* use of async etc.</li>
                </ul>
        </div>

        <div class="container video">
            <iframe width="350" height="270" src="https://www.youtube.com/embed/PTZ-kZ1Zo-A?si=it8jF9w18HVzGrFy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style="border:5px double black;" allowfullscreen autoplay></iframe>
        </div>
    </div>
</template>

<style scoped>
  .container-1{
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: start;
    margin-bottom: 2rem;
    box-shadow: 2px  2px 8px rgba(0,0,0,.3);
    padding: 10px 20px;
    border-radius: 6px;
  }
  .h2{
    font-size: 1rem;
    font-weight: bold;
    padding: 5px ;
    margin-top: 1rem;
  }

  li{
    padding: 3px 0;
    list-style: none;
  }

  a{
    font-weight: bold;
    color: green;
  }

  .video{
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
</style>

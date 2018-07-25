<template>
<div class="mainBody">
    <div class="projectsTitle">
      <h1>My Projects</h1>
    </div>
      <app-Navigation></app-Navigation>
      <div class="mainBody__inner">
      <div class="mainBody__projects">
      
      <app-project></app-project>

        <div class="loadMore">
            <h4>Load More Websites</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation';
import Project from './Project';
    
    export default {
        components: {
            appNavigation: Navigation,
            appProject: Project
            
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss">
    .mainBody {
    display: flex;
    flex-direction: column;
    //background: #494949;
    max-width: 120rem;
    margin: 0 auto;

        .projectsTitle {
            display: inline-block;
            width: 195%;
            position: relative;
            right: 150%;
            background: #BCBCBC;
            margin: 10rem 0;
            -webkit-clip-path: polygon(0 0, 97% 0, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 97% 0, 100% 100%, 0% 100%);
            

            h1 {
                padding: 4rem 10rem 5rem;
                text-align: right;
                font-family: "adam", Helvetica, Arial, sans-serif;
                color: #777777;
                font-weight: 100;
                font-size: 3rem;
                letter-spacing: 2rem;
            }
        }
        &__inner {
            top: 20rem;
        }

        &__projects {

        }
    }

    .loadMore {
        text-align: center;
        margin: 5rem 0 40rem 0;
        background-color: #BCBCBC;
        padding: 5rem 0 8rem 0;
        clip-path: polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%);

        & h4 {
            color: #565656;
            font-family: "adam", Helvetica, Arial, sans-serif;
            letter-spacing: 2rem;
        }
        
    }
</style>

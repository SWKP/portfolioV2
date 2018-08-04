<template>
    <div class="code">
        <div class="code__about">
            <div class="about__intro">
              <h1>I love brief intros</h1>
              <p>I consider myself part designer, developer, artist and overall a generalist. I enjoy all aspects of web development, from the initial concept to the design mock up and  the final build. During my free time I enjoy 3d modeling, sketching, gaming and coming up with new projects to work on.</p>
            </div>
            <div class="about__skills">
                <img src="http://karolponiatowski.com/projects/images/portfolio/about/personalSkills.png" alt="">
            </div>

        </div>
        <div class="code__image">
            <img src="http://karolponiatowski.com/projects/images/portfolio/about/karolP01.png" alt="">
        </div>
    </div>
</template>

<script>
    
    export default {
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    .code {
        width: 100%;
        background: rgb(24, 24, 24);
        z-index: 10;
        position: relative;
        display: flex;
        flex-direction: row;
        width: 90%;
        margin: 0 auto;
        

        &__about {
            flex: 1.5;
            background: #2B2B2B;
            margin-right: -20rem;
            clip-path: polygon(0 0, 100% 0%, 65% 100%, 0% 100%);

        }
        &__image {
            flex: 1;
            max-width: 400px;
            z-index: -1;
        }

        img {
            width: 100%;
        }
    }
</style>

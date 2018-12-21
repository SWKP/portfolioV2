<template>
    <div class="code">
        <div class="code__about">
            <div class="about__intro">
              <h1>Art & design has always fascinated me, no matter what I did in life I find myself <span>continually being drawn back to it.</span></h1>
              <p>This website is a means for me to catalog my designs and any other skills/technologies I feel are complementary to it. <br><br> The <strong style="color: orange;">top 5 web technologies</strong> I find myself using the most often are Javascript, SASS, Bootstrap, Wordpress and Vue.js. <br>I'm currently taking in web development work. If you need help turning your ideas into reality <strong style="color: orange;">contact</strong> me.</p>
            </div>
            <div class="about__skills">
                <div class="description">
                    <h4>My Skills</h4>
                </div>
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
        background-image: linear-gradient(to right, #000000 70%, #3a3a3a);
        z-index: 10;
        position: relative;
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
        

        &__about {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1.5;
            background: #2B2B2B;
            margin-right: -20rem;
            clip-path: polygon(0 0, 100% 0%, 65% 100%, 0% 100%);

        }

        .about {

            &__intro {
                flex: 1;
                padding-right: 20%;
                border-bottom: 2px solid #383838;

                h1 {
                    font-family: "adam", Helvetica, Arial, sans-serif;
                    font-weight: 100;
                    color: #c1d034;
                    font-size: 5rem;
                    max-width: 900px;
                    padding: 7rem 5rem 2.5rem 10vw;
                    //border-right: 2px solid #383838;
                    //border-bottom: 2px solid #383838;


                    &::first-line { 
                        color: rgb(123, 133, 35);
                        font-size:3rem;
                    }

                    span {
                        padding-top: 1rem;
                        display: block;
                        font-size: 2rem;
                        color: rgb(123, 133, 35);
                    }
                }

                p {
                    padding: 3rem 0 6rem 10vw;
                    font-size: 1.8rem;
                    font-family: "brandon", Helvetica, Arial, sans-serif;
                    max-width: 60ch;
                    line-height: 2.6rem;
                    color: #bfbfbf;
                }
            }

            &__skills {
                flex: 1;
                display: flex;
                max-height: 420px;
                    width: 70%;

                .description {
                  

                    h4 {
                        font-size: 5rem;
                        font-family: "brandon", Helvetica, Arial, sans-serif;
                        writing-mode:vertical-lr;
                        padding-top: 8rem;
                        text-transform: uppercase;
                        color: #3a3a3a;
                        border-right: 2px solid #3a3a3a;
                        height:100%;
                    }

                }

                img {
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                    max-width: 380px;
                    max-height: 380px;
                    margin: 0 auto;
                    padding: 2rem;
                }
            }
        }
        &__image {
            overflow:hidden;
            flex: 1;
            max-width: 400px;
            z-index: -1;

            img {
                height: 100%;
                position: absolute;
                right: -5rem;
            }
        }

    }
</style>

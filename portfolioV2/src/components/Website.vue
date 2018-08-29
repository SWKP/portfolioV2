<template>
    <div>
    <ul>
        <li v-for="website in websites">
            <div class="project">
                <div class="project__info">
                    <div class="project__date">
                        <h4>{{ website.date }} <span>{{ website.number }}</span></h4>
                    </div>
                    <div class="project__data">
                        <div class="urlTitle">
                            <h2>{{ website.url }}</h2>
                        </div>
                        <div class="detailsTitle">
                            <h4>Project Details</h4>
                        </div>
                        <div class="detailsList">
                            <ul>
                                <li v-for="detail in website.details">{{ detail.feature }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="project__image" :style="{ backgroundImage: 'url(' + website.image + ')' }" >
                    <h3>{{ website.name }}</h3>
                </div>
            </div>
        </li>
    </ul>
    <div class="loadMore">
            <h4>Load More Websites</h4>
    </div>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                websites: [
                    {
                        number: '1',
                        date: 'Sep 2017',
                        name: 'Napa Valley Film Festival',
                        url: 'nvff.org',
                        image: 'http://karolponiatowski.com/projects/images/portfolio/nvff-project.png',
                        details: [
                            { feature: 'Wordpress' },
                            { feature: 'High traffic Ecommerce' },
                            { feature: 'Custom navigation' },
                            { feature: 'Events implementation' }
                        ]
                    },
                    {
                        number: '2',
                        date: 'Feb 2018',
                        name: 'Dixicoin',
                        url: 'dixicoin.net',
                        image: 'http://karolponiatowski.com/projects/images/portfolio/dixicoin-project.png',
                        details: [
                            { feature: 'Bootstrap' },
                            { feature: 'Custom SVG' }
                        ]
                    },
                    {
                        number: '3',
                        date: 'May 2018',
                        name: 'Petaluma Museum',
                        url: 'petalumamuseum.com',
                        image: 'http://karolponiatowski.com/projects/images/portfolio/petalumaMuseum-project.png',
                        details: [
                            { feature: 'Wordpress' },
                            { feature: 'Agile development' },
                            { feature: 'Events implementation' }

                        ]
                    },
                    {
                        number: '4',
                        date: 'Mar 2018',
                        name: 'RoundOne',
                        url: 'roundone.win',
                        image: 'http://karolponiatowski.com/projects/images/portfolio/roundOne-project.png',
                        details: [
                            { feature: 'Bootstrap' },
                            { feature: 'Custom SVG' },
                            { feature: 'Brand development'}

                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    ul {
        list-style-type: none;
    }
    .project {
      margin-top: 2rem;
      width: 100%;
      height: 25rem;
      background-color: rgb(71, 71, 71);
      display: flex;

      &__info {
          background-color: #2B2B2B;
          flex: 1;
          clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
          z-index: 10;
          display: flex;
      }

      &__date {
        border-right: 4px solid #3A3A3A;
        width: 20%;

          h4 {
            position: relative;
            font-family: "adam", Helvetica, Arial, sans-serif;
            transform: rotate(-90deg);
            position: relative;
            top: 13rem;
            margin-left: -3rem;
            margin-right: -3rem;
            font-size: .75rem;
            font-weight: 100;
            letter-spacing: 1rem;
            text-align: center;
            color: #A3A3A3;
            line-height: 1.5rem;

            span {
                position: absolute;
                -webkit-transform: rotate(90deg);
                transform: rotate(90deg);
                color: #3A3A3A;
                font-size: 4rem;
                top: 0.5rem;
                height: 100%;
                right: -5rem;
            }
          }
          
      }

      &__data {
          display: flex;
          flex-direction: column;
          width: 100%;

          .urlTitle {
              flex: .75;
              width: 100%;
              text-align: center;
              border-bottom: 4px solid #3A3A3A;
              transition: all .3s;

              &:hover {
                  background: var(--main-highlight-color);
              }
              &:hover h2 {
                  color: white;
              }

              h2 {
              color: #A3A3A3;
              font-family: "adam", Helvetica, Arial, sans-serif;
              font-size: 2.5rem;
              font-weight: 100;      
              position: relative;
              top: 50%;
              transform: translateY(-50%);
          }

          }
          .detailsTitle {
              width: 50%;
                text-align: center;
                flex: .4;
                border-right: 4px solid #3A3A3A;
                border-bottom: 4px solid #3A3A3A;

            h4 {
                color: #A3A3A3;
                font-family: "adam", Helvetica, Arial, sans-serif;
                font-weight: 100;
                font-size: 1.5rem;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
            }
          }
          
          .detailsList {
                flex: 1;
            ul {
                margin-top: 1.25rem;
                margin-left: 2rem;
                list-style-type: none;

                li {
                    color: #A3A3A3;
                    font-size: 1.5rem;
                    font-family: "brandon", Helvetica, Arial, sans-serif;
                    font-weight: 100;
                }
                
            }
          }

      }

      &__image {
          position: relative;
          margin-left: -10rem;
          background-color: #838383;
          background-size: cover;
          flex: 2;
          z-index: 9;

          &::before {
              content:'';
              background: #07ff2775;
              width: 100%;
              height: 100%;
              position: absolute;
              transition: all .3s;
          }

          &:hover::before {
              background: none;
          }

          h3 {
              position: absolute;
              top: 2rem;
              right: 5rem;
              font-family: "adam", Helvetica, Arial, sans-serif;
              font-size: 3rem;
              font-weight: 100;
          }
      }
    }

    .loadMore {
        position:relative;
        z-index: 0;
        text-align: center;
        margin: 2rem 0 20rem 0;
        background-color: #BCBCBC;
        padding: 5rem 0 8rem 0;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 50% 100%, 0% 50%);
        clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 50% 100%, 0% 50%);

        & h4 {
            color: #565656;
            font-family: "adam", Helvetica, Arial, sans-serif;
            letter-spacing: 2rem;
        }
        
    }
</style>

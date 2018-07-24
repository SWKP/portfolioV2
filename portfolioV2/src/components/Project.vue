<template>
  <div class="project">
    <div class="project__info">
        <div class="project__date">
            <h4>July 2018 <span>1</span></h4>
        </div>
        <div class="project__data">
            <div class="urlTitle">
                <h2>Website URL</h2>
            </div>
            <div class="detailsTitle">
                <h4>Project Details</h4>
            </div>
            <div class="detailsList">
                <ul>
                <li>Wordpress</li>
                <li>Ecommerce</li>
                <li>Custom Menu</li>
            </ul>
            </div>
        </div>
    </div>
    <div class="project__image">
        <h3>Project Name</h3>
    </div>
  </div>
</template>

<script>
    
    export default {

    }
</script>

<style lang="scss">
    .project {
      margin-top: 8rem;
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

            span {
                position: absolute;
                transform: rotate(90deg);
                color: #3A3A3A;
                font-size: 4rem;
                top: -1.5rem;
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
          flex: 2;
          z-index: 9;

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
</style>

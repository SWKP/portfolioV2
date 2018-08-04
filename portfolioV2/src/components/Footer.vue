<template>
    <div class="footer">
        <div class="socialIcons">
            <a href="#"><img src="../assets/svg/facebook.svg" alt=""></a>
            <a href="#"><img src="../assets/svg/linkedIn.svg" alt=""></a>
            <a href="#"><img src="../assets/svg/dribble.svg" alt=""></a>
            <a href="#"><img src="../assets/svg/github.svg" alt=""></a>
            <a href="#"><img src="../assets/svg/steam.svg" alt=""></a>
        </div>
        <div class="otherSites">
            <h4>Other Sites</h4>
            <h5>Codedefrag.com</h5>
        </div>
        <div class="copyright">
            2018 - Powered by Vue
        </div>
    </div>
</template>

<script>
    
    export default {
        components: {

        }
    }
</script>

<style lang="scss">
    .footer {
        height: 80rem;
        background: #2B2B2B;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .socialIcons {
        flex-grow: 10;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 40rem;
        margin: 0 auto;

        img {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
        }
    }
    .otherSites {
        flex-grow: 3;
        text-align: center;
        font-family: "adam", Helvetica, Arial, sans-serif;

        h4 {
            font-size: 1.75rem;
            color: #BCBCBC;
        }
        h5 {
            margin-top: 1rem;
            font-size: 2.25rem;
            font-weight: 100;
            color: #424242;
            letter-spacing: .75rem;
        }
    }
    .copyright {
        flex-grow: 2;
        color: #424242;
        background-color: #252525;
        text-align: center;
        font-family: "adam", Helvetica, Arial, sans-serif;
        font-size: 1.75rem;
        letter-spacing: 3rem;
        padding-top: 10rem;
        line-height: 3rem;
    }
</style>

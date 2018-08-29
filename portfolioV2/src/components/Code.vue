<template>
    <div class="code">
        <h1>Section coming soon.</h1>  
        <!--
        <div class="grid-wrapper">
            <div class="grid-item">
                <h2>TITLE 1</h2>
            </div>
            <div class="grid-item">
                <h2>TITLE 2</h2>
            </div>
            <div class="grid-item">
                <h2>TITLE 3</h2>
            </div>
            <div class="grid-item">
                <h2>TITLE 4</h2>
            </div>
            <div class="grid-item">
                <h2>TITLE 5</h2>
            </div>
            <div class="grid-item">
                <h2>TITLE 6</h2>
            </div>
            <div class="grid-item">
                <h2>TITLE 7</h2>
            </div>
            <div class="grid-item">
                <h2>TITLE 8</h2>
            </div>
            <div class="grid-item">
                <h2>TITLE 9</h2>
            </div>
        </div>
        -->
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
    margin: 2rem 0;
    width: 100%;
    z-index: 10;
    position: relative;

    .grid-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, minmax(100px, 300px));
        grid-gap: 2rem;
        grid-auto-flow: row;
    }

    .grid-item {
        background: rgb(175, 55, 11);
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

h1 {
    font-family: "adam", Helvetica, Arial, sans-serif;
    font-weight: 100;
    text-align: center;
    padding: 20rem 0;
    background: #2B2B2B;
    font-size: 3rem;

}

</style>

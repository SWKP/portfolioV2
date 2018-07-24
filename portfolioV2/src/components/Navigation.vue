<template>
    <div class="mainNavigation">
        <ul>
            <li>Websites</li>
            <li>Code</li>
            <li>3d</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
</template>

<script>
    
    export default {

    }
</script>

<style lang="scss">
    .mainNavigation {
        background: #2B2B2B;
        max-width: 70rem;
        align-self: flex-end;

    & ul li {
        display: inline-block;
        color: #C6C6C6;
        font-size: 1.75rem;
        font-family: "brandon", Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        padding: 2.5rem 3.5rem;

        &:hover {
        background-color: white;
        }
    }
    }

</style>

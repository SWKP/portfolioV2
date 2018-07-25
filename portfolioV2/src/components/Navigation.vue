<template>
    <div class="mainNavigation">
        <div class="search">
            <input type="text" placeholder="Search..">
            <button type="submit"><i class="fa fa-search"></i></button>
            </div>
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
        position: relative;
        background: #2B2B2B;
        max-width: 70rem;
        align-self: flex-end;
        z-index: 1;

        ul li {
            display: inline-block;
            color: #C6C6C6;
            font-size: 1.75rem;
            font-family: "brandon", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
            padding: 2.5rem 3.5rem;
            transition: all .3s;

            &:hover {
                color: white;
                background-color: var(--main-highlight-color);
            }
        }
    }

    .search {
        position: absolute;
        right: 0;
        clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
        height: 6rem;
        width: 29rem;
        background: #2b2b2b;
        top: -6rem;
        border-bottom: 3px solid #3a3a3a;
            

        input[type="text"] {
            margin: 1.2rem 0 1rem 9rem;
            padding: 0.75rem;
            background: #bcbcbc;
            border: none;
            font-family: "brandon", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
        }

        button {
            background: transparent;
            border: none;
            transform: scale(2);
            margin-left: 15px;
        }

        .fa-search:before {
            color: #838383
        }
    }

</style>

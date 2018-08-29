<template>
    <div class="mainNavigation">
        <div class="search">
            <input type="text" placeholder="Search..">
            <button type="submit"><i class="fa fa-search"></i></button>
            </div>
        <ul>
            <router-link to="/">
                <li>
                    <div class="button">
                        <span class="button__mask"></span>
                        <span class="button__text">Websites</span>
                        <span class="button__text button__text--bis">Websites</span>
                    </div>
                </li>
            </router-link>
            <router-link to="/code">
                <li>
                    <div class="button">
                        <span class="button__mask"></span>
                        <span class="button__text">Code</span>
                        <span class="button__text button__text--bis">Code</span>
                    </div>
                </li>
            </router-link>
            <router-link to="/3d">
                <li>
                    <div class="button">
                        <span class="button__mask"></span>
                        <span class="button__text">3D</span>
                        <span class="button__text button__text--bis">3D</span>
                    </div>
                </li>
            </router-link>
            <router-link to="/about">
                <li>
                    <div class="button">
                        <span class="button__mask"></span>
                        <span class="button__text">About</span>
                        <span class="button__text button__text--bis">About</span>
                    </div>
                </li>
            </router-link>
            <router-link to="/contact">
                <li>
                    <div class="button">
                        <span class="button__mask"></span>
                        <span class="button__text">Contact</span>
                        <span class="button__text button__text--bis">Contact</span>
                    </div>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import { bus } from '../main.js';
    
    export default {
        methods: {
            changeComponent: function (component){
                bus.$emit('componentChanged', component);
                console.log(component);
            }
        }
    }
</script>

<style lang="scss">
    .button {
        border: none;
        min-width: 130px;
    }
    .mainNavigation {
        position: relative;
        background: #2B2B2B;
        max-width: 70rem;
        align-self: flex-end;
        z-index: 1;

        ul li {
            height: 54px;
            text-align: center;
            cursor: pointer;
            display: inline-block;
            color: #C6C6C6;
            font-size: 1.5rem;
            font-family: "brandon", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
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

<template>
    <div id="content">
        <router-view></router-view>
    </div>
</template>

<style scoped>

#content{
    position: absolute;
    top: 50px;
    left: 170px;
    right: 0px;
    bottom: 0px;
    padding: 24px;
}

@media screen and (max-width: 1024px) {
    #content {
        left: 0;
    }
}

</style>
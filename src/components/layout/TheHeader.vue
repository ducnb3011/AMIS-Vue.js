<template>
    <div id="header">
        <div class = "cty-select"></div>
        <select name="Cty" class="cty">
            <option value="1">CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ ĐÔNG TÀ</option>
            <option value="2">CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ TÂY ĐỘC</option>
            <option value="3">CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ NAM ĐẾ</option>
            <option value="4">CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ BẮC CÁI</option>
        </select>

        <div class="account">
            <div class="bell"></div>
            <div class="avatar"></div>
            <div class="user">
                <div class="user-name">Kiều Phong</div>
                <div class="option"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#header {
    position: absolute;
    left: 170px;
    right: 0;
    height: 50px;
    top: 0;
    border-bottom: 2px solid #edeef0;
}

.cty {
    border: none;
    outline: none;
    position: absolute;
    top: 2px;
    left: 25px;
}

.account {
    display: flex;
    align-items: center;
    float: right;
    margin-top: 10px;
}

.account .avatar {
    width: 32px;
	height: 32px;
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -352px -894px;
	border-radius: 50%;
    margin-right: 10px;
}

.account .user {
    display: flex;
    font-family: notosans-bold;
}
    .account .user .option {
        width: 20px;
        height: 20px;
        margin-left: 16px;
        margin-right: 16px;
        margin-top: 5px;
        background-repeat: no-repeat;
        cursor: pointer;
        background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -1129px -365px;
        
    }

@media screen and (max-width: 1024px) {
    #header {
        left: 0;
    }
}
</style>
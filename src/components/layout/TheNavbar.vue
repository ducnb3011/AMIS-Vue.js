<template>
    <div id="navbar">
        <div class="logo-box">
            <div class="sidebar"></div>
            <div class="logo"></div>
        </div>
        <div class="navbar-box">
            <router-link class="navbar-item" to="/employee">
                <div class="icon-tq"></div>
                <div class="navbar-text">Tổng quan</div>
            </router-link>
            <a class="navbar-item">
                <div class="icon-tm"></div>
                <div class="navbar-text">Tiền mặt</div>
            </a>
            <a class="navbar-item">
                <div class="icon-tg"></div>
                <div class="navbar-text">Tiền gửi</div>
            </a>
            <a class="navbar-item">
                <div class="icon-mh"></div>
                <div class="navbar-text">Mua hàng</div>
            </a>
            <a class="navbar-item">
                <div class="icon-bh"></div>
                <div class="navbar-text">Bán hàng</div>
            </a>
            <a class="navbar-item">
                <div class="icon-hd"></div>
                <div class="navbar-text">Quản lý hóa đơn</div>
            </a>
            <a class="navbar-item">
                <div class="icon-k"></div>
                <div class="navbar-text">Kho</div>
            </a>
            <a class="navbar-item">
                <div class="icon-cc"></div>
                <div class="navbar-text">Công cụ dụng cụ</div>
            </a>
            <a class="navbar-item">
                <div class="icon-ts"></div>
                <div class="navbar-text">Tài sản cố định</div>
            </a>
            <a class="navbar-item">
                <div class="icon-t"></div>
                <div class="navbar-text">Thuế</div>
            </a>
            <a class="navbar-item">
                <div class="icon-gt"></div>
                <div class="navbar-text">Giá thành</div>
            </a>
            <a class="navbar-item">
                <div class="icon-th"></div>
                <div class="navbar-text">Tổng hợp</div>
            </a>
            <a class="navbar-item">
                <div class="icon-ns"></div>
                <div class="navbar-text">Ngân sách</div>
            </a>
            <a class="navbar-item">
                <div class="icon-bc"></div>
                <div class="navbar-text">Báo cáo</div>
            </a>
            <a class="navbar-item">
                <div class="icon-tc"></div>
                <div class="navbar-text">Phân tích tài chính</div>
            </a>
        </div>
    </div>
</template>

<style scoped>
#navbar {
    width: 170px;
    height: 100vh;
    border-right: 1px solid #dedede;
    transition: width 2s;
    background-color: #393a3e;
    color: #d0d1d5;
}


.logo-box{
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    cursor: pointer;
}

    .logo-box .sidebar {
        margin-left: 16px;
        flex-shrink: 0;
        width: 25px;
        height: 25px;
        background-image: url('../../assets/img/toggle.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .logo-box .logo {
        margin-left: 8px;
        width:100%;
        height:30px;
        flex-shrink: 0;
        background-image: url('../../assets/img/Logo_Module_TiengViet_White.66947422.svg');
        background-size:contain;
        background-position: left;
        background-repeat: no-repeat;
    }
.navbar-box .navbar-item{
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0;
    color: #d0d1d5;
    font-family: notosans-bold;
    padding-left: 13px;
}

    .navbar-box .navbar-item:hover{
        background-color: #dedede;
        cursor: pointer;
        color: #393a3e;
    }

    .navbar-item .navbar-icon {
        margin-left: 16px;
        width: 20px;
        height: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

.navbar-item .navbar-text{
    margin-left: 10px;
}

a.navbar-item:hover{
    cursor: pointer;
}
a.navbar-item:active{
    background-color: aquamarine;
}
@media screen and (max-width: 1024px) {
    #navbar {
        position: absolute;
        left: -200px;
    }
}
</style>
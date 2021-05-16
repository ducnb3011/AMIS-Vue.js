<template>
    <div>
        <div class="confirm" :class='{hide:!confirmShow}'>
        <div class="model"></div>
        <div class="confirm-box">
            <div class="content">
            <div class="icon-warning"></div>
            <div class="message">Mã nhân viên {{ this.employeeCode }} đã tồn tại trong hệ thống, vui lòng kiểm tra lại!</div>
            <hr>
            <button class="btn-default" @click="btnCloseOnClick()">Đồng ý</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        confirmShow: {
            type: Boolean,
            default: true
        },
        employeeId: {
            type: String,
        },
        employeeCode: {
            type: String,
        }
    },
    methods: {
        btnCloseOnClick() {
            this.$emit("hideConfirm");
        }
    },
    setup() {
        
    },
}
</script>

<style scoped>
    .model {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom:0;
        background-color: #000000;
        opacity:.4;
    }
    .confirm-box {
        position: absolute;
        top: 50px;
        left: 380px;
        right: 550px;
        bottom: 480px;
        min-width: 400px;
        background-color: #ffffff;
        border-radius: 4px;
    }
    .content {
        position: absolute;
        top: 30px;
        left: 30px;
        right: 30px;
        bottom: 20px;
    }
    .icon-warning {
        margin-bottom: 30px;
    }
    .message {
        position: absolute;
        top: 10px;
        left: 50px
    }
    .btn-cancel {
        position: absolute;
        top: 90px;
        left: 0px
    }
    .btn-default {
        position: absolute;
        top: 90px;
        right: 0px
    }
</style>
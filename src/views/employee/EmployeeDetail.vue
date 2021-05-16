<template>
    <div class="dialog" :class='{hide:!isShow}'>
        <div class="model"></div>
        <div class="employee-detail">
            <div class="content">
                <div class="header">
                    <div class="title">Thông tin nhân viên</div>
                    <div class="selectE">
                        <div class="select-employee">
                            <input type="checkbox" name="kh">
                            <label for="kh">Là khách hàng</label>
                        </div>
                        <div class="select-employee">
                            <input type="checkbox" name="ncc">
                            <label for="kh">Nhà cung cấp</label>
                        </div>
                    </div>  
                </div>
                <div class="field">
                    <div class="dialog-left">
                        <div style="width: calc(34% - 32px); margin-right: 2%; float: left;">
                            <label for="EmployeeCode" class="required">Mã nhân viên</label>
                            <input :class='{"missing-input":missingCode}' style="width: 100%;" name="EmployeeCode" type="text" placeholder="EmployeeCode"
                            v-model="employee.employeeCode" @mouseover="mesCode = true" @mouseleave="mesCode = false">
                            <div class="missing-mes" style="left: 5px" :class='{hide:!(missingCode && mesCode)}'>Mã không được để trống.</div>
                        </div>
                        <div style="width: calc(64% - 32px); margin-left: calc(40% - 21px);">
                            <label for="Fullname" class="required">Tên</label>
                            <input :class='{"missing-input":missingName}' style="width: 100%;" name="Fullname" type="text" placeholder="Fullname"
                            v-model="employee.fullName" @mouseover="mesName = true" @mouseleave="mesName = false">
                            <div class="missing-mes" style="left: 50%"  :class='{hide:!(missingName && mesName)}'>Tên không được để trống.</div>
                        </div>
                        <div style="width: calc(100% + 2px);">
                            <label for="Departent" class="required">Đơn vị</label>
                            <select :class='{"missing-input":missingDepartment}' name="Departent" class="Departent" style="width: 100%;"
                            v-model="employee.departmentId" @mouseover="mesDepartment = true" @mouseleave="mesDepartment = false" >
                                <option v-for="department in departments" :key='department.departmentId'
                                v-bind:value="department.departmentId">
                                    {{department.departmentName}}</option>
                            </select>
                            <div class="missing-mes" style="top: 113px; left: 30%" :class='{hide:!(missingDepartment && mesDepartment)}'>Đơn vị không được để trống.</div>
                        </div>
                        <div style="width: calc(100% - 32px);">
                            <label for="Position">Chức danh</label>
                            <input style="width: 100%;" name="Position" type="text" placeholder="Position"
                            v-model="employee.position">
                        </div>
                    </div>
                    <div class="dialog-right">
                        <div style="width: calc(34% - 32px); margin-right: 2%; float: left;">
                            <label for="DateofBirth">Ngày sinh</label>
                            <input style="width: 100%;" name="DateofBirth" type="date" placeholder="Date of birth"
                            v-model="employee.dateOfBirth">
                        </div>
                        <div style="width: calc(64% - 32px); margin-left: calc(40% - 21px);">
                            <label for="Gender" >Giới tính</label><br>
                            <div style="height: 40px; display: flex; margin-bottom: 6px; padding-top: 4px;">
                                <input type="radio" name="gender" value="1" checked v-model="employee.gender">
                                <label for="male" style="font-family: notosans-regular; font-size: 14px">Nam</label>
                                <input type="radio" name="gender" value="2" v-model="employee.gender">
                                <label for="female" style="font-family: notosans-regular; font-size: 14px">Nữ</label>
                                <input type="radio" name="gender" value="0" v-model="employee.gender">
                                <label for="others" style="font-family: notosans-regular; font-size: 14px">Khác</label>
                            </div>
                        </div>
                        <div style="width: calc(64% - 32px); margin-right: 2%; float: left;">
                            <label for="IdNumber" >Số CMND</label>
                            <input style="width: 100%;" name="IdNumber" type="text" placeholder="IdNumber"
                            v-model="employee.idCardNumber">
                        </div>
                        <div style="width: calc(34% - 32px); margin-left: calc(70% - 21px);">
                            <label for="IdGettedDate">Ngày cấp</label>
                            <input style="width: 100%;" name="IdGettedDate" type="date" placeholder="Id getted date"
                            v-model="employee.IdCardDate">
                        </div>
                        <div style="width: calc(100% - 32px);">
                            <label for="IdRegion">Nơi cấp</label>
                            <input style="width: 100%;" name="IdRegion" type="text" placeholder="Id region"
                            v-model="employee.idCardRegion">
                        </div>
                    </div>
                    <div class="address">
                        <div style="width: calc(100% - 32px);">
                            <label for="Address">Địa chỉ</label>
                            <input style="width: 100%;" name="Address" type="text" placeholder="Address"
                            v-model="employee.address">
                        </div>
                    </div>
                    <div class="contact">
                        <div style="width: calc(24% - 32px); float: left">
                            <label for="MobilePhone">ĐT di động</label>
                            <input style="width: 100%;" name="MobilePhone" type="text" placeholder="Mobile phone"
                            v-model="employee.mobilePhone">
                        </div>
                        <div style="width: calc(24% - 32px);  margin-left: calc(28% - 32px);">
                            <label for="HomePhone">ĐT cố định</label>
                            <input style="width: 100%;" name="HomePhone" type="text" placeholder="Home phone"
                            v-model="employee.homePhone">
                        </div>
                        <div style="width: calc(24% - 32px);  margin-left: calc(53% - 32px); margin-top: -67.8px">
                            <label for="Email">Email</label>
                            <input style="width: 100%;" name="Email" type="text" placeholder="Email@add.com"
                            v-model="employee.email">
                        </div>
                    </div>
                    <div class="payment">
                        <div style="width: calc(24% - 32px); float: left">
                            <label for="BankAccount">Tài khoản ngân hàng</label>
                            <input style="width: 100%;" name="BankAccount" type="text" placeholder="Bank account"
                            v-model="employee.bankAccount">
                        </div>
                        <div style="width: calc(24% - 32px);  margin-left: calc(28% - 32px);">
                            <label for="Bank">Tên ngân hàng</label>
                            <input style="width: 100%;" name="Bank" type="text" placeholder="Bank"
                            v-model="employee.bankName">
                        </div>
                        <div style="width: calc(24% - 32px);  margin-left: calc(53% - 32px); margin-top: -67.8px">
                            <label for="BankOffice">Chi nhánh</label>
                            <input style="width: 100%;" name="BankOffice" type="text" placeholder="Bank office"
                            v-model="employee.agency">
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <hr>
                    <button class="btn-cancel" style="position: absolute; top: 40px; left: 0;" @click="btnCloseOnClick()">Hủy</button>
                    <button class="btn-cancel" style="position: absolute; top: 40px; right: 130px;" @click="btnCloseOnClick()">Cất</button>
                    <button class="btn-default" style="position: absolute; top: 40px; right: 0;" @click="btnSaveOnClick()">Cất và thêm</button>
                </div>
            </div>
            <div class = "dialog-btn1">
                <div class="icon-help"></div>
            </div>
            <div  class = "dialog-btn2" @click="btnCloseOnClick()">
                <div class="icon-exit"></div>
            </div>
            
        </div>
        <EmployeeExist
        :confirmShow="isShowConfirm"
        :employeeCode="this.employee.employeeCode" 
        @hideConfirm="hideConfirm"
        />
    </div>
</template>

<script>
import axios from 'axios'
import EmployeeExist from './EmployeeExist.vue'
export default {
    components: {
        EmployeeExist
    },
    props: {
        isShow:{
            type: Boolean,
            default: false
        },
        employee: {
            type: Object,
            dafault: null
        },
        formMode: {
            type: String,
            dafault: "add"
        }
    },
    created() {
        //Load du lieu cho trang
        axios 
            .get("https://localhost:44369/api/v1/Department")
            .then((res) => {
                this.departments = res.data;
                console.log(res);
            })
            .catch((res) => {
                console.log(res);
            })
    },
    methods: {
        btnCloseOnClick() {
            this.missingCode= false;
            this.mesCode= false;
            this.missingName= false;
            this.mesName= false;
            this.missingDepartment= false;
            this.mesDepartment= false;
            this.$emit("hideDialog");
        },
        btnSaveOnClick() {
            if((this.employee.fullName != undefined) && (this.employee.employeeCode != undefined) && (this.employee.departmentId != undefined)
                && (this.employee.fullName != "") && (this.employee.employeeCode != "") && (this.employee.departmentId != "")
            ) {
                if(this.formMode == "add") {
                        console.log(this.employee);
                        axios.get("https://localhost:44369/api/v1/AMISEmployees/check/" +this.employee.employeeCode)
                        .then(res => {
                            this.codeCheck = res.data
                            if(this.codeCheck == 0) {
                            axios.post("https://localhost:44369/api/v1/AMISEmployees", this.employee)
                            .then(res => {
                                console.log(res);
                                this.missingName = false;
                                this.missingCode = false;
                                this.missingDepartment =false;
                                this.$emit("hideDialog");
                                })    
                            .catch(res => {
                                console.log(res.status)
                            });
                        }
                        else {
                            this.isShowConfirm = true;
                        }
                            })    
                        .catch(res => {
                            console.log(res.status)
                        });

                }
                else {
                        console.log(this.employee)
                        axios
                        .put("https://localhost:44369/api/v1/AMISEmployees/" + this.employee.employeeId, this.employee)
                        .then(res => {console.log(res);
                            this.$emit("hideDialog");})    
                        .catch(res => {console.log(res)});
                }
            }
            else {
                
                // Check have input Employee name
                if((this.employee.fullName == undefined) || (this.employee.fullName == ""))
                {
                    this.missingName = true;
                }
                if((this.employee.fullName != undefined) && (this.employee.fullName != ""))
                {
                    this.missingName = false;
                }
                // Check have input Employee Code
                if((this.employee.employeeCode == undefined) || (this.employee.employeeCode == "")) {
                    this.missingCode = true;
                }
                if((this.employee.employeeCode != undefined) && (this.employee.employeeCode != "")) {
                    this.missingCode = false;
                }
                // Check have input Employee phone number
                if((this.employee.departmentId == undefined) || (this.employee.departmentId == "")) {
                    this.missingDepartment = true;
                }
                if((this.employee.departmentId != undefined) && (this.employee.departmentId!= "")) {
                    this.missingDepartment = false;
                }
            }
        },
        hideConfirm() {
            this.isShowConfirm = false;
        }
    },
    data() {
        return {
            codeCheck: 0,
            departments: [],
            missingCode: false,
            mesCode: false,
            missingName: false,
            mesName: false,
            missingDepartment: false,
            mesDepartment: false,
            isShowConfirm: false,
        };
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
    .employee-detail {
        position: absolute;
        top: 20px;
        left: 50px;
        right: 220px;
        bottom: 70px;
        min-width: 1000px;
        background-color: #ffffff;
        border-radius: 4px;
        overflow: hidden;
    }
    .content {
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        bottom: 20px;
    }
    .header {
        position: absolute;
        width: 96%;
        height: 60px;
        left: 2%;
    }
    .title {
        font-family: notosans-bold;
        font-size: 20px;
    }
    .selectE {
        position: absolute;
        left: 220px;
        top: 5px;
    }
    .select-employee {
        float: left;
        margin-right: 10px;
    }
    .dialog-btn1 {
        position: absolute;
        right: 38px;
        padding: 10px;
    }
    .dialog-btn2 {
        position: absolute;
        right: 0px;
        padding: 10px;
    }
    .dialog-btn1:hover {
        background-color: #f4f5f7;
    }
    .dialog-btn2:hover {
        background-color: #f4f5f7;
    }
    .field {
        position: absolute;
        top: 60px;
        width: 100%;
        font-family: notosans-bold;
    }
    .dialog-left {
        position: absolute;
        left: 2%;
        width: 47%;
        min-height: 200px;
    }
    .dialog-right {
        position: absolute;
        right: 2%;
        width: 47%;
        min-height: 200px;
    }
    .address {
        width: 96%;
        position: absolute;
        top: 235px;
        left: 2%;
    }
    .contact {
        width: 96%;
        position: absolute;
        top: 305px;
        left: 2%;
    }
    .payment {
        width: 96%;
        position: absolute;
        top: 375px;
        left: 2%;
    }
    .footer {
        position: absolute;
        width: 96%;
        left: 2%;
        top: 500px
    }
    @media screen and (max-width: 1230px) {
        .employee-detail {
        left: -170px;
        right: 220px;
    }
    }
    @media screen and (max-width: 1024px) {
        .employee-detail {
        left: 0px;
        right: 220px;
    }
    }
</style>
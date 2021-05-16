<template>
    <div class = "Employee-template">
        <div class = "header">
            <div class="title">Nhân viên</div>
            <div class="add-button-tag">
                <button class="btn-default" @click="btnAddOnClick()">Thêm mới nhân viên</button>
            </div>
        </div>
        <div class="main-content">
            <div class="tool">
                <input class="search-box" type="text" v-on:keyup.enter="search()"
                v-model="toSearchEmployee" placeholder="Tìm theo mã, tên, sđt nhân viên">
                <div class="refresh-button">
                    <div class="icon-refresh" @click="refreshBtnOnClick()"></div>
                </div>
            </div>
            <div class="table-arr">
                <table>
                    <tr>
                        <th><input type="checkbox"></th>
                        <th>Mã nhân viên</th>
                        <th>Tên nhân viên</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Số CMND</th>
                        <th>Chức vụ</th>
                        <th>Tên đơn vị</th>
                        <th>Số tài khoản</th>
                        <th>Tên ngân hàng</th>
                        <th>Chi nhánh TKNH</th>
                        <th>Chức năng</th>
                    </tr>
                    <tr v-for="employee in employees" :key='employee.employeeId'
                    @dblclick="trOnDblClick(employee.employeeId)">
                        <td><input type="checkbox"></td>
                        <td>{{employee.employeeCode}}</td>
                        <td>{{employee.fullName}}</td>
                        <td>{{genderFormat(employee.gender)}}</td>
                        <td>{{dateFormat(employee.dateOfBirth)}}</td>
                        <td>{{(employee.idCardNumber)}}</td>
                        <td>{{employee.position}}</td>
                        <td>{{employee.departmentName}}</td>
                        <td>{{employee.bankAccount}}</td>
                        <td>{{employee.bankName}}</td>
                        <td>{{employee.agency}}</td>
                        <td><div class="del-button" @click="btnDeleteOnClick(employee.employeeId, employee.employeeCode)">Xóa</div></td>
                    </tr>
                </table>
            </div>
            <div class="page-size-select">
                <select name="pageSize" class="size-select"
                v-model="pageSize" v-on:change="pageSizeChange()">
                    <option value="10">10 bản ghi trên 1 trang</option>
                    <option value="20">20 bản ghi trên 1 trang</option>
                    <option value="30">30 bản ghi trên 1 trang</option>
                </select>
            </div>
            <div class="page-select">
                <div style="position: absolute; left: 10px; top: 16px; padding: 2px; width: 50px; cursor: pointer;"
                @click="btnPrevOnClick"><b>Trước</b></div>
                <div style="position: absolute; left: 65px; top: 20px;"><div class="cur-page">{{currentPage}}</div> trên <b>{{totalPage}}</b></div>
                <div  style="position: absolute; right: 10px; top: 16px; padding: 2px; width: 50px; cursor: pointer;"
                @click="btnNextOnClick"><b>Sau</b></div>
            </div>
        </div>
        <EmployeeDetail
        :isShow="isShowDialogDetail" 
        :employee="selectedEmployee"
        :formMode="dialogFormMode"
        @hideDialog="hideDialog"
        />
        <EmployeeDeleteConfirm
        :confirmShow="isShowDeleteConfirm"
        :employeeId="chossenDelEmployeeId" 
        :employeeCode="chossenDelEmployeeCode" 
        @hideDeleteConfirm="hideDeleteConfirm"
        />
    </div>    
</template>
<script>
import axios from 'axios'
import EmployeeDetail from './EmployeeDetail.vue'
import EmployeeDeleteConfirm from './EmployeeDeleteConfirm.vue'

export default {
    components: {
        EmployeeDetail,
        EmployeeDeleteConfirm,
    },
    setup() {
        
    },
    created() {
        //Load du lieu cho trang
        axios 
            .get("https://localhost:44369/api/v1/AMISEmployees")
            .then((res) => {
                this.rawEmployees = res.data;
                console.log("Respone code " + res.status + " . Data loaded");
                this.totalPage = Math.ceil(this.rawEmployees.length / this.pageSize);
                console.log("Total all " + this.totalPage + " pages");
                var fromE = (this.currentPage-1)*10;
                var toE = this.currentPage*10;
                var i = 0
                for(i = fromE; i<toE; i++) {
                    this.employees.push(this.rawEmployees[i]);
                }
            })
            .catch((res) => {
                console.log(res);
            })
    },
    methods: {
        refreshBtnOnClick() {
            this.currentPage = 1;
            this.loadData();
        },
        loadData() {
            //Load du lieu cho trang
            axios 
            .get("https://localhost:44369/api/v1/AMISEmployees")
            .then((res) => {
                this.rawEmployees = res.data;
                this.totalPage = Math.ceil(this.rawEmployees.length / this.pageSize);
                this.employees = [];
                var fromE = (this.currentPage-1)*this.pageSize;
                var toE = parseInt(fromE) + parseInt(this.pageSize);
                if(toE >= this.rawEmployees.length) {
                    toE = this.rawEmployees.length;
                }
                console.log(fromE, toE);
                var i = 0
                for(i = fromE; i<toE; i++) {
                    this.employees.push(this.rawEmployees[i]);
                }
            })
            .catch((res) => {
                console.log(res);
            })
        },
        btnAddOnClick() {
            this.dialogFormMode= "add";
            this.selectedEmployee = {employeeCode: undefined};
            axios
            .get("https://localhost:44369/api/v1/AMISEmployees/NewId")
            .then(res => {
                this.selectedEmployee.employeeCode = res.data;
                console.log(this.selectedEmployee.employeeCode);
            })
            .catch(res => {
                console.log(res);
            })
            this.isShowDialogDetail = true;
        },
        hideDialog() {
            this.isShowDialogDetail = false;
            this.loadData();
        },
        btnDeleteOnClick: function(id, code) {
            this.chossenDelEmployeeId = id;
            this.chossenDelEmployeeCode = code;
            this.isShowDeleteConfirm = true;
            console.log(this.chossenDelEmployeeId);
        },
        hideDeleteConfirm() {
            this.isShowDeleteConfirm = false;
            this.loadData();
        },
        trOnDblClick(EmployeeId) {
            axios.get("https://localhost:44369/api/v1/AMISEmployees/" + EmployeeId)
            .then(res =>{
                this.selectedEmployee = res.data;
                console.log(res.data);
            })
            .catch(res =>{
                console.log(res);
            })
            this.dialogFormMode= "edit";
            this.isShowDialogDetail = true;
        },
        search() {
            console.log("Hello");
            if(this.toSearchEmployee.includes("N") || this.toSearchEmployee.includes("V"))
            {
                this.searchInfo = "%25" + this.toSearchEmployee + "%25"
            }
            else {
                this.searchInfo = "%25_" + this.toSearchEmployee + "_%25"
            }
            console.log(this.searchInfo);
            
            axios 
                .get("https://localhost:44369/api/v1/AMISEmployees/search/" + this.searchInfo)
                .then((res) => {
                    //this.searchedEmployee = res.data;
                    //this.employees = [];
                    //this.employees.push(this.searchedEmployee);
                    this.employees = res.data;
                    console.log(this.employees);
                })
                .catch((res) => {
                    console.log(res);
                })
            
        },
        dateFormat: function (inputDate) {
            var preFormat = new Date(inputDate);
            var dd = preFormat.getDate();
            var mm = preFormat.getMonth()+1;
            var yyyy = preFormat.getFullYear();
            var formatedDate = "";
            if(dd < 10) {
                formatedDate += "0" + dd;
            }
            else {
                formatedDate += dd;
            }
            if(mm < 10) {
                formatedDate += "/0" + mm;
            }
            else {
                formatedDate += "/" + mm;
            }
            formatedDate += "/" + yyyy;
            
            return formatedDate;
        },
        genderFormat: function (inputGender) {
            if(inputGender != null) {
                if(inputGender == 1) {
                    return "Nam";
                }
                else if (inputGender == 2) {
                    return "Nữ";
                }
                else {
                    return "Khác";
                }
            }
            else {
                return "";
            }
        },
        btnPrevOnClick() {
            if(this.currentPage > 1) {
                this.currentPage--;
                this.loadData();
            }
        },
        btnNextOnClick() {
            if(this.currentPage < this.totalPage) {
                this.currentPage++;
                this.loadData();
            }
        },
        pageSizeChange() {
            this.currentPage = 1;
            this.loadData();
        }
    },
    data() {
        return {
            toSearchEmployee: "",
            searchInfo: "",
            searchedEmployee: null,
            chossenDelEmployeeId: "noFkingWayThisIsAnId",
            chossenDelEmployeeCode: "noFkingWayThisIsAnCode",
            dialogFormMode: "add",
            isShowDialogDetail: false,
            selectedEmployee: {},
            chosen: "noFkingWayThisIsAnId",
            rawEmployees: [],
            employees: [],
            totalPage: 0,
            pageSize: 10,
            currentPage: 1,
            isShowDeleteConfirm: false,
        };
    },
}

</script>

<style scoped>
    .Employee-template {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #f4f5f7;
    }
    .header {
        position: absolute;
        top: 0px;
        left: 20px;
        right: 20px;
    }
    .title {
        font-family: notosans-bold;
        font-size: 20px;
        padding-top: 15px;
    }
    .add-button-tag {
        position: absolute;
        top: 15px;
        right: 0px;
    }
    .main-content {
        position: absolute;
        top: 60px;
        bottom: 10px;
        left: 20px;
        right: 20px;
        background-color: #ffffff;
    }
    .search-box {
        position: absolute;
        top: 10px;
        right: 50px;
    }
    .refresh-button {
        position: absolute;
        top: 15px;
        right: 10px;
        padding: 5px;
        cursor: pointer;
        border-radius: 2px;
    }
    .refresh-button:hover {
        background-color: #228614;
    }
    .table-arr {
        position: absolute;
        top: 60px;
        bottom: 50px;
        left: 20px;
        right: 20px;
        overflow: scroll;
    }
    .del-button {
        color: #60b4f4;
        width: 50px;
        height: 20px;
        border-radius: 2px;
        text-align: center;
        cursor: pointer;
    }
    .del-button:hover {
        background-color: #60b4f4;
        color: #ffffff;
    }
    .page-select {
        width: 200px;
        height: 50px;
        position: absolute;
        right: 20px;
        bottom: 0px;
    }
    .cur-page {
        border: 1px solid #c5c5c5;
        width: 20px;
        height: 20px;
        text-align: center;
        font-family: notosans-bold;
        float: left;
        margin-top: -2px;
    }
    .page-size-select {
        width: 220px;
        height: 50px;
        position: absolute;
        right: 230px;
        bottom: 0px;
    }
    .size-select {
        position: absolute;
        right: 0px;
        top: 10px;
    }
</style>
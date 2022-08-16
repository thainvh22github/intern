$(document).ready(function(){
    new employeeDetails();
});
class employeeDetails {

    constructor(){
        let me = this;
            me.stepIvent();        
    }

    stepIvent(){
        let me = this;

        me.comboboxPositions();
        me.comboboxDepartments();
        me.comboboxGender();
        me.comboboxWorkStatus();
        me.pageComboboxDepartments();
        me.pageComboboxPositions();
        me.comboboxHeader();
    }
    comboboxHeader(){
        $("#btn-dropdown").click(function(e) {
            $("#content-combobox-header").toggle(500);
        });
        $("#value-D").click(function(e) {
            $("#content-combobox-header").hide(500);
            $("#combobox-header").val("Nhà hàng biển Đông");
        });
        $("#value-T").click(function(e) {
            $("#content-combobox-header").hide(500);
            $("#combobox-header").val("Nhà hàng biển Tây");
        });
        $("#value-N").click(function(e) {
            $("#content-combobox-header").hide(500);
            $("#combobox-header").val("Nhà hàng biển Nam");
        });
        $("#value-B").click(function(e) {
            $("#content-combobox-header").hide(500);
            $("#combobox-header").val("Nhà hàng biển Bắc");
        });
        
    }
    comboboxGender(){
        $("#btn-dropdown-gender").click(function(e) {
            $("#content-combobox-gender").toggle(500);
        });
        $("#male").click(function(e) {
            $("#content-combobox-gender").hide(500);
            $("#gender").val(0);
            $("#genderValue").val("Nam");
        });
        $("#female").click(function(e) {
            $("#content-combobox-gender").hide(500);
            $("#gender").val(1);
            $("#genderValue").val("Nữ");
        });
        $("#other").click(function(e) {
            $("#content-combobox-gender").hide(500);
            $("#gender").val(2);
            $("#genderValue").val("Khác");
        });
        
    }

    comboboxDepartments(){
        $("#btn-dropdown-departments").click(function(e) {
            $("#content-combobox-departments").toggle(500);
        });
        $("#d1").click(function(e) {
            $("#content-combobox-departments").hide(500);
            $("#departmentsValue").val("Phòng kế toán");
        });
        $("#d2").click(function(e) {
            $("#content-combobox-departments").hide(500);
            $("#departmentsValue").val("Phòng bảo vệ");
        });
        $("#d3").click(function(e) {
            $("#content-combobox-departments").hide(500);
            $("#departmentsValue").val("Phòng hỗ trợ khách hàng");
        });
        $("#d4").click(function(e) {
            $("#content-combobox-departments").hide(500);
            $("#departmentsValue").val("Phòng nhân sự");
        });
        $("#d5").click(function(e) {
            $("#content-combobox-departments").hide(500);
            $("#departmentsValue").val("Phòng hành chính");
        });
    }

 
    comboboxPositions(){
        $("#btn-dropdown-positions").click(function(e) {
            $("#content-combobox-positions").toggle(500);
        });
        $("#p1").click(function(e) {
            $("#content-combobox-positions").hide(500);
            $("#positionsValue").val("Trưởng phòng");
        });
        $("#p2").click(function(e) {
            $("#content-combobox-positions").hide(500);
            $("#positionsValue").val("Giám đốc sản xuất");
        });
        $("#p3").click(function(e) {
            $("#content-combobox-positions").hide(500);
            $("#positionsValue").val("Bảo vệ");
        });
        $("#p4").click(function(e) {
            $("#content-combobox-positions").hide(500);
            $("#positionsValue").val("Nhân viên tư vấn");
        });
        $("#p5").click(function(e) {
            $("#content-combobox-positions").hide(500);
            $("#positionsValue").val("Giám đốc tuyển dụng");
        })
        $("#p6").click(function(e) {
            $("#content-combobox-positions").hide(500);
            $("#positionsValue").val("Kế toán");
        })
        
    }

    comboboxWorkStatus(){
        $("#btn-dropdown-workStatus").click(function(e) {
            $("#content-combobox-workStatus").toggle(500);
        });
        $("#w1").click(function(e) {
            $("#content-combobox-workStatus").hide(500);
            $("#workStatusValue").val("Chưa làm việc");
        });
        $("#w2").click(function(e) {
            $("#content-combobox-workStatus").hide(500);
            $("#workStatusValue").val("Đang làm việc");
        });
        $("#w3").click(function(e) {
            $("#content-combobox-workStatus").hide(500);
            $("#workStatusValue").val("Đã nghỉ việc");
        });

        
    }

    pageComboboxDepartments(){
        $("#btn-dropdown-department-search").click(function(e) {
            $("#page-combobox-positions").hide(500);
            $("#page-combobox-department").toggle(500);
        });
        $("#sd1").click(function(e) {
            $("#page-combobox-department").hide(500);
            $("#combobox-department").val("Phòng kế toán");
        });
        $("#sd2").click(function(e) {
            $("#page-combobox-department").hide(500);
            $("#combobox-department").val("Phòng bảo vệ");
        });
        $("#sd3").click(function(e) {
            $("#page-combobox-department").hide(500);
            $("#combobox-department").val("Phòng hỗ trợ khách hàng");
        });
        $("#sd4").click(function(e) {
            $("#page-combobox-department").hide(500);
            $("#combobox-department").val("Phòng nhân sự");
        });
        $("#sd5").click(function(e) {
            $("#page-combobox-department").hide(500);
            $("#combobox-department").val("Phòng hành chính");
        });
    }
    pageComboboxPositions(){

        $("#btn-dropdown-positions-search").click(function(e) {
            $("#page-combobox-department").hide(500);
            $("#page-combobox-positions").toggle(500);
        });
        $("#sp1").click(function(e) {
            $("#page-combobox-positions").hide(500);
            $("#combobox-positions").val("Trưởng phòng");

        });
        $("#sp2").click(function(e) {
            $("#page-combobox-positions").hide(500);
            $("#combobox-positions").val("Giám đốc sản xuất");
        });
        $("#sp3").click(function(e) {
            $("#page-combobox-positions").hide(500);
            $("#combobox-positions").val("Bảo vệ");
        });
        $("#sp4").click(function(e) {
            $("#page-combobox-positions").hide(500);
            $("#combobox-positions").val("Nhân viên tư vấn");
        });
        $("#sp5").click(function(e) {
            $("#page-combobox-positions").hide(500);
            $("#combobox-positions").val("Giám đốc tuyển dụng");
        })
        $("#sp6").click(function(e) {
            $("#page-combobox-positions").hide(500);
            $("#combobox-positions").val("Kế toán");
        })
    }







}
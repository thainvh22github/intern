// Resource dùng chung toàn chương trình
var Resource = Resource || {};

// Các kiểu dữ liệu của column trong grid
Resource.DataTypeColumn = {
    Number: "Number",
    Date: "Date",
    Enum: "Enum",
    Text: "Text",
    String: "String",
    GetID: "GetID"
};

// Các method khi gọi ajax
Resource.Method = {
    Get: "Get",
    Post: "Post",
    Put: "Put",
    Delete: "Delete"
}


// giới tính
Resource.Gender = {
    Female: "Nữ",
    Male: "Nam",
    Other: "Khác"
}

Resource.FieldName = {
    gender: "gender",
    workStatus: "workStatus",
    positionsID: "positionsID",
    departmentsID: "departmentsID"
}

// giới tính
Resource.WorkStatus = {
    NotWorking: "Chưa làm việc", // Chưa làm việc
    CurrentlyWorking: "Đang làm việc",   // đang làm việc
    StopWork: "Đã nghỉ việc"   // đã nghỉ việc
}
Resource.Departments = {
    D1: "Phòng kế toán",
    D2: "Phòng bảo vệ",
    D3: "Phòng hỗ trợ khách hàng",
    D4: "Phòng nhân sự",
    D5: "Phòng hành chính"
}

Resource.Positions = {
    P1: "Trưởng phòng",
    P2: "Giám đốc sản xuất",
    P3: "Bảo vệ",
    P4: "Nhân viên tư vấn",
    P5: "Giám đốc tuyển dụng",
    P6: "Kế toán"
}
Resource.WorkStatus = {
    NotWorking: "Chưa làm việc", // Chưa làm việc
    CurrentlyWorking: "Đang làm việc",   // đang làm việc
    StopWork: "Đã nghỉ việc"   // đã nghỉ việc
}

// Các commandType của toolbar
Resource.CommandType = {
    Add: "Add",
    Edit: "Edit",
    Delete: "Delete",
    Refresh: "Refresh",
    Print: "Print",
    Duplicate: "Duplicate",
    Import: "Import",
    Export: "Export"
}

// Các action trên form detail
Resource.CommandForm = {
    Save: "Save",
    Cancel: "Cancel"
}
// Các hàm dùng chung toàn chương trình
var Departments = Departments || {};


Departments.EnumToName = value => {
    switch(value){
        case Enumeration.Departments.D1:
            return Resource.Departments.D1;
        case Enumeration.Departments.D2:
            return Resource.Departments.D2;
        case Enumeration.Departments.D3:
            return Resource.Departments.D3;
        case Enumeration.Departments.D4:
            return Resource.Departments.D4;
        case Enumeration.Departments.D5:
            return Resource.Departments.D5;
    }
}


// Các hàm dùng chung toàn chương trình
var Gender = Gender || {};


Gender.EnumToName = value => {
    switch(value){
        case Enumeration.Gender.Male:
            return Resource.Gender.Male;
        case Enumeration.Gender.Female:
            return Resource.Gender.Female;
        case Enumeration.Gender.Other:
            return Resource.Gender.Other;
    }
}


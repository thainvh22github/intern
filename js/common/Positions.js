// Các hàm dùng chung toàn chương trình
var Positions = Positions || {};


Positions.EnumToName = value => {
    switch(value){   
        case Enumeration.Positions.P1:
            return Resource.Positions.P1;
        case Enumeration.Positions.P2:
            return Resource.Positions.P2;
        case Enumeration.Positions.P3:
            return Resource.Positions.P3;  
        case Enumeration.Positions.P4:
            return Resource.Positions.P4;
        case Enumeration.Positions.P5:
            return Resource.Positions.P5;
        case Enumeration.Positions.P6:
            return Resource.Positions.P6;
    }
}


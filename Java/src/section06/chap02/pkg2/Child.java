package section06.chap02.pkg2;

//  상단에 임포트 필요

import section06.chap02.pkg1.Parent;

public class Child extends Parent {
    //  Parent와 다른 패키지
    //  int aa = a; // ⚠️ 불가
    //  int bb = b; // ⚠️ 불가
    int cc = c; // 💡 protected - 다른 패키지, 상속관계
    int dd = d;
}
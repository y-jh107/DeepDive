package section06.chap02.pkg1;

public class Friend {
    //  Parent와 같은 패키지
    Parent parent = new Parent();

    //  int aa = new Parent().a; // ⚠️ 불가
    int bb = parent.b;
    int cc = parent.c; // 💡 protected - 같은 패키지, 비 상속관계
    int dd = parent.d;
}
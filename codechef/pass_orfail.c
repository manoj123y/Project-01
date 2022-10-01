// #include <stdio.h>
// int main()
// {
//     int T, N, P, X;
//     scanf("%d", &T);
//     while (T)
//     {
//         scanf("%d%d%d", &N, &X, &P);
//         if (((-N + X) + (X * 3)) == P)
//             printf("PASS\n");
//         else
//             printf("FAIL\n");

//         T--;
//     }
//     return 0;
// }


#include<stdio.h>
int main(){
    int t,tot,corr,pass,marks,ded,cond;
    scanf("%d",&t);
    for(int i=0;i<t;i++){
        scanf("%d %d %d",&tot,&corr,&pass);
        marks=corr*3;
        ded=(tot-corr);
        cond=marks-ded;
        if(cond>=pass){
            printf("pass\n");
        }
        else{
            printf("fail\n");
        }
    }
    return 0;
}
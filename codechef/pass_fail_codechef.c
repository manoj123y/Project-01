#include <stdio.h>
int main()
{
    int T,N,P,X;
    scanf("%d", &T);
    if (T >= 1 && T <= 1000)
    {
        while (T)
        {
            scanf("%d", &N);
            if (N >= 1 && N <= 100)
            {
                scanf("%d", &X);
                if (X >= 0 && X<= N)
                {
                    scanf("%d", &P);
                    if (P >= 0 && P <= (3 * N))
                    {
                        if (((-N + X)+ (X * 3)) == P)
                            printf("PASS\n");
                        else
                            printf("FAIL\n");
                    }
                }
            }
            T--;
        }
    } 
    return 0;
}
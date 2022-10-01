#include <stdio.h>
int main()
{
    int i, T, N, c, b, a[100000];
    scanf("%d", &T);
    if (T > 0)
    {
        while (T)
        {
            printf("size of the array is ");
            scanf("%d", &N);
            if (N > 0)
            {
                for (i = 0; i < N; i++)
                {
                    scanf("%d", &a[i]);
                }
                c = a[0];
                for (i = 0; i < (N - 1); i++)
                {
                    if (a[i] > a[i + 1])
                        c = a[i + 1];
                }
                //printf("%d ", c * c);
                b = a[0];
                for (i = 0; i < (N - 1); i++)
                {
                    if (a[i] < a[i + 1])
                        b = a[i + 1];
                }
               // printf("%d\n", b * b);
               if(c*c>)
                T--;
            }
        }
    }
    return 0;
}
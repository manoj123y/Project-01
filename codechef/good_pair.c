#include <stdio.h>
int main()
{
    int i, c, N, T, m, n, a[10000];
    scanf("%d", &T);
    while (T)
    {
        printf("enter the size of the array");
        scanf("%d", &N);
        for (i = 0; i < N; i++)
        {
            scanf("%d", &a[i]);
        }
        for (i = 0; i < N; i++)
        {
            m = a[i];
            n = a[i + 1];
            if (a[i] > a[i + 1])
                c = a[i + 1];
            else
                c = a[i];
            for (i = c; i > 0; i--)
                if (a[i] % i == a[i + 1] % i)
                {
                    printf("\n%d  \n%d\n", m, n);
                    printf("%d", i);

                    printf("\n%d\n", (m * n) / i);
                    break;
                }
        }

        T--;
    }
}
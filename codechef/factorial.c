#include <stdio.h>
int main()
{
    int i, j, T, N;
    int fact[1000];
    // printf("enter the test case ");
    scanf("%d", &T);
    if (1 <= T && T <= 100)
    {
        while (T)

        {
            scanf("%d", &N);
            if (1 <= N <= 100)
            {
                // printf("enter the number for factorial ");

                fact[0] = fact[0] * 0;
                fact[0] = 1;

                j = N;
                for (i = 0; i < j; i++)
                {
                    fact[i + 1] = fact[i] * N;
                    N--;
                }
                printf("%d\n", fact[i + 1]);

                T--;
            }
        }
    }
    return 0;
}
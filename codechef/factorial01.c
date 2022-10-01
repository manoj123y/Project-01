#include <stdio.h>
int main()
{
    int i, j, k, l, T, N, fact = 1, a[k];
    printf("enter the test case ");
    scanf("%d", &T);
    l = T;
    while (T)
    {
        fact = fact * 0;
        fact = 1;
        scanf("%d", &N);
        j = N;
        for (i = 0; i < j; i++)
        {
            fact = fact * N;
            N--;
        }
        k = T;
        a[k] = fact;
        // printf("%d\n", fact);

        T--;
    }
    for (i = l; i < l+1; i--)
    {
        printf("%d", a[l-i]);
    }
    return 0;
}

#include <stdio.h>
int main()
{
    int i, j, T, N, a[N], c = 0, b[j],l;
    printf("enter the test case  ");
    scanf("%d", &T);
    l=T;

    while (T)
    {
        c = c * 0;
        printf("\nnumber of the problem add in the list  ");
        scanf("%d", &N);
        printf("\nenter the data in the list  ");
        for (i = 0; i < N; i++)
            scanf("%d", &a[i]);
        for (i = 0; i < N; i++)
        {
            if (a[i] >= 1000)
                c++;
        }
        j = 5 - T;
        {
            b[j] = c;
        }

        T--;
    }
    for (j = 0; j < l; j++)
    {
        printf("%d", b[j]);
    }
    return 0;
}

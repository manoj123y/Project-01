#include <stdio.h>
int main()
{
    int i, T, N, a[N], c = 0;
     printf("enter the test case  ");
    scanf("%d", &T);

    while (T)
    {
        c = c * 0;
        // printf("\nnumber of the problem add in the list  ");
        scanf("%d", &N);
        // printf("\nenter the data in the list  ");
        for (i = 0; i < N; i++)
            scanf("%d", &a[i]);
        for (i = 0; i < N; i++)
        {
            if (a[i] >= 1000)
                c++;
        }
         printf("\n greater than 1000 is %d", c);
        T--;
    }
}

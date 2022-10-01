#include <stdio.h>
int main(void)
{
    int i, a[4], count = 0;
   // printf("enter the element in the array  ");
    for (i = 0; i < 4; i++)
    {
        scanf("%d", &a[i]);
        }
    for (i = 0; i < 4; i++)
    {
        if (a[i] >= 10)
        {
            count++;
        }
    }
    printf("%d", count);
    return 0;
}

#include <stdio.h>
int main()
{
    int T, l, b, p, m, c;
    // printf("enter the test case");
    scanf("%d", &T);
    while (T)
    {
        // printf("enter the value length and width and cast");
        scanf("\n%d%d%d", &l, &b, &c);
        p = 2 * (l + b);
        m = p * c;
        printf("%d\n", m);
        T--;
    }
}
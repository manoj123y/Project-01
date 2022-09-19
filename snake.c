	#include<stdio.h>
	#include<stdlib.h>
	#include<conio.h>
	int i,j,k,height=40,width=40,x,y,fruitX,fruitY,flag,gameEnd,score;
	int tailX[100],tailY[100],countTail=0;
	void setup()
	{
		    gameEnd=0;
			x=height/2;
			y=width/2;
			label1:
			fruitX=rand()%40;
			if(fruitX==0)
			goto label1;
				label2:
			fruitY=rand()%40;
			if(fruitY==0)
			goto label2;
			score=0;
	}
		void draw()
	{ 
 
	system("cls");
	for(i=0;i<width;i++)
	{
		for(j=0;j<height;j++)
		{
			if(i ==0 || i ==height-1 || j ==0 || j ==width-1)
			{
				printf("#");
			}
			else
			{
				if(i==x&&j==y)
				{
					printf("O");
				}
				else if(i==fruitX && j==fruitY)
				{
					printf("F");
				}
				else
				{
					int ch=0;
					for(k=0;k<countTail;k++)
					{
					if(i==tailX[k] && j==tailY[k])
					{
						printf("O");
						ch=1;
					}
					}
					if(ch==0)
					
					printf(" ");
					 
				
			
				}
			}

		}
		printf("\n");
	}
	printf("SCORE is  %d",score);
	
	}
	void input()
	{	
		if(kbhit())
		{
			switch(getch())
			{
			
				case'a':
					
					flag=1;
						break;	
							
						case's':
					
					flag=2;
					break;
					
							case'w':
							flag=3;
							break;
						
						case'z':
							
								flag=4;
								break;
							
							case 'x':
							gameEnd=1;	
							break;
				
			}
		
		}
	}

		void makeLogic()
	{
	
		int prevX=tailX[0];
		int prevY=tailY[0];
		int prev2X,prev2Y;
		tailX[0]=x;
		tailY[0]=y;
		for(i=1;i<countTail;i++)
		{
			prev2X=tailX[i];
			prev2Y=tailY[i];
			tailX[i]=prevX;
			tailY[i]=prevY;
			prevX=prev2X;
			prevY=prev2Y;
		}
		
		switch(flag)
		{
		case 1:
			
				y--;
				break;
			
			case 2:
				
					y++;
					break;
				
				case 3:
					
						x--;
						break;
					
					case 4:
						
							x++;
							break;
						
						default:
						break;
		}
		if(x<0||x>width||y<0||y>height)
		gameEnd=1;
		for(i=0;i<countTail;i++)
		{
			if(x==tailX[i] && y==tailY[i]);
	    //	gameEnd=1;
		}
		if(x==fruitX && y==fruitY)
		{
			label3:
			fruitX=rand()%40;
			if(fruitX==0)
			goto label3;
				label4:
			fruitY=rand()%40;
			if(fruitY==0)
			goto label4;
			score+=2;
			countTail++;
	
			
		}
	}


	
	int main()
	{
		int m,n;
		char c;
    label5:
		setup();
	while(!gameEnd)
	
	{
		draw();
		input();
		makeLogic();
		 
		 for(m=0;m<10000;m++)
		 {
		  for(n=0;n<1000;n++){
		  }
		 }
		  for(m=0;m<10000;m++)
		 { 
		 for(n=0;n<1000;n++){
		 }
		 
		 }
		 }
		 
		
	printf("\npress Y to continue again:");
		scanf("%c",&c);
		  if(c=='y'||c=='Y')
		 goto label5;
		 return 0;
} 
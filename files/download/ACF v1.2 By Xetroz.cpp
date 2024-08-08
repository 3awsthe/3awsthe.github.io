# include <stdio.h>
# include <stdlib.h>
# include <windows.h>
# include <iostream>
using namespace std;
int main(){
	char filename[200];
	cout<<"输入你的名字：";
	cin>>filename;
	char ml1[200]="md ";
	int len=strlen(filename);
	for(int i=0;i<len;i++){
		ml1[i+3]=filename[i];
	}
	ml1[len+3]='\0';
	system(ml1);
	int n;
	cout<<"输入你的文件数量："; 
	cin>>n;
	cout<<"接下来你需要输入这"<<n<<"个文件的名字"<<endl;
	for(int i=1;i<=n;i++)
	{
		char file[100010];
		cin>>file;
		char ml2[200]="md ";
		for(int i=0;i<strlen(filename);i++){
			ml2[i+3]=filename[i];
		}
		ml2[strlen(filename)+3]='\\';
		for(int i=0;i<strlen(file);i++)
			ml2[strlen(filename)+4+i]=file[i];
		system(ml2);
		char f1[200],f2[200],f3[200];
		for(int i=0;i<strlen(file);i++){
			f1[i]=f2[i]=f3[i]=file[i];
		}
		f1[strlen(file)]=f2[strlen(file)]=f3[strlen(file)]='.';
		f1[strlen(file)+1]='i';
		f1[strlen(file)+2]='n';
		f1[strlen(file)+3]='\0';
		f2[strlen(file)+1]='o';
		f2[strlen(file)+2]='u';
		f2[strlen(file)+3]='t';
		f2[strlen(file)+4]='\0';
		f3[strlen(file)+1]='c';
		f3[strlen(file)+2]='p';
		f3[strlen(file)+3]='p';
		f3[strlen(file)+4]='\0';
		char f1sc[100010]="./";
		char f2sc[100010]="./";
		char f3sc[100010]="./";
		for(int i=0;i<strlen(filename);i++)f1sc[i+2]=f2sc[i+2]=f3sc[i+2]=filename[i];
		f1sc[strlen(filename)+2]=f2sc[strlen(filename)+2]=f3sc[strlen(filename)+2]='/';
		for(int i=0;i<strlen(file);i++)f1sc[i+strlen(filename)+3]=f2sc[i+strlen(filename)+3]=f3sc[i+strlen(filename)+3]=file[i];
		f1sc[strlen(filename)+strlen(file)+3]=f2sc[strlen(filename)+strlen(file)+3]=f3sc[strlen(filename)+strlen(file)+3]='/';
		int len1=strlen(f1sc),len2=strlen(f2sc),len3=strlen(f3sc);
		for(int i=0;i<strlen(f1);i++)f1sc[len1+i]=f1[i];
		for(int i=0;i<strlen(f2);i++)f2sc[len2+i]=f2[i];
		for(int i=0;i<strlen(f3);i++)f3sc[len3+i]=f3[i];
		FILE* fp=fopen(f1sc,"w");
		fclose(fp);
		fp=fopen(f2sc,"w");
		fclose(fp);
		freopen(f3sc,"w",stdout);
		printf("#include<iostream>\n#include<cstdio>\n#include<algorithm>\n#include<string>\n#include<queue>\n#include<stack>\n#include<map>\n#include<math.h>\n");
		printf("using namespace std;\n\n");
		printf("int main()\n{\n\t//ACF v1.2 By Xetroz\n\tfreopen(");
		printf("\"");
		printf("%s\",\"r\",stdin);\n",f1);
		printf("	freopen(\"%s\",\"w\",stdout);\n\n",f2);
		printf("	return 0;\n}");
		fclose(stdout);
	}
}

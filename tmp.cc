#include <iostream>
using namespace std;

//int main(){
//    int n;
//    cin>>n;
//    for(int i=0;i<n;i++){
//        for(int j=0;j<i+n;j++){
//            j<n-i-1?cout<<' ':cout<<'*';
//        }cout<<'\n';
//    }
//
//}


int main(){
    int sum=0;
    while(1){
        int t;
        cin>>t;
        if(t<0)break;
        sum+=t;
    }
    cout<<"sum is "<<sum<<'\n';
}
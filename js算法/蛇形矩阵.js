// i是行,j是列,pos是方向,其中1往右2右上,-1往下-2左下,k是第一个遍历数字
let i=0,j=0,pos=1,k=1;
//n*n矩阵
const n = 4;         
//存储蛇形矩阵的数据
let list = new Array();     
//初始化子数组
for (let row=0;row<n;row++){
    list[row] = [];
    for (let col=0;col<n;col++){
        list[row][col] = 0;
    }        
}
//定义蛇形矩阵头部
list[i][j] = k;         

for (k=2;k<=n*n;k++){
    if (pos>0){
        if (i==0&&j<n-1&&pos==1){
            //右的第一种，在上边界,//改变方向
            j++;
            pos=-2;        
        }
        else if (i==n-1&&j<n-1&&pos==1){
            //右的第二种，在下边界，方向不变
            j++;
            pos = 2;
        }
        else {
            //右上
            i--;
            j++;
            if (j==n-1){
                pos = -1;
            }
            else if (i==1){
                pos = 1;
            }
        }
    }
    else {
        if (i<n-1&&j==0&&pos==-1){
            //下的第一种，在左边界，方向变
            i++;
            pos = 2;        
        }
        else if (i<n-1&&j==n-1&&pos==-1){
            //下的第二种，在右边界，方向不变
            i++;
            pos = -2;
        }
        else {
            i++;
            j--;
            //左下
            if (i==n-1){
                pos = 1;
            }
            else if (j==0){
                pos = -1;
            }
        }
    }       
    list[i][j] = k; 
}

//显示蛇形矩阵
for (let i=0;i<n;i++){
    let row = '';
    for (let j=0;j<n;j++){
        row += (list[i][j]+' ');
    }
    console.log(row);
}




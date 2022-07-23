// 文章图片路径修改
export function formatImgSrc(arr){
    arr.forEach(item => {
        item.content = item.content.replace(/src/g,'src="http://www.guangzhoutuce.com:99')
        item.content = item.content.replaceAll('http://www.guangzhoutuce.com:99="',"http://www.guangzhoutuce.com:99")
    })
    return arr
}
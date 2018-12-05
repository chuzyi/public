/**
 * 图片上传。支持多图片上传
 */
import axios from 'axios';
import store from '../../store.js'
let i = 0,imgs=[];
function upImg(e,i) {
  // console.log(e.target.files);
  i=i||0;
  let file = e.target.files[i];
  let param = new FormData(); // 创建form对象
  param.append("pic0", file); // 通过append向form对象添加数据
  // param.append("chunk", "0"); // 添加form表单中其他数据
  param.append("dir","app_admin_icon")
  param.append("type",0)
  // console.log(param) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
  return axios({
      url: 'oss/upload',
      method: 'post',
      data: param,
      baseURL: "http://oss.nfzr365.com/api/"
  });
};

export default async function(e,len){
  imgs=[];
  let maxlen = len<e.target.files.length?len:e.target.files.length;
  for (let count = 0; count <= maxlen; count++) {
    if (maxlen > i) {
      i++;
      let data = await upImg(e, count);
      imgs.push(data.data.data[0].ossInfo.ossUrl);
    } else {
      i=0;
      return imgs;
    }
  }
};
//用法
//multiple="multiple"  多图片模式
// <input type="file" multiple="multiple" @change="pp($event)">

// async pp(e) {
//   //多图片上传
//   let data=await this.$upImg(e);
//   console.log(data);
// },

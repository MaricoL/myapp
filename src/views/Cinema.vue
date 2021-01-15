<template>
    <div>Cinema</div>
</template>

<script>
// import axios from 'axios'

export default {
  mounted () {
    // 1. 魅力惠
    // 直接请求api，由于 魅力惠服务器 设置了 ccess-Control-Allow-Origin: * ，
    // 所以没有跨域问题
    // axios.get('http://www.mei.com/appapi/panicbuying/intro?timestamp=1610687954545&summary=87edaa0e2a4d01daa7df7e8f2b2c7c8f')
    //   .then(res => {
    //     console.log(res.data)
    //   })

    // 2. 猫眼
    // 直接请求：
    // https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=57B3218056EC11EBA5FBB714AFB4EB5E8AA5CEA8B74245F0BF7E7D40F2C0E5D2&optimus_risk_level=71&optimus_code=10
    // 会产生跨域问题，需要在vue.config.js中配置反向代理
    // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=57B3218056EC11EBA5FBB714AFB4EB5E8AA5CEA8B74245F0BF7E7D40F2C0E5D2&optimus_risk_level=71&optimus_code=10')
    //   .then(res => {
    //     console.log(res.data)
    //   })

    // 3. 卖座
    // 虽然返回 Access-Control-Allow-Origin: *，但是需要携带请求header访问接口
    // https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5557162
    // axios({
    //   url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5557162',
    //   headers: {
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1610686465919458008793089"}',
    //     'X-Host': 'mall.film-ticket.film.list'
    //   }
    // }).then(res => {
    //   console.log(res.data)
    // })
  }
}
</script>

// //promise2
// myButton.addEventListener('click', (e) => {
// $.ajax({
//     url: '/xxx',
//     method: 'get',

// }).then(
//     (responseText) => {
//         console.log(responseText)
//         return responseText
//     },
//     (request) => {
//         console.log('error1')
//         return '已经处理'
//     }).then(
//     (上一次结果) => {
//         console.log('上一次的处理结果')
//     },
//     (request) => { console.log('error2') }
// )

// })




















//promise1
// function success(responseText) {
//     console.log(responseText)
// }

// function fail(request) {
//     console.log(request)
// }

// myButton.addEventListener('click', (e) => {
//     $.ajax({
//         url: '/xxx',
//         method: 'get',

//     }).then(success, fail)
// })





























//window对象增加一个jQuery函数
window.jQuery = function(node) {
    let nodes = {}
    return nodes
}


//jQuery函数增加ajax方法
window.jQuery.ajax = function({ url, method, body, fail, success }) {
    //这个地方用了析构的方法，将传入的参数直接对应函数内的同名变量。
    //实例一个XMLHttpRequest对象用于实现ajax
    let request = new XMLHttpRequest()
        //配置，初始化，传入请求方法以及请求地址
    request.open(method, url)
        // for (let key in headers) {
        //     let value = headers[key]
        //     request.setRequestHeader(key, value)
        // }
        //监听请求状态的改变
    request.onreadystatechange = () => {
            // 如果请求状态等于4，也就是请求响应完成
            if (request.readyState === 4) {
                // 如果响应成功
                if (request.status >= 200 & request.status < 300) {
                    // 调用success方法，传入响应字符串
                    success.call(undefined, request.responseText)

                }
                // 如果响应失败
                else if (request.status >= 400) {
                    //调用fail方法，传入请求ajax对象
                    fail.call(undefined, request)
                }
            }
        }
        //发送请求
    request.send(body)
}




//监听鼠标点击事件
myButton.addEventListener('click', (e) => {
    // 调用ajax方法
    window.jQuery.ajax({
        //传参
        url: '/xxx',
        method: 'post',
        // headers: {
        //     'frank': '18',
        //     'content-type': 'x-www-form-urlencoded'
        // }
        body: 'bodybodybody',
        success: function(x) {
            // 回调函数1
            let xx = window.JSON.parse(x)
            console.log(xx.note.to)
        },
        fail: function(x) {
            // 回调函数2
            console.log(x)
        }
    })
})




































// myButton.addEventListener('click', (e) => {
//     let request = new XMLHttpRequest()


//     request.onreadystatechange = () => {
//         console.log(request.readyState)
//         if (request.readyState === 4) {
//             console.log('请求响应完毕')
//             if (request.status >= 200 & request.status < 300) {
//                 console.log('请求成功')
//                 console.log(typeof request.responseText)
//                 console.log(request.responseText)
//                 let string = request.responseText
//                 let object = window.JSON.parse(string)
//                 console.log(typeof object)
//                 console.log(object)
//                 console.log(object.note)
//                 console.log(object.note.from)
//                 console.log(request.getAllResponseHeaders())

//             } else if (request.status >= 400) {
//                 console.log('请求失败')
//             }
//         }
//     }
//     request.open('POST', '/xxx') //配置
//     request.setRequestHeader('frank', '18')
//     request.send('我就是要写请求题')

//     // console.log(request.readyState)
// })







// myButton.addEventListener('click', (e) => {
//     let request = new XMLHttpRequest()


//     request.onreadystatechange = () => {
//         console.log(request.readyState)
//         if (request.readyState === 4) {
//             console.log('请求响应完毕')
//             if (request.status >= 200 & request.status < 300) {
//                 console.log('请求成功')

//                 console.log(request.responseText)
//                 let text = request.responseText
//                 let parser = new DOMParser()
//                 xmlDoc = parser.parseFromString(text, 'text/xml')
//                 let c = xmlDoc.getElementsByTagName('content')[0].textContent
//                 console.log(c)
//             } else if (request.status >= 400) {
//                 console.log('请求失败')
//             }
//         }
//     }
//     request.open('GET', '/xxx') //配置
//     request.send()

//     // console.log(request.readyState)
// })
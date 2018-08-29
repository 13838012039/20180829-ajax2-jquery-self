window.jQuery = function(node) {
    let nodes = {}
    return nodes
}
window.jQuery.ajax = function(options) {
    let url
    if (arguments.length === 1) {
        url = options.url

    } else if (arguments.length === 2) {
        url = arguments[0]
        options = arguments[1]
    }

    let method = options.method
    let body = options.body
    let successFn = options.successFn
    let failFn = options.failFn
    let headers = options.headers

    let request = new XMLHttpRequest()
    request.open(method, url)
    for (let key in headers) {
        let value = headers[key]
        request.setRequestHeader(key, value)
    }
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 & request.status < 300) {
                successFn.call(undefined, request.responseText)

            } else if (request.status >= 400) {
                failFn.call(undefined, request)
            }
        }
    }
    request.send()

}



let function1 = function(responseText) {}
let function2 = function(responseText) {}
myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/xxx',
        method: 'get',
        headers: {
            'frank': '18',
            'content-type': 'x-www-form-urlencoded'
        },
        successFn: (x) => {
            function1.call(undefined, x)
            function2.call(undefined, x)
        },
        failFn: (x) => {
            console.log(x)
            alert('fail')
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
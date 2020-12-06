const {
    log
} = require('console')

const fs = require('fs')

// 读取多个文件一块输出

const promise = new Promise((res, rej) => {

        fs.readFile('public/1.txt', function (err, data) {

            if (err) {

                rej(err)

            } else {

                res(data.toString())

            }
        })

    })

    .then((value) => {

        return new Promise((res, rej) => {

            fs.readFile('./public/2.txt', function (err, data) {

                if (err) {

                    rej(err)
                    
                } else {
                    
                    res([value, data.toString()])

                }
            })

        })

    }, (reason) => {

        console.log('读取错误：' + reason);

    })

    .then((value) => {

        return new Promise((res, rej) => {

            fs.readFile('./public/3.txt', function (err, data) {

                if (err) {

                    rej(err)

                } else {
                    
                    res(value.push(data.toString()))

                    console.log(value);

                }
            })

        })


    }, (reason) => {

        console.log('读取错误：' + reason);

    })
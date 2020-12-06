(function() {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2. ...promise resolved\n\n");
        }, 0);
    });
    const observaPromesa = Rx.Observable.fromPromise(promesa);
    observaPromesa.subscribe(result => print1(result));
    ///
    const arrayDelay = [{
            "Date": "2019-07-04",
            "Symbol": "BTCUSD",
            "Open": 11976.42,
            "High": 12064.26,
            "Low": 11820,
            "Close": 11909.55,
            "Volume BTC": 1237.57,
            "Volume USD": 14790355.69
        },
        {
            "Date": "2019-07-04",
            "Symbol": "ETHUSD",
            "Open": 301.79,
            "High": 304,
            "Low": 300.39,
            "Close": 301.5,
            "Volume ETH": 3825.69,
            "Volume USD": 1154988.12
        }
    ];
    const addedArrayDelay = {
        "Date": "2019-07-05",
        "Symbol": "LITECOIN",
        "Open": 101.79,
        "High": 104,
        "Low": 100.39,
        "Close": 101.5,
        "Volume LTC": 825.69,
        "Volume USD": 7777777.77
    }

    function afterTheDelay() {
        setTimeout(() => {
            let outputPromise = "";
            arrayDelay.forEach((arrayDelay, index) => {
                outputPromise += `<li>Date: ${arrayDelay.Date} Symbol:  ${arrayDelay.Symbol} Close: ${arrayDelay.Close}</li>`;
            });
            document.getElementById("promises").innerHTML = "<strong>Local Ether + Bitcoin:</strong><br />" + outputPromise;
        }, 2000);
    }

    function addPromise(price) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                arrayDelay.push(price);
                console.log("hey num2")
                    // const error = true;
                const error = false;
                if (!error) {
                    resolve();
                } else {
                    reject(console.log("%c Promise Errorrr occured", "color:orange; border:solid 1px orange"));
                }
            }, 2000);
        });
    }

    const promesa_New = new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(arrayDelay.push({
                "Date": "2019-07-05",
                "Symbol": "NEWCOIN",
                "Open": 101.79,
                "High": 104,
                "Low": 100.39,
                "Close": 101.5,
                "Volume LTC": 825.69,
                "Volume USD": 7777777.77
            }));
            arrayDelay.push(addedArrayDelay)
            console.log("inside Promes_NEW")
        }, 3000);
    });
    ///


    const observaPromesa_New = Rx.Observable.fromPromise(promesa_New);
    observaPromesa_New.subscribe(result => print3(result));

    async function initAsync() {
        await addPromise({
            "Date": "2020-01-02",
            "Symbol": "coinASYNCAdded",
            "Open": 13000.00,
            "High": 14000,
            "Low": 12000.00,
            "Close": 1350.00
        });
        afterTheDelay();
    }
    initAsync();
    /// 




    const timer = Rx.Observable.timer(0)
    timer.subscribe(done => print1('3. timer ding!\n\n'))
        // const interval = Rx.Observable.interval(1000)
        // interval.subscribe(int => print1(new Date().getSeconds())) 
    const mashup = Rx.Observable.of('string', ['array'], 12) //, true, { property: 'value' })
    mashup.subscribe(val => print1('4. ' + val + '\n\n'))

    /////////////////////////////////
    // PRINT FUNCTIONS
    /////////////////////////////////
    // left colum
    function print1(val) {
        let el = document.createElement('p')
        el.innerText = val;
        document.getElementById("analytics").appendChild(el)
    }

    function print3(val) {
        let el2 = document.createElement('p');
        el2.innerText = val
        document.getElementById("analyticsNum2").appendChild(el2)
    }
    // right column
    function print2(val) {
        let el = document.createElement('p')
        el.innerText = val;
        document.getElementById("analytics2").appendChild(el)
    }
})();
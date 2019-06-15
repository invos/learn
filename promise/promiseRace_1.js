// Promise.race lets you know when one of the promses fulfilled or rejected.

(
    async () => {
        const fulfilledPromise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('done 1');
                resolve();
            }, 300);
        });
        const fulfilledPromise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('done 2');
                resolve();
            }, 1000);
        });
        const fulfilledPromise3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('done 3');
                resolve();
            }, 800);
        });
        await Promise.race([fulfilledPromise1, fulfilledPromise2, fulfilledPromise3]);
        console.log('Once any of the promises resolved, this log will be printed.');
    }
)();
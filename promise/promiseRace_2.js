// Promise.all lets you know when either all input promises have fulfilled or when one of them rejects.

(
    async () => {
        try {
            const fulfilledPromise1 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('fail 1');
                    reject();
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
                    console.log('fail 3');
                    reject();
                }, 800);
            });
            await Promise.race([fulfilledPromise1, fulfilledPromise2, fulfilledPromise3]);
            console.log('Case1: all the promise logs should be printed.');
        }
        catch {
            console.log('Promise rejected... This log should be printed once any promise is failed.');
        }
    }
)();
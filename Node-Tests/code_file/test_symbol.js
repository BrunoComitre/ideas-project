// https://www.carloscaballero.io/understanding-iterator-pattern-in-javascript-typescript-using-symbol-iterator/

const iterable = {
    [Symbol.iterator](){
      let step = 0;
      const iterator = {
          next() {
              step++;
              if(step < 3){
                  return { value: step, done: false };
              }
              return { value: null, done: true };
          }
      };
      return iterator;
    }
   }

/* ******* */

class iterable {
    [Symbol.iterator](){
        let step = 0;
        const iterator = {
            next() {
                step++;
                if(step < 3){
                    return { value: step, done: false };
                }
            return { value: null, done: true };
        }};
        return iterator;
    }
}

const iteratble = new Iterable();

iterable.next();
iterable.next();
iterable.next();

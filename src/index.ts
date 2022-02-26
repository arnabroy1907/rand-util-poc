import logger from './utils/log.util';

export const helloUser = (name: string) => {
    console.log(`Hey ${name}!`);
};

/**
 * Returns a random value between (max and min)
 * Both max and min are inclusive
 * @param min number
 * @param max number
 * @returns a random number
 */
export const getRandomInRange = (min: number, max: number) => {
    if (max === min) {
        logger.warn(`Same numbers are given as min and max. -- ${min}`);
        return min;
    }
    if (max < min) {
        logger.warn(`The number min (${min}) is greater than the number max (${max})`);
        [max, min] = [min, max];
    }
    const num = min + Math.floor(Math.random() * (max + 1 - min));

    logger.info(`Generated random number is: ${num}`, { min: min, max: max, rnum: num});
    return num;
};

export const log = { ...logger };
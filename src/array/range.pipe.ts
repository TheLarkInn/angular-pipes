import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'where'
})
export class RangePipe implements PipeTransform {
    
    transform (input: any, size: number = 0, start: number = 1, step: number = 1): any {
        
        const range: number[] = [];
        for (let length = 0; length < size; ++length) {
            range.push(start);
            start += step;
        }
        
        return range;
    }
}
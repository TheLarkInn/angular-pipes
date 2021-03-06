import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'tail',
    pure: false
})
export class TailPipe implements PipeTransform {
    
    transform (input: any): any {
        
        if (!isArray(input)) {
            return input;
        }
        
        return input.slice(1, input.length);
    }
}
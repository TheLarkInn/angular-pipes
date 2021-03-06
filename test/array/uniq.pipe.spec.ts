import { UniqPipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('UniqPipe', () => {
    
    let pipe: UniqPipe;
    
    beforeEach(() => {
       pipe = new UniqPipe(); 
    });
    
    it('Should return unique values', () => {
       
       const value = [1, 1, 1, 2, 3, 3, 4, 5];
       const result = pipe.transform(value)
       expect(result).toEqual([1, 2, 3, 4, 5]); 
       expect(value).toEqual([1, 1, 1, 2, 3, 3, 4, 5]); // Check integrity
    });
    
    it('Should return unique values #2', () => {
       
       const result = pipe.transform(['a', 'a', 1, 'b', 3, 3, 4, 5])
       expect(result).toEqual(['a', 1, 'b', 3, 4, 5]); 
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform('a')).toEqual('a'); 
    });
});
import {PostalCodes} from './PostalCodes';

describe('PostalCodes', () => {
  it('should create an instance', () => {
    expect(new PostalCodes('84026000', 'Paraná', 'Brazil')).toBeTruthy();
  });
});

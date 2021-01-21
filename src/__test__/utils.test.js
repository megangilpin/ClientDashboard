import { filterMembers, formatDate } from '../utils';
import { members, filteredMembers } from '../testutils';

describe('test filterMembers', () => {
  it('works with array', () => {
    expect(filterMembers(1, members)).toEqual(filteredMembers);
  });
});

describe('test formatDate', () => {
  it('works with date string', () => {
    expect(formatDate(members[0].created_at)).toEqual('August 11, 2020');
  });
});

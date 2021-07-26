import { User } from './user';
import { Address, Company, Geo } from './user/ReqResResponseUser';

describe('Model User', () => {

  let geo: Geo;
  let address: Address;
  let company: Company;
  let user: User;

  beforeEach(() => {
    user = new User(
      1,
      'Leanne Graham',
      'Bret',
      'Sincere@april.biz',
       address,
      '1-770-736-8031 x56442',
      'hildegard.org',
      company
    );
  });

  it('should create an instance', () => {
    expect(new User(
      1,
      'Leanne Graham',
      'Bret',
      'Sincere@april.biz',
       address,
      '1-770-736-8031 x56442',
      'hildegard.org',
      company
    )).toBeTruthy();
  });

  it('should called function nameAndEmail, return username at email user', async()=>{
    expect(user.nameAndEmail).toEqual('Leanne Graham Sincere@april.biz');
    expect(user.userNameAndEmail).toEqual('Bret / Sincere@april.biz');
  });

  it('Create new user from user instance', async()=>{
    expect(User.userJson(user)).toEqual(user);
  });

});

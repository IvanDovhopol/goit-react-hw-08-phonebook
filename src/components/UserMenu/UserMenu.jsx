import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { FaUserCircle } from 'react-icons/fa';
import { Wrapper, UserName, LogoutBtn } from './styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>
        <FaUserCircle size="25" /> {user.email}
      </UserName>
      <LogoutBtn type="button" onClick={() => dispatch(logout())}>
        Logout
      </LogoutBtn>
    </Wrapper>
  );
};

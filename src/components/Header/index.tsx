import { IoPersonCircleOutline, IoSearch } from 'react-icons/io5';

import { 
  Container,
  Wrapper,
  Logo,
  SearchForm,
  ProfileIcon
} from "./styles";

export function Header () {
  return (
    <Container>
      <Wrapper>
        <Logo>GAMING<span>COPTER</span></Logo>

        <SearchForm>
          <input type="text" name="gameSelect" placeholder="Gaming search" />
          <button>
            <IoSearch size={24} />
          </button>
        </SearchForm>

        <ProfileIcon>
          <IoPersonCircleOutline size={32} />
        </ProfileIcon>
      </Wrapper>
    </Container>
  );
}
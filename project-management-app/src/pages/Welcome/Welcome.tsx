import Navbar from '../../components/Navbar/Navbar';
import WelcomeButton from '../../components/WelcomeButton/WelcomeButton';
import styled from 'styled-components';
import WelcomeSubtitle from '../../components/WelcomeSubtitle/WelcomeSubtitle';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common-constants';
import { useSelector } from 'react-redux';
import { TStore } from '../../store/index';

const StyledAbout = styled.div`
  max-width: 30%;
  min-width: 320px;
  background: #ebecf0;
  padding: 1rem;
`;
const StyledWrapper = styled.div`
  background: #ebecf0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
`;
const StyledDescription = styled.p`
  padding: 30px 0;
`;

function Welcome() {
  const { user } = useSelector((store: TStore) => store.userReducer);
  return (
    <>
      <Navbar>
        {!user ? (
          <div>
            <Link to={`/${routerPaths.auth}`}>
              <WelcomeButton>Log in</WelcomeButton>
              <WelcomeButton>Sign up</WelcomeButton>
            </Link>
          </div>
        ) : (
          <Link to={routerPaths.main}>
            <WelcomeButton>Go to Main page</WelcomeButton>
          </Link>
        )}
      </Navbar>
      <StyledWrapper>
        <StyledAbout>
          <WelcomeSubtitle>О проекте</WelcomeSubtitle>
          <StyledDescription>
            Система управления проектами – приложение помогающее достичь поставленные задачи
            отдельному человеку в команде или группе разработчиков.
          </StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <WelcomeSubtitle>О курсе</WelcomeSubtitle>
          <StyledDescription>
            Онлайн курс «Разработка на React». Бесплатный курс от сообщества The Rolling Scopes.
            Курс для студентов, которые имеют знания и практический опыт использования следующих
            технологий и инструментов: JavaScript, TypeScript Git, GitHub, NPM, Webpack, CSS3 /
            HTML5, Chrome DevTools, Figma, Понимание концепции REST API
          </StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <WelcomeSubtitle>О команде</WelcomeSubtitle>
          <StyledDescription>
            Приложение разрабатывают Anton Kachan, Dinmukhamed Sailaubek, Dilbar Akkaya
          </StyledDescription>
        </StyledAbout>
      </StyledWrapper>
    </>
  );
}

export default Welcome;

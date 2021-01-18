import styled from 'styled-components';
const Main = styled.main`
  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 400px;
  }
  @media (min-width: 1280px) {
    margin: 0 auto;
    max-width: 700px;
  }

  .phonebook_title {
    color: #0d5667;
    margin-bottom: 30px;
    text-align: center;
  }

  .contacts_title {
    color: #286671;
    margin-bottom: 20px;
    text-align: center;
  }

  .contacts_text {
    padding: 0 10px;
    text-align: center;
    color: #464b51;
  }
`;
export default Main;

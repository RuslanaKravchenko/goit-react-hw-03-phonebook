import styled from 'styled-components';

const ContactInfoStyled = styled.div`
  padding: 40px 30px;

  .info_name {
    margin-bottom: 5px;
  }

  .info_category {
    padding: 3px 7px;
    width: max-content;
    font-size: 14px;
    color: #19b785;
    border: 1px solid #19b785;
    border-radius: 15px;
  }

  .info_list {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .info_item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .info_label {
    font-size: 16px;
    color: #4b4e4f;
  }

  .info_contact {
    font-size: 14px;
  }
  .info_dateOfBirth {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .info_dateOfBirth-label {
    font-size: 16px;
    color: #4b4e4f;
  }

  .info_dateOfBirth-date {
    font-size: 14px;
  }
  .info_links {
    display: flex;
    justify-content: center;
  }

  .info_link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    width: 150px;
    height: 40px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: #7915c5;
    border-color: #7915c5;

    border-radius: 5px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:focus,
    &:hover {
      color: #7915c5;
      background-color: #fff;
      border: 2px solid #883dc7f2;
      box-shadow: 6px 8px 18px 3px rgba(98, 46, 150, 0.23);

      outline: none;
    }
  }
  .info_call {
    margin-right: 15px;
  }
`;
export default ContactInfoStyled;
